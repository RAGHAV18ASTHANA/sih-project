let inventory = [];

document.addEventListener("DOMContentLoaded", function() {
    const addItemForm = document.getElementById("add-item-form");
    const searchInput = document.getElementById("search-bar");
    const inventoryTableBody = document.getElementById("inventory-table-body");

    addItemForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const itemName = document.getElementById("item-name").value;
        const itemQuantity = document.getElementById("item-quantity").value;
        addItemToInventory(itemName, itemQuantity);
        document.getElementById("item-name").value = "";
        document.getElementById("item-quantity").value = "";
    });

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredInventory = inventory.filter(function(item) {
            return item.name.toLowerCase().includes(searchTerm);
        });
        displayInventory(filteredInventory);
    });

    displayInventory(inventory);
});

function addItemToInventory(itemName, itemQuantity) {
    const newItem = {
        name: itemName,
        quantity: itemQuantity
    };
    inventory.push(newItem);
    displayInventory(inventory);
}

function displayInventory(inventory) {
    const inventoryTableBody = document.getElementById("inventory-table-body");
    inventoryTableBody.innerHTML = "";
    inventory.forEach(function(item) {
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
        `;
        inventoryTableBody.appendChild(tableRow);
    });
}