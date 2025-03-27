document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Toggle
  const menuButton = document.getElementById("menu-button");
  const sideMenu = document.querySelector(".side-menu");
  const carouselContainer = document.querySelector(".carousel-container");

  menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("active");

    // Adjust carousel position when the menu is open
    if (sideMenu.classList.contains("active")) {
      carouselContainer.style.marginTop = "150px"; // Push carousel down
    } else {
      carouselContainer.style.marginTop = "50px"; // Reset position
    }
  });

  // 3D Carousel Image Loader
  const carousel = document.getElementById("carousel-3d");
  const imageCount = 6; // Number of images
  const imageBasePath = "/foodPics/IMG_0";
  const imageStart = 490;

  for (let i = 0; i < imageCount; i++) {
    const imgIndex = imageStart + i;
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";
    carouselItem.innerHTML = `<img src="${imageBasePath}${imgIndex}.jpeg" alt="Image ${imgIndex}">`;
    carousel.appendChild(carouselItem);
  }

  // Manual Rotation for Carousel
  let rotationAngle = 0;

  function rotateCarousel(angle) {
    rotationAngle += angle;
    carousel.style.transform = `rotateY(${rotationAngle}deg)`;
  }

  // Swipe Support (Touch Devices)
  let touchStartX = 0;
  carousel.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchEndX < touchStartX) {
      rotateCarousel(60); // Swipe left
    } else if (touchEndX > touchStartX) {
      rotateCarousel(-60); // Swipe right
    }
  });

  // Click and Drag Support (Mouse Devices)
  let isDragging = false;
  let startX = 0;

  carousel.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;

    if (deltaX > 50) {
      rotateCarousel(-60); // Drag right
      isDragging = false;
    } else if (deltaX < -50) {
      rotateCarousel(60); // Drag left
      isDragging = false;
    }
  });
});