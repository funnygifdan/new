// Menu Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');

    // Toggle menu display
    menuButton.addEventListener('click', () => {
        menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== menuButton) {
            menu.style.display = 'none';
        }
    });
});