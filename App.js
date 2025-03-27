document.addEventListener("DOMContentLoaded", function () {
  // Sidebar Toggle
  const menuButton = document.getElementById("menu-button");
  const sideMenu = document.querySelector(".side-menu");

  menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
  });

  // 3D Carousel Image Loader
  const carousel = document.getElementById("carousel-3d");
  const imageCount = 6; // Number of images in the 3D view
  const imageBasePath = "/foodPics/IMG_0";
  const imageStart = 490;

  for (let i = 0; i < imageCount; i++) {
    const imgIndex = imageStart + i;
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";
    carouselItem.innerHTML = `<img src="${imageBasePath}${imgIndex}.jpeg" alt="Image ${imgIndex}">`;
    carousel.appendChild(carouselItem);
  }

  // Swipe Support for Carousel
  let touchStartX = 0;
  carousel.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  });

  carousel.addEventListener("touchend", (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchEndX < touchStartX) {
      rotateCarousel(60);
    } else if (touchEndX > touchStartX) {
      rotateCarousel(-60);
    }
  });

  // Manual Rotation for Carousel
  let rotationAngle = 0;

  function rotateCarousel(angle) {
    rotationAngle += angle;
    carousel.style.transform = `rotateY(${rotationAngle}deg)`;
  }
});