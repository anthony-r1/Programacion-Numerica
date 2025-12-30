"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import styles from "../metodos-detalle.module.css"; // Usa el CSS compartido

export default function RegulaFalsiPage() {
  
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
                <i className="far fa-calendar-alt"></i> 17 de octubre de 2025
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroIcon}>
            <i className="fas fa-ruler-combined"></i>
        </div>
        <h1 className={styles.title}>Método de Regula Falsi</h1>
        <p className={styles.subtitle}>Método de Falsa Posición para Encontrar Raíces</p>
        <div className={styles.accentLine}></div>
      </section>

      <div className={styles.mainWrapper}>
        
        {/* SECCIÓN 1: DESCRIPCIÓN GENERAL */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="far fa-lightbulb"></i></span> 
                Descripción General
            </div>
            <p className={styles.text}>
                El método de <strong>Regula Falsi</strong> (también llamado <em>falsa posición</em>) es un método numérico para encontrar raíces de ecuaciones no lineales de la forma:
            </p>
            <div className={styles.formulaBox}>
                f(x) = 0
            </div>
            <p className={styles.text}>
                Es un método <strong>cerrado</strong>, ya que trabaja dentro de un intervalo inicial <em>[a, b]</em> donde:
            </p>
            <div className={styles.formulaBox}>
                f(a) · f(b) &lt; 0
            </div>
            <p className={styles.text}>
                Esto garantiza la existencia de al menos una raíz en el intervalo (por el Teorema del Valor Intermedio).
            </p>
        </section>

        {/* SECCIÓN 2: DIFERENCIA CON BISECCIÓN */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-balance-scale"></i></span> 
                Diferencia con el Método de Bisección
            </div>
            <p className={styles.text}>
                A diferencia del método de bisección, que siempre toma el punto medio del intervalo, 
                <strong> Regula Falsi usa interpolación lineal</strong> entre los extremos para estimar la raíz.
            </p>
            <div className={styles.callout}>
                <h3><i className="fas fa-thumbs-up"></i> Ventaja:</h3>
                <p className={styles.text}>
                    Converge más rápido que la bisección porque aprovecha la forma de la función.
                </p>
            </div>
        </section>

        {/* SECCIÓN 3: FÓRMULA */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-calculator"></i></span> 
                Fórmula de Interpolación
            </div>
            <p className={styles.text}>
                Dados los extremos del intervalo <em>aₙ</em> y <em>bₙ</em>, el nuevo punto se calcula como:
            </p>
            <div className={styles.formulaBox}>
                cₙ = bₙ − f(bₙ) · [ (bₙ − aₙ) / (f(bₙ) − f(aₙ)) ]
            </div>
            <p className={styles.text}>
                Equivalentemente:
            </p>
            <div className={styles.formulaBox}>
                cₙ = [ aₙ f(bₙ) − bₙ f(aₙ) ] / [ f(bₙ) − f(aₙ) ]
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
                    <div><strong>Calcular</strong> cₙ usando la fórmula de interpolación.</div>
                </div>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>2</div>
                    <div>
                        <strong>Evaluar el signo:</strong>
                        <div style={{marginTop: '10px', color: '#aaa'}}>
                            <p>• Si f(aₙ) · f(cₙ) &lt; 0 ⇒ [aₙ₊₁, bₙ₊₁] = [aₙ, cₙ]</p>
                            <p>• Si f(cₙ) · f(bₙ) &lt; 0 ⇒ [aₙ₊₁, bₙ₊₁] = [cₙ, bₙ]</p>
                        </div>
                    </div>
                </div>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>3</div>
                    <div><strong>Repetir</strong> hasta que |cₙ₊₁ − cₙ| &lt; ε o se alcance el número máximo de iteraciones.</div>
                </div>
            </div>
        </section>

        {/* SECCIÓN 5: CARACTERÍSTICAS */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-search"></i></span> 
                Características
            </div>
            <ul style={{paddingLeft: '20px', color: '#ccc', lineHeight: '1.8', listStyleType: 'none'}}>
                <li style={{marginBottom: '10px'}}><i className="fas fa-check" style={{color: '#2ecc71', marginRight: '10px'}}></i> Más rápido que el método de bisección.</li>
                <li style={{marginBottom: '10px'}}><i className="fas fa-exclamation-triangle" style={{color: '#f1c40f', marginRight: '10px'}}></i> Puede estancarse si uno de los extremos no se actualiza durante varias iteraciones (común en funciones muy curvadas).</li>
                <li><i className="fas fa-arrow-right" style={{color: '#3498db', marginRight: '10px'}}></i> Es precursor del método de la secante, que ya no requiere un intervalo que encierre la raíz.</li>
            </ul>
        </section>

        {/* SECCIÓN 6: EJEMPLO 1 */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-chart-bar"></i></span> 
                Ejemplo 1: f(x) = x² − 4
            </div>
            
            <div className={styles.callout}>
                <h3>Datos Iniciales</h3>
                <p className={styles.text}>
                    Intervalo: [a₀, b₀] = [1, 3]<br/>
                    f(1) = −3, f(3) = 5 ⇒ cambio de signo <i className="fas fa-check" style={{color: '#2ecc71'}}></i>
                </p>
            </div>

            <div style={{overflowX: 'auto'}}>
                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th>Iter</th><th>aₙ</th><th>bₙ</th><th>f(aₙ)</th><th>f(bₙ)</th><th>cₙ</th><th>f(cₙ)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>1.00000</td><td>3.00000</td><td>−3.00000</td><td>5.00000</td><td>1.75000</td><td>−0.93750</td></tr>
                        <tr><td>2</td><td>1.75000</td><td>3.00000</td><td>−0.93750</td><td>5.00000</td><td>1.94737</td><td>−0.20690</td></tr>
                        <tr><td>3</td><td>1.94737</td><td>3.00000</td><td>−0.20690</td><td>5.00000</td><td>1.98851</td><td>−0.04586</td></tr>
                        <tr><td>4</td><td>1.98851</td><td>3.00000</td><td>−0.04586</td><td>5.00000</td><td>1.99746</td><td>−0.01017</td></tr>
                        <tr><td>5</td><td>1.99746</td><td>3.00000</td><td>−0.01017</td><td>5.00000</td><td>1.99935</td><td>−0.00226</td></tr>
                    </tbody>
                </table>
            </div>

            <div className={styles.formulaBox} style={{marginTop: '30px'}}>
                Resultado Final: x ≈ 1.99935
            </div>
            <p className={styles.text} style={{textAlign: 'center'}}>(El valor exacto es x = 2)</p>
        </section>

        {/* SECCIÓN 7: EJEMPLO 2 */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-chart-line"></i></span> 
                Ejemplo 2: f(x) = x³ − 2x − 5
            </div>
            
            <div className={styles.callout}>
                <h3>Datos Iniciales</h3>
                <p className={styles.text}>
                    Intervalo: [a₀, b₀] = [2, 3]<br/>
                    f(2) = −1, f(3) = 16 ⇒ cambio de signo <i className="fas fa-check" style={{color: '#2ecc71'}}></i>
                </p>
            </div>

            <div style={{overflowX: 'auto'}}>
                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th>Iter</th><th>aₙ</th><th>bₙ</th><th>f(aₙ)</th><th>f(bₙ)</th><th>cₙ</th><th>f(cₙ)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>2.00000</td><td>3.00000</td><td>−1.00000</td><td>16.00000</td><td>2.05882</td><td>−0.39054</td></tr>
                        <tr><td>2</td><td>2.05882</td><td>3.00000</td><td>−0.39054</td><td>16.00000</td><td>2.08285</td><td>−0.14407</td></tr>
                        <tr><td>3</td><td>2.08285</td><td>3.00000</td><td>−0.14407</td><td>16.00000</td><td>2.09171</td><td>−0.05333</td></tr>
                        <tr><td>4</td><td>2.09171</td><td>3.00000</td><td>−0.05333</td><td>16.00000</td><td>2.09499</td><td>−0.01973</td></tr>
                        <tr><td>5</td><td>2.09499</td><td>3.00000</td><td>−0.01973</td><td>16.00000</td><td>2.09621</td><td>−0.00730</td></tr>
                    </tbody>
                </table>
            </div>

            <div className={styles.formulaBox} style={{marginTop: '30px'}}>
                Resultado Final: x ≈ 2.09621
            </div>
        </section>

        {/* SECCIÓN 8: CONCLUSIÓN */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-check-circle"></i></span> 
                Conclusión
            </div>
            <ul style={{paddingLeft: '20px', color: '#ccc', lineHeight: '1.8', listStyleType: 'disc'}}>
                <li>El método de Regula Falsi mejora la eficiencia del método de bisección al usar interpolación lineal.</li>
                <li>Aunque puede estancarse en ciertos casos, es más robusto que métodos abiertos como la secante.</li>
                <li>Es ideal cuando se necesita garantizar la convergencia dentro de un intervalo conocido.</li>
            </ul>
        </section>

      </div>

      <footer className={styles.footer}>
          <p>© 2025 Método de Regula Falsi - Programación Numérica</p>
      </footer>
    </div>
  );
}