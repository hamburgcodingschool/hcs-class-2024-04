const url = "http://localhost:3000/countries";

// grab id parameter from query string
let params = new URLSearchParams(document.location.search);
let countryId = params.get("id");
// console.log("CountryId=" + countryId);

// call the /countries/:id route to grab the info por the specific country
fetch(`${url}/${countryId}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            if (response.status === 404) {
                return Promise.reject("URL does not exist");
            } else {
                return Promise.reject("An error occurred getting the data.");
            }
        }
    })
    .then(countryInfo => {
        console.log(countryInfo);
        delete countryInfo._id;
        // let cities = countryInfo.cities;
        // delete countryInfo.cities;
        // let languages = countryInfo.languages;
        // delete countryInfo.languages;
        // show the info on the screen
        for (let property in countryInfo) {
            // if (property !== "_id" && property !== "cities" && property !== "languages") {
            if (!Array.isArray(countryInfo[property])) {
                // console.log(property);
                document.querySelector("#" + property).textContent = countryInfo[property]
            }
        }

        let listCities = "";
        for (let city of countryInfo.cities) {
            listCities += `<p>${city.name}</p>`;
        }
        document.querySelector("#cities").innerHTML = listCities;

        let listLanguages = "";
        for (let language of countryInfo.languages) {
            listLanguages += `<p>${language.language}</p>`;
        }
        document.querySelector("#languages").innerHTML = listLanguages;

    })
    .catch(error => {
        alert("The following error occurred: " + error);
    })

