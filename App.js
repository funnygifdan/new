document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Toggle
  const menuButton = document.getElementById("menu-button");
  const sideMenu = document.querySelector(".side-menu");
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  // Open/Close the Side Menu
  menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
  });

  // Dropdown Menu Logic
  dropdownButtons.forEach(button => {
    button.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      const isActive = dropdownContent.style.display === "block";

      // Hide all dropdowns
      document.querySelectorAll(".dropdown-container").forEach(container => {
        container.style.display = "none";
      });

      // Toggle the clicked dropdown
      dropdownContent.style.display = isActive ? "none" : "block";
    });
  });

  // Carousel Functionality
  let slideIndex = 0;
  const slides = document.querySelectorAll(".carousel-item");

  // Show a specific slide
  function showSlides(index) {
    slides.forEach(slide => (slide.style.display = "none"));
    slides[index].style.display = "block";
  }

  // Go to the next slide
  window.nextSlide = function () {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides(slideIndex);
  };

  // Go to the previous slide
  window.prevSlide = function () {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides(slideIndex);
  };

  // Initialize Carousel
  showSlides(slideIndex);

  // Swipe Support for Touch Devices
  const carousel = document.getElementById("carousel");
  let touchStartX = 0;

  carousel.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].clientX;

    // Detect Swipe Direction
    if (touchEndX < touchStartX) nextSlide();
    else if (touchEndX > touchStartX) prevSlide();
  });

  // Dynamically Load Carousel Images
  const carouselInner = document.querySelector(".carousel-inner");
  for (let i = 490; i <= 514; i++) {
    const carouselItem = document.createElement("div");
    carouselItem.className = `carousel-item ${i === 490 ? "active" : ""}`;
    carouselItem.innerHTML = `<img src="/foodPics/IMG_0${i}.jpeg" alt="Food Image ${i}">`;
    carouselInner.appendChild(carouselItem);
  }
});