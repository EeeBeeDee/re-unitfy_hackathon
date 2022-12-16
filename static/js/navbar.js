const navMenu = document.querySelector(".nav");
const navOverlay = document.querySelector(".nav-overlay");
const navButton = document.querySelector(".nav-btn");

navButton.addEventListener("click", () => {
    navMenu.classlist.add("nav-open");
    navOverlay.classlist.add("nav-overlay-open");
});

navOverlay.addEventListener("click", () => {
    navMenu.classlist.add("nav-open");
    navOverlay.classlist.add("nav-overlay-open");
});