const header = document.querySelector(".header");
const hamburgerMenu = document.querySelector(".nav-menu");

// toggle class 'active' to nav on hamburger menu click
hamburgerMenu.addEventListener("click", () => {
    header.classList.toggle("nav-active");
});

// remove class 'active' to nav on close button click
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
    header.classList.remove("nav-active");
});

// close slide-in-menu on clicking outside
const slideInMenu = document.querySelector(".slide-in-menu");

document.addEventListener("click", (event) => {
    // Check if the click target is outside the slide-in menu and not the hamburger menu
    if (
        !slideInMenu.contains(event.target) &&
        !hamburgerMenu.contains(event.target)
    ) {
        header.classList.remove("nav-active");
    }
});
