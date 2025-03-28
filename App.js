// Menu Toggle Logic
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");

    menuButton.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && e.target !== menuButton) {
            menu.style.display = "none";
        }
    });
});

// 3D Carousel Rotation
const carousel = document.querySelector(".carousel");
let angle = 0;

function rotateCarousel() {
    angle += 36;
    carousel.style.transform = `rotateY(${angle}deg)`;
}

setInterval(rotateCarousel, 3000);