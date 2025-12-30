/* src/app/unidades/unidad-ii/resumen-non-rigid/page.tsx */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./resumen-non-rigid.module.css";

export default function ResumenNonRigidPage() {
  const [activeTab, setActiveTab] = useState("medico");

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
            <i className="fas fa-file-contract"></i>
          </div>
          <h1 className={styles.heroTitle}>Resúmenes Técnicos</h1>
          <p className={styles.heroSubtitle}>
            Algoritmos Basados en Gradientes: Medicina y Redes
          </p>
      </section>

      <div className={styles.container}>
        
        {/* PESTAÑAS DE NAVEGACIÓN */}
        <div className={styles.tabs}>
            <button 
                className={`${styles.tabButton} ${activeTab === 'medico' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('medico')}
            >
                <i className="fas fa-brain"></i> 1. Registro Médico (FD)
            </button>
            <button 
                className={`${styles.tabButton} ${activeTab === 'redes' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('redes')}
            >
                <i className="fas fa-network-wired"></i> 2. Algoritmos de Gradiente (BIS)
            </button>
        </div>

        {/* --- PESTAÑA 1: ARTÍCULO MÉDICO --- */}
        <div className={`${styles.tabContent} ${activeTab === 'medico' ? styles.activeContent : ''}`}>
            
            <section className={styles.contentSection}>
                <h2 style={{color: '#fff', textAlign: 'center', marginBottom: '30px', borderBottom: '1px solid #333', paddingBottom: '10px'}}>
                    Non-rigid medical image registration using image field in Demons algorithm
                </h2>

                {/* 1. INTRODUCCIÓN */}
                <div className={styles.contentCard}>
                    <h3 className={styles.sectionTitle}><i className="fas fa-exclamation-circle"></i> 1. Introducción y Problema</h3>
                    <div className={styles.text}>
                        <p>
                            El artículo aborda el registro no rígido de imágenes médicas, una tarea crítica que exige alta precisión para alinear estructuras anatómicas deformadas. 
                            El algoritmo Demons se toma como punto de partida debido a su eficiencia computacional. Sin embargo, su principal limitación radica en su modelo de fuerzas: 
                            se basa exclusivamente en el <strong>campo de gradiente</strong> (∇I).
                        </p>
                        <p style={{marginTop:'10px'}}>
                            El gradiente es un vector que apunta en dirección <strong>perpendicular</strong> al contorno de una estructura. Al depender únicamente de esta orientación, 
                            el algoritmo Demons ignora valiosa información <strong>tangencial</strong> (paralela al borde), lo que reduce su capacidad para realizar ajustes finos y precisos en los contornos durante la deformación.
                        </p>
                    </div>
                </div>

                {/* 2. SOLUCIÓN */}
                <div className={styles.contentCard}>
                    <h3 className={styles.sectionTitle}><i className="fas fa-lightbulb"></i> 2. Solución Propuesta: Field-Demons (FD)</h3>
                    <div className={styles.text}>
                        <p>
                            Los autores introducen el método <strong>Field-Demons (FD)</strong>, que enriquece el algoritmo original mediante la incorporación del <em>campo de imagen</em>, 
                            permitiendo aprovechar la información direccional completa.
                        </p>
                        <div className={styles.infoList} style={{marginTop: '20px'}}>
                            <ul>
                                <li>
                                    <strong>Concepto clave:</strong> La innovación central es el uso del <strong>campo de orientación</strong> (Ot), cuyo vector apunta en dirección <strong>tangencial</strong> al borde.
                                </li>
                                <li>
                                    <strong>Mecanismo híbrido:</strong> Combina estratégicamente:
                                    <ul style={{marginLeft: '20px', marginTop:'5px'}}>
                                        <li><strong>Magnitud:</strong> Usa la magnitud del gradiente de la imagen de referencia para cuantificar la fuerza del borde.</li>
                                        <li><strong>Dirección:</strong> Sustituye la dirección del gradiente por la dirección del campo de orientación para guiar la deformación.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3. RESULTADOS */}
                <div className={styles.contentCard}>
                    <h3 className={styles.sectionTitle}><i className="fas fa-chart-bar"></i> 3. Metodología y Resultados</h3>
                    <div className={styles.text}>
                        <p>
                            El método FD fue evaluado frente a cuatro algoritmos de referencia (incluyendo el Demons original y B-spline) utilizando dos conjuntos de datos clínicos: 
                            imágenes de resonancia magnética cerebral e imágenes de fondo de ojo.
                        </p>
                        <div style={{background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '10px', marginTop: '15px', borderLeft: '4px solid #D0002D'}}>
                            <strong>Precisión superior:</strong> En ambos conjuntos de datos, FD superó consistentemente a todos los métodos comparativos. 
                            En imágenes cerebrales, obtuvo el <strong>Error Cuadrático Medio (MSE)</strong> más bajo (133.51) y la <strong>Correlación</strong> más alta (0.990).
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* --- PESTAÑA 2: REDES Y GRADIENTES (BIS) --- */}
        <div className={`${styles.tabContent} ${activeTab === 'redes' ? styles.activeContent : ''}`}>
            
            <section className={styles.contentSection}>
                <h2 style={{color: '#fff', textAlign: 'center', marginBottom: '30px', borderBottom: '1px solid #333', paddingBottom: '10px'}}>
                    Programación de Información / Algoritmos Basados en Gradientes
                </h2>

                {/* CONTEXTO */}
                <div className={styles.contentCard}>
                    <h3 className={styles.sectionTitle}><i className="fas fa-satellite-dish"></i> Contexto y Definiciones</h3>
                    <div className={styles.text}>
                        <p>
                            El artículo aborda los algoritmos basados en gradientes en el ámbito de la computación espacial (redes inalámbricas, IoT, computación ubicua). 
                            En estos sistemas, miles de nodos interactúan sin control central para producir comportamientos globales coordinados.
                        </p>
                        <p style={{marginTop:'10px'}}>
                            <strong>Elemento Clave:</strong> Los gradientes son estructuras de datos distribuidos que permiten a cada nodo conocer su distancia estimada a una fuente. 
                            Son esenciales para difundir información (broadcasting), coordinar eventos, recolectar datos y formar estructuras espaciales.
                        </p>
                    </div>
                </div>

                {/* PROBLEMAS EN GRADIENTES EXISTENTES */}
                <div className={styles.contentCard}>
                    <h3 className={styles.sectionTitle}><i className="fas fa-exclamation-triangle"></i> Problemas en los Gradientes Existentes</h3>
                    <div className={styles.text}>
                        <p>Los autores destacan limitaciones en algoritmos clásicos (Classic Force, CRF, FLEX):</p>
                        <div className={styles.infoList}>
                            <ol>
                                <li><strong>Sesgo de velocidad:</strong> Tienden a subestimar distancias cuando la red es dinámica.</li>
                                <li><strong>Problema de &quot;Rising Value&quot;:</strong> Reacción lenta (reajuste tardío) cuando una fuente desaparece.</li>
                                <li><strong>Falta de suavidad:</strong> Presentan ruidos y oscilaciones que vuelven inestable la red.</li>
                            </ol>
                        </div>
                    </div>
                </div>

                {/* MAPA MENTAL (GRID 2x2) */}
                <div className={styles.contentCard}>
                    <h3 className={styles.sectionTitle}><i className="fas fa-project-diagram"></i> Resumen Gráfico: Algoritmo Propuesto (BIS)</h3>
                    <p style={{color: '#aaa', textAlign: 'center', marginBottom: '20px'}}>
                        Algoritmo Propuesto: Bounded Information Speed (BIS) Gradient
                    </p>

                    <div className={styles.mapGrid}>
                        
                        {/* 1. Problema */}
                        <div className={styles.mapCard}>
                            <div className={styles.mapHeader}>1. Problema</div>
                            <div className={styles.mapBody}>
                                <ul>
                                    <li><strong>Entorno dinámico:</strong> redes con movilidad, ruido y fallos.</li>
                                    <li><strong>Algoritmos clásicos:</strong> lentos, imprecisos e inestables.</li>
                                </ul>
                            </div>
                            {/* Flecha 1 -> 2 (A la derecha) */}
                            <div className={`${styles.arrowIcon} ${styles.arrowRight}`}>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        {/* 2. Enfoque */}
                        <div className={styles.mapCard}>
                            <div className={styles.mapHeader}>2. Enfoque BIS Gradient</div>
                            <div className={styles.mapBody}>
                                <ul>
                                    <li><strong>Bounded Information Speed:</strong> Controla la velocidad de propagación.</li>
                                    <li>Usa información temporal.</li>
                                    <li>Evita subestimación y lentitud.</li>
                                    <li>Garantiza velocidad mínima de actualización.</li>
                                </ul>
                            </div>
                            {/* Flecha 2 -> 4 (Hacia abajo) */}
                            <div className={`${styles.arrowIcon} ${styles.arrowDown}`}>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        {/* 4. Resultados (AHORA EN POSICIÓN 3) */}
                        <div className={styles.mapCard}>
                            <div className={styles.mapHeader}>4. Resultados Clave</div>
                            <div className={styles.mapBody}>
                                <ul>
                                    <li><strong>Comparación:</strong> BIS ofrece mejor precisión y velocidad.</li>
                                    <li><strong>Estabilidad:</strong> FLEX-damping + BIS logra exactitud sin oscilaciones.</li>
                                    <li><strong>Reacción:</strong> BIS reacciona rápido a cambios.</li>
                                    <li><strong>Recuperación:</strong> Se recupera en ~300 segundos.</li>
                                </ul>
                            </div>
                             {/* NUEVA Flecha 4 -> 3 (A la derecha) */}
                            <div className={`${styles.arrowIcon} ${styles.arrowRight}`}>
                                <i className="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        {/* 3. Aplicaciones (AHORA EN POSICIÓN 4) */}
                        <div className={styles.mapCard}>
                            <div className={styles.mapHeader}>3. Aplicaciones</div>
                            <div className={styles.mapBody}>
                                <ul>
                                    <li><strong>Uso general:</strong> Gradient/Broadcast.</li>
                                    <li><strong>Colección:</strong> Recolecta datos hacia fuentes.</li>
                                    <li><strong>Comunicación:</strong> Rutas espaciales estables.</li>
                                    <li><strong>Data Sensing:</strong> Monitoreo y detección.</li>
                                </ul>
                            </div>
                             {/* SIN FLECHA SALIENTE */}
                        </div>

                    </div>
                </div>

            </section>
        </div>

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