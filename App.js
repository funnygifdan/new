document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const sideMenu = document.getElementById("side-menu");
  const closeMenuButton = document.getElementById("close-menu");
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  // Menu Toggle
  menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
  });

  closeMenuButton.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });

  // Dropdown Toggle (Only one open at a time)
  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      const isActive = dropdownContent.style.display === "block";

      document.querySelectorAll(".dropdown-container").forEach((container) => {
        container.style.display = "none";
      });

      dropdownContent.style.display = isActive ? "none" : "block";
    });
  });

  // Carousel Logic
  let slideIndex = 0;
  const slides = document.querySelectorAll(".carousel-item");

  function showSlides(index) {
    slides.forEach((slide) => (slide.style.display = "none"));
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

  // Touch Swipe Support
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