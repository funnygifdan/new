document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const sideMenu = document.getElementById("side-menu");
  const closeMenuButton = document.getElementById("close-menu-button");
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");
  const content = document.getElementById("content");

  // Toggle Sidebar
  menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    adjustContent();
  });

  closeMenuButton.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    adjustContent();
  });

  // Manage Dropdown Menus
  dropdownButtons.forEach(button => {
    button.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;

      document.querySelectorAll(".dropdown-container").forEach(container => {
        if (container !== dropdownContent) {
          container.style.display = "none";
        }
      });

      dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
      adjustContent();
    });
  });

  // Adjust content position
  function adjustContent() {
    if (sideMenu.classList.contains("active")) {
      content.style.marginLeft = "300px";
    } else {
      content.style.marginLeft = "0";
    }
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
});