document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-menu");
    const sideMenu = document.querySelector(".side-menu");
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    // Toggle Sidebar
    menuButton.addEventListener("click", () => sideMenu.classList.toggle("active"));
    closeButton.addEventListener("click", () => sideMenu.classList.remove("active"));

    // Dropdown Functionality
    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("show");
        });
    });

    // 3D Carousel Logic
    const carousel = document.getElementById("carousel-3d");
    const items = carousel.getElementsByClassName("carousel-item");
    const radius = 350; // Distance from center
    const angle = 360 / items.length;

    Array.from(items).forEach((item, index) => {
        const theta = angle * index;
        item.style.transform = `rotateY(${theta}deg) translateZ(${radius}px)`;
    });
});
