const nav = document.querySelector(".nav");
const hamburgerMenu = document.querySelector(".nav-menu");

// add class 'active' to nav on hamburger menu click
hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
});
