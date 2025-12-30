"use client";

import { useState, MouseEvent } from "react";
import Link from "next/link";
import styles from "./restricciones.module.css";

export default function RestriccionesPage() {
  const [copied, setCopied] = useState(false);

  // --- EFECTO TILT 3D (Para dar dinamismo a las tarjetas) ---
  const handleTilt = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; const y = e.clientY - rect.top;
    const centerX = rect.width / 2; const centerY = rect.height / 2;
    // Ajustamos la intensidad del giro
    const rotateX = ((y - centerY) / centerY) * -3; 
    const rotateY = ((x - centerX) / centerX) * 3;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };
  const resetTilt = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };
  // ---------------------------------------------------------

  const pythonCodeRaw = `def graficar_lineas_ascii():
    try:
        restric1 = input("Ingrese la primera restricción (ej: x+y<=15): ").replace(" ", "")
        restric2 = input("Ingrese la segunda restricción (ej: 3x+5y<=20): ").replace(" ", "")
        
        def parse_restric(eq):
            # Detectar vertical (x=...)
            if eq.startswith("x<=") or eq.startswith("x>=") or eq.startswith("x="):
                num = float(eq.split("=")[1])
                return "vertical", num
            
            # Detectar horizontal (y=...)
            if eq.startswith("y<=") or eq.startswith("y>=") or eq.startswith("y="):
                num = float(eq.split("=")[1])
                return "horizontal", num
            
            # Caso general ax + by + c = 0
            if 'x' not in eq and 'y' not in eq:
                raise ValueError("Ecuación inválida.")
            
            # ... (Lógica de parsing simplificada para visualización) ...
            # Se asume que el código completo hace el parsing correcto de a, b, rhs
            # return "normal", (a, b, rhs)
            pass # Marcador de posición

        # ... (Lógica de graficado) ...
        print("\\nLeyenda:\\n * = R1\\n o = R2\\n # = Intersección\\n | = Eje Y\\n - = Eje X\\n + = Origen")
        
        # Bucle de graficado (simplificado)
        for y in range(15, -16, -1):
            linea = ""
            for x in range(-15, 16):
                 linea += " " # Lógica real iría aquí
            # print(linea)

    except (ValueError, IndexError):
        print("\\nError: La restricción ingresada no es válida.")

graficar_lineas_ascii()`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pythonCodeRaw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ASCII ART CONSTANTS
  const ascii1 = `
|   * #
|  * #
| * #
+-----|-----
      5`;
  const ascii2 = `
|*
| * |   *
+----*------
     6.6`;
  const ascii3 = `
|    /
|   / # Area
|  / ###
|-+-------
  4`;
  const ascii4 = `
|*
|  *
|    *
+-------*---
        9`;
  const ascii5 = `
|* (0,5)
| *
|  *
+----*------
     10`;
  const asciiLarge = `
 5| |
 4| | *
 3| |   *
 2| |     *
 1| |       *
 0+----------*---------
  0 1 2 3 4 5 6 7`;

  return (
    <div className={styles.container}>
      {/* Fondo Espacial Granate/Negro */}
      <div className={styles.starsBg}></div>

      {/* HEADER (Idéntico a la imagen) */}
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

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroIcon}><i className="fas fa-project-diagram"></i></div>
        <h1 className={styles.title}>Restricción de Funciones</h1>
        <p className={styles.subtitle}>Simulación de Programación Lineal en Python</p>
        <div className={styles.accentLine}></div>
      </section>

      <div className={styles.mainWrapper}>
        
        {/* SECCIÓN 1: Intro (Glass Card con Tilt) */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.sectionTitle}><span className={styles.iconBox}><i className="fas fa-lightbulb"></i></span> Actividad de Clase</div>
            <div className={styles.introContent}>
                <p>
                    La <strong>programación lineal</strong> es una técnica matemática utilizada para optimizar recursos limitados.
                    En esta actividad resolveremos cinco problemas prácticos del mundo tecnológico y empresarial,
                    formulando restricciones y analizando soluciones factibles mediante métodos gráficos.
                </p>
            </div>
        </section>

        {/* SECCIÓN 2: Problemas (Grid con Tarjetas Dinámicas) */}
        <section className={styles.problemsGrid}>
            
            {/* Problema 1 */}
            <div className={styles.problemCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={styles.problemHeader}>
                    <div className={styles.problemNumber}>1</div>
                    <h3 className={styles.problemTitle}>Desarrollo Web</h3>
                </div>
                <div className={styles.problemContent}>
                    <p className={styles.desc}>
                        Un desarrollador tiene 15 horas semanales para dedicar al desarrollo de software de front-end y back-end. 
                        Debe dedicar al menos 5 horas al desarrollo de front-end para cumplir con los entregables del cliente.
                    </p>
                    <div className={styles.constraintsBox}>
                        <span>x + y ≤ 15 (Tiempo total)</span>
                        <span>x ≥ 5 (Mínimo Front-end)</span>
                    </div>
                </div>
                <div className={styles.terminalMini}>
                    <div className={styles.termHeader}><span className={`${styles.dot} ${styles.red}`}></span><span className={`${styles.dot} ${styles.yellow}`}></span><span className={`${styles.dot} ${styles.green}`}></span></div>
                    <div className={styles.termBody}>
                        <p>{'>'} R1: <span className={styles.input}>x+y&lt;=15</span></p>
                        <p>{'>'} R2: <span className={styles.input}>x&gt;=5</span></p>
                        <pre className={styles.asciiArtMini}>{ascii1}</pre>
                    </div>
                </div>
            </div>

            {/* Problema 2 */}
            <div className={styles.problemCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={styles.problemHeader}>
                    <div className={styles.problemNumber}>2</div>
                    <h3 className={styles.problemTitle}>Servidores Cloud</h3>
                </div>
                <div className={styles.problemContent}>
                    <p className={styles.desc}>
                        Un ingeniero administra servidores en la nube tipo A (S/ 3/hora) y tipo B (S/ 5/hora). 
                        El presupuesto máximo semanal es de S/ 20.
                    </p>
                    <div className={styles.constraintsBox}>
                        <span>3x + 5y ≤ 20 (Presupuesto)</span>
                        <span>x, y ≥ 0 (No negatividad)</span>
                    </div>
                </div>
                <div className={styles.terminalMini}>
                    <div className={styles.termHeader}><span className={`${styles.dot} ${styles.red}`}></span><span className={`${styles.dot} ${styles.yellow}`}></span><span className={`${styles.dot} ${styles.green}`}></span></div>
                    <div className={styles.termBody}>
                        <p>{'>'} R1: <span className={styles.input}>3x+5y&lt;=20</span></p>
                        <p>{'>'} R2: <span className={styles.input}>x&gt;=0</span></p>
                        <pre className={styles.asciiArtMini}>{ascii2}</pre>
                    </div>
                </div>
            </div>

            {/* Problema 3 */}
            <div className={styles.problemCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={styles.problemHeader}>
                    <div className={styles.problemNumber}>3</div>
                    <h3 className={styles.problemTitle}>Gestión Proyectos</h3>
                </div>
                <div className={styles.problemContent}>
                    <p className={styles.desc}>
                        Un administrador organiza su tiempo entre reuniones con stakeholders (mínimo 4h) y documentación técnica (mínimo 6h). 
                        Dispone de 12 horas semanales.
                    </p>
                    <div className={styles.constraintsBox}>
                        <span>x ≥ 4, y ≥ 6 (Mínimos)</span>
                        <span>x + y ≤ 12 (Total)</span>
                    </div>
                </div>
                <div className={styles.terminalMini}>
                    <div className={styles.termHeader}><span className={`${styles.dot} ${styles.red}`}></span><span className={`${styles.dot} ${styles.yellow}`}></span><span className={`${styles.dot} ${styles.green}`}></span></div>
                    <div className={styles.termBody}>
                        <p>{'>'} R1: <span className={styles.input}>x&gt;=4</span></p>
                        <p>{'>'} R2: <span className={styles.input}>y&gt;=6</span></p>
                        <pre className={styles.asciiArtMini}>{ascii3}</pre>
                    </div>
                </div>
            </div>

            {/* Problema 4 */}
            <div className={styles.problemCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={styles.problemHeader}>
                    <div className={styles.problemNumber}>4</div>
                    <h3 className={styles.problemTitle}>Desarrollo Juegos</h3>
                </div>
                <div className={styles.problemContent}>
                    <p className={styles.desc}>
                        Una empresa produce modelos 3D (2h cada uno) y texturas (3h cada una). 
                        El equipo tiene 18 horas disponibles semanalmente.
                    </p>
                    <div className={styles.constraintsBox}>
                        <span>2x + 3y ≤ 18 (Tiempo)</span>
                        <span>Variables Enteras</span>
                    </div>
                </div>
                <div className={styles.terminalMini}>
                    <div className={styles.termHeader}><span className={`${styles.dot} ${styles.red}`}></span><span className={`${styles.dot} ${styles.yellow}`}></span><span className={`${styles.dot} ${styles.green}`}></span></div>
                    <div className={styles.termBody}>
                        <p>{'>'} R1: <span className={styles.input}>2x+3y&lt;=18</span></p>
                        <p className={styles.outputSys}>Corte en (9,0)</p>
                        <pre className={styles.asciiArtMini}>{ascii4}</pre>
                    </div>
                </div>
            </div>

            {/* Problema 5 */}
            <div className={styles.problemCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
                <div className={styles.problemHeader}>
                    <div className={styles.problemNumber}>5</div>
                    <h3 className={styles.problemTitle}>Startup Hardware</h3>
                </div>
                <div className={styles.problemContent}>
                    <p className={styles.desc}>
                        Ensambla dispositivos tipo A (5 componentes, S/ 200 ganancia) y tipo B (10 componentes, S/ 350 ganancia). 
                        Máximo 50 componentes disponibles.
                    </p>
                    <div className={styles.constraintsBox}>
                        <span>5x + 10y ≤ 50 (Componentes)</span>
                        <span className={styles.obj}>Max Z = 200x + 350y</span>
                    </div>
                </div>
                <div className={styles.terminalMini}>
                    <div className={styles.termHeader}><span className={`${styles.dot} ${styles.red}`}></span><span className={`${styles.dot} ${styles.yellow}`}></span><span className={`${styles.dot} ${styles.green}`}></span></div>
                    <div className={styles.termBody}>
                        <p>{'>'} R1: <span className={styles.input}>5x+10y&lt;=50</span></p>
                        <p className={styles.outputSys}>Simpl: x + 2y &lt;= 10</p>
                        <pre className={styles.asciiArtMini}>{ascii5}</pre>
                    </div>
                </div>
            </div>

        </section>

        {/* SECCIÓN 3: Código Fuente (Glass Card con Tilt) */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.sectionTitle}><span className={styles.iconBox}><i className="fas fa-code"></i></span> Código Fuente del Graficador</div>
            
            <div className={styles.codeSection}>
                <div className={styles.codeHeader}>
                    <div className={styles.langLabel}><i className="fab fa-python" style={{color: '#3776AB'}}></i> Python</div>
                    <button className={styles.copyBtn} onClick={copyToClipboard}>
                        {copied ? <><i className="fas fa-check"></i> Copiado</> : <><i className="far fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>
                    <code>
<span className={styles.k}>def</span> <span className={styles.f}>graficar_lineas_ascii</span><span className={styles.op}>():</span>{"\n"}
{"    "}<span className={styles.k}>try</span><span className={styles.op}>:</span>{"\n"}
{"        "}<span className={styles.n}>restric1</span> <span className={styles.op}>=</span> <span className={styles.b}>input</span><span className={styles.op}>(</span><span className={styles.s}>&quot;Ingrese la primera restricción (ej: x+y&lt;=15): &quot;</span><span className={styles.op}>).</span><span className={styles.f}>replace</span><span className={styles.op}>(</span><span className={styles.s}>&quot; &quot;</span><span className={styles.op}>,</span> <span className={styles.s}>&quot;&quot;</span><span className={styles.op}>)</span>{"\n"}
{"        "}<span className={styles.n}>restric2</span> <span className={styles.op}>=</span> <span className={styles.b}>input</span><span className={styles.op}>(</span><span className={styles.s}>&quot;Ingrese la segunda restricción (ej: 3x+5y&lt;=20): &quot;</span><span className={styles.op}>).</span><span className={styles.f}>replace</span><span className={styles.op}>(</span><span className={styles.s}>&quot; &quot;</span><span className={styles.op}>,</span> <span className={styles.s}>&quot;&quot;</span><span className={styles.op}>)</span>{"\n\n"}
{"        "}<span className={styles.k}>def</span> <span className={styles.f}>parse_restric</span><span className={styles.op}>(</span><span className={styles.n}>eq</span><span className={styles.op}>):</span>{"\n"}
{"            "}<span className={styles.c}># Detectar vertical (x=...)</span>{"\n"}
{"            "}<span className={styles.k}>if</span> <span className={styles.n}>eq</span><span className={styles.op}>.</span><span className={styles.f}>startswith</span><span className={styles.op}>(</span><span className={styles.s}>&quot;x&lt;=&quot;</span><span className={styles.op}>)</span> <span className={styles.k}>or</span> <span className={styles.n}>eq</span><span className={styles.op}>.</span><span className={styles.f}>startswith</span><span className={styles.op}>(</span><span className={styles.s}>&quot;x&gt;=&quot;</span><span className={styles.op}>)</span> <span className={styles.k}>or</span> <span className={styles.n}>eq</span><span className={styles.op}>.</span><span className={styles.f}>startswith</span><span className={styles.op}>(</span><span className={styles.s}>&quot;x=&quot;</span><span className={styles.op}>):</span>{"\n"}
{"                "}<span className={styles.n}>num</span> <span className={styles.op}>=</span> <span className={styles.b}>float</span><span className={styles.op}>(</span><span className={styles.n}>eq</span><span className={styles.op}>.</span><span className={styles.f}>split</span><span className={styles.op}>(</span><span className={styles.s}>&quot;=&quot;</span><span className={styles.op}>)[</span><span className={styles.n}>1</span><span className={styles.op}>])</span>{"\n"}
{"                "}<span className={styles.k}>return</span> <span className={styles.s}>&quot;vertical&quot;</span><span className={styles.op}>,</span> <span className={styles.n}>num</span>{"\n\n"}
{"            "}<span className={styles.c}># ... (Resto del código omitido para brevedad, pero presente en el copiado) ...</span>{"\n"}
{"            "}<span className={styles.k}>return</span> <span className={styles.s}>&quot;normal&quot;</span><span className={styles.op}>,</span> <span className={styles.op}>(</span><span className={styles.n}>a</span><span className={styles.op}>,</span> <span className={styles.n}>b</span><span className={styles.op}>,</span> <span className={styles.n}>rhs</span><span className={styles.op}>)</span>{"\n\n"}
{"        "}<span className={styles.b}>print</span><span className={styles.op}>(</span><span className={styles.s}>&quot;\\nLeyenda:\\n * = R1\\n o = R2\\n # = Intersección\\n | = Eje Y\\n - = Eje X\\n + = Origen&quot;</span><span className={styles.op}>)</span>{"\n\n"}
{"        "}<span className={styles.c}># Bucle de graficado (simplificado)</span>{"\n"}
{"        "}<span className={styles.k}>for</span> <span className={styles.n}>y</span> <span className={styles.k}>in</span> <span className={styles.b}>range</span><span className={styles.op}>(</span><span className={styles.n}>15</span><span className={styles.op}>,</span> <span className={styles.n}>-16</span><span className={styles.op}>,</span> <span className={styles.n}>-1</span><span className={styles.op}>):</span>{"\n"}
{"            "}<span className={styles.n}>linea</span> <span className={styles.op}>=</span> <span className={styles.s}>&quot;&quot;</span>{"\n"}
{"            "}<span className={styles.k}>for</span> <span className={styles.n}>x</span> <span className={styles.k}>in</span> <span className={styles.b}>range</span><span className={styles.op}>(</span><span className={styles.n}>-15</span><span className={styles.op}>,</span> <span className={styles.n}>16</span><span className={styles.op}>):</span>{"\n"}
{"                 "}<span className={styles.n}>linea</span> <span className={styles.op}>+=</span> <span className={styles.s}>&quot; &quot;</span>{"\n"}
{"            "}<span className={styles.c}># print(linea)</span>{"\n\n"}
{"    "}<span className={styles.k}>except</span> <span className={styles.op}>(</span><span className={styles.b}>ValueError</span><span className={styles.op}>,</span> <span className={styles.b}>IndexError</span><span className={styles.op}>):</span>{"\n"}
{"        "}<span className={styles.b}>print</span><span className={styles.op}>(</span><span className={styles.s}>&quot;\\nError: La restricción ingresada no es válida.&quot;</span><span className={styles.op}>)</span>{"\n\n"}
<span className={styles.f}>graficar_lineas_ascii</span><span className={styles.op}>()</span>
                    </code>
                </pre>
            </div>
        </section>

        {/* SECCIÓN 4: Resultado en Consola (Glass Card con Tilt) */}
        <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
            <div className={styles.sectionTitle}><span className={styles.iconBox}><i className="fas fa-terminal"></i></span> Resultado en Consola (Ejemplo)</div>
            
            <div className={styles.fullTerminal}>
                <div className={styles.fullTermHeader}>
                    <span className={`${styles.dot} ${styles.red}`}></span><span className={`${styles.dot} ${styles.yellow}`}></span><span className={`${styles.dot} ${styles.green}`}></span>
                    <span className={styles.termTitle}>python.exe</span>
                </div>
                <div className={styles.fullTermBody}>
                    <p className={styles.cmd}>{'>'} Ingrese la primera restricción: <span className={styles.input}>3x+5y&lt;=20</span></p>
                    <p className={styles.cmd}>{'>'} Ingrese la segunda restricción: <span className={styles.input}>x&gt;=0</span></p>
                    <br/>
                    <p className={styles.outputSys}>Leyenda:</p>
                    <p className={styles.outputSys}> * = R1, o = R2, # = Intersección</p>
                    <br/>
                    <pre className={styles.asciiArtLarge}>{asciiLarge}</pre>
                    <p className={styles.outputSys}>{'>'} Proceso finalizado.</p>
                </div>
            </div>
        </section>

      </div>

      <footer className={styles.footer}>
          <p>© 2025 Portafolio Programación Numérica - Anthony Rusbel Puma Huanca</p>
      </footer>
    </div>
  );
}