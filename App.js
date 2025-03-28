// Menu Toggle Logic
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

    // AI Alien Animation
    const alien = document.getElementById("alien");
    let targetX = window.innerWidth / 2, targetY = window.innerHeight / 2;
    let currentX = targetX, currentY = targetY;

    document.addEventListener("mousemove", (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function updateAlien() {
        currentX += (targetX - currentX) * 0.05;
        currentY += (targetY - currentY) * 0.05;
        // Scale the alien based on distance from screen center for a perspective effect
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const dist = Math.hypot(currentX - centerX, currentY - centerY);
        const maxDist = Math.hypot(centerX, centerY);
        const scale = 0.5 + (1 - dist / maxDist);
        alien.style.transform = `translate(${currentX}px, ${currentY}px) scale(${scale})`;
        requestAnimationFrame(updateAlien);
    }
    updateAlien();

    // 3D Cube Carousel (unchanged)
    const cube = document.getElementById("cube");
    let angle = 0;
    setInterval(() => {
        angle += 120;
        // Assuming 6 faces, each gets an extra 120deg offset
        const faces = document.querySelectorAll(".cube-face");
        faces.forEach((face, index) => {
            face.style.transform = face.style.transform.split('translateZ')[0] +
                `translateZ(150px) rotateY(${angle + index * 120}deg)`;
        });
    }, 3000);

    // Hacker Matrix Background
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

 // Script for Sidebar
      function w3_open() {
        document.getElementById("mySidebar").style.display = "block";
      }
      function w3_close() {
        document.getElementById("my
  
  