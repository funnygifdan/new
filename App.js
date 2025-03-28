document.addEventListener("DOMContentLoaded", function () {
  // Menu Elements
  const menuButton = document.getElementById("menu-button");
  const closeButton = document.getElementById("close-menu");
  const sideMenu = document.querySelector(".side-menu");
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");

  // Toggle Sidebar
  menuButton.addEventListener("click", () => sideMenu.classList.toggle("active"));
  closeButton.addEventListener("click", () => sideMenu.classList.remove("active"));

  // Dropdown Functionality
  dropdownButtons.forEach(button => {
    button.addEventListener("click", function () {
      const dropdownContent = this.nextElementSibling;
      const isActive = dropdownContent.style.display === "block";
      document.querySelectorAll(".dropdown-container").forEach(container => container.style.display = "none");
      dropdownContent.style.display = isActive ? "none" : "block";
    });
  });

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