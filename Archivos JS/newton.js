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

        // Función para copiar código
        function copiarCodigo() {
            const codigo = document.getElementById('codigoPython').textContent;
            const copyIcon = document.getElementById('copyIcon');
            const copyText = document.getElementById('copyText');
            const copyButton = document.querySelector('.copy-button');
            
            navigator.clipboard.writeText(codigo).then(() => {
                copyIcon.textContent = '✅';
                copyText.textContent = 'Copiado!';
                copyButton.classList.add('copied');
                
                setTimeout(() => {
                    copyIcon.textContent = '📋';
                    copyText.textContent = 'Copiar';
                    copyButton.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Error al copiar:', err);
            });
        }