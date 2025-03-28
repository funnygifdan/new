document.addEventListener("DOMContentLoaded", () => {
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

    document.querySelectorAll(".dropdown-btn").forEach((button) => {
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            button.parentElement.classList.toggle("open");
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
        
        // Prevent out-of-bounds movement
        const maxX = window.innerWidth - alien.clientWidth;
        const maxY = window.innerHeight - alien.clientHeight;
        currentX = Math.max(0, Math.min(currentX, maxX));
        currentY = Math.max(0, Math.min(currentY, maxY));

        alien.style.transform = `translate(${currentX}px, ${currentY}px)`;
        requestAnimationFrame(updateAlien);
    }
    updateAlien();

    // 3D Cube Carousel
    const cube = document.getElementById("cube");
    let angle = 0;
    setInterval(() => {
        angle += 90;
        cube.style.transform = `rotateX(${angle}deg) rotateY(${angle}deg)`;
    }, 3000);
});