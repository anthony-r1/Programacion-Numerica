// Generar estrellas de fondo
const starsContainer = document.getElementById('stars');
if (starsContainer) {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Efectos al hacer scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const stars = document.querySelectorAll('.star');
    const heroIcon = document.querySelector('.hero-icon');
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');

    // Efecto parallax en estrellas
    stars.forEach(star => {
        const delay = parseFloat(star.style.animationDelay) || 1;
        const speed = delay * 0.5;
        star.style.transform = `translateY(${scrollPosition * speed}px)`;
    });

    // Efecto parallax en elementos del hero
    if (heroIcon) heroIcon.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    if (heroTitle) heroTitle.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    if (heroSubtitle) heroSubtitle.style.transform = `translateY(${scrollPosition * 0.1}px)`;

    // Fade-in para tarjetas (aunque solo hay una)
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

// Inicializar tarjetas con efecto de entrada
document.addEventListener('DOMContentLoaded', () => {
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
});