"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./analisis-articulo.module.css";

export default function AnalisisArticuloPage() {

  // Estrellas
  useEffect(() => {
    const starsContainer = document.getElementById("stars-container");
    if (starsContainer) {
      starsContainer.innerHTML = "";
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = styles.star;
        star.style.width = "2px";
        star.style.height = "2px";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animation = "twinkle 2s infinite";
        star.style.animationDelay = Math.random() * 2 + "s";
        starsContainer.appendChild(star);
      }
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.nightSky}></div>
      <div id="stars-container" className={styles.stars}></div>
      
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
            <Link href="/unidades/unidad-ii" className={styles.backButton}>
              <i className="fas fa-arrow-left"></i> Volver a Unidad 2
            </Link>
            
            <div className={styles.studentInfo}>
              <span className={styles.infoBadge}>
                <i className="fas fa-user-graduate"></i> Anthony Rusbel Puma Huanca
              </span>
              <span className={styles.infoBadge}>
                <i className="fas fa-id-card"></i> 240132
              </span>
            </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
          <div className={styles.heroIcon}>
            <i className="fas fa-microscope"></i>
          </div>
          <h1 className={styles.heroTitle}>Comparación: Pseudoinversa vs Descenso de Gradiente</h1>
          <p className={styles.heroSubtitle}>
            Análisis de rendimiento para resolver problemas de Regresión Lineal
          </p>
      </section>

      <div className={styles.container}>
        
        {/* INTRODUCCIÓN */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.1s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-info-circle"></i> Introducción
            </h2>
            <div className={styles.text}>
              <p>
                El artículo analiza y compara el rendimiento de dos enfoques fundamentales para resolver problemas de regresión lineal:
              </p>
              <div className={styles.infoList}>
                <ul>
                    <li><strong>La pseudoinversa de Moore-Penrose:</strong> que ofrece una solución directa y exacta.</li>
                    <li><strong>El descenso de gradiente:</strong> un método iterativo y aproximado.</li>
                </ul>
              </div>
              <p style={{marginTop:'15px'}}>
                El objetivo es determinar bajo qué condiciones cada método resulta más eficiente y preciso.
              </p>
            </div>
          </div>
        </section>

        {/* FUNDAMENTOS */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.2s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-layer-group"></i> Fundamentos
            </h2>
            <div className={styles.infoList}>
                <ul>
                    <li>
                        <strong>Pseudoinversa:</strong> Calcula los coeficientes óptimos de una sola vez, usando operaciones matriciales (SVD). Aunque es exacta, puede ser costosa e inestable en matrices grandes o mal condicionadas.
                    </li>
                    <li>
                        <strong>Descenso de gradiente:</strong> Ajusta los parámetros iterativamente siguiendo la dirección del mínimo error. Es más escalable, pero sensible al <em>learning rate</em>, número de iteraciones y calidad del acondicionamiento de los datos.
                    </li>
                </ul>
            </div>
          </div>
        </section>

        {/* METODOLOGÍA */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.3s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-vial"></i> Metodología
            </h2>
            <div className={styles.text}>
                <p>Se realizaron experimentos con:</p>
            </div>
            <div className={styles.infoList}>
                <ul>
                    <li><strong>Datos sintéticos:</strong> controlando tamaño, número de variables y condición numérica.</li>
                    <li><strong>Datos reales:</strong> usando los conjuntos California Housing y UCI Diabetes.</li>
                </ul>
            </div>
          </div>
        </section>

        {/* TABLA DE RESULTADOS */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.4s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-table"></i> Resultados del Análisis
            </h2>
            <div className={styles.text}>
              <p>Los métodos fueron evaluados según tiempo de ejecución, Error cuadrático medio (MSE) y número de iteraciones (500 para GD).</p>
            </div>
            
            <div className={styles.tableWrapper}>
                <table className={styles.dataTable}>
                    <thead>
                        <tr>
                            <th style={{width:'20%'}}>Factor</th>
                            <th>Resultado Clave</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Tiempo</strong></td>
                            <td>La pseudoinversa fue mucho más rápida en conjuntos pequeños y medianos (hasta 5000 muestras y 50 variables). El descenso de gradiente tuvo mayor tiempo de ejecución.</td>
                        </tr>
                        <tr>
                            <td><strong>MSE</strong></td>
                            <td>La pseudoinversa tuvo errores altos en datos mal condicionados. En datos bien condicionados, ambos métodos alcanzaron resultados similares y exactos.</td>
                        </tr>
                        <tr>
                            <td><strong>Estabilidad</strong></td>
                            <td>El GD requiere ajuste del <em>learning rate</em> para evitar divergencia (alcanzado en 60.960 iteraciones para ser exacto).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </section>

        {/* CONCLUSIONES */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.5s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-check-circle"></i> Conclusiones
            </h2>
            <div className={styles.infoList}>
                <ul>
                    <li>Para problemas de tamaño moderado, Moore-Penrose es la opción más eficiente.</li>
                    <li>Para datasets masivos, los métodos iterativos (como mini-batch GD) son más escalables.</li>
                    <li>El condicionamiento de los datos es el factor decisivo: el descenso de gradiente se degrada cuando la matriz está mal condicionada.</li>
                    <li>Se propone usar enfoques híbridos, combinando la pseudoinversa para una solución inicial y el refinamiento progresivo para grandes volúmenes de datos.</li>
                </ul>
            </div>
          </div>
        </section>

        {/* ANALOGÍA VIDA COTIDIANA */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.6s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-utensils"></i> Comparación: El Chef y la Receta
            </h2>
            <div className={styles.text}>
                <p>
                    Imagina que eres un chef y necesitas preparar una receta que debe salir perfecta (la regresión lineal representa encontrar la receta ideal que minimiza los errores entre lo esperado y lo real).
                </p>
            </div>

            <div className={styles.analogyGrid}>
                {/* Pseudoinversa */}
                <div className={styles.analogyCard}>
                    <div className={styles.analogyTitle}>
                        <i className="fas fa-file-prescription"></i> Pseudoinversa (Chef con Receta Exacta)
                    </div>
                    <div className={styles.analogyText}>
                        <p>Este método es como tener una receta precisa y completa desde el principio. No tienes que probar ni ajustar; sigues las cantidades exactas y el plato sale perfecto a la primera.</p>
                        <br/>
                        <p><strong>Desventajas:</strong> Puede ser costoso si la cocina es grande o los ingredientes están mal balanceados. El cálculo puede ser inestable si los ingredientes saben igual.</p>
                        <br/>
                        <p><strong>Rendimiento:</strong> Muy rápido y exacto para cantidades pequeñas, pero pesado si la receta es enorme.</p>
                    </div>
                </div>

                {/* Gradiente */}
                <div className={styles.analogyCard}>
                    <div className={styles.analogyTitle}>
                        <i className="fas fa-pepper-hot"></i> Descenso de Gradiente (Chef que Prueba)
                    </div>
                    <div className={styles.analogyText}>
                        <p>Aquí el chef no tiene la receta exacta. Empieza con una idea y va probando poco a poco: más sal, menos picante. En cada intento mejora el sabor.</p>
                        <br/>
                        <p><strong>Riesgo:</strong> Si se equivoca en el tamaño del paso, puede avanzar muy lentamente o arruinar el plato.</p>
                        <br/>
                        <p><strong>Rendimiento:</strong> En reuniones gigantes, este método es más práctico porque no necesita calcularlo todo de golpe.</p>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* TABLA COMPARATIVA FINAL */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.7s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-balance-scale"></i> Tabla Comparativa Final
            </h2>
            
            <div className={styles.tableWrapper}>
                <table className={styles.dataTable}>
                    <thead>
                        <tr>
                            <th>Característica</th>
                            <th>Pseudoinversa</th>
                            <th>Descenso de Gradiente</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Ideal para</strong></td>
                            <td>Problemas pequeños y medianos.</td>
                            <td>Conjuntos de datos grandes.</td>
                        </tr>
                        <tr>
                            <td><strong>Sensibilidad</strong></td>
                            <td>Sensible a datos mal condicionados.</td>
                            <td>Sensible al ajuste de pesos (<em>learning rate</em>).</td>
                        </tr>
                        <tr>
                            <td><strong>Analogía</strong></td>
                            <td>Calculadora científica (resultado directo).</td>
                            <td>Ajustar la sazón probando (iterativo).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </section>

      </div>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2025 Programación Numérica FINESI - Universidad Nacional del Altiplano</p>
          <p>Docente: Fred Torres Cruz</p>
        </div>
      </footer>
    </div>
  );
}