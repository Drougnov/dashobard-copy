// handle icon menu dropdown
function singleMenu(targetId, menuId, show = false) {
    const targetElement = document.getElementById(targetId);
    const menuElement = document.getElementById(menuId);

    // Initial state
    if (show) {
        // show dropdown
        targetElement.classList.add("active");
        menuElement.classList.add("active");
    } else {
        // hide dropdown
        targetElement.classList.remove("active");
        menuElement.classList.remove("active");
    }

    // Toggle menu visibility when target element is clicked
    targetElement.addEventListener("click", () => {
        show = !show;

        if (show) {
            // show dropdown
            targetElement.classList.add("active");
            menuElement.classList.add("active");
        } else {
            // hide dropdown
            targetElement.classList.remove("active");
            menuElement.classList.remove("active");
        }
    });

    // Close menu if clicked outside of container
    document.addEventListener("click", (event) => {
        if (!targetElement.parentElement.contains(event.target)) {
            show = false;
            targetElement.classList.remove("active");
            menuElement.classList.remove("active");
        }
    });

    // Calculate half of the targetElement width
    const targetHalfWidth = targetElement.parentElement.offsetWidth / 2;

    // Set a CSS variable with the half width value
    targetElement.parentElement.style.setProperty(
        "--target-half-width",
        targetHalfWidth + "px"
    );

    // ----------Function to add the div with close-icon to '.menu-id' elements---------

    function addDivWithCloseIcon() {
        const maxWidth = 991;
        const menuItems = document.querySelectorAll(".menu-id");

        if (window.innerWidth <= maxWidth) {
            menuItems.forEach((item) => {
                // Check if the div with p tag already exists to avoid duplication
                if (!item.querySelector(".menu-id__mobile-top")) {
                    const newDiv = document.createElement("div");
                    newDiv.classList.add("menu-id__mobile-top");

                    const closeIconContainer = document.createElement("div");
                    closeIconContainer.id = "close-icon-container";
                    closeIconContainer.innerHTML = `
                                                <svg
                                                class="icon-close DeYlt"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                                <g
                                                    id="SVGRepo_tracerCarrier"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <g id="Menu / Close_LG">
                                                        <path
                                                            id="Vector"
                                                            d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
                                                            stroke="#000000"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            `;
                    newDiv.appendChild(closeIconContainer);
                    item.insertBefore(newDiv, item.firstChild);
                }
            });
        } else {
            // If the screen size is greater than 991px, remove the close icon container
            menuItems.forEach((item) => {
                const menuIdMobileTop = item.querySelector(
                    ".menu-id__mobile-top"
                );
                if (menuIdMobileTop) {
                    menuIdMobileTop.remove();
                }
            });
        }
    }

    // Call the function on page load and window resize
    window.addEventListener("load", function () {
        addDivWithCloseIcon();

        // Event listener for the close icon container
        document.addEventListener("click", function (event) {
            const closeIconContainer = event.target.closest(
                "#close-icon-container"
            );
            if (closeIconContainer) {
                show = false;
                targetElement.classList.remove("active");
                menuElement.classList.remove("active");
            }
        });
    });

    window.addEventListener("resize", addDivWithCloseIcon);
}

// ---------------Check the containers position to align the menus-------------

const dropdownContainers = document.querySelectorAll(".target-id");

dropdownContainers.forEach((container) => {
    const rect = container.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const dropdownMenu = container.querySelector(".menu-id");

    // Add 'right' class if the dropdown menu is within 300px from the right edge of the screen
    if (rect.right > viewportWidth - 300) {
        dropdownMenu.classList.add("right");
    }
});
