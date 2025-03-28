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
     Satellite Random Movement with Depth
  -------------------------- */
  // Set initial position and scale
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let currentScale = 1;

  // Set initial target values
  let targetX = currentX;
  let targetY = currentY;
  let targetScale = currentScale;

  // Function to set a new random target position and scale
  const setRandomTarget = () => {
    // Ensure the satellite remains fully in view
    targetX = Math.random() * (window.innerWidth - satellite.clientWidth);
    targetY = Math.random() * (window.innerHeight - satellite.clientHeight);
    // Random scale between 0.5 (far) and 1.5 (close)
    targetScale = 0.5 + Math.random();
  };

  // Set a new target every 5 seconds
  setRandomTarget();
  setInterval(setRandomTarget, 5000);

  // Animate the satellite moving toward the random target and adjusting its scale
  const updateSatellite = () => {
    // Easing factor controls speed of transition (lower values = slower)
    const easing = 0.02;
    currentX += (targetX - currentX) * easing;
    currentY += (targetY - currentY) * easing;
    currentScale += (targetScale - currentScale) * easing;

    satellite.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentScale})`;
    requestAnimationFrame(updateSatellite);
  };
  updateSatellite();

  /* -------------------------
     3D Cube Rotation Animation
  -------------------------- */
  let cubeAngle = 0;
  const rotateCube = () => {
    cubeAngle += 0.5; // Adjust speed as needed
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
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00FF00";
    const charArray = "01 10 11 00 101 010 011 110 100 111 001".split(" ");
    for (let i = 0; i < drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillText(text, x, y);
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    requestAnimationFrame(drawMatrix);
  };

  // Set initial canvas dimensions and update on resize
  const setCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(window.innerWidth / fontSize);
    drops.length = 0;
    for (let i = 0; i < columns; i++) {
      drops.push(1);
    }
  };
  setCanvasSize();
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