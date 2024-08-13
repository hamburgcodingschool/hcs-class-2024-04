const url = "http://127.0.0.1:3000";

const form = document.querySelector("#formFood");
const fName = document.querySelector("#name");
const fDescription = document.querySelector("#description");
const fPrice = document.querySelector("#price");
const fCategory = document.querySelector("#category");
let btInsertItem = document.querySelector("#btInsert");
const elFoodTable = document.querySelector("#foodList");
const elTotalItems = document.querySelector("#totalNumFood");
btInsertItem.addEventListener("click", function () {
    // TODO: validate the field's content
    let data = {
        name: fName.value.trim(),
        description: fDescription.value.trim(),
        price: Number(fPrice.value),
        category: fCategory.value
    }
    fetch(`${url}/food`, {
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

            let content = `<tr>
                        <td>${data.name}</td>
                        <td>${data.description}</td>
                        <td>${data.price}</td>
                        <td>${data.category}</td>
                        <td><button class="btDeleteFoodItem btn btn-primary" data-id="${response._id}">X</button></td></td>
                        </tr>`;
            elFoodTable.querySelector("tbody").innerHTML += content;
            createDeleteEventListeners();

            form.reset();

            console.log("Inserted");


        })
        .catch(error => {
            alert("The following error occurred: " + error);
        })
})

fetch(`${url}/categories`)
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
    .then(categories => {
        let content = '<option value="">-- Select a category --</option>';
        for (let category of categories) {
            // content=`<option value="${category._id}">${category.category}</option>`;
            content += `<option>${category.category}</option>`;
        }
        fCategory.innerHTML = content;
    })
    .catch(error => {
        alert("The following error occurred: " + error);
    })

function createItemsTable() {
    fetch(`${url}/food`)
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
        .then(foodList => {
            let content = "";
            for (let foodItem of foodList) {
                content += `<tr>`;
                content += `<td>${foodItem.name}</td>`;
                content += `<td>${foodItem.description}</td>`;
                content += `<td>${foodItem.price}</td>`;
                content += `<td>${foodItem.category}</td>`;
                content += `<td><button class="btDeleteFoodItem btn btn-primary" data-id="${foodItem._id}">X</button></td>`;
                content += `</tr>`;
            }
            elFoodTable.querySelector("tbody").innerHTML = content;
            elTotalItems.textContent = foodList.length;
            createDeleteEventListeners();

        })
        .catch(error => {
            alert("The following error occurred: " + error);
        })
}
createItemsTable();

function createDeleteEventListeners() {
    const listDeleteButtons = elFoodTable.querySelectorAll(".btDeleteFoodItem");
    for (let button of listDeleteButtons) {
        button.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            // console.log(id);
            document.querySelector("#confirmButton").setAttribute("data-id", id);
            confModal.show();
        });
    }
}

function deleteFoodItem(id) {
    fetch(`${url}/food/${id}`, {
        method: 'DELETE'
    })
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
            alert(data.message);
            // createItemsTable();
            let button = document.querySelector("[data-id='" + id + "']");
            console.log(button);
            button.parentElement.parentElement.remove();
        })
        .catch(error => {
            alert("The following error occurred: " + error);
        })
}

const confModal = new bootstrap.Modal(document.getElementById('confirmationModal'));

document.querySelector("#confirmButton").addEventListener("click", function () {
    const id = this.getAttribute("data-id");
    confModal.hide();
    deleteFoodItem(id);
});
