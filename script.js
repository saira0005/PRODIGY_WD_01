document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const navLinks = document.querySelectorAll("header nav ul li a");

    // Change background color of the header on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#666362";
        } else {
            header.style.backgroundColor = "";
        }
    });

    // Change font color of menu items on hover
    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            link.style.color = "#808080"
        });
        link.addEventListener("mouseout", function () {
            link.style.color = ""; 
        });
    });
});
