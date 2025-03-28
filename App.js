// Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-btn") || document.getElementById("menuButton") || document.getElementById("menu-btn");
  const menu = document.getElementById("menu");

  menuButton.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
      menu.classList.remove("open");
    }
  });

  // Dropdown toggle
  document.querySelectorAll(".dropdown-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const dropdownParent = e.target.parentElement;
      dropdownParent.classList.toggle("open");
    });
  });

  // Hacker Background (Matrix Effect)
  const canvas = document.getElementById("matrixCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const columns = Math.floor(canvas.width / 20);
  const drops = Array(columns).fill(1);
  function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00FF00";
    ctx.font = "20px Comic Sans MS";
    for (let i = 0; i < drops.length; i++) {
      const text = String.fromCharCode(33 + Math.random() * 94);
      ctx.fillText(text, i * 20, drops[i] * 20);
      if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(drawMatrix, 50);
});