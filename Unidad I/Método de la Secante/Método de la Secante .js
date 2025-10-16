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

// Scroll movement effect (parallax-like)
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const stars = document.querySelectorAll('.star');
    const header = document.querySelector('.header');
    const heroIcon = document.querySelector('.hero-icon');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    // Parallax effect for stars
    stars.forEach(star => {
        const speed = parseFloat(star.style.animationDelay) * 0.5;
        star.style.transform = `translateY(${scrollPosition * speed}px)`;
    });

    // Parallax effect for hero elements
    heroIcon.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    heroTitle.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    heroSubtitle.style.transform = `translateY(${scrollPosition * 0.1}px)`;

    // Fade-in effect for content cards
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight * 0.75) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// Initialize fade-in for content cards
document.addEventListener('DOMContentLoaded', () => {
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
});