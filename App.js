
  // Sidebar Toggle and Carousel Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Toggle
  const menuButton = document.getElementById("menu-button");
  const sideMenu = document.querySelector(".side-menu");
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");
  const paragraphBox = document.querySelector(".paragraph-box");

  // Toggle Sidebar Menu
  menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    updateParagraphPosition();
  });

  // Handle Dropdowns
  dropdownButtons.forEach(button => {
    button.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      const isActive = dropdownContent.style.display === "block";
      closeAllDropdowns();
      dropdownContent.style.display = isActive ? "none" : "block";
      updateParagraphPosition();
    });
  });

  // Close all dropdowns
  function closeAllDropdowns() {
    document.querySelectorAll(".dropdown-container").forEach(container => {
      container.style.display = "none";
    });
  }

  // Update Paragraph Position
  function updateParagraphPosition() {
    let menuHeight = sideMenu.classList.contains("active") ? sideMenu.offsetHeight : 100;
    paragraphBox.style.marginTop = `${menuHeight}px`;
  }

  // Carousel Functionality
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

  // Touch Swipe Support for Carousel
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

  // Dynamically Load Images for Carousel
  const carouselInner = document.querySelector(".carousel-inner");
  for (let i = 490; i <= 514; i++) {
    const div = document.createElement("div");
    div.className = `carousel-item ${i === 490 ? 'active' : ''}`;
    div.innerHTML = `<img src="/foodPics/IMG_0${i}.jpeg" alt="Food Image ${i}">`;
    carouselInner.appendChild(div);
  }
});