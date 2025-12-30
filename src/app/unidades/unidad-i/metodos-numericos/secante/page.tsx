"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import styles from "../metodos-detalle.module.css"; // Usa el CSS compartido

export default function SecantePage() {
  
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
                <i className="far fa-calendar-alt"></i> 9 de octubre de 2025
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroIcon}>
            <i className="fas fa-ruler-horizontal"></i>
        </div>
        <h1 className={styles.title}>Método de la Secante</h1>
        <p className={styles.subtitle}>Procedimiento Numérico para Encontrar Raíces sin Derivadas</p>
        <div className={styles.accentLine}></div>
      </section>

      <div className={styles.mainWrapper}>
        
        {/* SECCIÓN 1: INTRODUCCIÓN */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="far fa-lightbulb"></i></span> 
                Introducción
            </div>
            <p className={styles.text}>
                El método de la secante es un procedimiento numérico para encontrar raíces de ecuaciones no lineales 
                de la forma <strong>f(x) = 0</strong>. Se basa en aproximar la derivada mediante una recta secante que 
                pasa por dos puntos de la función.
            </p>
            <p className={styles.text}>
                Es una alternativa eficaz al método de Newton-Raphson cuando no se dispone de la derivada analítica de la función.
            </p>

            <div className={styles.callout}>
                <h3><i className="fas fa-comment-dots"></i> En Palabras Simples:</h3>
                <p className={styles.text}>
                    En lugar de calcular la pendiente exacta (derivada), se estima usando dos puntos cercanos de la función.
                </p>
            </div>
        </section>

        {/* SECCIÓN 2: IDEA PRINCIPAL */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-brain"></i></span> 
                Idea Principal
            </div>
            <p className={styles.text}>
                Se aproxima la derivada en el método de Newton-Raphson con:
            </p>
            <div className={styles.formulaBox}>
                f&apos;(xₙ) ≈ (f(xₙ) - f(xₙ₋₁)) / (xₙ - xₙ₋₁)
            </div>
            <p className={styles.text}>
                Sustituyendo en la fórmula de Newton-Raphson, se obtiene la fórmula del método de la secante:
            </p>
            <div className={styles.formulaBox}>
                xₙ₊₁ = xₙ - f(xₙ) · [ (xₙ - xₙ₋₁) / (f(xₙ) - f(xₙ₋₁)) ]
            </div>
        </section>

        {/* SECCIÓN 3: PASOS DEL MÉTODO */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-tools"></i></span> 
                Pasos del Método
            </div>
            <div className={styles.stepsList}>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>1</div>
                    <div><strong>Elegir dos valores iniciales</strong> x₀ y x₁ cercanos a la raíz.</div>
                </div>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>2</div>
                    <div><strong>Calcular</strong> f(x₀) y f(x₁).</div>
                </div>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>3</div>
                    <div style={{width: '100%'}}>
                        <strong>Aplicar la fórmula:</strong>
                        <div className={styles.formulaBox} style={{margin:'10px 0', padding:'10px'}}>
                            xₙ₊₁ = xₙ - f(xₙ) · [ (xₙ - xₙ₋₁) / (f(xₙ) - f(xₙ₋₁)) ]
                        </div>
                    </div>
                </div>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>4</div>
                    <div><strong>Repetir</strong> hasta que |xₙ₊₁ − xₙ| &lt; ε.</div>
                </div>
            </div>
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
                        <li>No requiere derivadas.</li>
                        <li>Converge más rápido que la bisección.</li>
                    </ul>
                </div>
                <div className={styles.callout}>
                    <h3 style={{color: '#e74c3c'}}><i className="fas fa-times-circle"></i> Desventajas</h3>
                    <ul style={{paddingLeft: '20px', color: '#ccc', lineHeight: '1.6'}}>
                        <li>Puede divergir si los puntos iniciales no son buenos.</li>
                        <li>Requiere dos valores iniciales.</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* SECCIÓN 5: EJEMPLO APLICADO */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-chart-line"></i></span> 
                Ejemplo Aplicado: f(x) = x² − 4
            </div>
            
            <div className={styles.callout}>
                <h3>Datos Iniciales</h3>
                <p className={styles.text}>
                    Función: f(x) = x² − 4<br/>
                    Valores iniciales: x₀ = 1, x₁ = 3
                </p>
            </div>

            <div className={styles.iterationCard}>
                <div className={styles.iterTitle}>Iteración 1</div>
                <p className={styles.text}>
                    x₂ = 3 − f(3)·(3 − 1) / (f(3) − f(1)) = 3 − (5)(2) / (5 − (−3)) = 3 − 10/8 = 1.75
                </p>
            </div>

            <div className={styles.iterationCard}>
                <div className={styles.iterTitle}>Iteración 2</div>
                <p className={styles.text}>
                    x₃ = 1.75 − f(1.75)·(1.75 − 3) / (f(1.75) − f(3)) ≈ 2.00
                </p>
            </div>

            <div className={styles.formulaBox} style={{marginTop: '30px'}}>
                Resultado Final: x ≈ 2
            </div>
        </section>

        {/* SECCIÓN 6: EJEMPLO REAL */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-thermometer-half"></i></span> 
                Ejemplo Real: Dilatación Térmica
            </div>
            
            <div className={styles.callout}>
                <h3>Situación Física</h3>
                <p className={styles.text}>
                    Una varilla metálica de longitud inicial L₀ = 1.00 m se dilata. Hallar T.
                </p>
                <div className={styles.formulaBox}>
                    f(T) = L₀(1 + αT) − Lₘ = 0
                </div>
                <p className={styles.text}>
                    Donde: α = 1.2 × 10⁻⁵ °C⁻¹, Lₘ = 1.001 m
                </p>
            </div>

            <div className={styles.iterationCard}>
                <div className={styles.iterTitle}>Aplicación del Método</div>
                <p className={styles.text}>
                    T₀ = 50, T₁ = 100<br/>
                    f(50) = −0.0004, f(100) = 0.0002<br/>
                    T₂ = 100 − f(100)·(100−50)/(f(100)−f(50)) = 83.33
                </p>
            </div>

            <div className={styles.formulaBox} style={{marginTop: '30px'}}>
                Resultado: T ≈ 83.3 °C
            </div>
        </section>

        {/* SECCIÓN 7: CONCLUSIÓN */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-check-circle"></i></span> 
                Conclusión
            </div>
            <ul style={{paddingLeft: '20px', color: '#aaa', lineHeight: '1.8', listStyleType: 'disc'}}>
                <li>El método de la secante es eficiente cuando no se conoce la derivada de f(x).</li>
                <li>Su convergencia es más rápida que la del método de bisección, pero menos estable que Newton-Raphson.</li>
                <li>Es ideal para problemas prácticos de ingeniería y ciencias aplicadas.</li>
            </ul>
        </section>

      </div>

      <footer className={styles.footer}>
          <p>© 2025 Método de la Secante - Programación Numérica</p>
      </footer>
    </div>
  );
}