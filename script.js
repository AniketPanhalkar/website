document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");
    const menuLinks = document.querySelectorAll("nav ul li a");

    // Toggle menu on hamburger click
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu when a menu item is clicked
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });
});
