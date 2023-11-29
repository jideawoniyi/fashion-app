document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuIcon.textContent = menu.classList.contains('active') ? 'close' : 'menu';
    });
});
