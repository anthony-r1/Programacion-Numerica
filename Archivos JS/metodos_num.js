// Generate stars
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 2 + 's';
            starsContainer.appendChild(star);
        }

        // Navigate to method detail page
        function navigateToMethod(methodName) {
            // Aquí puedes cambiar la ruta según tu estructura de archivos
            window.location.href = `metodo-${methodName}.html`;