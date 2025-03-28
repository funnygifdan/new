// Handle menu open/close
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const closeMenuButton = document.getElementById("close-menu-button");
  const sideMenu = document.getElementById("side-menu");
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  // Toggle menu visibility
  menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
  });

  // Close menu
  closeMenuButton.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });

  // Close menu if clicking outside
  document.addEventListener("click", (e) => {
    if (!sideMenu.contains(e.target) && !menuButton.contains(e.target)) {
      sideMenu.classList.remove("active");
    }
  });

  // Toggle dropdown visibility
  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    });
  });

  // Image carousel functionality
  let currentIndex = 0;
  const slides = document.querySelectorAll(".carousel-item");
  const totalSlides = slides.length;

  window.nextSlide = function () {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add("active");
  };

  window.prevSlide = function () {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides[currentIndex].classList.add("active");
  };
});