document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const canvas = document.getElementById("matrixCanvas");
  const hacker1 = document.getElementById("hacker1");
  const glitchText = document.getElementById("glitchText");
  const glitchSound = document.getElementById("glitchSound");
  const terminalLog = document.getElementById("terminalLog");
  const ctx = canvas.getContext("2d");

  // Menu toggle
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
  });
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
      menu.classList.remove("open");
    }
  });

  // Dropdown toggle
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");
  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.parentElement.classList.toggle("open");
    });
  });

  // Matrix background
  let fontSize = 24;
  let columns;
  let drops;
  const charArray = "01".split("");

  const setCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
  };

  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);
  ctx.font = `${fontSize}px monospace`;
  ctx.textBaseline = "top";
  ctx.textAlign = "center";

  const drawMatrix = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < drops.length; i++) {
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      const opacity = 1 - y / canvas.height;

      ctx.fillStyle = `rgba(144, 255, 144, ${opacity})`;
      const char = charArray[Math.floor(Math.random() * charArray.length)];
      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    requestAnimationFrame(drawMatrix);
  };
  requestAnimationFrame(drawMatrix);

  // Floating hacker image
  const moveHacker1 = () => {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 120;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    const scale = Math.random() * 1.5 + 0.5;
    const opacity = Math.random() * 0.6 + 0.4;

    hacker1.style.transform = `translate(${newX}px, ${newY}px) scale(${scale})`;
    hacker1.style.opacity = opacity;

    setTimeout(moveHacker1, 3500);
  };
  moveHacker1();

  // Glitch text cycling with typing + sound + terminal log
  const messages = [
    "ACCESS GRANTED",
    "TRACE ROUTE ACTIVE",
    "DECRYPTING...",
    "BREACH DETECTED",
    "FIREWALL OVERRIDDEN",
    "CONNECTING TO NODE...",
    "TRANSMISSION INJECTED"
  ];

  let currentIndex = 0;

  const typeMessage = (text, callback) => {
    glitchText.setAttribute("data-text", "");
    glitchText.textContent = "";
    let i = 0;

    const type = () => {
      if (i < text.length) {
        glitchText.textContent += text[i];
        glitchText.setAttribute("data-text", glitchText.textContent);
        i++;
        setTimeout(type, 50);
      } else {
        callback();
      }
    };
    type();
  };

  const cycleGlitchMessage = () => {
    const msg = messages[currentIndex];

    glitchSound.currentTime = 0;
    glitchSound.play();

    typeMessage(msg, () => {
      const logEntry = document.createElement("div");
      logEntry.textContent = `> ${msg}`;
      terminalLog.prepend(logEntry);
      currentIndex = (currentIndex + 1) % messages.length;
      setTimeout(cycleGlitchMessage, 3500);
    });
  };

  cycleGlitchMessage();
});