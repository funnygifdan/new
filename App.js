
document.addEventListener("DOMContentLoaded", () => {
  const glitchSound = document.getElementById("glitchSound");
  const startupSound = document.getElementById("startupSound");
  const ambientLoop = document.getElementById("ambientLoop");
  const typeBeep = document.getElementById("typeBeep");

  if (startupSound) startupSound.play();
  if (ambientLoop) {
    ambientLoop.volume = 0.2;
    ambientLoop.play();
  }

  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");
  let fontSize = 20;
  let columns, drops;
  const charArray = "01".split("");

  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
  }

  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);
  ctx.font = `${fontSize}px monospace`;

  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < drops.length; i++) {
      const text = charArray[Math.floor(Math.random() * charArray.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillStyle = `rgba(0, 255, 0, ${1 - y / canvas.height})`;
      ctx.fillText(text, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }

    requestAnimationFrame(drawMatrix);
  }

  requestAnimationFrame(drawMatrix);

  // Floating image below nav
  const hacker1 = document.getElementById("hacker1");
  function moveHacker1() {
    const maxX = window.innerWidth - 120;
    const navHeight = document.querySelector(".top-nav")?.offsetHeight || 60;
    const maxY = window.innerHeight - 120;
    const newX = Math.random() * maxX;
    const newY = navHeight + Math.random() * (maxY - navHeight);
    const scale = Math.random() * 1.5 + 0.5;
    const opacity = Math.random() * 0.6 + 0.4;

    hacker1.style.transform = `translate(${newX}px, ${newY}px) scale(${scale})`;
    hacker1.style.opacity = opacity;

    setTimeout(moveHacker1, 3500);
  }
  moveHacker1();

  // Terminal typing
  const terminalOutput = document.getElementById("terminalOutput");
  const terminalPrompt = document.getElementById("terminalPrompt");
  const terminalCursor = document.getElementById("terminalCursor");

  const bootSequence = [
    "Initializing Funcryptology shell...",
    "Loading matrixCore.js, neonNet, glitchFX...",
    "Access Level: GUEST",
    "Injecting terminal instance...",
    "Ready."
  ];

  let lineIndex = 0;
  function typeLine(line, i = 0) {
    if (i < line.length) {
      terminalOutput.textContent += line[i];
      if (typeBeep) {
        typeBeep.currentTime = 0;
        typeBeep.play();
      }
      setTimeout(() => typeLine(line, i + 1), 30);
    } else {
      terminalOutput.textContent += "\n";
      setTimeout(typeNextLine, 200);
    }
  }

  function typeNextLine() {
    if (lineIndex < bootSequence.length) {
      typeLine(bootSequence[lineIndex]);
      lineIndex++;
    } else {
      terminalPrompt.style.display = "inline";
      terminalCursor.style.display = "inline-block";
    }
  }

  setTimeout(typeNextLine, 500);

  // Menu toggle
  const menuButton = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
      menu.classList.remove("open");
    }
  });

  // Dynamic content loading
  const portsLink = document.querySelector('a[href="ports-headers.html"]');
  const mainContainer = document.querySelector(".w3-main");

  function loadPage(url, push = true) {
    fetch(url)
      .then((res) => res.text())
      .then((html) => {
        const temp = document.createElement("div");
        temp.innerHTML = html;
        const content = temp.querySelector(".terminal-content");
        if (content) {
          mainContainer.classList.remove("glitch-in");
          mainContainer.classList.add("glitch-out");
          setTimeout(() => {
            mainContainer.innerHTML = content.outerHTML;
            mainContainer.classList.remove("glitch-out");
            mainContainer.classList.add("glitch-in");
            if (glitchSound) {
              glitchSound.currentTime = 0;
              glitchSound.play();
            }
            if (push) history.pushState({ url }, '', url);
          }, 300);
        }
      });
  }

  if (portsLink) {
    portsLink.addEventListener("click", (e) => {
      e.preventDefault();
      loadPage("ports-headers.html");
    });
  }

  window.addEventListener("popstate", (e) => {
    if (e.state && e.state.url) {
      loadPage(e.state.url, false);
    }
  });
});
