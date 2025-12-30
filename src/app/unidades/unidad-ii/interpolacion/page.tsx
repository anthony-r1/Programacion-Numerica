"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./interpolacion.module.css";

export default function InterpolacionPage() {

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
            <i className="fas fa-bezier-curve"></i>
          </div>
          <h1 className={styles.heroTitle}>Interpolación</h1>
          <p className={styles.heroSubtitle}>
            Desarrollo de los Ejercicios de Programación Numérica
          </p>
      </section>

      <div className={styles.container}>
        
        {/* --- 1. INTERPOLACIÓN LINEAL SIMPLE --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-ruler-horizontal"></i> 1. Interpolación Lineal Simple
            </h2>
            <p className={styles.text}>
                Conecta dos puntos con una línea recta para estimar valores intermedios.
            </p>
            
            {/* Fórmula */}
            <div className={styles.formulaBox}>
                y = y<sub>0</sub> + 
                <span className={styles.fraction}>
                    <span className={styles.num}>y<sub>1</sub> - y<sub>0</sub></span>
                    <span className={styles.den}>x<sub>1</sub> - x<sub>0</sub></span>
                </span>
                · (x - x<sub>0</sub>)
            </div>

            {/* Ejercicio 1 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>1.</span> Sensor de salud</div>
                <div className={styles.problemStatement}>
                    Un sensor registra 18°C a las 6:00 y 32°C a las 14:00. ¿Qué temperatura se estima a las 10:00?
                </div>
                <div className={styles.exerciseData}>
                    Datos: (6:00, 18°C) y (14:00, 32°C). Estimar a las 10:00 (x=10).
                </div>
                <div className={styles.solutionStep}>
                    y = 18 + [(32 - 18) / (14 - 6)] · (10 - 6)
                </div>
                <div className={styles.solutionStep}>
                    y = 18 + [14 / 8] · 4 = 18 + 7
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Estimación de 25°C a las 10:00.
                </div>
            </div>

            {/* Ejercicio 2 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>2.</span> Costo de producción</div>
                <div className={styles.problemStatement}>
                    Si 100 unidades cuestan $5,000 y 300 unidades cuestan $12,000, ¿cuál es el costo estimado para 200 unidades?
                </div>
                <div className={styles.exerciseData}>
                    Datos: (100u, $5000) y (300u, $12000). Estimar para 200u.
                </div>
                <div className={styles.solutionStep}>
                    y = 5000 + [(12000 - 5000) / (300 - 100)] · (200 - 100)
                </div>
                <div className={styles.solutionStep}>
                    y = 5000 + [7000 / 200] · 100 = 5000 + 3500
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Costo estimado de $8,500 para 200 unidades.
                </div>
            </div>

            {/* Ejercicio 3 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>3.</span> Velocidad de un tren</div>
                <div className={styles.problemStatement}>
                    Un tren pasa de 80 km/h a 20 km/h en 8 segundos. ¿Cuál es su velocidad a los 5 segundos?
                </div>
                <div className={styles.exerciseData}>
                    Datos: (0s, 80km/h) y (8s, 20km/h). Estimar a los 5s.
                </div>
                <div className={styles.solutionStep}>
                    y = 80 + [(20 - 80) / (8 - 0)] · (5 - 0)
                </div>
                <div className={styles.solutionStep}>
                    y = 80 + [-60 / 8] · 5 = 80 - 37.5
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Velocidad estimada de 42.5 km/h a los 5 segundos.
                </div>
            </div>
          </div>
        </section>

        {/* --- 2. INTERPOLACIÓN DE LAGRANGE --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-function"></i> 2. Interpolación de Lagrange
            </h2>
            <p className={styles.text}>
                Construye un polinomio de grado n que pasa exactamente por n+1 puntos usando polinomios base.
            </p>
            
            <div className={styles.formulaBox}>
                P(x) = ∑ y<sub>i</sub> L<sub>i</sub>(x)
            </div>

            {/* Ejercicio 4 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>4.</span> Altura de un proyectil</div>
                <div className={styles.problemStatement}>
                    Un proyectil alcanza estas alturas: 10 m a los 10 s, 15 m a los 20 s y 20 m a los 30 s. ¿Cuál es su altura a los 25 s?
                </div>
                <div className={styles.exerciseData}>
                    Datos: (10s, 10m), (20s, 15m), (30s, 20m). Estimar a 25s.
                </div>
                <div className={styles.solutionStep}>
                    P(25) = 10 · [(25-20)(25-30)] / [(10-20)(10-30)] + <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15 · [(25-10)(25-30)] / [(20-10)(20-30)] + <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20 · [(25-10)(25-20)] / [(30-10)(30-20)]
                </div>
                <div className={styles.solutionStep}>
                    P(25) = 1.25 + 11.25 + 7.5
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: 20 m.
                </div>
            </div>

            {/* Ejercicio 5 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>5.</span> Censo de una provincia</div>
                <div className={styles.problemStatement}>
                    Se tienen datos censales: 8,000 personas en 2015; 11,500 en 2018; 3,200 en 2020 y 15,800 en 2023. ¿Cuál es la población estimada para 2022?
                </div>
                <div className={styles.exerciseData}>
                    Datos: 2015: 8,000; 2018: 11,500; 2020: 3,200; 2023: 15,800. Estimar 2022.
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Población estimada de 14,900 personas.
                </div>
            </div>

            {/* Ejercicio 6 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>6.</span> Conductividad de aleación vs temperatura</div>
                <div className={styles.problemStatement}>
                    La conductividad varía con la temperatura así: 45 a 200°C; 52 a 400°C; 58 a 600°C. ¿Cuál es la conductividad a 350°C?
                </div>
                <div className={styles.exerciseData}>
                    Datos: 200°C: 45; 400°C: 52; 600°C: 58. Estimar a 350°C.
                </div>
                <div className={styles.solutionStep}>
                    P(350) = 45(0.09375) + 52(0.9375) + 58(-0.03125)
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Conductividad estimada de 50.8 W/m·k.
                </div>
            </div>
          </div>
        </section>

        {/* --- 3. DIFERENCIAS DIVIDIDAS DE NEWTON --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-divide"></i> 3. Diferencias Divididas de Newton
            </h2>
            <p className={styles.text}>
                Construye una fórmula de cambio sucesivo usando una tabla organizada.
            </p>
            
            <div className={styles.formulaBox}>
                P(x) = f(x<sub>0</sub>) + f[x<sub>0</sub>, x<sub>1</sub>](x - x<sub>0</sub>) + ...
            </div>

            {/* Ejercicio 7 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>7.</span> Altura de planta</div>
                <div className={styles.problemStatement}>
                    Se mide la altura de una planta en días: 0 (5cm), 7 (12cm), 14 (28cm), 21 (43cm). ¿Cuál es la altura estimada el día 10?
                </div>
                <div className={styles.exerciseData}>
                    Datos: Días: 0, 7, 14, 21. Alturas: 5, 12, 28, 43 cm. Estimar día 10.
                </div>
                <div className={styles.solutionStep}>
                    Diferencias: f[x0,x1]=1.0, f[x1,x2]=2.29, f[x0,x1,x2]=0.031
                </div>
                <div className={styles.solutionStep}>
                    P(10) = 5 + 1.0(10) + 0.031(10)(3) - 0.0029(10)(3)(-4)
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Altura estimada de 18.3 cm.
                </div>
            </div>

            {/* Ejercicio 8 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>8.</span> Presión vs Altura</div>
                <div className={styles.problemStatement}>
                    La presión atmosférica varía con la altura: 0km (101.3kPa), 5km (54.0kPa), 10km (26.5kPa), 15km (12.1kPa). Estimar a 8km.
                </div>
                <div className={styles.exerciseData}>
                    Datos: 0km: 101.3; 5km: 54.0; 10km: 26.5; 15km: 12.1. Estimar 8km.
                </div>
                <div className={styles.solutionStep}>
                    P(8) = 101.3 - 9.46(8) + 0.396(8)(3)
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Presión estimada de 35.1 kPa.
                </div>
            </div>

            {/* Ejercicio 9 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>9.</span> Costo total de producción</div>
                <div className={styles.problemStatement}>
                    Se tienen los costos de producción: 50u ($3,500), 100u ($6,200), 150u ($8,800), 200u ($11,300). Estimar costo para 125 unidades.
                </div>
                <div className={styles.exerciseData}>
                    Datos: 50u: $3500 ... 200u: $11300. Estimar 125u.
                </div>
                <div className={styles.solutionStep}>
                    P(125) = 3500 + 54(75) - 0.02(75)(25)
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Costo estimado de $7,512.50.
                </div>
            </div>
          </div>
        </section>

        {/* --- 4. INTERPOLACIÓN CUADRÁTICA --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-superscript"></i> 4. Interpolación Cuadrática
            </h2>
            <p className={styles.text}>
                Versión simplificada para exactamente 3 puntos, resulta en una parábola.
            </p>

            <div className={styles.formulaBox}>
                P(x) = ax<sup>2</sup> + bx + c
            </div>

            {/* Ejercicio 10 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>10.</span> Altura vs tiempo</div>
                <div className={styles.problemStatement}>
                    Un objeto sube y se registra: 10s (0.5km), 20s (2.1km), 30s (3.4km). Estimar altura a los 25s.
                </div>
                <div className={styles.exerciseData}>
                    Datos: 10s: 0.5km; 20s: 2.1km; 30s: 3.4km. Estimar 25s.
                </div>
                <div className={styles.solutionStep}>
                    Sistema resuelto: a = -0.015, b = 0.205, c = -0.5
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Altura estimada de 2.8 km.
                </div>
            </div>

            {/* Ejercicio 11 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>11.</span> Eficiencia de panel solar</div>
                <div className={styles.problemStatement}>
                    Eficiencia según temperatura: 20°C (22%), 40°C (18%), 60°C (12%). Estimar eficiencia a 45°C.
                </div>
                <div className={styles.exerciseData}>
                    Datos: 20°C: 22%; 40°C: 18%; 60°C: 12%. Estimar 45°C.
                </div>
                <div className={styles.solutionStep}>
                    P(45) con a=-0.005, b=-0.1, c=25
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Eficiencia estimada de 16.4%.
                </div>
            </div>

            {/* Ejercicio 12 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>12.</span> Concentración de fármaco</div>
                <div className={styles.problemStatement}>
                    Concentración en sangre tras horas: 0h (50mg/L), 4h (38mg/L), 8h (28mg/L). Estimar a las 3h.
                </div>
                <div className={styles.exerciseData}>
                    Datos: 0h: 50mg; 4h: 38mg; 8h: 28mg. Estimar 3h.
                </div>
                <div className={styles.solutionStep}>
                    P(3) = -0.5(9) - 6(3) + 50
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Concentración de 32 mg/L.
                </div>
            </div>
          </div>
        </section>

        {/* --- 5. SPLINES CÚBICOS --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-wave-square"></i> 5. Splines Cúbicos
            </h2>
            <p className={styles.text}>
                Usa distintos polinomios de grado 3 en cada intervalo conectados suavemente.
            </p>

            <div className={styles.formulaBox}>
                S<sub>i</sub>(x) = a<sub>i</sub> + b<sub>i</sub>(x-x<sub>i</sub>) + c<sub>i</sub>(x-x<sub>i</sub>)<sup>2</sup> + d<sub>i</sub>(x-x<sub>i</sub>)<sup>3</sup>
            </div>

            {/* Ejercicio 13 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>13.</span> Elevación en estación de túnel</div>
                <div className={styles.problemStatement}>
                    Se miden elevaciones en un túnel: 0m (250m), 50m (263m), 100m (258m), 150m (270m). Estimar elevación a los 75m.
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Elevación estimada de 261.5 m (para 75m).
                </div>
            </div>

            {/* Ejercicio 14 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>14.</span> Posición en función de x</div>
                <div className={styles.problemStatement}>
                    Dada la posición en función de x, interpolar para x = 12 cm usando Splines Cúbicos.
                </div>
                <div className={styles.solutionStep}>
                    S(12) = 15 + 1.8(2) - 0.09(4) - 0.003(8)
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: 18.3 cm.
                </div>
            </div>

            {/* Ejercicio 15 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>15.</span> Velocidad de fluido en tubería</div>
                <div className={styles.problemStatement}>
                    A partir de mediciones de velocidad en una tubería, estimar la velocidad en un punto intermedio.
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Velocidad estimada de 2.05 m/s.
                </div>
            </div>
          </div>
        </section>

        {/* --- 6. ERROR DE INTERPOLACIÓN --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-exclamation-triangle"></i> 6. Error de Interpolación
            </h2>
            
            <div className={styles.formulaBox}>
                E ≤ 
                <span className={styles.fraction}>
                    <span className={styles.num}>M</span>
                    <span className={styles.den}>(n+1)!</span>
                </span>
                · |(x-x<sub>0</sub>)...(x-x<sub>n</sub>)|
            </div>

            {/* Ejercicio 16 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>16.</span> Error en sensor</div>
                <div className={styles.problemStatement}>
                    Un sensor mide 18°C a las 6:00 y 30°C a las 14:00. Calcular la cota de error para una estimación intermedia.
                </div>
                <div className={styles.exerciseData}>
                    Datos: 18°C a las 6:00 y 30°C a las 14:00.
                </div>
                <div className={styles.solutionStep}>
                    E = (0.5 / 2) · |(10-6)(10-14)| = 0.25 · 16
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Error máximo de 4°C.
                </div>
            </div>

            {/* Ejercicio 17 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>17.</span> Función sin(x)</div>
                <div className={styles.problemStatement}>
                    Para la función f(x) = sin(x), ¿cuántos puntos de interpolación se necesitan para garantizar un error menor a 0.01?
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Se necesitan 7 puntos para error ≤ 0.01.
                </div>
            </div>

            {/* Ejercicio 18 */}
            <div className={styles.exerciseBox}>
                <div className={styles.exerciseTitle}><span>18.</span> Error en altura de robot</div>
                <div className={styles.problemStatement}>
                    Calculando la altura de un robot con datos en t=10, 20, 30. Estimar el error máximo de la interpolación parabólica.
                </div>
                <div className={styles.solutionStep}>
                    E = (0.12 / 6) · |(25-10)(25-20)(25-30)| = 0.02 · 375
                </div>
                <div className={styles.finalAnswer}>
                    Respuesta: Error máximo de 7.5 km. (Parábola insuficiente).
                </div>
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