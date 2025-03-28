document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const canvas = document.getElementById("matrixCanvas");
  const hacker1 = document.getElementById("hacker1");
  const ctx = canvas.getContext("2d");

  /* -------------------------
     Menu Toggle
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

  /* -------------------------
     Matrix Code Background (Slowed Down)
  -------------------------- */
  let fontSize = 18;
  let columns = Math.floor(window.innerWidth / fontSize);
  const drops = Array(columns).fill(1);
  ctx.font = `${fontSize}px monospace`;

  const drawMatrix = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; // Darker fade effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00FF00";
    const charArray = "01 10 11 00 101 010 011 110 100 111 001".split(" ");
    
    for (let i = 0; i < drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      // Slower falling effect
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
        drops[i] = 0;
      }
      drops[i] += 0.5; // Slower movement
    }

    setTimeout(() => requestAnimationFrame(drawMatrix), 50); // Adjusted speed
  };

  const setCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(window.innerWidth / fontSize);
    drops.fill(1);
  };

  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);
  requestAnimationFrame(drawMatrix);

  /* -------------------------
     Moving Hacker1 Randomly with Depth Effect
  -------------------------- */
  const moveHacker1 = () => {
    // Limit positions to keep image within viewport (with a buffer)
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 120;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    const scale = Math.random() * 1.5 + 0.5;   // Vary scale to simulate depth
    const opacity = Math.random() * 0.6 + 0.4;   // Vary opacity for fade effect

    hacker1.style.transform = `translate(${newX}px, ${newY}px) scale(${scale})`;
    hacker1.style.opacity = opacity;

    setTimeout(moveHacker1, 2000); // Update position every 2 seconds
  };

  moveHacker1();
});