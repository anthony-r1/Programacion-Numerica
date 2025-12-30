"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./punto-fijo.module.css";

export default function PuntoFijoPage() {
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

  const codigoPython = `import math

def g(x):
    return math.log(4 - x)

def punto_fijo(x0, tol=1e-6, max_iter=100):
    x = x0
    for i in range(max_iter):
        x_new = g(x)
        if x_new <= 0:
            print("Error: g(x) no está definido (log de número ≤ 0).")
            return None
        error = abs((x_new - x) / x_new) if x_new != 0 else 0
        print(f"{i:2d}  {x:10.6f}  {x_new:10.6f}  {error*100:10.4f}%")
        if error < tol:
            return x_new
        x = x_new
    print("Advertencia: Máximo de iteraciones alcanzado.")
    return x

# Ejecución
raiz = punto_fijo(1.0)
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
            <i className="fas fa-sync-alt"></i>
          </div>
          <h1 className={styles.heroTitle}>Método del Punto Fijo</h1>
          <p className={styles.heroSubtitle}>
            Método Iterativo para Resolver Ecuaciones no Lineales
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
                El Método del Punto Fijo es un método iterativo para resolver ecuaciones de la forma <em>f(x) = 0</em>, 
                reescribiéndolas como <em>x = g(x)</em>. A partir de un valor inicial <em>x₀</em>, se generan 
                aproximaciones sucesivas mediante:
              </p>
              <div className={styles.formulaBox}>
                x<sub>n+1</sub> = g(x<sub>n</sub>)
              </div>
              <p>
                El método converge si <em>|g&apos;(x)| &lt; 1</em> en un entorno de la raíz.
              </p>
            </div>
          </div>
        </section>

        {/* EJEMPLO */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.2s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-lightbulb"></i> Ejemplo: Resolver eˣ − 4 + x = 0
            </h2>
            <div className={styles.sectionContent}>
              <p>Se desea encontrar la raíz de la ecuación:</p>
              <div className={styles.formulaBox}>f(x) = e<sup>x</sup> − 4 + x = 0</div>
              <p>Reescribimos la ecuación en la forma <em>x = g(x)</em>:</p>
              <div className={styles.formulaBox}>g(x) = ln(4 − x)</div>
              <p>
                Usamos un valor inicial <strong>x₀ = 1</strong> y aplicamos el método hasta que el error relativo sea menor al <strong>0,01%</strong>.
              </p>

              <h3 style={{ color: "#D0002D", margin: "2rem 0 1rem 0", fontFamily: 'var(--font-russo)' }}>
                Iteraciones Paso a Paso
              </h3>
              
              <div className={styles.tableContainer}>
                <table className={styles.iterationTable}>
                    <thead>
                        <tr>
                            <th>n</th>
                            <th>x<sub>n</sub></th>
                            <th>x<sub>n+1</sub></th>
                            <th>g(x<sub>n</sub>)</th>
                            <th>Error %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>0</td><td>1</td><td>1,0986</td><td>1,0986</td><td>8,98%</td></tr>
                        <tr><td>1</td><td>1,0986</td><td>1,0652</td><td>1,0652</td><td>3,14%</td></tr>
                        <tr><td>2</td><td>1,0652</td><td>1,0766</td><td>1,0766</td><td>1,06%</td></tr>
                        <tr><td>3</td><td>1,0766</td><td>1,0727</td><td>1,0727</td><td>0,36%</td></tr>
                        <tr><td>4</td><td>1,0727</td><td>1,0741</td><td>1,0741</td><td>0,12%</td></tr>
                        <tr><td>5</td><td>1,0741</td><td>1,0736</td><td>1,0736</td><td>0,04%</td></tr>
                        <tr><td>6</td><td>1,0736</td><td>1,0738</td><td>1,0738</td><td>0,01%</td></tr>
                        <tr><td>7</td><td>1,0738</td><td>1,0737</td><td>1,0737</td><td>0,005%</td></tr>
                        <tr><td>8</td><td>1,0737</td><td>1,0737</td><td>1,0737</td><td>0,0017%</td></tr>
                        <tr><td>9</td><td>1,0737</td><td>1,0737</td><td>1,0737</td><td>0,00058%</td></tr>
                        <tr><td>10</td><td>1,0737</td><td>1,0737</td><td>1,0737</td><td>0,00020%</td></tr>
                        <tr><td>11</td><td>1,0737</td><td>1,0737</td><td>1,0737</td><td>0,00007%</td></tr>
                    </tbody>
                </table>
              </div>

              <div className={styles.resultBox}>
                <div className={styles.resultTitle}>
                  <i className="fas fa-bullseye"></i> Resultado Final
                </div>
                <div className={styles.resultContent}>
                  <p>La raíz aproximada de <em>f(x) = e<sup>x</sup> − 4 + x</em> es:</p>
                  <p style={{ fontSize: "2rem", margin: "1rem 0", color: "#10b981", fontWeight: "bold" }}>
                    x ≈ 1,0737
                  </p>
                  <p>con un error relativo menor a <strong>0,0001%</strong>.</p>
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
                  <span>🐍 Implementación del Método</span>
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
                  <li>El Método del Punto Fijo converge rápidamente si <em>|g&apos;(x)| &lt; 1</em> cerca de la raíz.</li>
                  <li>Es muy útil cuando se puede reescribir la ecuación de forma adecuada.</li>
                  <li>La elección de <em>g(x)</em> y del valor inicial afectan directamente la convergencia.</li>
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