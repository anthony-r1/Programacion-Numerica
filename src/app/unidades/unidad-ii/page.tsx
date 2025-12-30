"use client";

import Link from "next/link";
import styles from "./unidad2.module.css"; // Asegúrate de que este archivo exista
import { MouseEvent } from "react";

export default function Unidad2Page() {

  // Lógica de interacción 3D (Tilt Effect)
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "";
  };

  return (
    <div className={styles.mainWrapper}>
        
      {/* NAVBAR */}
      <header className={styles.subNavbar}>
          <Link href="/unidades" className={styles.backBtn}>
              <i className="fas fa-arrow-left"></i> Volver a Unidades
          </Link>
          <h2 className={styles.navTitle}>UNIDAD II</h2>
      </header>
      <div className={styles.separatorLine}></div>

      {/* INTRO */}
      <section className={styles.introSection}>
          <h1 className={styles.pageTitle}>Unidad 2</h1>
          <p className={styles.pageSubtitle}>Temas y trabajos de la segunda unidad</p>

          <div className={styles.descBox}>
              <div className={styles.boxHeader}>
                  <i className={`fas fa-book-open ${styles.iconAccent}`}></i>
                  <h3>Descripción de la Unidad</h3>
              </div>
              <p>
                  En esta unidad se profundizará en el análisis y resolución de problemas mediante métodos numéricos y herramientas computacionales. Se aplicarán técnicas de aproximación, optimización y análisis de errores para resolver situaciones reales, fortaleciendo el pensamiento lógico y la capacidad para implementar soluciones eficientes en programación.
              </p>
          </div>
      </section>

      {/* LISTA DE ACTIVIDADES */}
      <section className={styles.activitiesGrid}>
          
          {/* T1: INDICE H */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-id-card"></i></div>
              <div className={styles.cardBody}>
                  <h3>Índice H</h3>
                  <p>Investigación sobre los ingenieros de mi facultad en Scopus para analizar cuántos están registrados en RENACYT y su impacto académico.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 05/05/2025</span>
                  <Link href="/unidades/unidad-ii/indice-h" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T2: METODO DE BISECCION */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-columns"></i></div>
              <div className={styles.cardBody}>
                  <h3>Método de Bisección</h3>
                  <p>Método iterativo de hallazgo de raíces que divide repetidamente intervalos y selecciona subintervalos donde ocurre un cambio de signo.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 12/05/2025</span>
                  <Link href="/unidades/unidad-ii/metodo-biseccion" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T3: METODO DE LA SECANTE */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-slash"></i></div>
              <div className={styles.cardBody}>
                  <h3>Método de la Secante</h3>
                  <p>Algoritmo de búsqueda de raíces que utiliza una sucesión de raíces de líneas secantes para aproximar mejor la raíz de una función.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 19/05/2025</span>
                  <Link href="/unidades/unidad-ii/metodo-secante" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T4: METODO DE PUNTO FIJO */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-sync"></i></div>
              <div className={styles.cardBody}>
                  <h3>Método de Punto Fijo</h3>
                  <p>Técnica para encontrar raíces basada en la transformación de la ecuación f(x)=0 a la forma x=g(x) y la iteración sucesiva.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 26/05/2025</span>
                  <Link href="/unidades/unidad-ii/punto-fijo" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T5: METODO REGULA FALSI */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-balance-scale"></i></div>
              <div className={styles.cardBody}>
                  <h3>Método de Regula Falsi</h3>
                  <p>Conocido como el método de la falsa posición, combina la robustez de la bisección con la interpolación lineal para una convergencia más rápida.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 02/06/2025</span>
                  <Link href="/unidades/unidad-ii/regula-falsi" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T6: GRADIENTE DE UNA FUNCION */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-level-up-alt"></i></div>
              <div className={styles.cardBody}>
                  <h3>Gradiente de una función</h3>
                  <p>Cálculo y análisis del vector gradiente, que indica la dirección de máximo crecimiento de una función escalar multivariable.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 09/06/2025</span>
                  <Link href="/unidades/unidad-ii/gradiente-funcion" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T7: ANALISIS DEL ARTICULO */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-microscope"></i></div>
              <div className={styles.cardBody}>
                  <h3>Análisis del artículo</h3>
                  <p>Revisión crítica, desglose metodológico y evaluación de los resultados presentados en un artículo científico de ingeniería.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 16/06/2025</span>
                  <Link href="/unidades/unidad-ii/analisis-articulo" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T8: JUEGO DE SUPERVIVENCIA */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-gamepad"></i></div>
              <div className={styles.cardBody}>
                  <h3>Simulación: Caramelos</h3>
                  <p>Modelado y simulación computacional de un problema probabilístico o de teoría de juegos aplicado a un escenario lúdico de supervivencia.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 23/06/2025</span>
                  <Link href="/unidades/unidad-ii/juego-supervivencia" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T9: RESUMEN ARTICULO NON-RIGID */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-file-medical-alt"></i></div>
              <div className={styles.cardBody}>
                  <h3>Non-Rigid Medical Image Registration</h3>
                  <p>Resumen del artículo sobre el uso del campo de imagen en el algoritmo de demonios para registro de imágenes médicas.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 30/06/2025</span>
                  <Link href="/unidades/unidad-ii/resumen-non-rigid" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T10: DIFERENCIACION NUMERICA */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-calculator"></i></div>
              <div className={styles.cardBody}>
                  <h3>Diferenciación Numérica</h3>
                  <p>Técnicas computacionales para estimar la derivada de una función matemática utilizando valores de la función en puntos discretos.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 07/07/2025</span>
                  <Link href="/unidades/unidad-ii/diferenciacion-numerica" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T11: INTERPOLACION */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-draw-polygon"></i></div>
              <div className={styles.cardBody}>
                  <h3>Interpolación</h3>
                  <p>Método numérico para construir nuevos puntos de datos dentro del rango de un conjunto discreto de puntos conocidos (Lagrange, Splines).</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 14/07/2025</span>
                  <Link href="/unidades/unidad-ii/interpolacion" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T12: OPTIMIZACION RENDIMIENTO */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-tachometer-alt"></i></div>
              <div className={styles.cardBody}>
                  <h3>Optimización Rendimiento</h3>
                  <p>Análisis de performance web usando Lighthouse y pruebas de carga/estrés con Apache JMeter para optimización de sistemas.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 21/07/2025</span>
                  <Link href="/unidades/unidad-ii/optimizacion-rendimiento" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T13: POSTER CIENTIFICO */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-image"></i></div>
              <div className={styles.cardBody}>
                  <h3>Póster Científico</h3>
                  <p>Diseño y síntesis visual de los resultados de investigación, estructurando metodología y conclusiones en formato académico.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 28/07/2025</span>
                  <Link href="/unidades/unidad-ii/poster-cientifico" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T14: EIGEN VALUES */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-vector-square"></i></div>
              <div className={styles.cardBody}>
                  <h3>Eigen Values & Vectors</h3>
                  <p>Resolución de ejercicios sobre valores y vectores propios, aplicados a transformaciones lineales y estabilidad de sistemas.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 04/08/2025</span>
                  <Link href="/unidades/unidad-ii/eigen-values-vectors" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T15: CADENAS DE MARKOV */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-project-diagram"></i></div>
              <div className={styles.cardBody}>
                  <h3>Cadenas de Markov</h3>
                  <p>Modelado estocástico aplicado al análisis del flujo turístico en Puno, prediciendo probabilidades de transición entre destinos.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 11/08/2025</span>
                  <Link href="/unidades/unidad-ii/cadenas-markov" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

          {/* T16: BOOK PROGRAMACION */}
          <div className={styles.activityCard} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <div className={styles.cardIconCircle}><i className="fas fa-book"></i></div>
              <div className={styles.cardBody}>
                  <h3>Book: Programación Numérica</h3>
                  <p>Compendio final estructurado que integra todos los algoritmos, códigos y análisis desarrollados durante el curso.</p>
              </div>
              <div className={styles.cardFooter}>
                  <span className={styles.dateTag}><i className="far fa-calendar-alt"></i> 18/08/2025</span>
                  <Link href="/unidades/unidad-ii/book-programacion" className={styles.detailsBtn}>Ver Detalles <i className="fas fa-arrow-right"></i></Link>
              </div>
          </div>

      </section>

      <footer className={styles.simpleFooter}>
          <p>© 2025 Portafolio Programación Numérica - Anthony Rusbel Puma Huanca</p>
      </footer>
    </div>
  );
}