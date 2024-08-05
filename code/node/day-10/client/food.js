const url = "http://127.0.0.1:3000/food";
const form = document.querySelector("#formFood");
const fName = document.querySelector("#name");
const fDescription = document.querySelector("#description");
const fPrice = document.querySelector("#price");
const fCategory = document.querySelector("#category");
let btInsertItem = document.querySelector("#btInsert");
btInsertItem.addEventListener("click", function () {
    // TODO: validate the field's content
    let data = {
        name: fName.value.trim(),
        description: fDescription.value.trim(),
        price: Number(fPrice.value),
        category: fCategory.value
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                if (response.status === 404) {
                    return Promise.reject("URL does not exist");
                } else {
                    return Promise.reject("Unknown error");
                }
            }
        })
        .then(response => {
            // fName.value = "";
            // fDescription.value = "";
            // fPrice.value = "";
            form.reset();
            // refresh the table
            console.log("Inserted");

        })
        .catch(error => {
            alert("The following error occurred: " + error);
        })
})