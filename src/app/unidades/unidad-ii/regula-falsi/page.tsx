"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./regula-falsi.module.css";

export default function RegulaFalsiPage() {
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

  const codigoPython = `def f(x):
    return x**2 - 4

def regula_falsi(a, b, tol=1e-4, max_iter=20):
    if f(a) * f(b) >= 0:
        print("Error: f(a) y f(b) deben tener signos opuestos.")
        return None

    for i in range(max_iter):
        c = b - f(b) * (b - a) / (f(b) - f(a))
        fc = f(c)
        print(f"{i+1:2d}  {a:10.6f}  {b:10.6f}  {f(a):10.6f}  {f(b):10.6f}  {c:10.6f}  {fc:10.6f}")
        if abs(fc) < tol:
            return c
        if f(a) * fc < 0:
            b = c
        else:
            a = c
    print("Advertencia: Máximo de iteraciones alcanzado.")
    return c

# Ejecución
raiz = regula_falsi(1.0, 3.0)
print(f"\\n✅ Raíz aproximada: x ≈ {raiz:.6f}")`;

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
            <i className="fas fa-balance-scale"></i>
          </div>
          <h1 className={styles.heroTitle}>Método de Regula Falsi</h1>
          <p className={styles.heroSubtitle}>
            Método de Falsa Posición para Encontrar Raíces
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
                El Método de Regula Falsi (o Falsa Posición) es una mejora del método de bisección. 
                En lugar de usar el punto medio, utiliza la intersección de la recta secante entre 
                <em> (a, f(a))</em> y <em>(b, f(b))</em> con el eje <em>x</em> como nueva aproximación.
              </p>
              <p>La fórmula para calcular <em>c</em> es:</p>
              <div className={styles.formulaBox}>
                c = b − f(b) · (b − a) / (f(b) − f(a))
              </div>
              <p>
                Al igual que en bisección, se requiere que <em>f(a) · f(b) &lt; 0</em> para garantizar 
                una raíz en el intervalo.
              </p>
            </div>
          </div>
        </section>

        {/* EJEMPLO */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.2s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-lightbulb"></i> Ejemplo: f(x) = x² − 4
            </h2>
            <div className={styles.sectionContent}>
              <p>
                Encontrar la raíz de <em>f(x) = x² − 4</em> en el intervalo [<strong>1, 3</strong>].
              </p>
              <div className={styles.formulaBox}>f(x) = x<sup>2</sup> − 4</div>

              <h3 style={{ color: "#D0002D", margin: "2rem 0 1rem 0", fontFamily: 'var(--font-russo)' }}>
                Iteraciones Paso a Paso
              </h3>
              
              <div className={styles.tableContainer}>
                <table className={styles.iterationTable}>
                    <thead>
                        <tr>
                            <th>Iter</th>
                            <th>a</th>
                            <th>b</th>
                            <th>f(a)</th>
                            <th>f(b)</th>
                            <th>c</th>
                            <th>f(c)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>1</td><td>3</td><td>−3</td><td>5</td><td>1,75</td><td>−0,9375</td></tr>
                        <tr><td>2</td><td>1,75</td><td>3</td><td>−0,9375</td><td>5</td><td>1,9474</td><td>−0,2078</td></tr>
                        <tr><td>3</td><td>1,9474</td><td>3</td><td>−0,2078</td><td>5</td><td>1,9894</td><td>−0,0424</td></tr>
                        <tr><td>4</td><td>1,9894</td><td>3</td><td>−0,0424</td><td>5</td><td>1,9979</td><td>−0,0085</td></tr>
                        <tr><td>5</td><td>1,9979</td><td>3</td><td>−0,0085</td><td>5</td><td>1,9996</td><td>−0,0017</td></tr>
                    </tbody>
                </table>
              </div>

              <div className={styles.resultBox}>
                <div className={styles.resultTitle}>
                  <i className="fas fa-bullseye"></i> Resultado Final
                </div>
                <div className={styles.resultContent}>
                  <p>
                    La raíz aproximada de <em>f(x) = x² − 4</em> es:
                  </p>
                  <p style={{ fontSize: "2rem", margin: "1rem 0", color: "#10b981", fontWeight: "bold" }}>
                    x ≈ 2,000
                  </p>
                  <p>El método converge más rápido que la bisección al usar información de la función.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CÓDIGO PYTHON */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.3s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-laptop-code"></i> Código en Python
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                  <span>🐍 Implementación del Método de Regula Falsi</span>
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
          <div className={styles.contentCard} style={{animationDelay: '0.4s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-check-circle"></i> Conclusiones
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.infoList}>
                <ul>
                  <li>Mejora la bisección al usar una aproximación lineal (secante).</li>
                  <li>Converge más rápido que bisección, pero más lento que Newton-Raphson.</li>
                  <li>Siempre converge si <em>f</em> es continua y hay cambio de signo.</li>
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