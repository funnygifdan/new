// Menu Toggle Logic
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const menu = document.getElementById('menu');

// Open Menu
menuToggle.addEventListener('click', () => {
    menu.classList.add('open');
});

// Close Menu
closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
});

// Close Menu on Click Outside
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('open');
    }
});

// 3D Cube Interaction
let cube = document.getElementById('cube');
let currentAngle = 0;

function rotateCube(direction) {
    if (direction === 'left') {
        currentAngle += 90;
    } else {
        currentAngle -= 90;
    }
    cube.style.transform = `rotateY(${currentAngle}deg)`;
}

// Swipe Detection for Cube Rotation
let startX = 0;
let endX = 0;

document.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (endX < startX) {
        rotateCube('left');
    } else if (endX > startX) {
        rotateCube('right');
    }
});