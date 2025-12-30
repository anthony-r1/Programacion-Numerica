"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./descripcion.module.css"; // Importamos los estilos del módulo

export default function DescripcionPage() {
  // Estado para guardar la posición del mouse
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculamos la posición relativa al centro de la ventana
      const x = (window.innerWidth - e.pageX * 2) / 100;
      const y = (window.innerHeight - e.pageY * 2) / 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* NAVBAR (Reutilizando clases globales de globals.css y home.css) */}
      <header className="pill-navbar">
        <div className="pill-container">
            <div className="brand-area">
                <i className="fab fa-linux brand-icon"></i>
                <span className="brand-name">ARPH</span>
            </div>
            <nav className="pill-nav-links">
                <Link href="/" className="nav-link">
                    <i className="fas fa-home"></i> Home
                </Link>
                <Link href="/descripcion" className="nav-link active-link">
                    <i className="fas fa-file-alt"></i> Descripcion
                </Link>
                <Link href="/unidades" className="nav-link">
                    <i className="fas fa-cubes"></i> Unidades
                </Link>
            </nav>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <section className={styles.descLayout}>
          
          {/* Columna Izquierda */}
          <div className={styles.descLeft}>
              <div className="badge-container">
                  <span className={styles.glassBadgeSmall}>2025 - CUARTO SEMESTRE</span>
              </div>

              <h1 className={styles.bigTitle}>
                  PROGRAMACIÓN <br />
                  <span className={styles.granateText}>NUMÉRICA</span>
              </h1>

              <p className={styles.descParagraph}>
                  La Programación Numérica combina fundamentos de programación con métodos numéricos para resolver problemas matemáticos complejos. Este curso introduce algoritmos computacionales, métodos de aproximación numérica y técnicas de optimización aplicadas a la ingeniería estadística e informática.
              </p>

              <div className={styles.profesorBox}>
                  <div className={styles.profesorLabel}>DOCENTE ENCARGADO</div>
                  <div className={styles.profesorName}>
                      <i className={`fas fa-chalkboard-teacher ${styles.profesorIcon}`}></i> ING. Fred Torres Cruz
                  </div>
              </div>
          </div>

          {/* Columna Derecha (Tarjetas Flotantes) */}
          <div className={styles.descRight}>
              
              {/* Card 1 */}
              <div 
                className={`${styles.infoCard} ${styles.card1}`}
                style={{ transform: `translateX(${mousePos.x * 0.5}px) translateY(${mousePos.y * 0.5}px)` }}
              >
                  <div className={styles.cardIcon}>
                      <i className="fas fa-bullseye"></i>
                  </div>
                  <div className={styles.cardContent}>
                      <h3>Objetivos</h3>
                      <ul>
                          <li>Algoritmos numéricos</li>
                          <li>Aproximación y error</li>
                          <li>Optimización</li>
                      </ul>
                  </div>
              </div>

              {/* Card 2 */}
              <div 
                className={`${styles.infoCard} ${styles.card2}`}
                style={{ transform: `translateX(${mousePos.x * 1}px) translateY(${mousePos.y * 1}px)` }}
              >
                  <div className={styles.cardIcon}>
                      <i className="fas fa-code"></i>
                  </div>
                  <div className={styles.cardContent}>
                      <h3>Stack Tecnológico</h3>
                      <div className={styles.miniIcons}>
                          <i className="fab fa-python" title="Python"></i>
                          <i className="fab fa-r-project" title="R"></i>
                          <i className="fas fa-subscript" title="Julia"></i>
                          <i className="fas fa-database" title="NumPy"></i>
                      </div>
                  </div>
              </div>

              {/* Card 3 */}
              <div 
                className={`${styles.infoCard} ${styles.card3}`}
                style={{ transform: `translateX(${mousePos.x * 1.5}px) translateY(${mousePos.y * 1.5}px)` }}
              >
                  <div className={styles.cardIcon}>
                      <i className="fas fa-graduation-cap"></i>
                  </div>
                  <div className={styles.cardContent}>
                      <h3>Info Académica</h3>
                      <p>Nivel Pregrado</p>
                      <span className={styles.highlightPill}>4 Créditos</span>
                  </div>
              </div>

          </div>
      </section>
    </>
  );
}