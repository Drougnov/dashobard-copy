document.addEventListener("DOMContentLoaded", function () {
    // Find the first form with the class "woocommerce-cart-form"
    const form = document.querySelector("form.woocommerce-cart-form");

    // Find the table inside the form
    const table = form.querySelector("table.shop_table_responsive");

    // Find the second tr inside the table (index 1)
    const secondTR = table.querySelector("tbody tr:nth-child(2)");

    // Create a new div element
    const newDiv = document.createElement("div");

    // Move the contents of the second tr to the new div
    newDiv.innerHTML = secondTR.innerHTML;

    // Add a class to the new divs
    newDiv.classList.add("coupon_wrapper");

    // Append the new div to the form, right after the table
    form.insertBefore(newDiv, table.nextSibling);

    // Remove the original second tr from the table
    secondTR.remove();
});
