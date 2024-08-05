const countriesTable = document.querySelector("#countriesList tbody");
const total = document.querySelector("#totalNumCountries");
const url = "http://localhost:3000/countries";
fetch(url)
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
    .then(data => {
        let content = "";
        for (let country of data) {
            content += `<tr class="countryInfo" data-id="${country._id}">`;
            // content += `<td>${country.name}</td>`;
            content += `<td><a href="country.html?id=${country._id}">${country.name}</a></td>`;
            content += `<td>${country.continent}</td>`;
            content += `<td>${country.region}</td>`;
            content += `<td>${country.surfacearea}</td>`;
            if (country.indepyear !== null) {
                content += `<td>${country.indepyear}</td>`;
            } else {
                content += `<td>-</td>`;
            }
            content += `<td>${country.population}</td>`;
            content += `</tr>`;
        }
        countriesTable.innerHTML = content;
        total.textContent = data.length;
        let linesCountryInfo = document.querySelectorAll(".countryInfo");
        for (let line of linesCountryInfo) {
            line.addEventListener("click", function () {
                let id = this.getAttribute("data-id");
                // console.log(id);
                window.location.href = "country.html?id=" + id;
            })
        }
    })
    .catch(error => {
        alert("The following error occurred: " + error);
    })