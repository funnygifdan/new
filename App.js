document.addEventListener("DOMContentLoaded", function () {
  // Menu Toggle
  const menuButton = document.getElementById("menu-button");
  const sideMenu = document.querySelector(".side-menu");
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    updateParagraphPosition();
  });

  dropdownButtons.forEach(button => {
    button.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      const isActive = dropdownContent.style.display === "block";
      document.querySelectorAll(".dropdown-container").forEach(container => container.style.display = "none");
      dropdownContent.style.display = isActive ? "none" : "block";
      updateParagraphPosition();
    });
  });

  // Adjust Paragraph Box Position
  function updateParagraphPosition() {
    const menuHeight = sideMenu.classList.contains("active") ? sideMenu.offsetHeight : 0;
    document.querySelector(".paragraph-box").style.marginTop = `${menuHeight}px`;
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