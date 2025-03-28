document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const closeButton = document.getElementById("close-menu");
  const sideMenu = document.querySelector(".side-menu");
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  // Toggle Sidebar
  menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("active");

    // Close all dropdowns when the menu is opened
    if (sideMenu.classList.contains("active")) {
      closeAllDropdowns();
    }
  });

  // Close Menu Button
  closeButton.addEventListener("click", () => sideMenu.classList.remove("active"));

  // Dropdown Functionality: Allow only one dropdown open at a time
  dropdownButtons.forEach(button => {
    button.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      const isOpen = dropdownContent.style.display === "block";

      // Close all dropdowns before opening a new one
      closeAllDropdowns();

      // Toggle current dropdown
      if (!isOpen) {
        dropdownContent.style.display = "block";
      }
    });
  });

  // Helper Function: Close all dropdowns
  function closeAllDropdowns() {
    document.querySelectorAll(".dropdown-container").forEach(container => {
      container.style.display = "none";
    });
  }

  // 3D Carousel Setup
  const carousel = document.getElementById("carousel-3d");
  const items = carousel.getElementsByClassName("carousel-item");
  const radius = 350; // Distance from center
  const angle = 360 / items.length;

  Array.from(items).forEach((item, index) => {
    const theta = angle * index;
    item.style.transform = `rotateY(${theta}deg) translateZ(${radius}px)`;
  });
});