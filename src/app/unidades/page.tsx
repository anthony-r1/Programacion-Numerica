"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./unidades.module.css";

export default function UnidadesPage() {
  // Referencias a los elementos que queremos animar para no buscar en el DOM constantemente
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Obtenemos coordenadas normalizadas (centro de la pantalla es 0,0)
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;

      // Función auxiliar para aplicar transformación
      const applyTransform = (element: HTMLDivElement | null, speed: number) => {
        if (element) {
          // rotateX gira sobre el eje horizontal (mirar arriba/abajo) -> depende de Y
          // rotateY gira sobre el eje vertical (mirar izquierda/derecha) -> depende de X
          element.style.transform = `translateY(-5px) rotateX(${y * speed * 0.5}deg) rotateY(${-x * speed * 0.5}deg)`;
        }
      };

      // Aplicar a las tarjetas con diferente velocidad
      applyTransform(card1Ref.current, 1);     // Velocidad base
      applyTransform(card2Ref.current, 1.2);   // Un poco más rápido

      // Mover el cohete
      if (rocketRef.current) {
        rocketRef.current.style.transform = `translate(${x * 0.8}px, ${y * 0.8}px)`;
      }
    };

    const handleMouseLeave = () => {
      // Resetear al salir
      if (card1Ref.current) card1Ref.current.style.transform = "translateY(0) rotateX(0) rotateY(0)";
      if (card2Ref.current) card2Ref.current.style.transform = "translateY(0) rotateX(0) rotateY(0)";
      if (rocketRef.current) rocketRef.current.style.transform = "translate(0,0)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
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
                <Link href="/descripcion" className="nav-link">
                    <i className="fas fa-file-alt"></i> Descripcion
                </Link>
                <Link href="/unidades" className="nav-link active-link">
                    <i className="fas fa-cubes"></i> Unidades
                </Link>
            </nav>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <section className={styles.unitsLayout}>
          
          <div className={styles.unitsHeader}>
              <i ref={rocketRef} className={`fas fa-rocket ${styles.rocketIcon}`}></i>
              <h1 className={styles.bigTitle}>Unidades</h1>
              <div className={styles.underlineAccent}></div>
          </div>

          <div className={styles.cardsContainer}>
              
              {/* Card 1: Unidad I */}
              <div ref={card1Ref} className={`${styles.unitCard} ${styles.card1}`}>
                  <div className={styles.cardTop}>
                      <div className={`${styles.iconCircle} ${styles.colorBlue}`}>
                          <i className="fas fa-code"></i>
                      </div>
                      <div className={styles.unitInfo}>
                          <h2>Unidad 1</h2>
                          <div className={styles.dateBadge}>
                              <i className="far fa-calendar-alt"></i> Fin de Unidad - 20/10/2025
                          </div>
                      </div>
                  </div>
                  <p className={styles.unitDesc}>
                      Introducción a los primeros temas, algoritmos fundamentales y trabajos encargados de la primera fase del curso.
                  </p>
                  <Link href="/unidades/unidad-i" className={styles.actionBtn}>
                      Ir a la unidad <i className="fas fa-folder-open"></i>
                  </Link>
              </div>

              {/* Card 2: Unidad II */}
              <div ref={card2Ref} className={`${styles.unitCard} ${styles.card2}`}>
                  <div className={styles.cardTop}>
                      <div className={`${styles.iconCircle} ${styles.colorGold}`}>
                          <i className="fas fa-project-diagram"></i>
                      </div>
                      <div className={styles.unitInfo}>
                          <h2>Unidad 2</h2>
                          <div className={styles.dateBadge}>
                              <i className="far fa-calendar-alt"></i> Fin de Unidad - 20/12/2025
                          </div>
                      </div>
                  </div>
                  <p className={styles.unitDesc}>
                      Incluye actividades avanzadas, ejercicios de optimización y proyectos finales desarrollados en la segunda unidad.
                  </p>
                  <Link href="/unidades/unidad-ii" className={styles.actionBtn}>
                      Ir a la unidad <i className="fas fa-folder-open"></i>
                  </Link>
              </div>

          </div>
      </section>
    </>
  );
}