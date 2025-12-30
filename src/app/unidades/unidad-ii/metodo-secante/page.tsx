"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./secante.module.css";

export default function MetodoSecantePage() {
  const [copied, setCopied] = useState(false);

  // Generar estrellas dinámicamente
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

  const copiarCodigo = () => {
    const codigo = document.getElementById("codigoPython")?.textContent;
    if (codigo) {
      navigator.clipboard.writeText(codigo).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const codigoPython = `def secante(f, x0, x1, tol=1e-6, max_iter=50):
    for i in range(max_iter):
        f0, f1 = f(x0), f(x1)
        if f1 - f0 == 0:
            print("Error: División por cero.")
            return None
        x2 = x1 - f1 * (x1 - x0) / (f1 - f0)
        print(f"{i+1:2d}  {x0:10.6f}  {x1:10.6f}  {f0:10.6f}  {f1:10.6f}  {x2:10.6f}")
        if abs(x2 - x1) < tol:
            return x2
        x0, x1 = x1, x2
    print("Advertencia: Máximo de iteraciones alcanzado.")
    return x1

# Ejemplo 1: f(x) = x² - 4
print("=== Ejemplo 1: f(x) = x² - 4 ===")
f1 = lambda x: x**2 - 4
raiz1 = secante(f1, 1.0, 3.0)

# Ejemplo 2: f(x) = 1/(1 + 1.2e-5*x) - 1.001
print("\\n=== Ejemplo 2: f(x) = 1/(1 + 1.2e-5*x) - 1.001 ===")
f2 = lambda x: 1 / (1 + 1.2e-5 * x) - 1.001
raiz2 = secante(f2, 50.0, 100.0)

print(f"\\n✅ Raíces: x₁ ≈ {raiz1:.6f}, x₂ ≈ {raiz2:.6f}")`;

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

      {/* HEADER TIPO IMAGEN (Sin texto central, Sticky Absolute) */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
            {/* Botón Rojo a la Izquierda */}
            <Link href="/unidades/unidad-ii" className={styles.backButton}>
              <i className="fas fa-arrow-left"></i> Volver a Unidad 2
            </Link>
            
            {/* Badges Oscuros a la Derecha */}
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
            <i className="fas fa-chart-line"></i>
          </div>
          <h1 className={styles.heroTitle}>Método de la Secante</h1>
          <p className={styles.heroSubtitle}>
            Método Iterativo sin Necesidad de Derivadas
          </p>
      </section>

      <div className={styles.container}>
        
        {/* DEFINICIÓN */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.1s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-book"></i> Definición del Método
            </h2>
            <div className={styles.sectionContent}>
              <p>
                El Método de la Secante es un método iterativo para encontrar raíces de una función 
                <em> f(x) = 0</em>. A diferencia de Newton-Raphson, no requiere la derivada, sino dos 
                aproximaciones iniciales <em>x₀</em> y <em>x₁</em>.
              </p>
              <p>La fórmula iterativa es:</p>
              <div className={styles.formulaBox}>
                x<sub>n+1</sub> = x<sub>n</sub> − f(x<sub>n</sub>) · (x<sub>n</sub> − x<sub>n−1</sub>) / (f(x<sub>n</sub>) − f(x<sub>n−1</sub>))
              </div>
              <p>
                Geométricamente, se aproxima la función con una recta secante entre dos puntos y se toma 
                su intersección con el eje <em>x</em> como la nueva aproximación.
              </p>
            </div>
          </div>
        </section>

        {/* EJEMPLO 1 */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.2s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-lightbulb"></i> Ejemplo 1: f(x) = x² − 4
            </h2>
            <div className={styles.sectionContent}>
              <p>
                Encontrar la raíz de <em>f(x) = x² − 4</em> usando <strong>x₀ = 1</strong> y <strong>x₁ = 3</strong>.
              </p>
              <div className={styles.formulaBox}>f(x) = x<sup>2</sup> − 4</div>

              <h3 style={{ color: "#D0002D", margin: "2rem 0 1rem 0", fontFamily: 'var(--font-russo)' }}>
                Iteraciones
              </h3>
              
              <div className={styles.tableContainer}>
                <table className={styles.iterationTable}>
                    <thead>
                        <tr>
                            <th>Iter</th>
                            <th>x<sub>n−1</sub></th>
                            <th>x<sub>n</sub></th>
                            <th>f(x<sub>n−1</sub>)</th>
                            <th>f(x<sub>n</sub>)</th>
                            <th>x<sub>n+1</sub></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>1</td><td>3</td><td>−3</td><td>5</td><td>1,75</td></tr>
                        <tr><td>2</td><td>3</td><td>1,75</td><td>5</td><td>−0,9375</td><td>1,9474</td></tr>
                        <tr><td>3</td><td>1,75</td><td>1,9474</td><td>−0,9375</td><td>−0,2078</td><td>2,0036</td></tr>
                        <tr><td>4</td><td>1,9474</td><td>2,0036</td><td>−0,2078</td><td>0,0142</td><td>2,0000</td></tr>
                        <tr><td>5</td><td>2,0036</td><td>2,0000</td><td>0,0142</td><td>−0,0002</td><td>2,0000</td></tr>
                    </tbody>
                </table>
              </div>

              <div className={styles.resultBox}>
                <div className={styles.resultTitle}>
                  <i className="fas fa-bullseye"></i> Resultado Final
                </div>
                <div className={styles.resultContent}>
                  <p>Raíz aproximada: <strong>x ≈ 2,0000</strong></p>
                  <p>Valor exacto: √4 = 2 → el método converge rápidamente.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EJEMPLO 2 */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.3s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-lightbulb"></i> Ejemplo 2
            </h2>
            <div className={styles.sectionContent}>
              <p>
                Encontrar la raíz con <strong>x₀ = 50</strong> y <strong>x₁ = 100</strong>.
              </p>
              <div className={styles.formulaBox}>f(x) = 1 / (1 + 1,2·10<sup>−5</sup>·x) − 1,001</div>

              <h3 style={{ color: "#D0002D", margin: "2rem 0 1rem 0", fontFamily: 'var(--font-russo)' }}>
                Iteraciones
              </h3>
              
              <div className={styles.tableContainer}>
                <table className={styles.iterationTable}>
                    <thead>
                        <tr>
                            <th>Iter</th>
                            <th>x<sub>n−1</sub></th>
                            <th>x<sub>n</sub></th>
                            <th>f(x<sub>n−1</sub>)</th>
                            <th>f(x<sub>n</sub>)</th>
                            <th>x<sub>n+1</sub></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>50</td><td>100</td><td>−0,0004</td><td>0,0002</td><td>83,3333</td></tr>
                        <tr><td>2</td><td>100</td><td>83,3333</td><td>0,0002</td><td>0</td><td>83,3333</td></tr>
                    </tbody>
                </table>
              </div>

              <div className={styles.resultBox}>
                <div className={styles.resultTitle}>
                  <i className="fas fa-bullseye"></i> Resultado Final
                </div>
                <div className={styles.resultContent}>
                  <p>Raíz aproximada: <strong>x ≈ 83,3333</strong></p>
                  <p>El método converge en solo 2 iteraciones.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CÓDIGO PYTHON */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.4s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-laptop-code"></i> Código en Python
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                  <span>🐍 Implementación del Método de la Secante</span>
                  <button
                    className={`${styles.copyButton} ${
                      copied ? styles.copied : ""
                    }`}
                    onClick={copiarCodigo}
                  >
                    {copied ? (
                      <><i className="fas fa-check"></i> Copiado!</>
                    ) : (
                      <><i className="fas fa-copy"></i> Copiar</>
                    )}
                  </button>
                </div>
                <pre id="codigoPython" className={styles.preBlock}>
                  {codigoPython}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* CONCLUSIONES */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.5s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-check-circle"></i> Conclusiones
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.infoList}>
                <ul>
                  <li>No requiere derivadas, solo evaluaciones de la función.</li>
                  <li>Converge más rápido que bisección, pero no siempre garantiza convergencia.</li>
                  <li>Ideal cuando la derivada es difícil de calcular o no está disponible.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
          <p>
            © 2025 Programación Numérica FINESI - Universidad Nacional del
            Altiplano
          </p>
          <p>Docente: Fred Torres Cruz</p>
      </footer>
    </div>
  );
}