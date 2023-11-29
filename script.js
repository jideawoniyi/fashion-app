document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle script
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const menu = document.querySelector('.menu');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuIcon.textContent = menu.classList.contains('active') ? 'close' : 'menu';
    });

    // Script for animating floating icons
    const floatingIcons = document.querySelectorAll('.floating-icon');

    floatingIcons.forEach(icon => {
        animateIcon(icon);
    });

    function animateIcon(icon) {
        let maxWidth = window.innerWidth - icon.clientWidth;
        let maxHeight = window.innerHeight - icon.clientHeight;
        let x = Math.random() * maxWidth;
        let y = Math.random() * maxHeight;
        let dx = (Math.random() - 0.5) * 10;
        let dy = (Math.random() - 0.5) * 10;

        function updatePosition() {
            // Update position with speed/direction
            x += dx;
            y += dy;

            // Check for edge collision
            if (x < 0 || x > maxWidth) {
                dx = -dx;
                x = Math.max(0, Math.min(x, maxWidth)); // Clamp within bounds
            }
            if (y < 0 || y > maxHeight) {
                dy = -dy;
                y = Math.max(0, Math.min(y, maxHeight)); // Clamp within bounds
            }

            // Apply the new position
            icon.style.transform = `translate(${x}px, ${y}px)`;
        }

        setInterval(updatePosition, 50);
    }
});