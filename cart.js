document.addEventListener("DOMContentLoaded", function () {
    // Function to move the second tr out of the coupon
    function moveSecondTR() {
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

        // Add a class to the new div
        newDiv.classList.add("coupon_wrapper");

        // Append the new div to the form, right after the table
        form.insertBefore(newDiv, table.nextSibling);

        // Remove the original second tr from the table
        secondTR.remove();
    }

    // --------------Move coupon out of table----------------------
    moveSecondTR();

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

    // -------------On quantity change call moveSecondTR and update button------------
    const inputElement = document.querySelector(".qty.text");
    const updateButton = document.querySelector('button[name="update_cart"]');

    inputElement.addEventListener("change", function () {
        updateButton.click();
        moveSecondTR();
    });
});

// checkout

// Get reference to the form, col2-set, h3, and div elements
const form = document.querySelector(".post-42 .checkout");
const col2Set = form.querySelector(".post-42 .col2-set");
const h3Element = document.querySelector(".post-42 #order_review_heading");
const orderReviewDiv = document.querySelector(".post-42 #order_review");
const shopTable = document.querySelector(".post-42 .shop_table");
const checkoutCouponForm = document.querySelector(".post-42 .checkout_coupon");
const paymentDiv = document.querySelector(".post-42 #payment");

// Create the parent container div
const parentContainer = document.createElement("div");
parentContainer.classList.add("order-container");

// Append the h3 and table element to the parent container
parentContainer.appendChild(h3Element);
parentContainer.appendChild(shopTable);

// Move the checkout_coupon form inside the order_review div, after the table but before the payment div
orderReviewDiv.insertBefore(checkoutCouponForm, paymentDiv);

// Insert the parent container inside the the order_review div
orderReviewDiv.insertBefore(parentContainer, checkoutCouponForm);
