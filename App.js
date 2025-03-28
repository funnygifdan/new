/document.getElementById('menu-btn').addEventListener('click', () => {
    document.getElementById('menu').classList.toggle('open');
    document.getElementById('content').classList.toggle('shifted');
});

document.addEventListener('click', (e) => {
    if (!document.getElementById('menu').contains(e.target) && !document.getElementById('menu-btn').contains(e.target)) {
        document.getElementById('menu').classList.remove('open');
        document.getElementById('content').classList.remove('shifted');
    }
});

// Handle dropdown toggle
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.parentElement.classList.toggle('open');
    });
});