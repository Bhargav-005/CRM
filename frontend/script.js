function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        window.location.href = "dashboard.html";
    }
}

function logout() {
    window.location.href = "index.html";
}

function addCustomer() {
    let name = document.getElementById("customerName").value;
    let email = document.getElementById("customerEmail").value;

    if (name === "" || email === "") {
        alert("Please enter customer details");
        return;
    }

    let table = document.getElementById("customerTable");

    let row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = "Active";

    document.getElementById("customerName").value = "";
    document.getElementById("customerEmail").value = "";

    alert("Customer added successfully");
}