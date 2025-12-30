"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./graficador.module.css";

// 1. EL GRÁFICO ASCII (Guardado en variable para que salga recto y sin errores)
const asciiGraph = `
               o|               
              o |               
             o  |               
            o   |               
           o    |               
          o     |               
         o      |               
        o       |               
       #        |               
      o *       |               
     o   *      |               
    o     *     |               
   o       *    |               
  o         *   |               
 o           *  |               
o             * |               
---------------+---------------
              * |o              
            *   | o             
          *     |  o            
        *       |   o           
      *         |    o          
    *           |     o         
  *             |      o        
 *              |       o       
|               |        o      
|               |         o     
|               |          o    
|               |           o   
|               |            o  
|               |             o 
|               |              o
                        `;

// 2. EL CÓDIGO PYTHON (Guardado en variable para evitar errores de comillas)
const pythonCode = `def graficar_lineas_ascii():
    try:
        # Solicitar las funciones al usuario
        ecuacion1 = input("Ingrese la primera función (ejemplo: 2x+1): ").replace(" ", "")
        ecuacion2 = input("Ingrese la segunda función (ejemplo: -x+3): ").replace(" ", "")

        def get_mb(eq):
            # Extraer pendiente (m) y ordenada (b)
            if 'x' not in eq:
                return 0, float(eq)
            
            m_str = eq.split('x')[0]
            m = 1 if m_str in ('', '+') else -1 if m_str == '-' else float(m_str)
            
            b_str = eq.split('x')[1] if len(eq.split('x')) > 1 else ''
            b = float(b_str) if b_str else 0
            
            return m, b

        m1, b1 = get_mb(ecuacion1)
        m2, b2 = get_mb(ecuacion2)

        print("\\nLeyenda:\\n* = F1\\no = F2\\n# = Intersección\\n| = Eje Y\\n- = Eje X\\n+ = Origen")
        
        # Generar el plano cartesiano
        for y in range(15, -16, -1):
            linea = ""
            for x in range(-15, 16):
                on_f1 = round(m1 * x + b1) == y
                on_f2 = round(m2 * x + b2) == y
                
                if on_f1 and on_f2: linea += "#"  # Intersección
                elif on_f1: linea += "*"  # Función 1
                elif on_f2: linea += "o"  # Función 2
                elif x == 0 and y == 0: linea += "+"  # Origen
                elif x == 0: linea += "|"  # Eje Y
                elif y == 0: linea += "-"  # Eje X
                else: linea += " "
            print(linea)

    except (ValueError, IndexError):
        print("\\nError: La ecuación ingresada no es válida.")

# Ejecutar el programa
graficar_lineas_ascii()`;

export default function GraficadorPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pythonCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.container}>
      {/* SVG Filtro Gooey */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className={styles.gridBg}></div>
      <div className={styles.vignette}></div>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.gooeyWrapper}>
            <Link href="/unidades/unidad-i" className={styles.gooeyBtn}>
                <i className="fas fa-arrow-left"></i> Volver a Unidad 1
            </Link>
          </div>
          <div className={styles.studentInfo}>
            <div className={styles.badge}><i className="fas fa-user-graduate"></i> Anthony Rusbel Puma Huanca</div>
            <div className={styles.badge}><i className="fas fa-id-card"></i> 240132</div>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroIcon}><i className="fas fa-chart-line"></i></div>
        <h1 className={styles.title}>Graficador de Funciones Lineales</h1>
        <p className={styles.subtitle}>Visualización en Plano Cartesiano ASCII</p>
        <div className={styles.separator}></div>
      </section>

      <div className={styles.mainWrapper}>
          
          {/* SECCIÓN 1: Descripción */}
          <section className={styles.geoCard}>
              <div className={styles.sectionHeader}>
                  <div className={styles.iconBox}><i className="fas fa-book-open"></i></div>
                  <h2>Descripción del Proyecto</h2>
              </div>
              <div className={styles.textBlock}>
                  <p>
                      Una <strong>función</strong> representa una relación matemática entre dos conjuntos, 
                      donde cada elemento del dominio (entrada) se asocia con exactamente un elemento del 
                      codominio (salida). Comúnmente se expresa mediante la notación:
                  </p>
                  <div className={styles.formulaBox}>y = f(x)</div>
                  
                  <p>
                      Las <strong>funciones lineales</strong> son aquellas cuya representación gráfica forma 
                      una línea recta en el plano cartesiano. Su expresión algebraica general es:
                  </p>
                  <div className={styles.formulaBox}>f(x) = mx + b</div>
                  
                  <div className={styles.definitionGrid}>
                      <div className={styles.defItem}>
                          <div className={styles.defHeader}><i className="fas fa-ruler-combined"></i> m (pendiente)</div>
                          <div className={styles.defContent}>
                              Indica la inclinación de la recta.
                              <ul>
                                  {/* Usamos &gt; y &lt; para evitar errores */}
                                  <li><strong>m &gt; 0:</strong> Sube de izquierda a derecha</li>
                                  <li><strong>m &lt; 0:</strong> Baja de izquierda a derecha</li>
                                  <li><strong>m = 0:</strong> Horizontal</li>
                              </ul>
                          </div>
                      </div>
                      <div className={styles.defItem}>
                          <div className={styles.defHeader}><i className="fas fa-map-pin"></i> b (ordenada)</div>
                          <div className={styles.defContent}>
                              Representa el punto donde la recta intersecta el eje Y. Es el valor de la función 
                              cuando x = 0.
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* SECCIÓN 2: Objetivos */}
          <section className={styles.geoCard}>
              <div className={styles.sectionHeader}>
                  <div className={styles.iconBox}><i className="fas fa-bullseye"></i></div>
                  <h2>Objetivo del Graficador</h2>
              </div>
              <div className={styles.textBlock}>
                  <p>
                      Este programa desarrollado en Python tiene como propósito <strong>reconocer y visualizar 
                      dos funciones lineales</strong> en un plano cartesiano utilizando caracteres ASCII.
                  </p>
                  
                  <div className={styles.featuresGrid}>
                      <div className={styles.featureCard}>
                          <div className={styles.featureIcon}><i className="fas fa-terminal"></i></div>
                          <h3>Interfaz de Consola</h3>
                          <p>Funciona directamente en la terminal sin librerías gráficas.</p>
                      </div>
                      <div className={styles.featureCard}>
                          <div className={styles.featureIcon}><i className="fas fa-ruler"></i></div>
                          <h3>Plano Limitado</h3>
                          <p>Rango de -15 a +15 en ambos ejes para visualización óptima.</p>
                      </div>
                      <div className={styles.featureCard}>
                          <div className={styles.featureIcon}><i className="fab fa-python"></i></div>
                          <h3>Python Puro</h3>
                          <p>Implementación sin dependencias externas como matplotlib.</p>
                      </div>
                      <div className={styles.featureCard}>
                          <div className={styles.featureIcon}><i className="fas fa-eye"></i></div>
                          <h3>Identificación Visual</h3>
                          <p>Símbolos únicos (*, o, #) para diferenciar cada función.</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* SECCIÓN 3: Código */}
          <section className={styles.geoCard}>
              <div className={styles.sectionHeader}>
                  <div className={styles.iconBox}><i className="fas fa-code"></i></div>
                  <h2>Código del Graficador</h2>
              </div>
              
              <div className={styles.highlightBox}>
                  <div className={styles.infoBoxTitle}>
                      <i className="fas fa-info-circle"></i> Funcionamiento
                  </div>
                  <p>
                      {/* Usamos &quot; para las comillas dobles */}
                      El programa solicita dos funciones lineales (ej. &quot;2x+1&quot;), analiza sus componentes 
                      (pendiente y ordenada) y genera una representación ASCII.
                  </p>
              </div>
              
              <div className={styles.codeSection}>
                  <div className={styles.pythonHeader}>
                      <div className={styles.langLabel}><i className="fab fa-python" style={{color: '#3776AB'}}></i> Python</div>
                      <button className={styles.copyBtn} onClick={copyToClipboard}>
                          {copied ? <><i className="fas fa-check"></i> Copiado</> : <><i className="far fa-copy"></i> Copiar</>}
                      </button>
                  </div>
                  {/* Aquí renderizamos la variable pythonCode, así evitamos errores de sintaxis en el editor */}
                  <pre className={styles.preBlock}>
                    <code>{pythonCode}</code>
                  </pre>
              </div>
          </section>

          {/* SECCIÓN 4: Ejemplo de Ejecución (Terminal) */}
          <section className={styles.geoCard}>
              <div className={styles.sectionHeader}>
                  <div className={styles.iconBox}><i className="fas fa-gamepad"></i></div>
                  <h2>Ejemplo de Ejecución</h2>
              </div>
              
              <div className={styles.terminal}>
                  <div className={styles.termHeader}>
                      <div className={`${styles.dot} ${styles.red}`}></div>
                      <div className={`${styles.dot} ${styles.yellow}`}></div>
                      <div className={`${styles.dot} ${styles.green}`}></div>
                      <span className={styles.termTitle}>consola_python.exe</span>
                  </div>
                  <div className={styles.termBody}>
                      <p className={styles.cmd}>{'>'} Ingrese la primera función: <span className={styles.input}>2x+1</span></p>
                      <p className={styles.cmd}>{'>'} Ingrese la segunda función: <span className={styles.input}>-x+3</span></p>
                      <br/>
                      <p className={styles.output}>Leyenda:</p>
                      <p className={styles.output}>* = F1</p>
                      <p className={styles.output}>o = F2</p>
                      <p className={styles.output}># = Intersección</p>
                      <br/>
                      
                      {/* Aquí renderizamos la variable asciiGraph para que salga recto */}
                      <pre className={styles.asciiArt}>{asciiGraph}</pre>
                  </div>
              </div>

              <div className={styles.highlightBox} style={{marginTop: '30px'}}>
                  <div className={styles.infoBoxTitle}>
                      <i className="fas fa-lightbulb"></i> Análisis
                  </div>
                  <p>
                      Las funciones <strong>f₁(x) = 2x+1</strong> y <strong>f₂(x) = -x+3</strong> se intersectan 
                      en el punto marcado con <strong>#</strong>. Se observa claramente la pendiente positiva de f₁ 
                      y la negativa de f₂.
                  </p>
              </div>
          </section>

      </div>

      <footer className={styles.footer}>
          <p>© 2025 Portafolio Programación Numérica - Anthony Rusbel Puma Huanca</p>
      </footer>
    </div>
  );
}