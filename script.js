// Genera estrellas y columnas binarias para los efectos de fondo.
// No requiere librerías externas.

(function () {
  function createStars(containerId, count = 150) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + 'vw';
      star.style.top = Math.random() * 100 + 'vh';
      star.style.animationDelay = (Math.random() * 2).toFixed(2) + 's';
      frag.appendChild(star);
    }
    container.appendChild(frag);
  }

  function createBinaryRain(containerId, columns = 20) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < columns; i++) {
      const col = document.createElement('div');
      col.className = 'binary-column';
      const left = Math.random() * 100;
      col.style.left = left + 'vw';
      const duration = 6 + Math.random() * 8; // 6s a 14s
      col.style.animationDuration = duration + 's';
      col.style.animationDelay = (Math.random() * 5).toFixed(2) + 's';
      // Cadena binaria aleatoria
      const size = 30 + Math.floor(Math.random() * 40);
      col.textContent = Array.from({ length: size }, () => (Math.random() > 0.5 ? '1' : '0')).join('\n');
      frag.appendChild(col);
    }
    container.appendChild(frag);
  }

  // Llamadas al cargar
  window.addEventListener('DOMContentLoaded', function () {
    createStars('stars', 160);
    createBinaryRain('binary-rain', 28);
  });
})();
