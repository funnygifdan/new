// Menu Toggle
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.style.display = 'none';
    }
});

// 3D Carousel Effect
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');

let angle = 0;
setInterval(() => {
    angle += 120;
    images.forEach((img, index) => {
        img.style.transform = `rotateY(${angle + index * 120}deg) translateZ(300px)`;
    });
}, 3000);