"use client";

import { useState, MouseEvent } from "react";
import Link from "next/link";
import styles from "./reconocimiento.module.css";

export default function ReconocimientoPage() {
  const [copied, setCopied] = useState(false);

  // Efecto 3D (Tilt) optimizado
  const handleTilt = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -2; 
    const rotateY = ((x - centerX) / centerX) * 2;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };
  
  const resetTilt = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  // Copiar Código al Portapapeles
  const copyCode = () => {
    const fullCode = `class Funcion:
    def __init__(self, expresion):
        self.expresion = expresion.replace(" ", "")
        self.variables = []
        self.grado = 0

    def analizar(self):
        exp = self.expresion
        for i in range(len(exp)):
            c = exp[i]
            if c.isalpha() and c not in self.variables:
                self.variables.append(c)
        
        self.grado = self.calcular_grado()

    def calcular_grado(self):
        exp = self.expresion
        grado_max = 0
        i = 0
        while i < len(exp):
            if exp[i].isalpha():
                if i + 1 < len(exp) and exp[i + 1] == '^':
                    j = i + 2
                    num = ''
                    while j < len(exp) and exp[j].isdigit():
                        num += exp[j]
                        j += 1
                    if num != '':
                        grado = int(num)
                        if grado > grado_max: grado_max = grado
                else:
                    if grado_max < 1: grado_max = 1
            i += 1
        return grado_max

    def resumen(self):
        if self.grado == 1: tipo = "Función lineal"
        elif self.grado == 2: tipo = "Función cuadrática"
        elif self.grado == 3: tipo = "Función cúbica"
        else: tipo = "Polinomio grado superior"
        
        return f"Tipo detectado: {tipo}"`;
    navigator.clipboard.writeText(fullCode);
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

      {/* Fondo de Estrellas CSS (Sin Lag) */}
      <div className={styles.starsBg}></div>

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
        <div className={styles.heroIcon}><i className="fas fa-search-plus"></i></div>
        <h1 className={styles.title}>Reconocimiento de Funciones</h1>
        <p className={styles.subtitle}>Análisis Automático de Expresiones Matemáticas</p>
        <div className={styles.separator}></div>
      </section>

      <div className={styles.mainWrapper}>
          
          {/* SECCIÓN 1: Definición */}
          <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
              <div className={styles.sectionHeader}>
                  <div className={styles.iconBox}><i className="fas fa-book-open"></i></div>
                  <h2>¿Qué es el Reconocimiento de Funciones?</h2>
              </div>
              <div className={styles.textBlock}>
                  <p>
                      El <strong>reconocimiento de funciones matemáticas</strong> es un proceso analítico que permite 
                      identificar y clasificar expresiones algebraicas según sus características estructurales. 
                      Este análisis automatizado examina los componentes de una función para determinar su naturaleza, 
                      grado y propiedades fundamentales.
                  </p>
                  <div className={styles.featureGrid}>
                      <div className={styles.featureItem}><i className="fas fa-check-circle"></i> <strong>Variables presentes:</strong> Identificación de incógnitas.</div>
                      <div className={styles.featureItem}><i className="fas fa-check-circle"></i> <strong>Operaciones matemáticas:</strong> Conteo de operadores.</div>
                      <div className={styles.featureItem}><i className="fas fa-check-circle"></i> <strong>Constantes numéricas:</strong> Números en la expresión.</div>
                      <div className={styles.featureItem}><i className="fas fa-check-circle"></i> <strong>Grado de la función:</strong> Mayor exponente.</div>
                      <div className={styles.featureItem}><i className="fas fa-check-circle"></i> <strong>Clasificación automática:</strong> Tipo de función.</div>
                  </div>
                  <div className={styles.highlightBox}>
                      <div className={styles.infoBoxTitle}><i className="fas fa-lightbulb"></i> Aplicaciones Prácticas</div>
                      <p>Este tipo de análisis es fundamental en sistemas de álgebra computacional, calculadoras científicas avanzadas, software educativo y herramientas de visualización matemática.</p>
                  </div>
              </div>
          </section>

          {/* SECCIÓN 2: Tipos de Funciones */}
          <section className={styles.typesSection}>
              <div className={styles.sectionHeader} style={{ justifyContent: 'center', border: 'none' }}>
                  <div className={styles.iconBox}><i className="fas fa-layer-group"></i></div>
                  <h2 style={{ fontSize: '2.5rem' }}>Tipos de Funciones Reconocidas</h2>
              </div>
              
              <div className={styles.typesGrid}>
                  <div className={styles.typeCard}>
                      <div className={styles.typeNumber}>0</div>
                      <h3>Función Constante</h3>
                      <div className={styles.formula}>f(x) = c</div>
                      <p className={styles.desc}>Una función constante no contiene variables o todas se cancelan. Grado <strong>0</strong>.</p>
                      <div className={styles.examples}>
                          <span>f(x) = 5</span>
                          <span>f(x) = 0</span>
                      </div>
                  </div>
                  <div className={styles.typeCard}>
                      <div className={styles.typeNumber}>1</div>
                      <h3>Función Lineal</h3>
                      <div className={styles.formula}>f(x) = mx + b</div>
                      <p className={styles.desc}>La variable aparece elevada a la primera potencia. Grado <strong>1</strong>. Gráfica recta.</p>
                      <div className={styles.examples}>
                          <span>f(x) = 2x + 3</span>
                          <span>f(x) = -x</span>
                      </div>
                  </div>
                  <div className={styles.typeCard}>
                      <div className={styles.typeNumber}>2</div>
                      <h3>Función Cuadrática</h3>
                      <div className={styles.formula}>f(x) = ax² + bx + c</div>
                      <p className={styles.desc}>Funciones de grado <strong>2</strong>. Su representación gráfica es una parábola.</p>
                      <div className={styles.examples}>
                          <span>f(x) = x² - 4</span>
                          <span>f(x) = 3x² + x</span>
                      </div>
                  </div>
                  <div className={styles.typeCard}>
                      <div className={styles.typeNumber}>3</div>
                      <h3>Función Cúbica</h3>
                      <div className={styles.formula}>f(x) = ax³ + bx²...</div>
                      <p className={styles.desc}>Funciones de grado <strong>3</strong>. Comportamiento más complejo con puntos de inflexión.</p>
                      <div className={styles.examples}>
                          <span>f(x) = x³ - 1</span>
                          <span>f(x) = 2x³ + 5x</span>
                      </div>
                  </div>
                  <div className={`${styles.typeCard} ${styles.fullWidth}`}>
                      <div className={styles.typeNumber}>n</div>
                      <h3>Polinomios Superiores</h3>
                      <div className={styles.formula}>f(x) = aₙxⁿ + ... + a₀</div>
                      <p className={styles.desc}>Funciones polinómicas de grado <strong>mayor a 3</strong>.</p>
                      <div className={`${styles.examples} ${styles.horizontal}`}>
                          <span>f(x) = x⁴ - 2x²</span>
                          <span>f(x) = x⁵ + 1</span>
                      </div>
                  </div>
              </div>
          </section>

          {/* SECCIÓN 3: Pasos */}
          <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
              <div className={styles.sectionHeader}>
                  <div className={styles.iconBox}><i className="fas fa-microscope"></i></div>
                  <h2>¿Cómo Reconocer el Tipo?</h2>
              </div>
              <div className={styles.stepsContainer}>
                  <div className={styles.stepBox}>
                      <div className={styles.stepNumber}>1</div>
                      <div className={styles.stepContent}>
                          <h4>Identificar Variables</h4>
                          <p>Encontrar todas las letras (x, y, z) que representan valores desconocidos.</p>
                      </div>
                  </div>
                  <div className={styles.stepBox}>
                      <div className={styles.stepNumber}>2</div>
                      <div className={styles.stepContent}>
                          <h4>Determinar Exponentes</h4>
                          <p>Buscar el símbolo <code>^</code>. Si no hay, el exponente es 1.</p>
                      </div>
                  </div>
                  <div className={styles.stepBox}>
                      <div className={styles.stepNumber}>3</div>
                      <div className={styles.stepContent}>
                          <h4>Grado Máximo</h4>
                          <p>El mayor exponente determina la clasificación de la función.</p>
                      </div>
                  </div>
                  <div className={styles.stepBox}>
                      <div className={styles.stepNumber}>4</div>
                      <div className={styles.stepContent}>
                          <h4>Clasificar</h4>
                          <p>Asignar el nombre (Lineal, Cuadrática...) según el grado hallado.</p>
                      </div>
                  </div>
              </div>
          </section>

          {/* SECCIÓN 4: Código Python (SIN ERRORES) */}
          <section className={styles.codeSection}>
              <div className={styles.pythonHeader}>
                  <div className={styles.pythonIconBox}>
                      <i className={`fab fa-python ${styles.pythonIcon}`}></i>
                  </div>
                  <h2 className={styles.pythonTitleText}>CÓDIGO EN PYTHON</h2>
              </div>

              <button className={styles.copyBtn} onClick={copyCode}>
                  {copied ? <><i className="fas fa-check"></i> Copiado</> : <><i className="far fa-copy"></i> Copiar</>}
              </button>

              <pre className={styles.preBlock}>
                <code>
<span className={styles.k}>class</span> <span className={styles.c}>Funcion</span><span className={styles.p}>:</span>{"\n"}
{"    "}<span className={styles.k}>def</span> <span className={styles.f}>__init__</span><span className={styles.p}>(</span><span className={styles.self}>self</span><span className={styles.p}>,</span> <span className={styles.v}>expresion</span><span className={styles.p}>):</span>{"\n"}
{"        "}<span className={styles.comm}># Inicializar atributos de la función</span>{"\n"}
{"        "}<span className={styles.self}>self</span><span className={styles.p}>.</span><span className={styles.v}>expresion</span> <span className={styles.op}>=</span> <span className={styles.v}>expresion</span><span className={styles.method}>.replace</span><span className={styles.p}>(</span><span className={styles.s}>&quot; &quot;</span><span className={styles.p}>,</span> <span className={styles.s}>&quot;&quot;</span><span className={styles.p}>)</span>{"\n"}
{"        "}<span className={styles.self}>self</span><span className={styles.p}>.</span><span className={styles.v}>variables</span> <span className={styles.op}>=</span> <span className={styles.p}>[]</span>{"\n"}
{"        "}<span className={styles.self}>self</span><span className={styles.p}>.</span><span className={styles.v}>grado</span> <span className={styles.op}>=</span> <span className={styles.n}>0</span>{"\n\n"}

{"    "}<span className={styles.k}>def</span> <span className={styles.f}>analizar</span><span className={styles.p}>(</span><span className={styles.self}>self</span><span className={styles.p}>):</span>{"\n"}
{"        "}<span className={styles.comm}># Método principal que analiza la expresión</span>{"\n"}
{"        "}<span className={styles.v}>exp</span> <span className={styles.op}>=</span> <span className={styles.self}>self</span><span className={styles.p}>.</span><span className={styles.v}>expresion</span>{"\n"}
{"        "}<span className={styles.k}>for</span> <span className={styles.v}>i</span> <span className={styles.k}>in</span> <span className={styles.builtin}>range</span><span className={styles.p}>(</span><span className={styles.builtin}>len</span><span className={styles.p}>(</span><span className={styles.v}>exp</span><span className={styles.p}>)):</span>{"\n"}
{"            "}<span className={styles.v}>c</span> <span className={styles.op}>=</span> <span className={styles.v}>exp</span><span className={styles.p}>[</span><span className={styles.v}>i</span><span className={styles.p}>]</span>{"\n"}
{"            "}<span className={styles.k}>if</span> <span className={styles.v}>c</span><span className={styles.p}>.</span><span className={styles.method}>isalpha</span><span className={styles.p}>()</span> <span className={styles.k}>and</span> <span className={styles.v}>c</span> <span className={styles.k}>not in</span> <span className={styles.self}>self</span><span className={styles.p}>.</span><span className={styles.v}>variables</span><span className={styles.p}>:</span>{"\n"}
{"                "}<span className={styles.self}>self</span><span className={styles.p}>.</span><span className={styles.v}>variables</span><span className={styles.p}>.</span><span className={styles.method}>append</span><span className={styles.p}>(</span><span className={styles.v}>c</span><span className={styles.p}>)</span>{"\n\n"}
{"        "}<span className={styles.comm}># Calcular el grado de la función</span>{"\n"}
{"        "}<span className={styles.self}>self</span><span className={styles.p}>.</span><span className={styles.v}>grado</span> <span className={styles.op}>=</span> <span className={styles.self}>self</span><span className={styles.p}>.</span><span className={styles.f}>calcular_grado</span><span className={styles.p}>()</span>{"\n\n"}

{"    "}<span className={styles.k}>def</span> <span className={styles.f}>calcular_grado</span><span className={styles.p}>(</span><span className={styles.self}>self</span><span className={styles.p}>):</span>{"\n"}
{"        "}<span className={styles.v}>exp</span> <span className={styles.op}>=</span> <span className={styles.self}>self</span><span className={styles.p}>.</span><span className={styles.v}>expresion</span>{"\n"}
{"        "}<span className={styles.v}>grado_max</span> <span className={styles.op}>=</span> <span className={styles.n}>0</span>{"\n"}
{"        "}<span className={styles.v}>i</span> <span className={styles.op}>=</span> <span className={styles.n}>0</span>{"\n"}
{"        "}<span className={styles.k}>while</span> <span className={styles.v}>i</span> <span className={styles.op}>&lt;</span> <span className={styles.builtin}>len</span><span className={styles.p}>(</span><span className={styles.v}>exp</span><span className={styles.p}>):</span>{"\n"}
{"            "}<span className={styles.k}>if</span> <span className={styles.v}>exp</span><span className={styles.p}>[</span><span className={styles.v}>i</span><span className={styles.p}>].</span><span className={styles.method}>isalpha</span><span className={styles.p}>():</span>{"\n"}
{"                "}<span className={styles.k}>if</span> <span className={styles.v}>i</span> <span className={styles.op}>+</span> <span className={styles.n}>1</span> <span className={styles.op}>&lt;</span> <span className={styles.builtin}>len</span><span className={styles.p}>(</span><span className={styles.v}>exp</span><span className={styles.p}>)</span> <span className={styles.k}>and</span> <span className={styles.v}>exp</span><span className={styles.p}>[</span><span className={styles.v}>i</span> <span className={styles.op}>+</span> <span className={styles.n}>1</span><span className={styles.p}>]</span> <span className={styles.op}>==</span> <span className={styles.s}>&apos;^&apos;</span><span className={styles.p}>:</span>{"\n"}
{"                    "}<span className={styles.v}>j</span> <span className={styles.op}>=</span> <span className={styles.v}>i</span> <span className={styles.op}>+</span> <span className={styles.n}>2</span>{"\n"}
{"                    "}<span className={styles.v}>num</span> <span className={styles.op}>=</span> <span className={styles.s}>&apos;&apos;</span>{"\n"}
{"                    "}<span className={styles.k}>while</span> <span className={styles.v}>j</span> <span className={styles.op}>&lt;</span> <span className={styles.builtin}>len</span><span className={styles.p}>(</span><span className={styles.v}>exp</span><span className={styles.p}>)</span> <span className={styles.k}>and</span> <span className={styles.v}>exp</span><span className={styles.p}>[</span><span className={styles.v}>j</span><span className={styles.p}>].</span><span className={styles.method}>isdigit</span><span className={styles.p}>():</span>{"\n"}
{"                        "}<span className={styles.v}>num</span> <span className={styles.op}>+=</span> <span className={styles.v}>exp</span><span className={styles.p}>[</span><span className={styles.v}>j</span><span className={styles.p}>]</span>{"\n"}
{"                        "}<span className={styles.v}>j</span> <span className={styles.op}>+=</span> <span className={styles.n}>1</span>{"\n"}
{"                    "}<span className={styles.k}>if</span> <span className={styles.v}>num</span> <span className={styles.op}>!=</span> <span className={styles.s}>&apos;&apos;</span><span className={styles.p}>:</span>{"\n"}
{"                        "}<span className={styles.v}>grado</span> <span className={styles.op}>=</span> <span className={styles.builtin}>int</span><span className={styles.p}>(</span><span className={styles.v}>num</span><span className={styles.p}>)</span>{"\n"}
{"                        "}<span className={styles.k}>if</span> <span className={styles.v}>grado</span> <span className={styles.op}>&gt;</span> <span className={styles.v}>grado_max</span><span className={styles.p}>:</span> <span className={styles.v}>grado_max</span> <span className={styles.op}>=</span> <span className={styles.v}>grado</span>{"\n"}
{"                "}<span className={styles.k}>else</span><span className={styles.p}>:</span>{"\n"}
{"                    "}<span className={styles.k}>if</span> <span className={styles.v}>grado_max</span> <span className={styles.op}>&lt;</span> <span className={styles.n}>1</span><span className={styles.p}>:</span> <span className={styles.v}>grado_max</span> <span className={styles.op}>=</span> <span className={styles.n}>1</span>{"\n"}
{"            "}<span className={styles.v}>i</span> <span className={styles.op}>+=</span> <span className={styles.n}>1</span>{"\n"}
{"        "}<span className={styles.k}>return</span> <span className={styles.v}>grado_max</span>{"\n\n"}

{"    "}<span className={styles.k}>def</span> <span className={styles.f}>resumen</span><span className={styles.p}>(</span><span className={styles.self}>self</span><span className={styles.p}>):</span>{"\n"}
{"        "}<span className={styles.k}>if</span> <span className={styles.self}>self</span><span className={styles.p}>.</span><span className={styles.v}>grado</span> <span className={styles.op}>==</span> <span className={styles.n}>1</span><span className={styles.p}>:</span> <span className={styles.v}>tipo</span> <span className={styles.op}>=</span> <span className={styles.s}>&quot;Función lineal&quot;</span>{"\n"}
{"        "}<span className={styles.k}>elif</span> <span className={styles.self}>self</span><span className={styles.p}>.</span><span className={styles.v}>grado</span> <span className={styles.op}>==</span> <span className={styles.n}>2</span><span className={styles.p}>:</span> <span className={styles.v}>tipo</span> <span className={styles.op}>=</span> <span className={styles.s}>&quot;Función cuadrática&quot;</span>{"\n"}
{"        "}<span className={styles.k}>elif</span> <span className={styles.self}>self</span><span className={styles.p}>.</span><span className={styles.v}>grado</span> <span className={styles.op}>==</span> <span className={styles.n}>3</span><span className={styles.p}>:</span> <span className={styles.v}>tipo</span> <span className={styles.op}>=</span> <span className={styles.s}>&quot;Función cúbica&quot;</span>{"\n"}
{"        "}<span className={styles.k}>else</span><span className={styles.p}>:</span> <span className={styles.v}>tipo</span> <span className={styles.op}>=</span> <span className={styles.s}>&quot;Polinomio grado superior&quot;</span>{"\n\n"}
{"        "}<span className={styles.k}>return</span> <span className={styles.s}>f&quot;Tipo detectado: &#123;tipo&#125;&quot;</span>
                </code>
              </pre>
          </section>

          {/* SECCIÓN 5: Resultados (Terminal) */}
          <section className={styles.glassCard} onMouseMove={handleTilt} onMouseLeave={resetTilt}>
              <div className={styles.sectionHeader}>
                  <div className={styles.iconBox}><i className="fas fa-terminal"></i></div>
                  <h2>Resultados</h2>
              </div>
              
              <div className={styles.terminal}>
                  <div className={styles.termHeader}>
                      <div className={`${styles.dot} ${styles.red}`}></div>
                      <div className={`${styles.dot} ${styles.yellow}`}></div>
                      <div className={`${styles.dot} ${styles.green}`}></div>
                      <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#555' }}>consola_python.exe</span>
                  </div>
                  <div className={styles.termBody}>
                      <p className={styles.cmdLine}>{'>'} Ingresa la función: <span className={styles.input}>x^3+2x^2-5x+7</span></p>
                      <div className={styles.divider}></div>
                      <p className={styles.output}>Función ingresada: x^3+2x^2-5x+7</p>
                      <p className={styles.output}>Grado de la función: 3</p>
                      <p className={styles.success}>Tipo de función: Función cúbica</p>
                      <div className={styles.divider}></div>
                      <br/>
                      <p className={styles.cmdLine}>{'>'} Ingresa la función: <span className={styles.input}>3x+5</span></p>
                      <p className={styles.success}>Tipo de función: Función lineal</p>
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