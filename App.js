// Menu Toggle
const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    // Toggle menu visibility
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Close Menu When Clicking Outside
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.style.display = 'none';
    }
});

// Close Menu When Clicking Outside
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.style.display = 'none';
    }
});