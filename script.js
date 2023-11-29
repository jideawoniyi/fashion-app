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

    // Script for arranging menu items in 'W' shape
    function arrangeMenuItemsInWShape() {
        const menuItems = menu.querySelectorAll('li');
    
        if (window.innerWidth <= 768) {
            // Define positions for each menu item in the 'W' shape
            const positions = [
                { x: '0%', y: '10%' },    // Home
                { x: '20%', y: '35%' },   // Shop
                { x: '40%', y: '10%' },   // New
                { x: '65%', y: '35%' },   // Trending
                { x: '75%', y: '10%' },   // Contact
                { x: '65%', y: '60%' },   // Login
                { x: '45%', y: '35%' },   // Signup
                { x: '20%', y: '60%' }    // Cart
            ];
            
    
            menuItems.forEach((item, index) => {
                item.style.position = 'absolute';
                item.style.left = positions[index].x;
                item.style.top = positions[index].y;
            });
        } else {
            // Reset styles for non-mobile view
            menuItems.forEach((item) => {
                item.style.position = '';
                item.style.left = '';
                item.style.top = '';
            });
        }
    }
    
    

    // Initial arrangement
    arrangeMenuItemsInWShape();

    // Re-arrange on window resize
    window.addEventListener('resize', arrangeMenuItemsInWShape);
});
