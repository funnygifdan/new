// Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuButton");
    const menu = document.getElementById("menu");
    const closeMenuButton = document.getElementById("closeMenu");
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    // Open menu
    menuButton.addEventListener("click", () => {
        menu.classList.add("open");
    });

    // Close menu
    closeMenuButton.addEventListener("click", () => {
        menu.classList.remove("open");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
            menu.classList.remove("open");
        }
    });

    // Dropdown logic - allow one open at a time
    dropdownButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const parent = button.parentElement;
            const isOpen = parent.classList.contains("open");

            // Close all dropdowns
            dropdownButtons.forEach((btn) => {
                btn.parentElement.classList.remove("open");
            });

            // Toggle current dropdown
            if (!isOpen) {
                parent.classList.add("open");
            }
        });
    });
});