document.addEventListener("DOMContentLoaded", () => {
  // Cache commonly used elements
  const menuButton = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");
  const topNav = document.querySelector(".top-nav");
  const satellite = document.getElementById("satellite");
  const cube = document.getElementById("cube");
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");

  /* -------------------------
     Menu & Dropdown Toggle
  -------------------------- */
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
      menu.classList.remove("open");
    }
  });

  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.parentElement.classList.toggle("open");
    });
  });

  /* -------------------------
     Satellite Floating Animation
  -------------------------- */
  let targetX = window.innerWidth / 2,
      targetY = window.innerHeight / 2,
      currentX = targetX,
      currentY = targetY;

  document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  const updateSatellite = () => {
    currentX += (targetX - currentX) * 0.05;
    currentY += (targetY - currentY) * 0.05;

    // Prevent the satellite from going out of bounds
    const maxX = window.innerWidth - satellite.clientWidth;
    const maxY = window.innerHeight - satellite.clientHeight;
    currentX = Math.max(0, Math.min(currentX, maxX));
    currentY = Math.max(0, Math.min(currentY, maxY));

    satellite.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(updateSatellite);
  };
  updateSatellite();

  /* -------------------------
     3D Cube Rotation Animation
  -------------------------- */
  let cubeAngle = 0;
  const rotateCube = () => {
    cubeAngle += 0.5; // adjust speed as needed
    cube.style.transform = `rotateX(${cubeAngle}deg) rotateY(${cubeAngle}deg)`;
    requestAnimationFrame(rotateCube);
  };
  rotateCube();

  /* -------------------------
     Matrix Code Falling Effect
  -------------------------- */
  let fontSize = 18;
  let columns = Math.floor(window.innerWidth / fontSize);
  const drops = Array(columns).fill(1);
  ctx.font = `${fontSize}px monospace`;

  const drawMatrix = () => {
    // Fade the canvas slightly to create trailing effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00FF00";
    // Split string into array of characters/numbers
    const charArray = "01 10 11 00 101 010 011 110 100 111 001".split(" ");

    for (let i = 0; i < drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillText(text, x, y);

      // Reset drop to top randomly after reaching bottom
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    requestAnimationFrame(drawMatrix);
  };

  // Set initial canvas dimensions
  const setCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(window.innerWidth / fontSize);
    // Reset drops array on resize
    drops.length = 0;
    for (let i = 0; i < columns; i++) {
      drops.push(1);
    }
  };
  setCanvasSize();

  // Debounce resize events to optimize performance
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(setCanvasSize, 200);
  });
  requestAnimationFrame(drawMatrix);

  /* -------------------------
     Top Navigation Translucency on Scroll
  -------------------------- */
  window.addEventListener("scroll", () => {
    topNav.classList.toggle("translucent", window.scrollY > 0);
  });
});