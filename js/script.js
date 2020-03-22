// Waits until the html is completely loaded to run the functions it has inside.
window.addEventListener('DOMContentLoaded', () => {
    scrollHandler();
});

const bd = document.body; // Body Tag Element
const header = document.querySelector(".header");
const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const avoider = document.querySelector(".avoider");

// Scroll Handler
const startHidingPosition = 400; // <= you can change this
let lastScrollTop = 0;

function scrollHandler() {
    window.addEventListener('scroll', (e) => {
        let wy = window.pageYOffset || document.documentElement.scrollTop;

        if (wy > lastScrollTop && wy >= startHidingPosition) {
            header.style.transform = "translateY(-100%)"
            menuIcon.style.transform = "translateY(-400%)"
        } else {
            header.style.transform = "translateY(0)"
            menuIcon.style.transform = "translateY(0)"
        }

        lastScrollTop = wy <= 0 ? 0 : wy;
    });
}


// Hamburger Toggle

menuIcon.addEventListener("click", () => {
    toggleNav();
});

avoider.addEventListener('click', ()=> {
    toggleNav();
});

function toggleNav() {
    menuIcon.classList.toggle("hamburgerChange");
    navbar.classList.toggle("change");
    bd.classList.toggle("overflowChange");

    if (avoider.style.display === "none") {
        avoider.style.display = "block";
        menuIcon.style.right = "60px";
    } else {
        avoider.style.display = "none";
        menuIcon.style.right = "50px";
    }
}