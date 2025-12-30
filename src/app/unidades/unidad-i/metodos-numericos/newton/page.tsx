"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import styles from "../metodos-detalle.module.css";

export default function NewtonPage() {
  
  // --- EFECTO TILT 3D ---
  const handleTilt = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;
    
    const rotateX = ((y - rect.height/2) / rect.height) * -2; 
    const rotateY = ((x - rect.width/2) / rect.width) * 2;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };
  
  const resetTilt = (e: MouseEvent<HTMLDivElement>) => { 
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)"; 
  };

  return (
    <div className={styles.container}>
      <div className={styles.starsBg}></div>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/unidades/unidad-i/metodos-numericos" className={styles.backBtn}>
              <i className="fas fa-arrow-left"></i> Volver
          </Link>
          <div className={styles.studentInfo}>
            <div className={styles.badge}>
                <i className="far fa-calendar-alt"></i> 2 de octubre de 2025
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroIcon}>
            <i className="fas fa-chart-line"></i>
        </div>
        <h1 className={styles.title}>Método de Newton-Raphson</h1>
        <p className={styles.subtitle}>Método Iterativo de Convergencia Cuadrática</p>
        <div className={styles.accentLine}></div>
      </section>

      <div className={styles.mainWrapper}>
        
        {/* SECCIÓN 1: IDEA GENERAL */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="far fa-lightbulb"></i></span> 
                Idea General
            </div>
            <p className={styles.text}>
                El método de <strong>Newton-Raphson</strong> es un procedimiento numérico para resolver ecuaciones no lineales de la forma 
                <strong> f(x) = 0</strong>.
            </p>
            <p className={styles.text}>
                Se basa en la idea geométrica de aproximar la raíz usando la <strong>recta tangente</strong> a la curva en un punto cercano.
            </p>
            {/* FÓRMULA CORREGIDA: Texto simple en lugar de LaTeX */}
            <div className={styles.formulaBox}>
                xₙ₊₁ = xₙ - f(xₙ) / f&apos;(xₙ)
            </div>
        </section>

        {/* SECCIÓN 2: DERIVACIÓN */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-calculator"></i></span> 
                Derivación del Método
            </div>
            <div className={styles.stepsList}>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>1</div>
                    <div style={{width: '100%'}}>
                        <strong>Expansión de Taylor</strong> alrededor de xₙ:
                        {/* FÓRMULA CORREGIDA */}
                        <div className={styles.formulaBox} style={{margin:'10px 0', padding:'10px'}}>
                            f(x) ≈ f(xₙ) + f&apos;(xₙ)(x − xₙ)
                        </div>
                    </div>
                </div>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>2</div>
                    <div><strong>Imponer f(x) = 0</strong> (buscamos la raíz).</div>
                </div>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>3</div>
                    <div style={{width: '100%'}}>
                        <strong>Despejar x</strong> para obtener la siguiente aproximación:
                        {/* FÓRMULA CORREGIDA */}
                        <div className={styles.formulaBox} style={{margin:'10px 0', padding:'10px'}}>
                            xₙ₊₁ = xₙ - f(xₙ) / f&apos;(xₙ)
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECCIÓN 3: CONVERGENCIA */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-bolt"></i></span> 
                Convergencia
            </div>
            <p className={styles.text}>
                Si se cumplen las condiciones (f(r)=0, f&apos;(r)≠0, f continua), entonces el error satisface:
            </p>
            {/* FÓRMULA CORREGIDA */}
            <div className={styles.formulaBox}>
                eₙ₊₁ ≈ C · eₙ²
            </div>
            <p className={styles.text}>
                Esto implica <strong>convergencia cuadrática</strong>: el número de dígitos correctos se duplica en cada iteración.
            </p>
        </section>

        {/* SECCIÓN 4: VENTAJAS Y DESVENTAJAS */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-balance-scale"></i></span> 
                Ventajas y Desventajas
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
                <div className={styles.callout}>
                    <h3 style={{color: '#2ecc71'}}><i className="fas fa-check-circle"></i> Ventajas</h3>
                    <ul style={{paddingLeft: '20px', color: '#ccc', lineHeight: '1.6'}}>
                        <li>Convergencia muy rápida (cuadrática).</li>
                        <li>Alta precisión en pocas iteraciones.</li>
                        <li>Ampliamente usado en ciencia e ingeniería.</li>
                    </ul>
                </div>
                <div className={styles.callout}>
                    <h3 style={{color: '#e74c3c'}}><i className="fas fa-times-circle"></i> Desventajas</h3>
                    <ul style={{paddingLeft: '20px', color: '#ccc', lineHeight: '1.6'}}>
                        <li>Requiere conocer f&apos;(x).</li>
                        <li>Puede divergir si x₀ está lejos de la raíz.</li>
                        <li>Falla si f&apos;(xₙ) ≈ 0 (división por cero).</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* SECCIÓN 5: EJEMPLO */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-chart-bar"></i></span> 
                Ejemplo: Calcular √10
            </div>
            
            <div className={styles.callout}>
                <h3>Planteamiento</h3>
                <p className={styles.text}>
                    Queremos resolver f(x) = x² − 10 = 0.
                </p>
                <p className={styles.text}>
                    Derivada: f&apos;(x) = 2x. Fórmula iterativa:
                </p>
                {/* FÓRMULA CORREGIDA */}
                <div className={styles.formulaBox}>
                    xₙ₊₁ = 0.5 · ( xₙ + 10 / xₙ )
                </div>
            </div>

            <div className={styles.iterationCard}>
                <div className={styles.iterTitle}>Iteraciones (x₀ = 3)</div>
                <p className={styles.text}>x₁ = 3.1667</p>
                <p className={styles.text}>x₂ = 3.1623</p>
                <p className={styles.text}>x₃ = 3.162278</p>
            </div>

            <div className={styles.formulaBox} style={{marginTop: '30px'}}>
                Resultado Final: √10 ≈ 3.162278
            </div>
        </section>

        {/* SECCIÓN 6: APLICACIONES */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-microscope"></i></span> 
                Aplicaciones
            </div>
            <ul style={{paddingLeft: '20px', color: '#ccc', lineHeight: '1.8', listStyleType: 'disc'}}>
                <li>Resolución de polinomios y ecuaciones trascendentes.</li>
                <li>Modelos no lineales en ingeniería y física.</li>
                <li>Química computacional (equilibrio de reacciones).</li>
                <li>Optimización en machine learning (búsqueda de mínimos).</li>
            </ul>
        </section>

        {/* SECCIÓN 7: CONCLUSIÓN */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-check-circle"></i></span> 
                Conclusión
            </div>
            <ul style={{paddingLeft: '20px', color: '#aaa', lineHeight: '1.8', listStyleType: 'disc'}}>
                <li>El método de Newton-Raphson es uno de los más eficientes para encontrar raíces.</li>
                <li>Su convergencia cuadrática lo hace ideal cuando se dispone de una buena aproximación inicial.</li>
                <li>Es fundamental en simulaciones numéricas avanzadas gracias a su rapidez y precisión.</li>
            </ul>
        </section>

      </div>

      <footer className={styles.footer}>
          <p>© 2025 Método de Newton-Raphson - Programación Numérica</p>
      </footer>
    </div>
  );
}