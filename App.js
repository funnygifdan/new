document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Toggle
    const menuButton = document.getElementById("menu-button");
    const sideMenu = document.querySelector(".side-menu");
    const closeButton = document.getElementById("close-menu");
    const mainContent = document.getElementById("main-content");
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    // Open Menu
    menuButton.addEventListener("click", toggleMenu);
        sideMenu.classList.toggle("active");
        mainContent.classList.toggle("menu-open");
    });

    // Close Menu
    closeButton.addEventListener("click", () => {
        
        
    });

    // Dropdown Functionality (One Open at a Time)
    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            const dropdownContent = this.nextElementSibling;
            const isActive = dropdownContent.style.display === "block";

            // Close all dropdowns
            document.querySelectorAll(".dropdown-container").forEach(container => {
                container.style.display = "none";
            });

            // Toggle the current one
            dropdownContent.style.display = isActive ? "none" : "block";
        });
    });
});

  // Toggle Menu and Push Down Content
  function toggleMenu() {
    sideMenu.classList.toggle("active");
    mainContent.classList.toggle("menu-open");
  }

  menuButton.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", toggleMenu);

  // Dropdown Logic - Only one open at a time
  dropdownButtons.forEach(button => {
    button.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;

      document.querySelectorAll(".dropdown-container").forEach(container => {
        if (container !== dropdownContent) {
          container.style.display = "none";
        }
      });

      dropdownContent.style.display =
        dropdownContent.style.display === "block" ? "none" : "block";
    });
  });

  // Carousel Logic
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