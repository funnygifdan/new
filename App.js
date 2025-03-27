document.addEventListener("DOMContentLoaded", function () {
    // Menu Toggle
    const menuButton = document.getElementById("menu-button");
    const sideMenu = document.getElementById("side-menu");
    const closeButton = document.getElementById("close-button");
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    menuButton.addEventListener("click", () => {
        sideMenu.classList.toggle("active");
    });

    closeButton.addEventListener("click", () => {
        sideMenu.classList.remove("active");
    });

    // Dropdown Functionality
    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            const dropdownContent = this.nextElementSibling;
            const isActive = dropdownContent.classList.contains("open");
            document.querySelectorAll(".dropdown-container").forEach(container => container.classList.remove("open"));
            if (!isActive) dropdownContent.classList.add("open");
        });
    });

    // Carousel
    let slideIndex = 0;
    const slides = document.querySelectorAll(".carousel-item");

    function showSlides(index) {
        slides.forEach(slide => (slide.style.display = "none"));
        slides[index].style.display = "block";
    }

    window.nextSlide = function () {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlides(slideIndex);
    };

    window.prevSlide = function () {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlides(slideIndex);
    };

    showSlides(slideIndex);

    // Swipe for Carousel
    const carousel = document.getElementById("carousel");
    let touchStartX = 0;

    carousel.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    carousel.addEventListener("touchend", (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchEndX < touchStartX) nextSlide();
        else if (touchEndX > touchStartX) prevSlide();
    });
});