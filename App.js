document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  const canvas = document.getElementById("matrixCanvas");
  const hacker1 = document.getElementById("hacker1");
  const ctx = canvas.getContext("2d");

  const glitchText = document.getElementById("glitchText");
  const glitchSound = document.getElementById("glitchSound");
  const typeBeep = document.getElementById("typeBeep");
  const clickSound = document.getElementById("clickSound");
  const startupSound = document.getElementById("startupSound");
  const ambientLoop = document.getElementById("ambientLoop");

  // Start ambient FX
  if (startupSound) startupSound.play();
  if (ambientLoop) {
    ambientLoop.volume = 0.2;
    ambientLoop.play();
  }

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

  // Dropdown
  const dropdownButtons = document.querySelectorAll(".dropdown-btn");
  dropdownButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      btn.parentElement.classList.toggle("open");
    });
  });

  const dropdownLinks = document.querySelectorAll(".dropdown-content a");
  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const parentDropdown = link.closest(".dropdown");
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
      }
      if (parentDropdown && parentDropdown.classList.contains("open")) {
        parentDropdown.classList.remove("open");
      }
    });
  });

  // Matrix
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
      if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }

    requestAnimationFrame(drawMatrix);
  };
  requestAnimationFrame(drawMatrix);

  // Floating hacker1
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

  // Glitch messages
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

  const cycleGlitchMessage = () => {
    glitchSound.currentTime = 0;
    glitchSound.play();
    glitchText.setAttribute("data-text", messages[currentIndex]);
    glitchText.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;
    setTimeout(cycleGlitchMessage, 3500);
  };
  cycleGlitchMessage();

  // Terminal Boot Sequence
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

  const typeLine = (line, i = 0) => {
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
  };

  const typeNextLine = () => {
    if (lineIndex < bootSequence.length) {
      typeLine(bootSequence[lineIndex]);
      lineIndex++;
    } else {
      terminalPrompt.style.display = "inline";
      terminalCursor.style.display = "inline-block";
    }
  };

  setTimeout(typeNextLine, 1000);

  // Dynamic page load for "Ports & Headers"
  const dynamicContentArea = document.getElementById("dynamic-content");
  const portsLink = document.querySelector('a[href="ports-headers.html"]');

  if (portsLink && dynamicContentArea) {
    portsLink.addEventListener("click", (e) => {
      e.preventDefault();

      fetch("ports-headers.html")
        .then((res) => res.text())
        .then((html) => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = html;
          const newContent = tempDiv.querySelector(".terminal-content");
          if (newContent) {
            dynamicContentArea.innerHTML = newContent.innerHTML;
            dynamicContentArea.style.display = "block";
            window.scrollTo({ top: dynamicContentArea.offsetTop, behavior: "smooth" });
          }
        });
    });
  }
});

<script>
document.addEventListener("DOMContentLoaded", () => {
  const glitchSound = document.getElementById("glitchSound"); // make sure this exists

  function loadPage(url, pushState = true) {
    fetch(url)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const bodyContent = doc.querySelector("body");

        if (bodyContent) {
          const mainContainer = document.querySelector(".w3-main");
          if (mainContainer) {
            // Animate out old content
            mainContainer.classList.remove("glitch-in");
            mainContainer.classList.add("glitch-out");

            setTimeout(() => {
              mainContainer.innerHTML = bodyContent.innerHTML;

              // Animate in new content
              mainContainer.classList.remove("glitch-out");
              mainContainer.classList.add("glitch-in");

              // Play glitch sound
              if (glitchSound) {
                glitchSound.currentTime = 0;
                glitchSound.play();
              }

              // Push to history
              if (pushState) {
                history.pushState({ url }, '', url);
              }
            }, 300);
          }
        }
      });
  }

  // Listen to nav links
  document.querySelectorAll('a[href="porthead.html"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      loadPage("porthead.html");
    });
  });

  // Handle back/forward
  window.addEventListener("popstate", (e) => {
    if (e.state && e.state.url) {
      loadPage(e.state.url, false);
    }
  });
});
</script>
