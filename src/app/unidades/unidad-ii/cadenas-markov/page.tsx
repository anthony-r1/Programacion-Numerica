"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./markov.module.css";

export default function CadenasMarkovPage() {

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
            <i className="fas fa-project-diagram"></i>
          </div>
          <h1 className={styles.heroTitle}>Cadenas de Markov</h1>
          <p className={styles.heroSubtitle}>
            Modelado estocástico aplicado al turismo en la región Puno
          </p>
      </section>

      <div className={styles.container}>
        
        {/* --- 1. DESCRIPCIÓN Y TEORÍA --- */}
        <section className={styles.theoryCard}>
            <h2 className={styles.sectionTitle}>
                <i className="fas fa-book-open"></i> ¿Qué son las Cadenas de Markov?
            </h2>
            <div className={styles.text}>
                <p>
                    Una Cadena de Markov es un modelo matemático que describe una secuencia de eventos posibles donde la probabilidad de cada evento depende únicamente del estado alcanzado en el evento anterior. Es decir, el futuro depende solo del presente, no del pasado.
                </p>
                <p style={{marginTop:'10px'}}>
                    Son ideales para predecir comportamientos a largo plazo, como flujos de turistas entre diferentes destinos (Puno, Uros, Taquile, etc.).
                </p>
            </div>

            {/* Ejemplo Visual Básico */}
            <div className={styles.exampleContainer}>
                <div className={styles.matrixBox}>
                    <span className={styles.matrixTitle}>Ejemplo: Matriz de Transición</span>
                    <div className={styles.matrixGrid}>
                        <div></div>
                        <div className={styles.cellHeader}>Puno</div>
                        <div className={styles.cellHeader}>Uros</div>
                        
                        <div className={styles.cellHeader}>Puno</div>
                        <div className={styles.cellData}>0.7</div>
                        <div className={styles.cellData}>0.3</div>
                        
                        <div className={styles.cellHeader}>Uros</div>
                        <div className={styles.cellData}>0.4</div>
                        <div className={styles.cellData}>0.6</div>
                    </div>
                </div>
                <div style={{color:'#ccc', maxWidth:'400px', fontStyle:'italic'}}>
                    <p>
                        <strong>Interpretación:</strong> Si un turista está en Puno hoy, hay un 30% de probabilidad de que vaya a Uros mañana y un 70% de que se quede en Puno.
                    </p>
                </div>
            </div>
        </section>

        {/* --- 2. PRÁCTICA DE EJERCICIOS --- */}
        <section className={styles.practiceSection}>
            <h2 className={styles.sectionTitle} style={{justifyContent:'center', borderBottom:'none', marginBottom:'3rem'}}>
                <i className="fas fa-tasks"></i> PRACTICA: Análisis del Turismo en Puno
            </h2>

            <div className={styles.cardsGrid}>
                
                {/* EJERCICIO 1 */}
                <div className={styles.exerciseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}>
                            <div className={styles.cardIcon}>1</div>
                            Inversión en Isla Taquile
                        </div>
                    </div>
                    <div className={styles.cardBody}>
                        <span className={styles.infoLabel}>Contexto:</span>
                        <p className={styles.infoText}>Se estudió el movimiento de turistas entre Puno Ciudad, Islas Uros, Isla Taquile e Isla Amantaní.</p>
                        
                        <span className={styles.infoLabel}>Impacto:</span>
                        <p className={styles.infoText}>La mejora en infraestructura aumentó la capacidad de Taquile para atraer y retener visitantes.</p>
                        
                        <span className={styles.infoLabel}>Resultado:</span>
                        <p className={styles.infoText}>Taquile logró igualar casi por completo el volumen de visitas de Puno Ciudad, creando un sistema con dos centros principales.</p>
                    </div>
                    <div className={styles.cardFooter}>
                        <Link href="/unidades/unidad-ii/cadenas-markov/ejercicio-1" className={styles.actionButton}>
                            Ir al Ejercicio 1 <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                {/* EJERCICIO 2 */}
                <div className={styles.exerciseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}>
                            <div className={styles.cardIcon}>2</div>
                            Incorporación Isla Anapia
                        </div>
                    </div>
                    <div className={styles.cardBody}>
                        <span className={styles.infoLabel}>Nuevo Destino:</span>
                        <p className={styles.infoText}>Se evaluó la entrada de la Isla Anapia al circuito turístico actual.</p>
                        
                        <span className={styles.infoLabel}>Efecto:</span>
                        <p className={styles.infoText}>Anapia capta exitosamente mercado, pero reduce principalmente las visitas en la Isla Amantaní.</p>
                        
                        <span className={styles.infoLabel}>Recomendación:</span>
                        <p className={styles.infoText}>Vender boletos integrados que incluyan ambos destinos para evitar competencia directa.</p>
                    </div>
                    <div className={styles.cardFooter}>
                        <Link href="/unidades/unidad-ii/cadenas-markov/ejercicio-2" className={styles.actionButton}>
                            Ir al Ejercicio 2 <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                {/* EJERCICIO 3 */}
                <div className={styles.exerciseCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}>
                            <div className={styles.cardIcon}>3</div>
                            Temporadas Alta y Baja
                        </div>
                    </div>
                    <div className={styles.cardBody}>
                        <span className={styles.infoLabel}>Diferencias:</span>
                        <p className={styles.infoText}>Análisis del flujo turístico entre época de buen clima y temporada de lluvias.</p>
                        
                        <span className={styles.infoLabel}>Comportamiento:</span>
                        <p className={styles.infoText}>En temporada baja, la mayoría prefiere quedarse en Puno Ciudad por seguridad y clima.</p>
                        
                        <span className={styles.infoLabel}>Gestión:</span>
                        <p className={styles.infoText}>Recomendación a hoteles de ajustar personal y cerrar áreas no utilizadas en baja demanda.</p>
                    </div>
                    <div className={styles.cardFooter}>
                        <Link href="/unidades/unidad-ii/cadenas-markov/ejercicio-3" className={styles.actionButton}>
                            Ir al Ejercicio 3 <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
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