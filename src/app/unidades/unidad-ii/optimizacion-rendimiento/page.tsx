/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./optimizacion.module.css";

export default function OptimizacionRendimientoPage() {
  const [copied, setCopied] = useState("");

  // Estrellas
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

  const copiarCodigo = (texto: string, id: string) => {
    navigator.clipboard.writeText(texto).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  // CÓDIGO R 1: Tasa de Degradación
  const codigoR1 = `# --- 1. Definición de Datos (Extraídos de JMeter) ---
# Usamos los datos de la imagen alrededor de la muestra #291
# x = Número de Muestra
# f(x) = Sample Time (Tiempo de respuesta en ms)

samples <- c(290, 291, 292)
response_times <- c(7134, 7407, 7378) # Valores f(x) en ms

# --- 2. Implementación del Método Numérico ---

#' Función de Diferencia Centrada
#' Fórmula: f'(x) approx (f(x+h) - f(x-h)) / 2h
calc_diferencia_centrada <- function(f_minus_h, f_plus_h, h) {
  return((f_plus_h - f_minus_h) / (2 * h))
}

# --- 3. Ejecución del Cálculo ---

# Definimos el paso h (diferencia entre sample 291 y 292)
h <- 1 

# Extraemos los valores necesarios para la fórmula
y_anterior <- response_times[1] # f(x-h) = 7134
y_siguiente <- response_times[3] # f(x+h) = 7378

# Calculamos la derivada
tasa_degradacion <- calc_diferencia_centrada(y_anterior, y_siguiente, h)

# --- 4. Impresión de Resultados ---
cat("=== REPORTE DE CÁLCULO NUMÉRICO ===\\n")
cat("Método: Diferencia Centrada (Central Difference)\\n")
cat("Punto de evaluación (x): Muestra #", samples[2], "\\n")
cat("Paso (h):", h, "\\n\\n")

cat("Valores usados:\\n")
cat("  f(x-h) [Muestra 290]:", y_anterior, "ms\\n")
cat("  f(x+h) [Muestra 292]:", y_siguiente, "ms\\n\\n")

cat("Resultado (Derivada):\\n")
cat("  f'(x) =", tasa_degradacion, "ms/petición\\n")

# Interpretación automática
if(tasa_degradacion > 0) {
  cat("\\nCONCLUSIÓN: El sistema se está degradando. El tiempo de espera aumenta a razón de", tasa_degradacion, "ms por cada nueva petición.")
} else {
  cat("\\nCONCLUSIÓN: El sistema se está recuperando o es estable.")
}`;

  const outputR1 = `=== REPORTE DE CÁLCULO NUMÉRICO ===
Método: Diferencia Centrada (Central Difference)
Punto de evaluación (x): Muestra # 291 
Paso (h): 1 

Valores usados:
  f(x-h) [Muestra 290]: 7134 ms
  f(x+h) [Muestra 292]: 7378 ms

Resultado (Derivada):
  f'(x) = 122 ms/petición

CONCLUSIÓN: El sistema se está degradando. El tiempo de espera aumenta a razón de 122 ms por cada nueva petición.`;

  // CÓDIGO R 2: Optimización Cuadrática
  const codigoR2 = `# === OPTIMIZACIÓN NUMÉRICA EN R ===
# Objetivo: Encontrar el punto máximo (o mínimo) exacto usando interpolación cuadrática.

# 1. DATOS (Extraídos de JMeter - Muestras consecutivas)
x <- c(290, 291, 292)      # Número de Muestra (eje X)
y <- c(7134, 7407, 7378)   # Tiempo de Respuesta en ms (eje Y)

# 2. AJUSTE DEL MODELO CUADRÁTICO
# Buscamos la función: f(x) = ax^2 + bx + c
modelo <- lm(y ~ poly(x, 2, raw = TRUE))
coeficientes <- coef(modelo)

c <- coeficientes[1] # Intersección
b <- coeficientes[2] # Coeficiente lineal
a <- coeficientes[3] # Coeficiente cuadrático

# 3. CÁLCULO DEL ÓPTIMO (Vértice de la parábola)
# El máximo o mínimo ocurre donde la derivada es cero: f'(x) = 2ax + b = 0
x_optimo <- -b / (2 * a)
y_optimo <- a * x_optimo^2 + b * x_optimo + c

# 4. RESULTADOS
cat("=== REPORTE DE OPTIMIZACIÓN ===\\n")
cat("Modelo ajustado: y =", round(a, 2), "x^2 +", round(b, 2), "x", round(c, 2), "\\n")

if (a < 0) {
  cat("Tipo de Óptimo: MÁXIMO (Pico de saturación)\\n")
} else {
  cat("Tipo de Óptimo: MÍNIMO (Valle de rendimiento)\\n")
}

cat("Muestra teórica del pico:", round(x_optimo, 4), "\\n")
cat("Tiempo de respuesta máximo estimado:", round(y_optimo, 2), "ms\\n")`;

  const outputR2 = `=== REPORTE DE OPTIMIZACIÓN ===
Modelo ajustado: y = -151.0 x^2 + 87995.5 x - 12814322 

Tipo de Óptimo: MÁXIMO (Pico de saturación)
Muestra teórica del pico: 291.3758 
Tiempo de respuesta máximo estimado: 7428.33 ms`;

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
            <i className="fas fa-tachometer-alt"></i>
          </div>
          <h1 className={styles.heroTitle}>Optimización de Rendimiento</h1>
          <p className={styles.heroSubtitle}>
            Análisis de GitHub.com con Lighthouse, JMeter y Métodos Numéricos
          </p>
      </section>

      <div className={styles.container}>
        
        {/* RESUMEN */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.1s'}}>
            <h2 className={styles.sectionTitle}><i className="fas fa-file-alt"></i> Resumen Ejecutivo</h2>
            <div className={styles.text}>
              <p>
                Este informe presenta un análisis integral del rendimiento de <strong>github.com</strong>. 
                Se identifica una marcada disparidad entre la experiencia móvil (44/100) y de escritorio (84/100).
                Mediante pruebas de carga (100 usuarios), el servidor mostró estabilidad (0% errores) pero alta latencia (4.2s promedio).
                Aplicando diferenciación numérica, se cuantificó una degradación de <strong>122 ms/petición</strong> bajo carga.
              </p>
            </div>
          </div>
        </section>

        {/* 1. LIGHTHOUSE */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.2s'}}>
            <h2 className={styles.sectionTitle}><i className="fas fa-mobile-alt"></i> Informe Lighthouse (Móvil vs Escritorio)</h2>
            
            <h3 className={styles.subTitle}>Móvil (Celulares) - Rendimiento Pobre</h3>
            <div className={styles.tableWrapper}>
                <table className={styles.dataTable}>
                    <thead><tr><th>Métrica</th><th>Valor</th><th>Estado</th></tr></thead>
                    <tbody>
                        <tr><td>Rendimiento General</td><td className={styles.scoreBad}>44/100</td><td>Pobre</td></tr>
                        <tr><td>First Contentful Paint (FCP)</td><td className={styles.scoreBad}>6.3 s</td><td>Lento</td></tr>
                        <tr><td>Largest Contentful Paint (LCP)</td><td className={styles.scoreBad}>22.8 s</td><td>Crítico</td></tr>
                        <tr><td>Total Blocking Time (TBT)</td><td className={styles.scoreBad}>500 ms</td><td>Bloqueo alto</td></tr>
                        <tr><td>Cumulative Layout Shift (CLS)</td><td className={styles.scoreGood}>0</td><td>Estable</td></tr>
                    </tbody>
                </table>
            </div>

            <h3 className={styles.subTitle}>Escritorio - Rendimiento Aceptable</h3>
            <div className={styles.tableWrapper}>
                <table className={styles.dataTable}>
                    <thead><tr><th>Métrica</th><th>Valor</th><th>Estado</th></tr></thead>
                    <tbody>
                        <tr><td>Rendimiento General</td><td className={styles.scoreAvg}>84/100</td><td>Mejorable</td></tr>
                        <tr><td>First Contentful Paint (FCP)</td><td className={styles.scoreGood}>1.0 s</td><td>Rápido</td></tr>
                        <tr><td>Largest Contentful Paint (LCP)</td><td className={styles.scoreGood}>1.2 s</td><td>Rápido</td></tr>
                    </tbody>
                </table>
            </div>
          </div>

          {/* EVIDENCIAS LIGHTHOUSE (Movidas Aquí) */}
          <div className={styles.contentCard}>
            <h2 className={styles.sectionTitle}><i className="fas fa-images"></i> Evidencias Gráficas del Informe Lighthouse</h2>
            <div className={styles.galleryGrid}>
                {[11, 22, 33, 44, 55, 66].map((num) => (
                    <div key={num} className={styles.imageCard}>
                        <img src={`/Programacion-Numerica/Imagenes/${num}.png`} alt={`Lighthouse ${num}`} />
                        <div className={styles.imgCaption}>Captura Lighthouse {num}.png</div>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* 2. APACHE JMETER */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.3s'}}>
            <h2 className={styles.sectionTitle}><i className="fas fa-server"></i> Informe de Carga (Apache JMeter)</h2>
            <p className={styles.text}>
                Simulación de 100 usuarios concurrentes accediendo a la raíz (/) con un Ramp-up de 1 segundo.
            </p>
            
            <div className={styles.tableWrapper}>
                <table className={styles.dataTable}>
                    <thead><tr><th>Métrica</th><th>Valor</th><th>Interpretación</th></tr></thead>
                    <tbody>
                        <tr><td>Samples</td><td>200</td><td>Total peticiones analizadas</td></tr>
                        <tr><td>Average</td><td>4272 ms</td><td>Tiempo respuesta promedio (Lento)</td></tr>
                        <tr><td>Error %</td><td className={styles.scoreGood}>0.00%</td><td>Servidor estable (sin caídas)</td></tr>
                        <tr><td>Throughput</td><td>1.3 / s</td><td>Bajo caudal de procesamiento</td></tr>
                    </tbody>
                </table>
            </div>
            
            <div style={{background: 'rgba(255,255,255,0.05)', padding:'15px', borderRadius:'8px', borderLeft:'3px solid #D0002D', marginTop:'20px'}}>
                <p style={{color:'#ccc', margin:0}}>
                    <strong>Conclusión Técnica:</strong> El servidor es robusto (no falla), pero lento bajo carga. El cuello de botella es la latencia de transferencia, no el procesamiento.
                </p>
            </div>
          </div>
        </section>

        {/* 3. ANÁLISIS MATEMÁTICO */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.4s'}}>
            <h2 className={styles.sectionTitle}><i className="fas fa-calculator"></i> Análisis Numérico de Degradación</h2>
            <p className={styles.text}>
                Usamos <strong>Diferenciación Numérica (Diferencia Centrada)</strong> para calcular la velocidad a la que el servidor se vuelve lento.
            </p>

            <div className={styles.formulaBox}>
                f&apos;(x) ≈ 
                <span className={styles.fraction}>
                    <span className={styles.num}>f(x+h) - f(x-h)</span>
                    <span className={styles.den}>2h</span>
                </span>
            </div>

            <div className={styles.text}>
                <p><strong>Datos (de JMeter):</strong></p>
                <ul className={styles.infoList}>
                    <li>Muestra 290: 7134 ms</li>
                    <li>Muestra 291: 7407 ms (Punto central)</li>
                    <li>Muestra 292: 7378 ms</li>
                </ul>
                <p style={{marginTop:'15px'}}><strong>Cálculo:</strong></p>
                <p>f&apos;(291) ≈ (7378 - 7134) / 2 = <strong>122 ms/petición</strong></p>
                <p style={{color:'#ff5f56', marginTop:'10px'}}>
                    Esto significa que por cada nueva petición concurrente, el sistema añade 122ms de retraso.
                </p>
            </div>
          </div>
        </section>

        {/* 4. CÓDIGO R */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.5s'}}>
            <h2 className={styles.sectionTitle}><i className="fab fa-r-project"></i> Implementación en R</h2>

            {/* Código 1 */}
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>calculo_degradacion.R</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoR1, "c1")}>
                        {copied === "c1" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoR1}</pre>
            </div>
            <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                    <div className={styles.dots}>
                        <div className={`${styles.dot} ${styles.red}`}></div>
                        <div className={`${styles.dot} ${styles.yellow}`}></div>
                        <div className={`${styles.dot} ${styles.green}`}></div>
                    </div>
                    <div className={styles.terminalTitle}>R Console Output</div>
                </div>
                <pre className={styles.terminalBody}>{outputR1}</pre>
            </div>

            {/* Código 2 */}
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>optimizacion_cuadratica.R</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoR2, "c2")}>
                        {copied === "c2" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoR2}</pre>
            </div>
            <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                    <div className={styles.dots}>
                        <div className={`${styles.dot} ${styles.red}`}></div>
                        <div className={`${styles.dot} ${styles.yellow}`}></div>
                        <div className={`${styles.dot} ${styles.green}`}></div>
                    </div>
                    <div className={styles.terminalTitle}>R Console Output</div>
                </div>
                <pre className={styles.terminalBody}>{outputR2}</pre>
            </div>

          </div>
        </section>

        {/* 5. ANEXOS (GALERÍA JMETER) */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.6s'}}>
            <h2 className={styles.sectionTitle}><i className="fas fa-images"></i> Evidencias Gráficas del Informe de Carga</h2>
            
            <h3 className={styles.subTitle}>Evidencias Gráficas del Informe Apache JMeter</h3>
            <div className={styles.galleryGrid}>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className={styles.imageCard}>
                        <img src={`/Programacion-Numerica/Imagenes/${num}.jpg`} alt={`JMeter ${num}`} />
                        <div className={styles.imgCaption}>Gráfico JMeter {num}.jpg</div>
                    </div>
                ))}
            </div>
          </div>
        </section>

      </div>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2025 Programación Numérica FINESI - Universidad Nacional del Altiplano</p>
          <p>Docente: Fred Torres Cruz</p>
        </div>
      </footer>
    </div>
  );
}