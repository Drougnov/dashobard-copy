// handle icon menu dropdown
function singleMenu(targetId, menuId, show = false) {
    const targetElement = document.getElementById(targetId);
    const menuElement = document.getElementById(menuId);

    // Initial state
    if (show) {
        // show dropdown
        menuElement.style.display = "block";
        targetElement.classList.add("active");
    } else {
        // hide dropdown
        menuElement.style.display = "none";
        targetElement.classList.remove("active");
    }

    // Toggle menu visibility when target element is clicked
    targetElement.addEventListener("click", () => {
        show = !show;

        if (show) {
            // show dropdown
            menuElement.style.display = "block";
            targetElement.classList.add("active");
        } else {
            // hide dropdown
            menuElement.style.display = "none";
            targetElement.classList.remove("active");
        }
    });

    // Close menu if clicked outside of container
    document.addEventListener("click", (event) => {
        if (!targetElement.contains(event.target)) {
            show = false;
            menuElement.style.display = "none";
            targetElement.classList.remove("active");
        }
    });

    // Prevent menu from closing when clicked inside the menu element
    menuElement.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}

// Call singleMenu function for each menu
singleMenu("target_id1", "menu_id1", false);
singleMenu("target_id2", "menu_id2", false);
singleMenu("target_id3", "menu_id3", false);

// Check the containers position to align the menus
const dropdownContainers = document.querySelectorAll(".target-id");
const dropdownMenus = document.querySelectorAll(".menu-id");

dropdownContainers.forEach((container) => {
    const rect = container.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const dropdownMenu = container.querySelector(".menu-id");

    // Add 'right' class if the dropdown menu is within 300px from the right edge of the screen
    if (rect.right > viewportWidth - 300) {
        dropdownMenu.classList.add("right");
    }
});
