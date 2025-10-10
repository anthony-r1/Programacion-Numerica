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

        // Copy code function
        function copyCode() {
            const codeBlock = document.getElementById('codeBlock');
            const button = document.querySelector('.copy-button');
            const textToCopy = codeBlock.textContent;
            
            // Create temporary textarea
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            
            // Select and copy
            textarea.select();
            textarea.setSelectionRange(0, 99999);
            
            try {
                document.execCommand('copy');
                
                // Change button appearance
                button.textContent = '✓ ¡Copiado!';
                button.classList.add('copy-success');
                
                // Reset after 2 seconds
                setTimeout(() => {
                    button.textContent = '📋 Copiar Código';
                    button.classList.remove('copy-success');
                }, 2000);
            } catch (err) {
                button.textContent = '❌ Error';
                setTimeout(() => {
                    button.textContent = '📋 Copiar Código';
                }, 2000);
            }
            
            // Remove temporary textarea
            document.body.removeChild(textarea);
        }