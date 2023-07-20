const header = document.querySelector(".header");
const hamburgerMenu = document.querySelector(".nav-menu");

// add class 'active' to nav on hamburger menu click
hamburgerMenu.addEventListener("click", () => {
    header.classList.toggle("nav-active");
});
