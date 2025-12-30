"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import styles from "../metodos-detalle.module.css"; // Usa el CSS compartido

export default function PuntoFijoPage() {
  
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
                <i className="far fa-calendar-alt"></i> 16 de octubre de 2025
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroIcon}>
            <i className="fas fa-bullseye"></i>
        </div>
        <h1 className={styles.title}>Método del Punto Fijo</h1>
        <p className={styles.subtitle}>Resolución Iterativa de Ecuaciones No Lineales</p>
        <div className={styles.accentLine}></div>
      </section>

      <div className={styles.mainWrapper}>
        
        {/* SECCIÓN 1: DEFINICIÓN */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="far fa-lightbulb"></i></span> 
                Definición
            </div>
            <p className={styles.text}>
                El método del punto fijo es un procedimiento iterativo para resolver ecuaciones no lineales de la forma:
            </p>
            <div className={styles.formulaBox}>
                f(x) = 0
            </div>
            <p className={styles.text}>
                Se basa en reescribir la ecuación como:
            </p>
            <div className={styles.formulaBox}>
                x = g(x)
            </div>
            <p className={styles.text}>
                Una solución <em>r</em> de <em>f(x) = 0</em> es un <strong>punto fijo</strong> de <em>g(x)</em>, es decir:
            </p>
            <div className={styles.formulaBox}>
                r = g(r)
            </div>
        </section>

        {/* SECCIÓN 2: FUNDAMENTO TEÓRICO */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-book"></i></span> 
                Fundamento Teórico
            </div>
            <p className={styles.text}>
                Si <em>g: [a, b] → [a, b]</em> es continua y existe <em>r ∈ [a, b]</em> tal que <em>g(r) = r</em>, entonces <em>r</em> es una raíz de <em>f(x) = 0</em>.
            </p>
            <p className={styles.text}>
                Se define la sucesión:
            </p>
            <div className={styles.formulaBox}>
                xₙ₊₁ = g(xₙ), &nbsp; n = 0, 1, 2, ...
            </div>
            <p className={styles.text}>
                Si la sucesión converge, su límite es la raíz buscada.
            </p>

            <div className={styles.callout}>
                <h3><i className="fas fa-check-circle"></i> Existencia de raíz</h3>
                <p className={styles.text}>
                    Si <em>g(a) &gt; a</em> y <em>g(b) &lt; b</em>, entonces existe al menos un <em>r ∈ (a, b)</em> tal que <em>g(r) = r</em>.
                </p>
            </div>
        </section>

        {/* SECCIÓN 3: CONVERGENCIA */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-search"></i></span> 
                Condición de Convergencia
            </div>
            <p className={styles.text}>
                El método converge si, en un entorno de la raíz <em>r</em>, se cumple:
            </p>
            <div className={styles.formulaBox}>
                |g&apos;(r)| &lt; 1
            </div>
            <p className={styles.text}>
                En este caso, la sucesión converge a <em>r</em>. Si |g&apos;(r)| &gt; 1, el método diverge.
            </p>

            <div className={styles.callout}>
                <h3><i className="fas fa-exclamation-triangle"></i> Teorema del Punto Fijo de Banach</h3>
                <p className={styles.text}>
                    Si <em>g</em> es contractiva en [a, b] (es decir, |g(x₁) − g(x₂)| ≤ k|x₁ − x₂| con 0 &lt; k &lt; 1), entonces existe un único punto fijo al que converge el método.
                </p>
            </div>
        </section>

        {/* SECCIÓN 4: ALGORITMO */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-cogs"></i></span> 
                Algoritmo
            </div>
            <div className={styles.stepsList}>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>1</div>
                    <div><strong>Reescribir</strong> f(x) = 0 en la forma x = g(x).</div>
                </div>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>2</div>
                    <div><strong>Elegir</strong> una aproximación inicial x₀.</div>
                </div>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>3</div>
                    <div style={{width: '100%'}}>
                        <strong>Iterar:</strong>
                        <div className={styles.formulaBox} style={{margin:'10px 0', padding:'10px'}}>
                            xₙ₊₁ = g(xₙ)
                        </div>
                    </div>
                </div>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>4</div>
                    <div><strong>Detener</strong> cuando |xₙ₊₁ − xₙ| &lt; ε.</div>
                </div>
            </div>
        </section>

        {/* SECCIÓN 5: EJEMPLO APLICADO */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-chart-line"></i></span> 
                Ejemplo Aplicado: Inversión
            </div>
            
            <div className={styles.callout}>
                <h3>Planteamiento</h3>
                <p className={styles.text}>
                    Queremos hallar la tasa de interés mensual <em>r</em> que duplica una inversión en 12 meses:
                </p>
                <div className={styles.formulaBox}>
                    f(r) = (1 + r)¹² − 2 = 0
                </div>
                <p className={styles.text}>
                    Reescribimos como punto fijo:
                </p>
                <div className={styles.formulaBox}>
                    g(r) = 2 / (1 + r)¹¹ - 1
                </div>
            </div>

            <div className={styles.iterationCard}>
                <div className={styles.iterTitle}>Iteraciones</div>
                <p className={styles.text}>
                    x₀ = 0.05<br/>
                    x₁ = g(0.05) ≈ 0.059<br/>
                    x₂ = g(0.059) ≈ 0.058<br/>
                    x₃ = g(0.058) ≈ 0.058
                </p>
            </div>

            <div className={styles.formulaBox} style={{marginTop: '30px'}}>
                Resultado Final: r ≈ 0.058 (5.8%)
            </div>
        </section>

        {/* SECCIÓN 6: VENTAJAS Y DESVENTAJAS */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-balance-scale"></i></span> 
                Ventajas y Desventajas
            </div>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'}}>
                <div className={styles.callout}>
                    <h3 style={{color: '#2ecc71'}}><i className="fas fa-check-circle"></i> Ventajas</h3>
                    <ul style={{paddingLeft: '20px', color: '#ccc', lineHeight: '1.6'}}>
                        <li>Implementación simple.</li>
                        <li>Bajo consumo de memoria.</li>
                        <li>Útil para generar valores iniciales.</li>
                        <li>Aplicable siempre que se pueda construir g(x).</li>
                    </ul>
                </div>
                <div className={styles.callout}>
                    <h3 style={{color: '#e74c3c'}}><i className="fas fa-times-circle"></i> Desventajas</h3>
                    <ul style={{paddingLeft: '20px', color: '#ccc', lineHeight: '1.6'}}>
                        <li>No siempre es posible construir g(x) adecuada.</li>
                        <li>Convergencia lenta (lineal).</li>
                        <li>Alta sensibilidad a x₀ y g(x).</li>
                        <li>Puede oscilar o divergir si |g&apos;(x)| ≥ 1.</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* SECCIÓN 7: CONCLUSIÓN */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-clipboard-check"></i></span> 
                Conclusión
            </div>
            <ul style={{paddingLeft: '20px', color: '#aaa', lineHeight: '1.8', listStyleType: 'disc'}}>
                <li>El método del punto fijo es sencillo pero requiere verificar cuidadosamente la convergencia.</li>
                <li>Es ideal como paso preliminar antes de usar métodos más rápidos como Newton-Raphson.</li>
                <li>La elección adecuada de g(x) es crucial para garantizar convergencia.</li>
            </ul>
        </section>

      </div>

      <footer className={styles.footer}>
          <p>© 2025 Método del Punto Fijo - Programación Numérica</p>
      </footer>
    </div>
  );
}