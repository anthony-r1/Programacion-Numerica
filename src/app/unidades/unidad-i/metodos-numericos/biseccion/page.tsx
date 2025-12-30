"use client";

import { MouseEvent } from "react";
import Link from "next/link";
// IMPORTANTE: Los ".." significan "busca en la carpeta de atrás"
import styles from "../metodos-detalle.module.css"; 

export default function BiseccionPage() {
  
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
      {/* Fondo de Estrellas */}
      <div className={styles.starsBg}></div>

      {/* HEADER */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          {/* Este link vuelve al menú de métodos numéricos */}
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

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroIcon}>
            <i className="fas fa-ruler-combined"></i>
        </div>
        <h1 className={styles.title}>Método de Bisección</h1>
        <p className={styles.subtitle}>Procedimiento Numérico e Iterativo para Encontrar Raíces</p>
        <div className={styles.accentLine}></div>
      </section>

      <div className={styles.mainWrapper}>
        
        {/* SECCIÓN 1: DEFINICIÓN */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="far fa-lightbulb"></i></span> 
                Definición del Método de Bisección
            </div>
            <p className={styles.text}>
                El método de bisección es un procedimiento numérico e iterativo que se utiliza para encontrar 
                una raíz de una función, es decir, un valor de x que hace que f(x) = 0. Este método se basa 
                en un principio sencillo: si una función continua cambia de signo en un intervalo cerrado [a, b], 
                entonces existe al menos una raíz dentro de ese intervalo.
            </p>
            
            <div className={styles.formulaBox}>
                f(a) · f(b) &lt; 0  ⇒  ∃ ξ ∈ (a, b) : f(ξ) = 0
            </div>

            <p className={styles.text}>
                El método consiste en dividir repetidamente el intervalo por la mitad y elegir el subintervalo 
                en el que la función cambia de signo. Con cada iteración, el intervalo se hace más pequeño y 
                la aproximación a la raíz se vuelve más precisa.
            </p>

            <div className={styles.callout}>
                <h3><i className="fas fa-comment-dots"></i> En Palabras Simples:</h3>
                <p className={styles.text}>
                    El método de bisección es como un proceso de búsqueda donde se reduce el rango a la mitad 
                    en cada paso, acercándose cada vez más al punto donde la función cruza el eje x.
                </p>
            </div>

            <div className={styles.callout}>
                <h3><i className="fas fa-exclamation-circle"></i> Ejemplo Intuitivo:</h3>
                <p className={styles.text}>
                    Si f(2) &gt; 0 y f(5) &lt; 0, significa que hay al menos una raíz entre 2 y 5. Calculamos el punto 
                    medio c = (2+5)/2 = 3.5 y evaluamos f(3.5). Luego elegimos el nuevo intervalo donde ocurre 
                    el cambio de signo y repetimos el proceso hasta aproximar la raíz con la precisión deseada.
                </p>
            </div>
        </section>

        {/* SECCIÓN 2: PROCEDIMIENTO */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-tools"></i></span> 
                Procedimiento
            </div>
            
            <div className={styles.stepsList}>
                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>1</div>
                    <div style={{width: '100%'}}>
                        <strong>Calcular el punto medio:</strong>
                        <div className={styles.formulaBox} style={{margin: '10px 0', padding: '10px'}}>
                            m = (a + b) / 2
                        </div>
                    </div>
                </div>

                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>2</div>
                    <div><strong>Evaluar la función en f(a), f(b) y f(m)</strong></div>
                </div>

                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>3</div>
                    <div>
                        <strong>Determinar el nuevo intervalo:</strong>
                        <div style={{marginTop: '10px', color: '#aaa'}}>
                            <p>• Si f(a) · f(m) &lt; 0  ⇒  [a, m]</p>
                            <p>• Si f(m) · f(b) &lt; 0  ⇒  [m, b]</p>
                        </div>
                    </div>
                </div>

                <div className={styles.stepItem}>
                    <div className={styles.stepNumber}>4</div>
                    <div style={{width: '100%'}}>
                        <strong>Calcular el error:</strong>
                        <div className={styles.formulaBox} style={{margin: '10px 0', padding: '10px'}}>
                            e = (b - a) / 2
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* SECCIÓN 3: EJEMPLO */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-chart-area"></i></span> 
                Ejemplo: Función Exponencial
            </div>
            
            <div className={styles.callout}>
                <h3><i className="fas fa-file-alt"></i> Enunciado del Problema</h3>
                <p className={styles.text}>
                    Un ingeniero en control de procesos necesita calcular el tiempo x en horas que tarda en 
                    estabilizarse la temperatura de un horno industrial. El comportamiento de la temperatura 
                    se modela con la función:
                </p>
                <div className={styles.formulaBox}>
                    f(x) = e³ˣ - 4
                </div>
                <p className={styles.text}>
                    Se sabe que la raíz de la ecuación (cuando el horno alcanza el nivel de equilibrio) se 
                    encuentra en el intervalo [0, 1]. Se pide aplicar el Método de Bisección hasta obtener 
                    un error menor a 0.1.
                </p>
            </div>
        </section>

        {/* SECCIÓN 4: ITERACIONES */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-sync-alt"></i></span> 
                Iteraciones Paso a Paso
            </div>

            <div className={styles.iterationCard}>
                <div className={styles.iterTitle}>Iteración 1</div>
                <p className={styles.text}>
                    m = 0.5, f(0) = -3, f(1) = 16.0855, f(0.5) = 0.4816<br/>
                    ⇒ [0, 0.5], e = 0.5
                </p>
            </div>

            <div className={styles.iterationCard}>
                <div className={styles.iterTitle}>Iteración 2</div>
                <p className={styles.text}>
                    m = 0.25, f(0.25) = -1.8829<br/>
                    ⇒ [0.25, 0.5], e = 0.25
                </p>
            </div>

            <div className={styles.iterationCard}>
                <div className={styles.iterTitle}>Iteración 3</div>
                <p className={styles.text}>
                    m = 0.375, f(0.375) = -0.919<br/>
                    ⇒ [0.375, 0.5], e = 0.125
                </p>
            </div>

            <div className={styles.iterationCard}>
                <div className={styles.iterTitle}>Iteración 4</div>
                <p className={styles.text}>
                    m = 0.4375, f(0.4375) = -0.284<br/>
                    ⇒ [0.4375, 0.5], e = 0.0625 (&lt; 0.1) <i className="fas fa-check" style={{color: '#2ecc71'}}></i>
                </p>
            </div>
        </section>

        {/* SECCIÓN 5: RESULTADO Y TABLA */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-bullseye"></i></span> 
                Resultado Final
            </div>
            
            <p className={styles.text} style={{textAlign: 'center'}}>La raíz aproximada de f(x) = e³ˣ - 4 es:</p>
            <div className={styles.formulaBox} style={{fontSize: '1.8rem'}}>
                x ≈ 0.44
            </div>
            <p className={styles.text} style={{textAlign: 'center'}}>con un error menor a 0.1</p>

            <h3 style={{color: 'white', marginTop: '40px', fontFamily: 'var(--font-russo)'}}>
                <i className="fas fa-table" style={{marginRight: '10px', color: '#D0002D'}}></i> 
                Tabla de Iteraciones
            </h3>
            
            <div style={{overflowX: 'auto'}}>
                <table className={styles.resultsTable}>
                    <thead>
                        <tr>
                            <th>a</th>
                            <th>b</th>
                            <th>m</th>
                            <th>f(a)</th>
                            <th>f(b)</th>
                            <th>f(m)</th>
                            <th>e</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td><td>1</td><td>0.5</td><td>-3</td><td>16.0855</td><td>0.4816</td><td>0.5</td>
                        </tr>
                        <tr>
                            <td>0</td><td>0.5</td><td>0.25</td><td>-3</td><td>0.4816</td><td>-1.8829</td><td>0.25</td>
                        </tr>
                        <tr>
                            <td>0.25</td><td>0.5</td><td>0.375</td><td>-1.8829</td><td>0.4816</td><td>-0.919</td><td>0.125</td>
                        </tr>
                        <tr>
                            <td>0.375</td><td>0.5</td><td>0.4375</td><td>-0.919</td><td>0.4816</td><td>-0.284</td><td>0.0625</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        {/* SECCIÓN 6: CONCLUSIONES */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.cardTitle}>
                <span className={styles.iconBox}><i className="fas fa-clipboard-check"></i></span> 
                Conclusiones
            </div>
            
            <ul style={{paddingLeft: '20px', color: '#aaa', lineHeight: '1.8', listStyleType: 'none'}}>
                <li style={{marginBottom: '10px'}}><i className="fas fa-check" style={{color: '#D0002D', marginRight: '10px'}}></i> El método de bisección es sencillo y garantiza convergencia.</li>
                <li style={{marginBottom: '10px'}}><i className="fas fa-check" style={{color: '#D0002D', marginRight: '10px'}}></i> Aunque es más lento que otros métodos, es confiable y robusto.</li>
                <li><i className="fas fa-check" style={{color: '#D0002D', marginRight: '10px'}}></i> Es ideal cuando se conoce un intervalo con cambio de signo y la función es continua.</li>
            </ul>
        </section>

      </div>

      <footer className={styles.footer}>
          <p>© 2025 Método de Bisección - Programación Numérica</p>
      </footer>
    </div>
  );
}