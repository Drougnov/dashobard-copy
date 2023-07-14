// handle sidebar menu dropdown
const hamburger = document.querySelector(".IhwpR"); // Hamburger button
const sidebar = document.querySelector(".soGOI"); // Sidebar container
const sidebarDropDownButtons = document.querySelectorAll(
    ".sidebar-dropdown-btn"
); // Sidebar dropdown buttons

// open/close sidebar on hamburger click
hamburger.addEventListener("click", toggleSidebar);

//loop through all the dropdown buttons
sidebarDropDownButtons.forEach((btn) => {
    let dropDownContainer = btn.parentElement;
    btn.addEventListener("click", toggleDropdown); // open/close dropdown on click

    // Function to toggle dropdown visibility
    function toggleDropdown(event) {
        // Check if the clicked element is the icon-plus
        const addBtn = dropDownContainer.querySelector(".icon-plus");
        const isAddBtnClicked = addBtn && addBtn.contains(event.target);
        // open/close dropdown if the clicked element is the icon-plus
        if (!isAddBtnClicked) {
            dropDownContainer.classList.toggle("active");
            updateSidebarActiveClass();
            countDropDownContainerHeight(dropDownContainer);
        }
    }
});

// open/close sidebar by adding/removing class 'active'
function toggleSidebar() {
    sidebar.classList.toggle("active");
    if (!sidebar.classList.contains("active")) {
        closeAllDropdowns();
    }
}

// close all dropdowns
function closeAllDropdowns() {
    sidebarDropDownButtons.forEach((btn) => {
        btn.parentElement.classList.remove("active");
        countDropDownContainerHeight(btn.parentElement);
    });
}

// update sidebar active class
function updateSidebarActiveClass() {
    // check if any dropdwon is open
    const isActive = Array.from(sidebarDropDownButtons).some((btn) =>
        btn.parentElement.classList.contains("active")
    );
    // open the sidebar if any dropdown is open
    sidebar.classList.toggle("active", isActive);
}

// calculate dropdown container height
function countDropDownContainerHeight(dropDownContainer) {
    const dropDownBody = dropDownContainer.querySelector(".GpIbu");
    const dropDownItems = dropDownBody.children;
    let height = 0;

    for (let i = 0; i < dropDownItems.length; i++) {
        height += dropDownItems[i].offsetHeight;
    }

    // add height to dropdown if opened
    if (dropDownContainer.classList.contains("active")) {
        dropDownBody.style.height = height + "px";
    } else {
        // remove height if dropdown is closed
        dropDownBody.style.height = 0;
    }
}
