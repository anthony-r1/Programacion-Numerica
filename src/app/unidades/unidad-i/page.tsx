"use client";

import Link from "next/link";
import styles from "./unidad1.module.css";
import { MouseEvent } from "react";

export default function Unidad1Page() {

  // Función para manejar el efecto de inclinación 3D en cada tarjeta individualmente
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculamos rotación
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    // Aplicamos transform
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    // Pausamos la animación de flotación CSS
    card.style.animationPlayState = "paused";
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    // Reseteamos el estilo
    card.style.transform = "";
    // Reanudamos la animación
    card.style.animationPlayState = "running";
  };

  return (
    <>
      <header className={styles.subNavbar}>
          <div className={styles.navContainer}>
              <Link href="/unidades" className={styles.backBtn}>
                  <i className="fas fa-arrow-left"></i> Volver a Unidades
              </Link>
              <h2 className={styles.navTitle}>UNIDAD I</h2>
          </div>
          <div className={styles.separatorLine}></div>
      </header>

      <div className={styles.mainWrapper}>
          
          <section className={styles.introSection}>
              <h1 className={styles.pageTitle}>Unidad 1</h1>
              <p className={styles.pageSubtitle}>Temas y trabajos de la primera unidad</p>

              <div className={styles.descBox}>
                  <div className={styles.boxHeader}>
                      <i className={`fas fa-book-open ${styles.iconAccent}`}></i>
                      <h3>Descripción de la Unidad</h3>
                  </div>
                  <p>
                      En esta unidad se abordan los fundamentos básicos de la Programación Numérica, introduciendo los métodos iniciales y la importancia de reconocer y formular funciones matemáticas en un contexto computacional. Se estudian conceptos de errores numéricos, aritmética de punto flotante y métodos básicos de resolución de ecuaciones.
                  </p>
              </div>
          </section>

          <section className="activities-section">
              <div className={styles.sectionHeader}>
                  <i className={`fas fa-clipboard-list ${styles.iconAccent}`}></i>
                  <h2>Lista de Actividades</h2>
              </div>

              <div className={styles.activitiesGrid}>
                  
                  {/* Tarjeta 1 */}
                  <div 
                    className={styles.activityCard} 
                    onMouseMove={handleMouseMove} 
                    onMouseLeave={handleMouseLeave}
                  >
                      <div className={styles.cardIconCircle}>
                          <i className="fas fa-search"></i>
                      </div>
                      <div className={styles.cardBody}>
                          <h3>Reconocimiento de Funciones</h3>
                          <p>Identificación y clasificación de diferentes tipos de funciones matemáticas, análisis de sus propiedades y comportamiento en contextos numéricos.</p>
                      </div>
                      <div className={styles.cardFooter}>
                          <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 10/03/2025</span>
                          <Link href="/unidades/unidad-i/reconocimiento" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
                      </div>
                  </div>

                  {/* Tarjeta 2 */}
                  <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                      <div className={styles.cardIconCircle}>
                          <i className="fas fa-chart-bar"></i>
                      </div>
                      <div className={styles.cardBody}>
                          <h3>Graficar Funciones Lineales</h3>
                          <p>Representación gráfica de funciones lineales, análisis de pendientes, interceptos y aplicación de métodos computacionales para su visualización.</p>
                      </div>
                      <div className={styles.cardFooter}>
                          <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 17/03/2025</span>
                          <Link href="/unidades/unidad-i/graficador" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
                      </div>
                  </div>

                  {/* Tarjeta 3 */}
                  <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                      <div className={styles.cardIconCircle}>
                          <i className="fas fa-link"></i>
                      </div>
                      <div className={styles.cardBody}>
                          <h3>Restricción de Funciones Lineales</h3>
                          <p>Resolución de sistemas de ecuaciones lineales, análisis de restricciones y aplicación de métodos numéricos para encontrar soluciones óptimas.</p>
                      </div>
                      <div className={styles.cardFooter}>
                          <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 24/03/2025</span>
                          <Link href="/unidades/unidad-i/restricciones" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
                      </div>
                  </div>

                  {/* Tarjeta 4 */}
                  <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                      <div className={styles.cardIconCircle}>
                          <i className="fas fa-calculator"></i>
                      </div>
                      <div className={styles.cardBody}>
                          <h3>Método Numéricos</h3>
                          <p>Implementación del método de la falsa posición para encontrar raíces de ecuaciones no lineales con análisis de convergencia y precisión.</p>
                      </div>
                      <div className={styles.cardFooter}>
                          <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 31/03/2025</span>
                          <Link href="/unidades/unidad-i/metodos-numericos" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
                      </div>
                  </div>

                  {/* Tarjeta 5: Presentación de Clase (NUEVA) */}
                  <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                      <div className={styles.cardIconCircle}>
                          <i className="fas fa-chalkboard-teacher"></i>
                      </div>
                      <div className={styles.cardBody}>
                          <h3>Presentación de Clase</h3>
                          <p>Exposición grupal sobre métodos iterativos abiertos. Se profundizó en el <strong>Método de la Secante</strong>, analizando su fórmula de recurrencia, ventajas al evitar el cálculo de derivadas y su velocidad de convergencia.</p>
                      </div>
                      <div className={styles.cardFooter}>
                          <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 07/04/2025</span>
                          <Link href="/unidades/unidad-i/presentacion-secante" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
                      </div>
                  </div>
 
              </div>
          </section>

          <footer className={styles.simpleFooter}>
              <p>&copy; 2025 Portafolio Programación Numérica - Anthony Rusbel</p>
          </footer>
      </div>
    </>
  );
}