document.addEventListener("DOMContentLoaded", function () {
    // --------------Move coupon out of table----------------------
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

    // --------------Move notice out of woocommerce----------------------

    // Find the elements with their class names
    const pageContent = document.querySelector(".page-content");
    const woocommerce = pageContent.querySelector(".woocommerce");
    const noticesWrapper = woocommerce.querySelector(
        ".woocommerce-notices-wrapper"
    );

    // Remove the noticesWrapper from its original position
    woocommerce.removeChild(noticesWrapper);

    // Insert the noticesWrapper before the woocommerce div
    pageContent.insertBefore(noticesWrapper, woocommerce);
});

// On quantity change call update button
document.addEventListener("DOMContentLoaded", function () {
    const inputElement = document.querySelector(".qty.text");
    const updateButton = document.querySelector('button[name="update_cart"]');

    inputElement.addEventListener("change", function () {
        updateButton.click();
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
});
