// Add event listeners to forms and tables
document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            // Handle form submission logic here
            console.log("Form submitted!");
        });
    });

    const tables = document.querySelectorAll("table");
    tables.forEach(table => {
        table.addEventListener("click", function(event) {
            if (event.target.tagName === "TD") {
                // Handle table cell click logic here
                console.log("Table cell clicked!");
            }
        });
    });
});