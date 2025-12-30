"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import styles from "./metodos.module.css"; 

export default function MetodosNumericosPage() {

  const handleTilt = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2; 
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -3; 
    const rotateY = ((x - centerX) / centerX) * 3;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };
  
  const resetTilt = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <div className={styles.container}>
      <div className={styles.starsBg}></div>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/unidades/unidad-i" className={styles.backBtn}>
              <i className="fas fa-arrow-left"></i> Volver a Unidad 1
          </Link>
          <div className={styles.studentInfo}>
            <div className={styles.badge}><i className="fas fa-user-graduate"></i> Anthony Rusbel Puma Huanca</div>
            <div className={styles.badge}><i className="fas fa-id-card"></i> 240132</div>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroIcon}><i className="fas fa-calculator"></i></div>
        <h1 className={styles.title}>Métodos Numéricos</h1>
        <p className={styles.subtitle}>Algoritmos para hallar raíces de ecuaciones</p>
        <div className={styles.accentLine}></div>
      </section>

      <div className={styles.mainWrapper}>
        
        <section className={styles.introCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.sectionTitle}>
                <span className={styles.iconBox}><i className="fas fa-lightbulb"></i></span> 
                ¿Por qué son importantes?
            </div>
            <div className={styles.introContent}>
                <p>
                    Los métodos numéricos son esenciales porque muchas ecuaciones en ingeniería y ciencia no tienen solución analítica exacta. 
                    Buscamos una aproximación iterativa a la raíz de <strong>f(x) = 0</strong>.
                </p>
                <div className={styles.applicationsBox}>
                    <h3><i className="fas fa-cogs"></i> Aplicaciones Prácticas</h3>
                    <ul className={styles.appList}>
                        <li><strong>Ingeniería Civil:</strong> Punto de equilibrio en estructuras.</li>
                        <li><strong>Finanzas:</strong> Cálculo de tasas de interés (TIR).</li>
                        <li><strong>Machine Learning:</strong> Optimización de funciones de error.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className={styles.methodsGrid}>
            
            {/* 1. Bisección */}
            <div className={styles.methodCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={styles.methodHeader}>
                    <div className={styles.methodNumber}>1</div>
                    <h3 className={styles.methodTitle}>Método de Bisección</h3>
                </div>
                <p className={styles.methodDesc}>El método más robusto. Divide el intervalo a la mitad repetidamente asegurando que la raíz esté dentro.</p>
                <div className={styles.tagsContainer}>
                    <span className={`${styles.tag} ${styles.tagSafe}`}>Robusto</span>
                    <span className={`${styles.tag} ${styles.tagSlow}`}>Lento</span>
                </div>
                <div className={styles.methodStats}>
                    <div className={styles.stat}><span>Converge:</span> Lineal</div>
                    <div className={styles.stat}><span>Requiere:</span> Intervalo [a,b]</div>
                </div>
                <Link href="/unidades/unidad-i/metodos-numericos/biseccion" className={styles.detailsBtn}>Ver Detalles →</Link>
            </div>

            {/* 2. Newton */}
            <div className={styles.methodCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={styles.methodHeader}>
                    <div className={styles.methodNumber}>2</div>
                    <h3 className={styles.methodTitle}>Newton-Raphson</h3>
                </div>
                <p className={styles.methodDesc}>Usa la derivada para trazar tangentes. Es extremadamente rápido si el punto inicial es bueno.</p>
                <div className={styles.tagsContainer}>
                    <span className={`${styles.tag} ${styles.tagFast}`}>Muy Rápido</span>
                    <span className={`${styles.tag} ${styles.tagRisk}`}>Diverge</span>
                </div>
                <div className={styles.methodStats}>
                    <div className={styles.stat}><span>Converge:</span> Cuadrática</div>
                    <div className={styles.stat}><span>Requiere:</span> f&apos;(x)</div>
                </div>
                <Link href="/unidades/unidad-i/metodos-numericos/newton" className={styles.detailsBtn}>Ver Detalles →</Link>
            </div>

            {/* 3. Secante */}
            <div className={styles.methodCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={styles.methodHeader}>
                    <div className={styles.methodNumber}>3</div>
                    <h3 className={styles.methodTitle}>Método de la Secante</h3>
                </div>
                <p className={styles.methodDesc}>Similar a Newton pero sin derivadas. Usa una recta secante entre dos puntos anteriores.</p>
                <div className={styles.tagsContainer}>
                    <span className={`${styles.tag} ${styles.tagFast}`}>Rápido</span>
                    <span className={`${styles.tag} ${styles.tagSafe}`}>Sin Derivada</span>
                </div>
                <div className={styles.methodStats}>
                    <div className={styles.stat}><span>Converge:</span> 1.618</div>
                    <div className={styles.stat}><span>Requiere:</span> 2 Puntos</div>
                </div>
                <Link href="/unidades/unidad-i/metodos-numericos/secante" className={styles.detailsBtn}>Ver Detalles →</Link>
            </div>

            {/* 4. Punto Fijo */}
            <div className={styles.methodCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={styles.methodHeader}>
                    <div className={styles.methodNumber}>4</div>
                    <h3 className={styles.methodTitle}>Método de Punto Fijo</h3>
                </div>
                <p className={styles.methodDesc}>Transforma f(x)=0 en x=g(x). Itera sustituyendo el valor anterior en la nueva función.</p>
                <div className={styles.tagsContainer}>
                    <span className={`${styles.tag} ${styles.tagNeutral}`}>Iterativo</span>
                    <span className={`${styles.tag} ${styles.tagRisk}`}>Condicional</span>
                </div>
                <div className={styles.methodStats}>
                    <div className={styles.stat}><span>Converge:</span> Lineal</div>
                    <div className={styles.stat}><span>Requiere:</span> |g&apos;|&lt;1</div>
                </div>
                <Link href="/unidades/unidad-i/metodos-numericos/punto-fijo" className={styles.detailsBtn}>Ver Detalles →</Link>
            </div>

            {/* 5. Regula Falsi */}
            <div className={`${styles.methodCard} ${styles.highlightCard}`} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={styles.methodHeader}>
                    <div className={styles.methodNumber}>5</div>
                    <h3 className={styles.methodTitle}>Regula Falsi</h3>
                </div>
                <p className={styles.methodDesc}>Método de la &quot;Falsa Posición&quot;. Combina la seguridad de Bisección con la velocidad de la interpolación lineal.</p>
                <div className={styles.tagsContainer}>
                    <span className={`${styles.tag} ${styles.tagSafe}`}>Seguro</span>
                    <span className={`${styles.tag} ${styles.tagFast}`}>Eficiente</span>
                </div>
                <div className={styles.methodStats}>
                    <div className={styles.stat}><span>Converge:</span> Variable</div>
                    <div className={styles.stat}><span>Requiere:</span> Intervalo</div>
                </div>
                <Link href="/unidades/unidad-i/metodos-numericos/regula-falsi" className={styles.detailsBtn}>Ver Detalles →</Link>
            </div>

        </section>
      </div>

      <footer className={styles.footer}>
          <p>© 2025 Portafolio Programación Numérica - Anthony Rusbel Puma Huanca</p>
      </footer>
    </div>
  );
}