// Execute the code when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all close button elements
    var closeButtonElements = document.querySelectorAll(".UYvZu");

    // Attach click event listeners to close buttons
    closeButtonElements.forEach(function (closeButton) {
        closeButton.addEventListener("click", function () {
            // Find the parent ellipsis icon button
            var toggleDropdownButton = this.closest(".BgbBR");

            // Toggle the display of the associated dropdown menu
            if (toggleDropdownButton) {
                var dropdownMenu = toggleDropdownButton.querySelector(".JVeuW");
                dropdownMenu.style.display =
                    dropdownMenu.style.display === "block" ? "none" : "block";
            }
        });
    });

    // Close the dropdown menus when clicking outside of them
    document.addEventListener("click", function (event) {
        var isClickInsideCloseButton = event.target.classList.contains("UYvZu");
        var isClickInsideNestedCloseButton = event.target.closest(".UYvZu");

        if (!isClickInsideCloseButton && !isClickInsideNestedCloseButton) {
            var visibleDropdownMenus = document.querySelectorAll(".JVeuW");

            // Hide visible dropdown menus
            visibleDropdownMenus.forEach(function (dropdownMenu) {
                if (dropdownMenu.style.display === "block") {
                    dropdownMenu.style.display = "none";
                }
            });
        }
    });
});
