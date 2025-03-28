// JavaScript for Menu Toggle and Carousel

// Menu Toggle
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menu-button');

function toggleMenu() {
    menu.classList.toggle('open');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
        menu.classList.remove('open');
    }
});

// Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize carousel
showSlide(currentSlide);