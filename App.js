// Toggle Menu
document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!document.getElementById('menu').contains(e.target) && !document.getElementById('menu-btn').contains(e.target)) {
        document.getElementById('menu').classList.remove('open');
    }
});

// Dropdown toggle
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('open');
    });
});

// Hacker Background (Matrix Effect)
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = Math.floor(canvas.width / 20);
const drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF00';
    ctx.font = '20px Comic Sans MS';
    drops.forEach((y, x) => {
        ctx.fillText(String.fromCharCode(33 + Math.random() * 94), x * 20, y * 20);
        drops[x] = y > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
    });
}

setInterval(drawMatrix, 50);