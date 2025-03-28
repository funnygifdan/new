document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');

    // Toggle Menu
    menuButton.addEventListener('click', () => {
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    // Close Menu on Click Outside
    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== menuButton) {
            menu.style.display = 'none';
        }
    });
});