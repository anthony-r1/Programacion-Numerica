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

        // Smooth scroll for links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add animation on scroll
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

        // Observe all activity items
        document.querySelectorAll('.activity-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });

        // Add hover sound effect (visual feedback)
        document.querySelectorAll('.activity-item, .back-button').forEach(element => {
            element.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            });
        });

        // Parallax effect for header
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const stars = document.querySelectorAll('.star');
            
            stars.forEach((star, index) => {
                const speed = (index % 3 + 1) * 0.1;
                star.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });

        // Add click ripple effect
        document.querySelectorAll('.activity-link, .back-button').forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.5)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s ease-out';
                ripple.style.pointerEvents = 'none';
                
                this.style.position = 'relative';
                this.style.overflow = 'hidden';
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Card counter animation
        const activityItems = document.querySelectorAll('.activity-item');
        activityItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
        });

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Dynamic date display
        const today = new Date();
        const dateString = today.toLocaleDateString('es-ES', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        // Activity item click effect
        document.querySelectorAll('.activity-item').forEach(item => {
            item.addEventListener('click', function(e) {
                if (!e.target.classList.contains('activity-link')) {
                    const link = this.querySelector('.activity-link');
                    if (link) {
                        link.click();
                    }
                }
            });
        });