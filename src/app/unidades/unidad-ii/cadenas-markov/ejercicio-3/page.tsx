/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./ejercicio3.module.css";

export default function Ejercicio3MarkovPage() {
  const [copied, setCopied] = useState("");

  // Estrellas de fondo
  useEffect(() => {
    const starsContainer = document.getElementById("stars-container");
    if (starsContainer) {
      starsContainer.innerHTML = "";
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = styles.star;
        star.style.width = "2px";
        star.style.height = "2px";
        star.style.background = "white";
        star.style.borderRadius = "50%";
        star.style.position = "absolute";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.opacity = Math.random().toString();
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

  return (
    <div className={styles.container}>
      <div className={styles.nightSky}></div>
      <div id="stars-container" style={{position:'fixed', top:0, left:0, width:'100%', height:'100%', pointerEvents:'none', zIndex:-1}}></div>

      {/* HEADER */}
      <div className={styles.header}>
        <Link href="/unidades/unidad-ii/cadenas-markov" className={styles.backButton}>
          <i className="fas fa-arrow-left"></i> Volver a Unidad 2
        </Link>
      </div>

      <h1 className={styles.pageTitle}>Actividad de Eigenvalores y Eigenvectores</h1>
      <h2 className={styles.pageSubtitle}>EJERCICIO 3: Análisis de Temporadas Turísticas</h2>

      {/* 1. INSTALACIÓN */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>1. Instalación y Configuración</h2>
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
                <span><i className="fab fa-python"></i> setup.py</span>
                <button className={styles.copyButton} onClick={() => copiarCodigo(`import numpy as np\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nfrom scipy import linalg\nimport pandas as pd\n\n# Configuración de visualización\nplt.rcParams['figure.figsize'] = (12, 8)\nplt.rcParams['font.size'] = 10\nsns.set_style("whitegrid")\n\nprint("Librerías importadas correctamente")\nprint(f"NumPy versión: {np.__version__}")`, "c1")}>{copied === "c1" ? "Copiado" : "Copiar"}</button>
            </div>
            <pre className={styles.preBlock}>
{`import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import linalg
import pandas as pd

# Configuración de visualización
plt.rcParams['figure.figsize'] = (12, 8)
plt.rcParams['font.size'] = 10
sns.set_style("whitegrid")

print("Librerías importadas correctamente")
print(f"NumPy versión: {np.__version__}")`}
            </pre>
        </div>

        <div className={styles.executionArrow}><i className="fas fa-chevron-down"></i></div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
            </div>
            <pre className={styles.terminalBody}>
{`Librerías importadas correctamente
NumPy versión: 1.26.3`}
            </pre>
        </div>
      </div>

      {/* 2. DEFINICIÓN DEL PROBLEMA */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>2. Definición del Problema</h2>
        <h3 className={styles.subTitle}>2.1. Contexto</h3>
        <p className={styles.text}>El comportamiento turístico en el Lago Titicaca varía significativamente entre temporada alta (junio-agosto) y temporada baja (enero-marzo). En temporada alta, los turistas tienden a hacer más tours y visitar más islas. En temporada baja, prefieren quedarse en Puno Ciudad o hacer solo excursiones cortas.</p>
        
        <h3 className={styles.subTitle}>2.2. Pregunta de Investigación</h3>
        <ul className={styles.paperList}>
            <li>¿Qué destino se beneficia más en temporada alta?</li>
            <li>¿Cómo fluctúa la cantidad de turistas a lo largo de un año simulado?</li>
            <li>¿Cuál es el promedio anual de carga turística para cada destino?</li>
        </ul>

        <h3 className={styles.subTitle}>2.3. Enfoque Matemático</h3>
        <p className={styles.text}>Utilizaremos un modelo de Cadena de Markov no homogénea (variable en el tiempo). Definiremos tres matrices de transición distintas (T<sub>alta</sub>, T<sub>baja</sub>, T<sub>media</sub>) y simularemos la evolución día a día cambiando la matriz según el mes del año.</p>
      </div>

      {/* 3. CONSTRUCCIÓN MATRICES */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>3. Construcción de las Matrices de Transición</h2>
        <p className={styles.text}>Definiremos tres matrices diferentes para representar el comportamiento cambiante de los turistas.</p>

        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> matrices_temporales.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`# Definición de destinos\ndestinos = ['Puno Ciudad', 'Islas Uros', 'Taquile', 'Amantaní']\nn_destinos = len(destinos)\n...`, "c2")}>Copiar</button></div>
            <pre className={styles.preBlock}>
{`# Definición de destinos
destinos = ['Puno Ciudad', 'Islas Uros', 'Taquile', 'Amantaní']
n_destinos = len(destinos)

# ---------------------------------------------------------
# MATRIZ 1: TEMPORADA ALTA (Junio-Agosto)
# Característica: Mayor movilidad hacia islas, menor estancia en Puno
# ---------------------------------------------------------
T_alta = np.array([
    [0.15, 0.45, 0.25, 0.15], # Puno: Pocos se quedan (15%), muchos salen
    [0.35, 0.15, 0.35, 0.15], # Uros: Conectan a otras islas
    [0.25, 0.10, 0.35, 0.30], # Taquile: Alta pernoctación o ida a Amantaní
    [0.40, 0.15, 0.10, 0.35]  # Amantaní: Alta retención
])

# ---------------------------------------------------------
# MATRIZ 2: TEMPORADA BAJA (Enero-Marzo)
# Característica: Turistas se quedan en Puno o hacen tours cortos (rebote)
# ---------------------------------------------------------
T_baja = np.array([
    [0.50, 0.35, 0.10, 0.05], # Puno: Muchos se quedan (50%), pocos van lejos
    [0.70, 0.20, 0.05, 0.05], # Uros: Casi todos regresan a Puno
    [0.60, 0.10, 0.25, 0.05], # Taquile: Retorno rápido a Puno
    [0.70, 0.10, 0.05, 0.15]  # Amantaní: Retorno masivo a Puno
])

# ---------------------------------------------------------
# MATRIZ 3: TEMPORADA MEDIA (Resto del año - Original)
# ---------------------------------------------------------
T_media = np.array([
    [0.25, 0.45, 0.20, 0.10],
    [0.50, 0.15, 0.25, 0.10],
    [0.40, 0.10, 0.30, 0.20],
    [0.55, 0.15, 0.10, 0.20]
])

print("DEFINICIÓN DE MATRICES POR TEMPORADA")
print("=" * 70)

print("\\n1. MATRIZ TEMPORADA ALTA:")
print(pd.DataFrame(T_alta, index=destinos, columns=destinos))
print("-" * 70)
for i, dest in enumerate(destinos):
    suma = T_alta[i,:].sum()
    print(f" Verificación {dest:15}: suma = {suma:.3f}")

print("\\n2. MATRIZ TEMPORADA BAJA:")
print(pd.DataFrame(T_baja, index=destinos, columns=destinos))
print("-" * 70)
for i, dest in enumerate(destinos):
    suma = T_baja[i,:].sum()
    print(f" Verificación {dest:15}: suma = {suma:.3f}")`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
            </div>
            <pre className={styles.terminalBody}>
{`DEFINICIÓN DE MATRICES POR TEMPORADA
======================================================================

1. MATRIZ TEMPORADA ALTA:
             Puno Ciudad  Islas Uros  Taquile  Amantaní
Puno Ciudad         0.15        0.45     0.25      0.15
Islas Uros          0.35        0.15     0.35      0.15
... (Dispersión alta hacia islas)

2. MATRIZ TEMPORADA BAJA:
             Puno Ciudad  Islas Uros  Taquile  Amantaní
Puno Ciudad          0.5        0.35     0.10      0.05
Islas Uros           0.7        0.20     0.05      0.05
... (Concentración masiva en Puno)`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Programacion-Numerica/Imagenes/eje3/1.png" alt="Matrices" />
            <span className={styles.imgCaption}>Figura 1: Definición de matrices de transición por temporada</span>
        </div>

        <h3 className={styles.subTitle}>3.1. Interpretación Visual de las Matrices</h3>
        
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> heatmap_comparativo.py</span></div>
            <pre className={styles.preBlock}>
{`# Visualización comparativa de matrices
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 6))

# Mapa de calor Temporada Alta
sns.heatmap(T_alta, annot=True, fmt='.2f', cmap='YlOrRd',
            xticklabels=destinos, yticklabels=destinos, ax=ax1,
            cbar_kws={'label': 'Probabilidad'})
ax1.set_title('Temporada ALTA\\n(Mayor flujo entre islas)', fontsize=14, fontweight='bold')

# Mapa de calor Temporada Baja
sns.heatmap(T_baja, annot=True, fmt='.2f', cmap='Blues',
            xticklabels=destinos, yticklabels=destinos, ax=ax2,
            cbar_kws={'label': 'Probabilidad'})
ax2.set_title('Temporada BAJA\\n(Concentración en Puno)', fontsize=14, fontweight='bold')

plt.tight_layout()
plt.show()

print("\\nINTERPRETACIÓN:")
print(" Observe en la gráfica derecha (Baja) cómo la primera columna (Puno Ciudad)")
print(" tiene colores más oscuros, indicando alto retorno y estancia en la ciudad.")`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}><div className={`${styles.dot} ${styles.red}`}></div><div className={`${styles.dot} ${styles.yellow}`}></div><div className={`${styles.dot} ${styles.green}`}></div></div>
            <pre className={styles.terminalBody}>
{`INTERPRETACIÓN:
 Observe en la gráfica derecha (Baja) cómo la primera columna (Puno Ciudad)
 tiene colores más oscuros, indicando alto retorno y estancia en la ciudad.`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Programacion-Numerica/Imagenes/eje3/2.png" alt="Heatmaps Comparativos" />
            <span className={styles.imgCaption}>Figura 2: Comparación visual entre temporada Alta y Baja</span>
        </div>
      </div>

      {/* 4. CÁLCULO EIGENVALUES */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>4. Cálculo de Eigenvalues y Eigenvectors (Por Temporada)</h2>
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> eigen_temporadas.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`def analizar_matriz(matriz, nombre_temporada):\n...`, "c4")}>Copiar</button></div>
            <pre className={styles.preBlock}>
{`# Función auxiliar para calcular y mostrar resultados (para no repetir código enorme)
def analizar_matriz(matriz, nombre_temporada):
    eigenvalues, eigenvectors = linalg.eig(matriz.T)
    
    print(f"\\nANÁLISIS DE EIGENVALUES: {nombre_temporada}")
    print("-" * 70)
    for i, val in enumerate(eigenvalues):
        if np.isreal(val):
            print(f" λ_{i+1} = {val.real:8.5f}")
        else:
            print(f" λ_{i+1} = {val.real:8.5f} + {val.imag:8.5f}i")
            
    # Identificar dominante
    idx = np.argmax(np.abs(eigenvalues))
    v_dom = eigenvectors[:, idx].real
    dist = v_dom / v_dom.sum()
    return dist

# Ejecutar análisis
dist_alta = analizar_matriz(T_alta, "TEMPORADA ALTA")
dist_baja = analizar_matriz(T_baja, "TEMPORADA BAJA")
dist_media = analizar_matriz(T_media, "TEMPORADA MEDIA")

print("\\n" + "=" * 70)
print("Cálculos finalizados correctamente.")`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}><div className={`${styles.dot} ${styles.red}`}></div><div className={`${styles.dot} ${styles.yellow}`}></div><div className={`${styles.dot} ${styles.green}`}></div></div>
            <pre className={styles.terminalBody}>
{`ANÁLISIS DE EIGENVALUES: TEMPORADA ALTA
----------------------------------------------------------------------
 λ_1 =  1.00000
 λ_2 = -0.23636
 λ_3 =  0.11818 +  0.17146i
 λ_4 =  0.11818 + -0.17146i

ANÁLISIS DE EIGENVALUES: TEMPORADA BAJA
----------------------------------------------------------------------
 λ_1 =  1.00000
 λ_2 = -0.18708
 λ_3 =  0.10000
 λ_4 =  0.18708

ANÁLISIS DE EIGENVALUES: TEMPORADA MEDIA
----------------------------------------------------------------------
 λ_1 =  1.00000
 λ_2 = -0.26592
 λ_3 =  0.08296 +  0.12141i
 λ_4 =  0.08296 + -0.12141i

======================================================================
Cálculos finalizados correctamente.`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Programacion-Numerica/Imagenes/eje3/3.png" alt="Cálculos" />
            <span className={styles.imgCaption}>Figura 3: Ejecución de cálculos de eigenvalues</span>
        </div>
      </div>

      {/* 5. DISTRIBUCIÓN ESTACIONARIA */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>5. Distribución Estacionaria Comparativa</h2>
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> distribucion_comparativa.py</span></div>
            <pre className={styles.preBlock}>
{`print("DISTRIBUCIÓN ESTACIONARIA COMPARATIVA")
print("=" * 70)
print(f"{'Destino':<15} | {'ALTA (%)':<10} | {'BAJA (%)':<10} | {'DIFERENCIA':<10}")
print("-" * 70)

for i, dest in enumerate(destinos):
    p_alta = dist_alta[i] * 100
    p_baja = dist_baja[i] * 100
    diff = p_alta - p_baja
    
    print(f"{dest:<15} | {p_alta:8.2f} % | {p_baja:8.2f} % | {diff:+8.2f}")

print("-" * 70)

# Visualización Gráfica
x = np.arange(len(destinos))
width = 0.35

fig, ax = plt.subplots(figsize=(10, 6))
rects1 = ax.bar(x - width/2, dist_alta*100, width, label='Temp. Alta', color='#d62728', alpha=0.8)
rects2 = ax.bar(x + width/2, dist_baja*100, width, label='Temp. Baja', color='#1f77b4', alpha=0.8)

ax.set_ylabel('Porcentaje de Turistas')
ax.set_title('Distribución de Equilibrio: Alta vs Baja')
ax.set_xticks(x)
ax.set_xticklabels(destinos)
ax.legend()
plt.grid(axis='y', alpha=0.3)

# Etiquetas sobre barras
def etiquetar(rects):
    for rect in rects:
        height = rect.get_height()
        ax.annotate(f'{height:.1f}%',
                    xy=(rect.get_x() + rect.get_width() / 2, height),
                    xytext=(0, 3), textcoords="offset points",
                    ha='center', va='bottom', fontsize=9)

etiquetar(rects1)
etiquetar(rects2)

plt.tight_layout()
plt.show()`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}><div className={`${styles.dot} ${styles.red}`}></div><div className={`${styles.dot} ${styles.yellow}`}></div><div className={`${styles.dot} ${styles.green}`}></div></div>
            <pre className={styles.terminalBody}>
{`DISTRIBUCIÓN ESTACIONARIA COMPARATIVA
======================================================================
Destino         | ALTA (%)   | BAJA (%)   | DIFERENCIA
----------------------------------------------------------------------
Puno Ciudad     |    27.96 % |    57.51 % |   -29.55
Islas Uros      |    22.07 % |    27.09 % |    -5.01
Taquile         |    26.28 % |     9.84 % |   +16.44
Amantaní        |    23.68 % |     5.56 % |   +18.12
----------------------------------------------------------------------`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Programacion-Numerica/Imagenes/eje3/4.png" alt="Gráfico Comparativo" />
            <span className={styles.imgCaption}>Figura 4: Comparativa de distribución de turistas</span>
        </div>
      </div>

      {/* 6. VALIDACIÓN SIMULACIÓN */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>6. Validación Mediante Simulación (Año Completo)</h2>
        <p className={styles.text}>Simularemos un año turístico (360 días) cambiando las reglas del juego cada 4 meses.</p>
        <ul className={styles.paperList}>
            <li>Inicio: 1000 turistas distribuidos según equilibrio de Alta.</li>
            <li>Días 1-120: Temporada Alta.</li>
            <li>Días 121-240: Temporada Baja.</li>
            <li>Días 241-360: Temporada Media.</li>
        </ul>

        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> simulacion_anual.py</span></div>
            <pre className={styles.preBlock}>
{`# Configuración de la simulación
dias_simulacion = 360
turistas_totales = 1000

# Estado inicial: Equilibrio de Temporada Alta
estado_actual = dist_alta * turistas_totales

print("SIMULACIÓN ANUAL (360 DÍAS)")
print("=" * 70)
print(f"Inicio: {turistas_totales} turistas distribuidos según Temporada Alta.")
print("-" * 70)

# Matriz para guardar la historia
historia = np.zeros((dias_simulacion, n_destinos))

# Bucle de simulación día a día
for dia in range(dias_simulacion):
    # Guardar estado actual
    historia[dia] = estado_actual
    
    # Determinar qué matriz usar según el día del año
    if dia < 120:
        # Primer cuatrimestre: TEMPORADA ALTA
        T_actual = T_alta
    elif dia < 240:
        # Segundo cuatrimestre: TEMPORADA BAJA
        T_actual = T_baja
    else:
        # Tercer cuatrimestre: TEMPORADA MEDIA
        T_actual = T_media
        
    # Calcular siguiente estado: estado_actual * T
    estado_actual = estado_actual @ T_actual

# Crear DataFrame con los resultados
df_anual = pd.DataFrame(historia, columns=destinos, index=range(1, dias_simulacion + 1))

print("Muestra de datos simulados (Cambio de temporada Alta -> Baja):")
print(df_anual.iloc[115:125].to_string(float_format="%.1f"))
print("\\nNota: El cambio drástico ocurre en el día 121.")`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}><div className={`${styles.dot} ${styles.red}`}></div><div className={`${styles.dot} ${styles.yellow}`}></div><div className={`${styles.dot} ${styles.green}`}></div></div>
            <pre className={styles.terminalBody}>
{`SIMULACIÓN ANUAL (360 DÍAS)
======================================================================
Inicio: 1000 turistas distribuidos según Temporada Alta.
----------------------------------------------------------------------
Muestra de datos simulados (Cambio de temporada Alta -> Baja):
      Puno Ciudad  Islas Uros  Taquile  Amantaní
116        279.6       220.7    262.8     236.8
117        279.6       220.7    262.8     236.8
118        279.6       220.7    262.8     236.8
119        279.6       220.7    262.8     236.8
120        279.6       220.7    262.8     236.8
121        279.6       220.7    262.8     236.8
122        617.8       192.0    116.5      73.7
123        564.8       273.6    104.2      57.4
124        576.6       268.6     99.1      55.7
125        574.8       271.0     98.6      55.6

Nota: El cambio drástico ocurre en el día 121.`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Programacion-Numerica/Imagenes/eje3/5.png" alt="Simulación Anual" />
            <span className={styles.imgCaption}>Figura 5: Muestra de datos simulados</span>
        </div>
      </div>

      {/* 7. VISUALIZACIÓN EVOLUCIÓN */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>7. Visualización de la Evolución Anual</h2>
        
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> plot_evolucion.py</span></div>
            <pre className={styles.preBlock}>
{`plt.figure(figsize=(14, 8))

colores = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728']

# Plotear cada destino
for i, dest in enumerate(destinos):
    plt.plot(df_anual.index, df_anual[dest], label=dest, color=colores[i], linewidth=2.5)

# Dibujar líneas verticales separando temporadas
plt.axvline(x=120, color='black', linestyle='--', linewidth=1.5)
plt.axvline(x=240, color='black', linestyle='--', linewidth=1.5)

# Sombrear fondos para distinguir temporadas
plt.axvspan(0, 120, alpha=0.1, color='red', label='Temp. Alta')
plt.axvspan(120, 240, alpha=0.1, color='blue', label='Temp. Baja')
plt.axvspan(240, 360, alpha=0.1, color='green', label='Temp. Media')

# Títulos y etiquetas
plt.title('Dinámica Anual de Turistas en el Lago Titicaca', fontsize=16, fontweight='bold')
plt.xlabel('Día del Año', fontsize=12)
plt.ylabel('Cantidad de Turistas (de 1000)', fontsize=12)

# Leyenda y Grid
plt.legend(loc='upper right', frameon=True, framealpha=0.9)
plt.grid(True, alpha=0.3)
plt.xlim(0, 360)

plt.tight_layout()
plt.show()

print("\\nObservaciones:")
print(" - Puno Ciudad (línea azul) actúa como espejo de las islas.")
print(" - Cuando es temporada baja (zona azul), Puno se dispara y las islas caen.")`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}><div className={`${styles.dot} ${styles.red}`}></div><div className={`${styles.dot} ${styles.yellow}`}></div><div className={`${styles.dot} ${styles.green}`}></div></div>
            <pre className={styles.terminalBody}>
{`Observaciones:
 - Puno Ciudad (línea azul) actúa como espejo de las islas.
 - Cuando es temporada baja (zona azul), Puno se dispara y las islas caen.`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Programacion-Numerica/Imagenes/eje3/6.png" alt="Evolución Gráfica" />
            <span className={styles.imgCaption}>Figura 6: Dinámica Anual de Turistas</span>
        </div>
      </div>

      {/* 8. ESTADÍSTICAS */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>8. Estadísticas y Promedios Anuales</h2>
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> estadisticas.py</span></div>
            <pre className={styles.preBlock}>
{`print("="*70)
print("ESTADÍSTICAS DEL AÑO SIMULADO")
print("="*70)

promedios = df_anual.mean()
maximos = df_anual.max()
minimos = df_anual.min()
variacion = maximos - minimos

print(f"{'Destino':<15} | {'Promedio':<8} | {'Mínimo':<8} | {'Máximo':<8} | {'Variación':<8}")
print("-" * 70)

for dest in destinos:
    prom = promedios[dest]
    mini = minimos[dest]
    maxi = maximos[dest]
    var = variacion[dest]
    print(f"{dest:<15} | {prom:8.1f} | {mini:8.1f} | {maxi:8.1f} | {var:8.1f}")

print("-" * 70)`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}><div className={`${styles.dot} ${styles.red}`}></div><div className={`${styles.dot} ${styles.yellow}`}></div><div className={`${styles.dot} ${styles.green}`}></div></div>
            <pre className={styles.terminalBody}>
{`======================================================================
ESTADÍSTICAS DEL AÑO SIMULADO
======================================================================
Destino         | Promedio | Mínimo   | Máximo   | Variación
----------------------------------------------------------------------
Puno Ciudad     |    413.9 |    279.6 |    617.8 |    338.2
Islas Uros      |    248.8 |    192.0 |    317.6 |    125.6
Taquile         |    194.4 |     98.4 |    262.8 |    164.4
Amantaní        |    143.0 |     55.6 |    236.8 |    181.2
----------------------------------------------------------------------`}
            </pre>
        </div>
      </div>

      {/* 9. CONCLUSIONES */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>9. Conclusiones del Análisis</h2>
        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}><div className={`${styles.dot} ${styles.red}`}></div><div className={`${styles.dot} ${styles.yellow}`}></div><div className={`${styles.dot} ${styles.green}`}></div></div>
            <pre className={styles.terminalBody}>
{`======================================================================
CONCLUSIONES
======================================================================
1. BENEFICIARIO DE TEMPORADA ALTA:
   Las islas lejanas, especialmente Taquile, maximizan su ocupación.
   Amantaní pasa de tener ~56 turistas en baja a ~237 en alta.

2. COMPORTAMIENTO DE PUNO CIUDAD:
   Puno funciona como un 'amortiguador'. Su ocupación es inversamente proporcional
   a la de las islas. En temporada baja, retiene al 57% de los turistas.

3. IMPACTO DE LA ESTACIONALIDAD:
   La variación total del sistema es drástica. Se requiere gestión flexible.`}
            </pre>
        </div>
      </div>

      {/* 10. REFLEXIÓN */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>10. Preguntas de Reflexión</h2>
        <ul className={styles.paperList}>
            <li>
                <strong>¿Qué destino tiene la mayor variación entre temporadas?</strong><br/>
                Puno Ciudad (Variación de 338.2 turistas) y Amantaní (Variación porcentual más alta, casi cuadruplicando su flujo).
            </li>
            <li>
                <strong>¿Cómo deberían planificar los hoteles su personal considerando estas variaciones?</strong><br/>
                <ul>
                    <li><strong>En Puno Ciudad:</strong> Se necesita <strong>MÁS</strong> personal en <strong>Temporada BAJA</strong> (Enero–Marzo), ya que es cuando la ciudad está más llena (pico de ~617 turistas).</li>
                    <li><strong>En las Islas:</strong> Se necesita <strong>MÁS</strong> personal en <strong>Temporada ALTA</strong> (Junio–Agosto). En temporada baja, los albergues de islas deberían operar con personal mínimo.</li>
                </ul>
            </li>
            <li>
                <strong>¿Qué estrategias podrían usarse para equilibrar el turismo entre temporadas?</strong><br/>
                <ol>
                    <li><strong>Eventos en temporada baja:</strong> Crear festivales en Puno (ej. Candelaria en febrero) para aprovechar la alta ocupación de la ciudad.</li>
                    <li><strong>Incentivos a islas:</strong> Ofrecer paquetes &quot;2x1&quot; o transporte gratuito a Taquile/Amantaní en época de lluvia para motivar a los turistas a salir de Puno.</li>
                    <li><strong>Turismo de convenciones:</strong> Usar la capacidad hotelera de Puno en meses de baja.</li>
                </ol>
            </li>
            <li>
                <strong>Si tuvieras un hotel en Puno, ¿qué porcentaje de capacidad mantener?</strong><br/>
                Mantener una capacidad fija operativa del 60–70% y usar personal extra eventual solo durante el primer trimestre del año (Baja turística general, pero Alta para Puno ciudad).
            </li>
        </ul>
      </div>

      <footer className={styles.footer}>
        <p>© 2025 Programación Numérica FINESI - Universidad Nacional del Altiplano</p>
        <p>Docente: Fred Torres Cruz</p>
      </footer>
    </div>
  );
}