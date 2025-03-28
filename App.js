document.addEventListener("DOMContentLoaded", () => {
  const glitchSound = document.getElementById("glitchSound");
  const startupSound = document.getElementById("startupSound");
  const ambientLoop = document.getElementById("ambientLoop");
  const typeBeep = document.getElementById("typeBeep");

  // Startup sounds
  if (startupSound) startupSound.play();
  if (ambientLoop) {
    ambientLoop.volume = 0.2;
    ambientLoop.play();
  }

  // Matrix canvas setup
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

  // Floating hacker image
  const hacker1 = document.getElementById("hacker1");
  function moveHacker1() {
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 120;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    const scale = Math.random() * 1.5 + 0.5;
    const opacity = Math.random() * 0.6 + 0.4;

    hacker1.style.transform = `translate(${newX}px, ${newY}px) scale(${scale})`;
    hacker1.style.opacity = opacity;

    setTimeout(moveHacker1, 3500);
  }
  moveHacker1();

  // Terminal startup typing
  const terminalOutput = document.getElementById("terminalOutput");
  const terminalPrompt = document.getElementById("terminalPrompt");
  const terminalCursor = document.getElementById("terminalCursor");

  const bootSequence = [
    "Initializing Funcryptology shell...",
    "Loading modules: matrixCore.js, neonNet, glitchFX...",
    "Establishing secure node connection...",
    "Access Level: GUEST",
    "Loading PORTS & HEADERS..."
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
      setTimeout(typeNextLine, 300);
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

  setTimeout(typeNextLine, 1000);

  // Dynamic loading of Ports & Headers page
  const portsLink = document.querySelector('a[href="ports-headers.html"]');
  const mainContainer = document.querySelector(".w3-main");

  if (portsLink && mainContainer) {
    portsLink.addEventListener("click", (e) => {
      e.preventDefault();

      fetch("ports-headers.html")
        .then((res) => res.text())
        .then((html) => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = html;

          const content = tempDiv.querySelector(".terminal-content");
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

              history.pushState({ url: "ports-headers.html" }, '', "ports-headers.html");
            }, 300);
          }
        });
    });
  }

  // Handle back/forward navigation
  window.addEventListener("popstate", (e) => {
    if (e.state && e.state.url) {
      fetch(e.state.url)
        .then((res) => res.text())
        .then((html) => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = html;

          const content = tempDiv.querySelector(".terminal-content");
          if (content) {
            mainContainer.innerHTML = content.outerHTML;
          }
        });
    }
  });
});