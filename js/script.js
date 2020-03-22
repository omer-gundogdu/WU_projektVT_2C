const menuIcon = document.querySelector (".hamburger-menu");

const header = document.querySelector(".header");

const navbar = document.querySelector(".navbar");


menuIcon.addEventListener ("click", () => {
    header.classList.toggle("change");
    navbar.classList.toggle("change");
 });