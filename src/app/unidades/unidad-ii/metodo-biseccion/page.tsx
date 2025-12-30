"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./biseccion.module.css";

export default function MetodoBiseccionPage() {
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

def f(x):
    return math.exp(3 * x) - 4

def biseccion(a, b, tol=0.1):
    if f(a) * f(b) >= 0:
        print("Error: No hay cambio de signo en [a, b].")
        return None

    iteracion = 1
    while True:
        m = (a + b) / 2
        error = (b - a) / 2
        fm = f(m)

        print(f"{iteracion:4d} {a:8.4f} {b:8.4f} {m:10.4f} {f(a):10.4f} {f(b):10.4f} {fm:10.4f} {error:8.4f}")

        if error < tol:
            print(f"\\n✅ Raíz aproximada: x ≈ {m:.4f}")
            return m

        if f(a) * fm < 0:
            b = m
        else:
            a = m
        iteracion += 1

raiz = biseccion(0.0, 1.0, tol=0.1)`;

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

      {/* HEADER TIPO IMAGEN (Sin texto central) */}
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
            <i className="fas fa-arrows-alt-h"></i>
          </div>
          <h1 className={styles.heroTitle}>Método de Bisección</h1>
          <p className={styles.heroSubtitle}>
            Procedimiento Numérico e Iterativo para Encontrar Raíces
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
                El método de bisección es un procedimiento numérico e iterativo
                que se utiliza para encontrar una raíz de una función, es decir,
                un valor de <em>x</em> que hace que <em>f(x) = 0</em>. Este
                método se basa en un principio sencillo: si una función continua
                cambia de signo en un intervalo cerrado [<em>a</em>, <em>b</em>
                ], entonces existe al menos una raíz dentro de ese intervalo.
              </p>
              <div className={styles.formulaBox}>
                f(a) · f(b) &lt; 0 ⇒ existe al menos una raíz en (a, b)
              </div>
              <p>
                El método consiste en dividir repetidamente el intervalo por la
                mitad y elegir el subintervalo en el que la función cambia de
                signo. Con cada iteración, el intervalo se hace más pequeño y la
                aproximación a la raíz se vuelve más precisa.
              </p>
            </div>
          </div>
        </section>

        {/* PROCEDIMIENTO */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.2s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-tools"></i> Procedimiento
            </h2>
            <div className={styles.sectionContent}>
              <div className={styles.infoList}>
                <ul>
                  <li>
                    <strong>Paso 1:</strong> Calcular el punto medio:{" "}
                    <strong>m = (a + b) / 2</strong>
                  </li>
                  <li>
                    <strong>Paso 2:</strong> Evaluar <em>f(a)</em>,{" "}
                    <em>f(b)</em> y <em>f(m)</em>
                  </li>
                  <li>
                    <strong>Paso 3:</strong> Determinar el nuevo intervalo:
                    <br />• Si <strong>f(a) · f(m) &lt; 0</strong> → [<em>a</em>
                    , <em>m</em>]
                    <br />• Si <strong>f(m) · f(b) &lt; 0</strong> → [<em>m</em>
                    , <em>b</em>]
                  </li>
                  <li>
                    <strong>Paso 4:</strong> Calcular el error:{" "}
                    <strong>e = (b − a) / 2</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* EJEMPLO */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.3s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-lightbulb"></i> Ejemplo: Función Exponencial
            </h2>
            <div className={styles.sectionContent}>
              <p>
                Un ingeniero en control de procesos necesita calcular el tiempo{" "}
                <em>x</em> en horas que tarda en estabilizarse la temperatura de
                un horno industrial. El comportamiento se modela con:
              </p>
              <div className={styles.formulaBox}>
                f(x) = e<sup>3x</sup> − 4
              </div>
              <p>
                Se sabe que la raíz se encuentra en el intervalo [0, 1]. Se
                aplica el Método de Bisección hasta obtener un error menor a{" "}
                <strong>0,1</strong>.
              </p>

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
                        <th>m</th>
                        <th>f(a)</th>
                        <th>f(b)</th>
                        <th>f(m)</th>
                        <th>Error</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td><td>0</td><td>1</td><td>0,5</td><td>−3</td><td>16,0855</td><td>0,4816</td><td>0,5</td>
                    </tr>
                    <tr>
                        <td>2</td><td>0</td><td>0,5</td><td>0,25</td><td>−3</td><td>0,4816</td><td>−1,8829</td><td>0,25</td>
                    </tr>
                    <tr>
                        <td>3</td><td>0,25</td><td>0,5</td><td>0,375</td><td>−1,8829</td><td>0,4816</td><td>−0,919</td><td>0,125</td>
                    </tr>
                    <tr>
                        <td>4</td><td>0,375</td><td>0,5</td><td>0,4375</td><td>−0,919</td><td>0,4816</td><td>−0,284</td><td>0,0625</td>
                    </tr>
                    </tbody>
                </table>
              </div>

              <div className={styles.resultBox}>
                <div className={styles.resultTitle}>
                  <i className="fas fa-bullseye"></i> Resultado Final
                </div>
                <div className={styles.resultContent}>
                  <p>
                    La raíz aproximada de <em>f(x) = e<sup>3x</sup> − 4</em> es:
                  </p>
                  <p
                    style={{
                      fontSize: "2rem",
                      margin: "1rem 0",
                      color: "#10b981",
                      fontWeight: "bold",
                    }}
                  >
                    x ≈ 0,44
                  </p>
                  <p>
                    con un error menor a <strong>0,1</strong>.
                  </p>
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
                  <span>biseccion.py</span>
                  <button
                    className={`${styles.copyButton} ${
                      copied ? styles.copied : ""
                    }`}
                    onClick={copiarCodigo}
                  >
                    {copied ? (
                      <><i className="fas fa-check"></i> Copiado</>
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
                  <li>
                    El método de bisección es sencillo y garantiza convergencia.
                  </li>
                  <li>
                    Aunque es más lento que otros métodos, es confiable y
                    robusto.
                  </li>
                  <li>
                    Es ideal cuando se conoce un intervalo con cambio de signo y
                    la función es continua.
                  </li>
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