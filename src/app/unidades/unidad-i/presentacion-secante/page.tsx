import Link from "next/link";
import styles from "./presentacion.module.css";

export default function PresentacionSecantePage() {
  return (
    <div className={styles.container}>
      
      {/* HEADER DE NAVEGACIÓN (Panel Superior Exacto) */}
      <header className={styles.header}>
        <Link href="/unidades/unidad-i" className={styles.backButton}>
          <i className="fas fa-arrow-left"></i> Volver a Unidad 1
        </Link>
        
        <div className={styles.studentInfo}>
            <span className={styles.infoBadge}>
                <i className="fas fa-user-graduate"></i> Anthony Rusbel Puma Huanca
            </span>
            <span className={styles.infoBadge}>
                <i className="fas fa-id-card"></i> 240132
            </span>
        </div>
      </header>

      {/* --- TARJETA 1: PORTADA --- */}
      <div className={styles.contentCard}>
        <div className={styles.heroSection}>
            <p className={styles.university}>Universidad Nacional del Altiplano — FINESI</p>
            <h1 className={styles.mainTitle}>Método de la Secante</h1>
            
            <div className={styles.metaInfo}>
            <div className={styles.metaBlock}>
                <h4>Integrantes</h4>
                <ul>
                <li>Aguilar Ccopa Leydy Griselda</li>
                <li>Churata Mamani Milena Kely</li>
                <li>Puma Huanca Anthony Rusbel</li>
                <li>Quispe Coaguila Yair Dilan</li>
                </ul>
            </div>
            <div className={styles.metaBlock}>
                <h4>Fecha</h4>
                <p>9 de octubre de 2025</p>
            </div>
            </div>
        </div>
      </div>

      {/* --- TARJETA 2: INTRODUCCIÓN --- */}
      <div className={styles.contentCard}>
        <h2 className={styles.sectionTitle}>1. Introducción</h2>
        <p className={styles.textBlock}>
          El método de la secante es un procedimiento numérico para encontrar raíces de ecuaciones no lineales de la forma:
        </p>
        <div className={styles.mathBox}>
          f(x) = 0
        </div>
        <p className={styles.textBlock}>
          Se basa en aproximar la derivada mediante una recta secante que pasa por dos puntos de la función. Es una mejora del método de Newton-Raphson cuando no se dispone de la derivada analítica.
        </p>
      </div>

      {/* --- TARJETA 3: IDEA PRINCIPAL --- */}
      <div className={styles.contentCard}>
        <h2 className={styles.sectionTitle}>2. Idea principal</h2>
        <p className={styles.textBlock}>
          <strong>Concepto clave:</strong> En lugar de usar la derivada <em>f&apos;(x)</em>, se aproxima con diferencias finitas:
        </p>
        <div className={styles.mathBox}>
          f&apos;(x<sub>n</sub>) ≈ 
          <span className={styles.fraction}>
            <span className={styles.num}>f(x<sub>n</sub>) - f(x<sub>n-1</sub>)</span>
            <span className={styles.den}>x<sub>n</sub> - x<sub>n-1</sub></span>
          </span>
        </div>
        <p className={styles.textBlock}>
          Sustituyendo en la fórmula de Newton-Raphson obtenemos la fórmula iterativa de la Secante:
        </p>
        <div className={styles.mathBox}>
          x<sub>n+1</sub> = x<sub>n</sub> - f(x<sub>n</sub>) · 
          <span className={styles.fraction}>
            <span className={styles.num}>x<sub>n</sub> - x<sub>n-1</sub></span>
            <span className={styles.den}>f(x<sub>n</sub>) - f(x<sub>n-1</sub>)</span>
          </span>
        </div>
      </div>

      {/* --- TARJETA 4: PASOS DEL MÉTODO --- */}
      <div className={styles.contentCard}>
        <h2 className={styles.sectionTitle}>3. Pasos del método</h2>
        <ol className={styles.numberedList}>
          <li>
            <span>Elegir dos valores iniciales <strong>x<sub>0</sub></strong> y <strong>x<sub>1</sub></strong> cercanos a la raíz.</span>
          </li>
          <li>
            <span>Calcular <strong>f(x<sub>0</sub>)</strong> y <strong>f(x<sub>1</sub>)</strong>.</span>
          </li>
          <li>
            <span>Usar la fórmula recursiva para hallar el siguiente punto.</span>
          </li>
          <li>
            <span>Repetir hasta que el error sea menor a la tolerancia: <strong>|x<sub>n+1</sub> - x<sub>n</sub>| &lt; ε</strong>.</span>
          </li>
        </ol>
      </div>

      {/* --- TARJETA 5: VENTAJAS Y DESVENTAJAS --- */}
      <div className={styles.contentCard}>
        <h2 className={styles.sectionTitle}>4. Ventajas y desventajas</h2>
        <div className={styles.comparisonGrid}>
          <div className={styles.cardBox}>
            <h4>Ventajas</h4>
            <ul className={styles.customList}>
              <li>No requiere calcular derivadas analíticas.</li>
              <li>Converge más rápido que el método de bisección.</li>
            </ul>
          </div>
          <div className={styles.cardBox}>
            <h4>Desventajas</h4>
            <ul className={styles.customList}>
              <li>Puede divergir si los puntos iniciales no son buenos.</li>
              <li>Requiere dos valores iniciales (a diferencia de Newton que requiere uno).</li>
            </ul>
          </div>
        </div>
      </div>

      {/* --- TARJETA 6: EJEMPLO APLICADO --- */}
      <div className={styles.contentCard}>
        <h2 className={styles.sectionTitle}>5. Ejemplo aplicado</h2>
        <div className={styles.exampleBox}>
          <p className={styles.textBlock}>
            <strong>Problema:</strong> Encontrar la raíz de la función:
          </p>
          <div className={styles.mathBox}>f(x) = x<sup>2</sup> - 4</div>
          
          <p className={styles.textBlock}>
            <strong>Solución:</strong> Tomamos valores iniciales <strong>x<sub>0</sub> = 1</strong> y <strong>x<sub>1</sub> = 3</strong>.
          </p>

          <span className={styles.stepTitle}>Iteración 1:</span>
          <div className={styles.mathBox}>
            x<sub>2</sub> = 3 - f(3) · 
            <span className={styles.fraction}>
              <span className={styles.num}>3 - 1</span>
              <span className={styles.den}>f(3) - f(1)</span>
            </span>
             = 3 - 
            <span className={styles.fraction}>
              <span className={styles.num}>10</span>
              <span className={styles.den}>8</span>
            </span>
             = 1.75
          </div>

          <span className={styles.stepTitle}>Iteración 2:</span>
          <div className={styles.mathBox}>
            x<sub>3</sub> = 1.75 - f(1.75) · 
            <span className={styles.fraction}>
              <span className={styles.num}>1.75 - 3</span>
              <span className={styles.den}>f(1.75) - f(3)</span>
            </span>
             ≈ 2.00
          </div>

          <p className={styles.textBlock} style={{marginTop: '20px', textAlign: 'center'}}>
            <strong>Resultado:</strong> La raíz aproximada es <strong>x ≈ 2</strong>.
          </p>
        </div>
      </div>

      {/* --- TARJETA 7: EJEMPLO REAL --- */}
      <div className={styles.contentCard}>
        <h2 className={styles.sectionTitle}>6. Ejemplo real: Dilatación térmica</h2>
        <div className={styles.exampleBox} style={{borderColor: '#444', background: 'rgba(255,255,255,0.02)'}}>
          <p className={styles.textBlock}>
            <strong>Situación:</strong> Una varilla metálica de longitud inicial <strong>L<sub>0</sub> = 1.00 m</strong> se dilata con la temperatura. Su longitud está dada por:
          </p>
          <div className={styles.mathBox}>
            f(T) = L<sub>0</sub>(1 + αT) - L<sub>m</sub> = 0
          </div>
          <p className={styles.textBlock}>
            Donde α = 1.2 × 10<sup>-5</sup> °C<sup>-1</sup> y L<sub>m</sub> = 1.001 m.
            <br/>
            <strong>Objetivo:</strong> Hallar T cuando la varilla mide 1.001 m.
          </p>

          <span className={styles.stepTitle}>Aplicación del método:</span>
          <p>Valores iniciales: T<sub>0</sub> = 50, T<sub>1</sub> = 100.</p>
          <div className={styles.mathBox}>
            f(50) = -0.0004, &nbsp;&nbsp; f(100) = 0.0002
          </div>
          
          <span className={styles.stepTitle}>Cálculo:</span>
          <div className={styles.mathBox}>
            T<sub>2</sub> = 100 - (0.0002) · 
            <span className={styles.fraction}>
              <span className={styles.num}>50</span>
              <span className={styles.den}>0.0002 - (-0.0004)</span>
            </span>
             = 83.33
          </div>

          <p className={styles.textBlock} style={{marginTop: '20px'}}>
            <strong>Interpretación:</strong> La varilla alcanza la longitud de 1.001 m cuando la temperatura es aproximadamente <strong>83.3 °C</strong>. Este ejemplo es útil cuando solo se tienen datos experimentales y no una derivada analítica fácil.
          </p>
        </div>
      </div>

      {/* --- TARJETA 8: CONCLUSIÓN --- */}
      <div className={styles.contentCard} style={{marginBottom:0}}>
        <section className={styles.conclusionBox}>
            <h2 style={{color: '#fff', marginBottom: '15px'}}>9. Conclusión</h2>
            <p>
            El método de la secante es una herramienta eficiente y práctica para ingeniería y ciencias aplicadas. Aunque es ligeramente menos estable que el método de Newton-Raphson, su capacidad para funcionar sin el cálculo explícito de derivadas lo hace indispensable en situaciones donde la función es compleja o solo se conoce a través de datos discretos.
            </p>
        </section>
      </div>

    </div>
  );
}