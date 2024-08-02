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
            content += `<tr>`;
            content += `<td>${country.name}</td>`;
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
    })
    .catch(error => {
        alert("The following error occurred: " + error);
    })