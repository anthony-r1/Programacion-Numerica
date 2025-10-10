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
            const codeContent = document.getElementById('codeContent');
            const textToCopy = codeContent.innerText;
            
            navigator.clipboard.writeText(textToCopy).then(function() {
                const copyButton = document.querySelector('.copy-button');
                const originalText = copyButton.innerHTML;
                
                copyButton.innerHTML = '✓ Copiado!';
                copyButton.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                
                setTimeout(function() {
                    copyButton.innerHTML = originalText;
                    copyButton.style.background = '';
                }, 2000);
            }).catch(function(err) {
                console.error('Error al copiar: ', err);
                alert('No se pudo copiar el código. Por favor, cópialo manualmente.');
            });
        }

        // Smooth scroll for stars
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const stars = document.querySelectorAll('.star');
            
            stars.forEach((star, index) => {
                const speed = (index % 3 + 1) * 0.1;
                star.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe cards
        document.querySelectorAll('.type-card, .section-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        // Page load animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });