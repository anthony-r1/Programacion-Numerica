/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./ejercicio2.module.css";

export default function Ejercicio2MarkovPage() {
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
      <h2 className={styles.pageSubtitle}>EJERCICIO 2: Introducción de un Nuevo Destino Turístico</h2>

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
        <p className={styles.text}>La comunidad de la Isla de Anapia (frontera con Bolivia) busca desarrollarse como destino turístico. Se introduce como una alternativa de turismo vivencial, compitiendo directamente con Amantaní pero ofreciendo paisajes únicos del &quot;lago menor&quot;.</p>
        
        <h3 className={styles.subTitle}>2.2. Pregunta de Investigación</h3>
        <ul className={styles.paperList}>
            <li>¿Qué porcentaje de turistas logrará captar Anapia en el equilibrio?</li>
            <li>¿A qué destino afectará más esta competencia (&quot;canibalización&quot; de turistas)?</li>
            <li>¿Cómo se reconfigura la red de transporte con 5 nodos?</li>
        </ul>

        <h3 className={styles.subTitle}>2.3. Enfoque Matemático</h3>
        <p className={styles.text}>Expandimos la matriz de transición T a un tamaño de 5x5. El nuevo estado es i=4: Isla Anapia.</p>
      </div>

      {/* 3. CONSTRUCCIÓN MATRIZ 5x5 */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>3. Construcción de la Matriz de Transición (5x5)</h2>
        <p className={styles.text}>La matriz se expande. Las probabilidades se ajustan bajo los siguientes supuestos lógicos:</p>
        <ul className={styles.paperList}>
            <li>Desde Puno/Uros/Taquile: El flujo que antes iba exclusivamente a Amantaní ahora se divide entre Amantaní y Anapia.</li>
            <li>Desde Amantaní: Existe una conexión directa con Anapia (tours combinados).</li>
            <li>Desde Anapia: Principalmente regresan a Puno, pero algunos cruzan a Amantaní o se quedan.</li>
        </ul>

        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> matriz_5x5.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`destinos = ['Puno Ciudad', 'Islas Uros', 'Taquile', 'Amantaní', 'Anapia']
n_destinos = len(destinos)

# Matriz de transición T (5x5)
T = np.array([
    [0.25, 0.45, 0.20, 0.05, 0.05], # Puno: Divide flujo
    [0.50, 0.15, 0.25, 0.05, 0.05], # Uros: Divide flujo
    [0.40, 0.10, 0.30, 0.10, 0.10], # Taquile: Divide pernocte
    [0.45, 0.15, 0.10, 0.20, 0.10], # Amantaní: Envía 10% a Anapia
    [0.50, 0.05, 0.05, 0.15, 0.25]  # Anapia: Retorno y conexión
])

df_matriz = pd.DataFrame(T, index=destinos, columns=destinos)

print("Matriz de Transición T (5x5 - Inclusión de Anapia):")
print("=" * 70)
print(df_matriz)
print("-" * 70)
for i, dest in enumerate(destinos):
    suma = T[i,:].sum()
    status = "OK" if abs(suma - 1.0) < 0.001 else "ERROR"
    print(f"{status} {dest :15}: suma = {suma :.3f}")`, "c2")}>{copied === "c2" ? "Copiado" : "Copiar"}</button></div>
            <pre className={styles.preBlock}>
{`# Definición de destinos (Ahora son 5)
destinos = ['Puno Ciudad', 'Islas Uros', 'Taquile', 'Amantaní', 'Anapia']
n_destinos = len(destinos)

# Matriz de transición T (5x5)
T = np.array([
    [0.25, 0.45, 0.20, 0.05, 0.05], # Puno: Divide flujo
    [0.50, 0.15, 0.25, 0.05, 0.05], # Uros: Divide flujo
    [0.40, 0.10, 0.30, 0.10, 0.10], # Taquile: Divide pernocte
    [0.45, 0.15, 0.10, 0.20, 0.10], # Amantaní: Envía 10% a Anapia
    [0.50, 0.05, 0.05, 0.15, 0.25]  # Anapia: Retorno y conexión
])

df_matriz = pd.DataFrame(T, index=destinos, columns=destinos)

print("Matriz de Transición T (5x5 - Inclusión de Anapia):")
print("=" * 70)
print(df_matriz)
print("-" * 70)
for i, dest in enumerate(destinos):
    suma = T[i,:].sum()
    status = "OK" if abs(suma - 1.0) < 0.001 else "ERROR"
    print(f"{status} {dest :15}: suma = {suma :.3f}")`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
            </div>
            <pre className={styles.terminalBody}>
{`Matriz de Transición T (5x5 - Inclusión de Anapia):
======================================================================
             Puno Ciudad  Islas Uros  Taquile  Amantaní  Anapia
Puno Ciudad         0.25        0.45     0.20      0.05    0.05
Islas Uros          0.50        0.15     0.25      0.05    0.05
Taquile             0.40        0.10     0.30      0.10    0.10
Amantaní            0.45        0.15     0.10      0.20    0.10
Anapia              0.50        0.05     0.05      0.15    0.25
----------------------------------------------------------------------
OK Puno Ciudad    : suma = 1.000
OK Islas Uros     : suma = 1.000
OK Taquile        : suma = 1.000
OK Amantaní       : suma = 1.000
OK Anapia         : suma = 1.000`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje2/1.png" alt="DataFrame Matriz" />
            <span className={styles.imgCaption}>Figura 1: DataFrame de la Matriz de Transición (5x5)</span>
        </div>

        <h3 className={styles.subTitle}>3.1. Interpretación de Valores Clave</h3>
        <ul className={styles.paperList}>
            <li><strong>P(Puno → Anapia) = 0.05:</strong> Puno empieza a promocionar Anapia, quitándole la mitad del flujo original a Amantaní.</li>
            <li><strong>P(Amantaní → Anapia) = 0.10:</strong> Creación de un &quot;Circuito de Islas Menores&quot;.</li>
            <li><strong>P(Anapia → Puno) = 0.50:</strong> La mayoría regresa a la ciudad base al terminar.</li>
        </ul>

        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> heatmap_5x5.py</span></div>
            <pre className={styles.preBlock}>
{`# Visualización de la matriz
plt.figure(figsize =(10, 8))
sns.heatmap(T, annot=True , fmt='.2f', cmap='Blues',
            xticklabels=destinos , yticklabels=destinos ,
            cbar_kws ={'label': 'Probabilidad de Transición'})
plt.title('Matriz de Transición Expandida (5 Destinos)',
          fontsize =14, fontweight='bold', pad =20)
plt.tight_layout ()
plt.show()`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje2/2.png" alt="Heatmap 5x5" />
            <span className={styles.imgCaption}>Figura 2: Mapa de calor de la matriz de transición expandida</span>
        </div>
      </div>

      {/* 4. EIGENVALUES */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>4. Cálculo de Eigenvalues y Eigenvectors</h2>
        
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> eigen_5x5.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`eigenvalues , eigenvectors = linalg.eig(T.T)

print("EIGENVALUES ENCONTRADOS")
print("=" * 70)
for i, val in enumerate(eigenvalues):
    if np.isreal(val):
        print(f" λ_{i+1} = {val.real :8.5f}")
    else:
        print(f" λ_{i+1} = {val.real :8.5f} + {val.imag :8.5f}i")

idx_dominante = np.argmax(np.abs(eigenvalues))
print(f"\\nEIGENVALUE DOMINANTE: λ = {eigenvalues[idx_dominante].real :.6f}")

plt.figure(figsize =(8, 6))
# ... (código ploteo)`, "c4")}>{copied === "c4" ? "Copiado" : "Copiar"}</button></div>
            <pre className={styles.preBlock}>
{`# Calcular eigenvalues y eigenvectors
eigenvalues , eigenvectors = linalg.eig(T.T)

print("EIGENVALUES ENCONTRADOS")
print("=" * 70)
for i, val in enumerate(eigenvalues):
    if np.isreal(val):
        print(f" λ_{i+1} = {val.real :8.5f}")
    else:
        print(f" λ_{i+1} = {val.real :8.5f} + {val.imag :8.5f}i")

# Identificar dominante
idx_dominante = np.argmax(np.abs(eigenvalues))
print(f"\\nEIGENVALUE DOMINANTE: λ = {eigenvalues[idx_dominante].real :.6f}")

# Visualización Plano Complejo
plt.figure(figsize =(8, 6))
theta = np.linspace(0, 2*np.pi, 100)
plt.plot(np.cos(theta), np.sin(theta), 'k--', alpha=0.3)
for i, val in enumerate(eigenvalues):
    style = '*' if i == idx_dominante else 'o'
    size = 300 if i == idx_dominante else 100
    color = 'red' if i == idx_dominante else 'blue'
    plt.scatter(val.real, val.imag, s=size, c=color, marker=style, edgecolors='k')
    plt.annotate(f'λ_{i+1}', (val.real, val.imag), xytext=(5,5), textcoords='offset points')
plt.title('Eigenvalues (Sistema de 5 Nodos)')
plt.axis('equal'); plt.grid(True, alpha=0.3)
plt.show()`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
            </div>
            <pre className={styles.terminalBody}>
{`EIGENVALUES ENCONTRADOS
======================================================================
 λ_1 =  1.00000
 λ_2 = -0.26368
 λ_3 =  0.15684 +  0.09007i
 λ_4 =  0.15684 + -0.09007i
 λ_5 =  0.10000

EIGENVALUE DOMINANTE: λ = 1.000000`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje2/3.png" alt="Eigenvalues 5x5" />
            <span className={styles.imgCaption}>Figura 3: Eigenvalues en el plano complejo</span>
        </div>
      </div>

      {/* 5. DISTRIBUCIÓN ESTACIONARIA */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>5. Distribución Estacionaria (Nuevo Equilibrio)</h2>
        <p className={styles.text}>Aquí veremos quién gana y quién pierde con la entrada de Anapia.</p>
        
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> distribucion_nueva.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`v_dominante = eigenvectors [:, idx_dominante ].real
dist_estacionaria = v_dominante / v_dominante.sum()

print("NUEVA DISTRIBUCIÓN ESTACIONARIA (5 DESTINOS)")
print("=" * 70)
for i, dest in enumerate(destinos):
    pct = dist_estacionaria[i] * 100
    barra = "█" * int(pct / 2)
    print(f"{dest :15} : {pct :6.2f} % {barra}")

idx_hub = np.argmax(dist_estacionaria)
print("\\n" + "=" * 70)
print(f"HUB PRINCIPAL: {destinos[idx_hub]} ({dist_estacionaria[idx_hub]*100:.2f}%)")`, "c5")}>{copied === "c5" ? "Copiado" : "Copiar"}</button></div>
            <pre className={styles.preBlock}>
{`# Extraer y normalizar
v_dominante = eigenvectors [:, idx_dominante ].real
dist_estacionaria = v_dominante / v_dominante.sum()

print("NUEVA DISTRIBUCIÓN ESTACIONARIA (5 DESTINOS)")
print("=" * 70)
for i, dest in enumerate(destinos):
    pct = dist_estacionaria[i] * 100
    barra = "█" * int(pct / 2)
    print(f"{dest :15} : {pct :6.2f} % {barra}")

idx_hub = np.argmax(dist_estacionaria)
print("\\n" + "=" * 70)
print(f"HUB PRINCIPAL: {destinos[idx_hub]} ({dist_estacionaria[idx_hub]*100:.2f}%)")
print("=" * 70)

# Gráficos
fig , (ax1 , ax2) = plt.subplots(1, 2, figsize =(16, 6))
colores = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd'] # Añadimos morado para Anapia

# Barras
ax1.bar(destinos , dist_estacionaria * 100, color=colores , edgecolor='black')
ax1.set_title('Reparto de Turistas con Anapia')
ax1.set_ylabel('% Turistas')
for i, v in enumerate(dist_estacionaria):
    ax1.text(i, v*100, f"{v*100:.1f}%", ha='center', va='bottom', fontweight='bold')

# Pastel
ax2.pie(dist_estacionaria , labels=destinos , autopct='%1.1f%%', colors=colores,
        wedgeprops ={'edgecolor': 'black'})
ax2.set_title('Participación de Mercado')
plt.show()`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
            </div>
            <pre className={styles.terminalBody}>
{`NUEVA DISTRIBUCIÓN ESTACIONARIA (5 DESTINOS)
======================================================================
Puno Ciudad     :  37.97 % ██████████████████
Islas Uros      :  24.52 % ████████████
Taquile         :  21.34 % ██████████
Amantaní        :   8.09 % ████
Anapia          :   8.09 % ████

======================================================================
HUB PRINCIPAL: Puno Ciudad (37.97%)
======================================================================`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje2/4.png" alt="Distribución Gráfica" />
            <span className={styles.imgCaption}>Figura 4: Distribución y Participación de Mercado con Anapia</span>
        </div>
      </div>

      {/* 6. SIMULACIÓN */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>6. Validación Mediante Simulación</h2>
        
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> simulacion.py</span></div>
            <pre className={styles.preBlock}>
{`# Estado inicial: Todos en Puno
estado_inicial = np.array ([1.0, 0.0, 0.0, 0.0, 0.0])
n_dias = 30
evolucion = np.zeros(( n_dias + 1, n_destinos))
evolucion [0] = estado_inicial

for dia in range(n_dias):
    evolucion[dia + 1] = T.T @ evolucion[dia]

# Gráfico de evolución
plt.figure(figsize =(12, 6))
for j in range(n_destinos):
    plt.plot(evolucion[:, j] * 100, label=destinos[j], linewidth=2, marker='o', markersize=4)

plt.title('Evolución Temporal: Entrada de Anapia al Mercado', fontweight='bold')
plt.xlabel('Días')
plt.ylabel('% Turistas')
plt.legend()
plt.grid(True , alpha =0.3)
plt.show()

print("Convergencia alcanzada en 30 días.")`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
            </div>
            <pre className={styles.terminalBody}>
{`Convergencia alcanzada en 30 días.`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje2/5.png" alt="Simulación" />
            <span className={styles.imgCaption}>Figura 5: Evolución Temporal hacia el nuevo equilibrio</span>
        </div>
      </div>

      {/* 7. RED DE FLUJO */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>7. Visualización de la Red de Flujo Turístico (5 Nodos)</h2>
        
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> red_5_nodos.py</span></div>
            <pre className={styles.preBlock}>
{`fig , ax = plt.subplots(figsize =(12, 10))

# Posiciones (Pentágono o estructura geográfica aproximada)
pos = {
    0: (0.5, 0.8),  # Puno (Norte/Centro)
    1: (0.2, 0.6),  # Uros (Oeste)
    2: (0.8, 0.6),  # Taquile (Este)
    3: (0.35, 0.3), # Amantaní (Sur-Oeste)
    4: (0.65, 0.3)  # Anapia (Sur-Este, nuevo nodo)
}

# Nodos
for i, (x, y) in pos.items():
    tamaño = dist_estacionaria[i] * 5000 
    circle = plt.Circle ((x, y), 0.07, color=colores[i], alpha=0.6, ec='k', zorder=3)
    ax.add_patch(circle)
    ax.text(x, y, f"{destinos[i]}\\n{dist_estacionaria[i]*100:.1f}%", 
            ha='center', va='center', fontweight='bold', fontsize=9)

# Arcos
for i in range(n_destinos):
    for j in range(n_destinos):
        if i != j and T[i, j] > 0.05: # Filtro visual
            x1, y1 = pos[i]; x2, y2 = pos[j]
            ax.annotate('', xy=(x2, y2), xytext=(x1, y1),
                        arrowprops=dict(arrowstyle='->', lw=T[i,j]*6, color='gray', alpha=0.5,
                                        connectionstyle="arc3,rad=0.2"))

ax.axis('off')
ax.set_title('Nueva Red de Flujos con Isla Anapia', fontsize=14, fontweight='bold')
plt.show()`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje2/6.png" alt="Red de Flujo 5 Nodos" />
            <span className={styles.imgCaption}>Figura 6: Nueva Red de Flujos con Isla Anapia</span>
        </div>
      </div>

      {/* 8. CONCLUSIONES */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>8. Conclusiones y Análisis</h2>
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> analisis_impacto.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`print("="*70)
print("ANÁLISIS DE IMPACTO: INGRESO DE ISLA ANAPIA")
print("="*70)

# Comparación aproximada con modelo base (4 destinos)
pct_anapia = dist_estacionaria[4] * 100
pct_amantani_nuevo = dist_estacionaria[3] * 100
pct_amantani_base = 20.5 # Valor de referencia

print(f"1. DESEMPEÑO DE ANAPIA:")
print(f"    Cuota de mercado alcanzada: {pct_anapia:.2f} %")
print(f"    Interpretación: Logra captar casi la misma cantidad que Amantaní.")
print()

print(f"2. ANÁLISIS DE 'CANIBALIZACIÓN' (Quién pierde):")
print(f"    Amantaní (Base): ~{pct_amantani_base:.1f} %")
print(f"    Amantaní (Nuevo): {pct_amantani_nuevo:.1f} %")
print(f"    Pérdida: {pct_amantani_nuevo - pct_amantani_base:.1f} puntos porcentuales.")
print(f"    -> Amantaní pierde más de la mitad de sus turistas frente a Anapia.")
print()

print(f"3. BENEFICIARIOS INESPERADOS:")
print(f"    Puno Ciudad sube al {dist_estacionaria[0]*100:.1f} % (antes ~31.5%).")
print(f"    Razón: Al dividir el flujo hacia islas lejanas, y tener ambas islas")
print(f"    altas tasas de retorno a Puno, la ciudad consolida su rol de distribuidor.")`, "c8")}>{copied === "c8" ? "Copiado" : "Copiar"}</button></div>
            <pre className={styles.preBlock}>
{`print("="*70)
print("ANÁLISIS DE IMPACTO: INGRESO DE ISLA ANAPIA")
print("="*70)

# Comparación aproximada con modelo base (4 destinos)
pct_anapia = dist_estacionaria[4] * 100
pct_amantani_nuevo = dist_estacionaria[3] * 100
pct_amantani_base = 20.5 # Valor de referencia

print(f"1. DESEMPEÑO DE ANAPIA:")
print(f"    Cuota de mercado alcanzada: {pct_anapia:.2f} %")
print(f"    Interpretación: Logra captar casi la misma cantidad que Amantaní.")
print()

print(f"2. ANÁLISIS DE 'CANIBALIZACIÓN' (Quién pierde):")
print(f"    Amantaní (Base): ~{pct_amantani_base:.1f} %")
print(f"    Amantaní (Nuevo): {pct_amantani_nuevo:.1f} %")
print(f"    Pérdida: {pct_amantani_nuevo - pct_amantani_base:.1f} puntos porcentuales.")
print(f"    -> Amantaní pierde más de la mitad de sus turistas frente a Anapia.")
print()

print(f"3. BENEFICIARIOS INESPERADOS:")
print(f"    Puno Ciudad sube al {dist_estacionaria[0]*100:.1f} % (antes ~31.5%).")
print(f"    Razón: Al dividir el flujo hacia islas lejanas, y tener ambas islas")
print(f"    altas tasas de retorno a Puno, la ciudad consolida su rol de distribuidor.")`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
            </div>
            <pre className={styles.terminalBody}>
{`======================================================================
ANÁLISIS DE IMPACTO: INGRESO DE ISLA ANAPIA
======================================================================
1. DESEMPEÑO DE ANAPIA:
    Cuota de mercado alcanzada: 8.09 %
    Interpretación: Logra captar casi la misma cantidad que Amantaní.

2. ANÁLISIS DE 'CANIBALIZACIÓN' (Quién pierde):
    Amantaní (Base): ~20.5 %
    Amantaní (Nuevo): 8.1 %
    Pérdida: -12.4 puntos porcentuales.
    -> Amantaní pierde más de la mitad de sus turistas frente a Anapia.

3. BENEFICIARIOS INESPERADOS:
    Puno Ciudad sube al 38.0 % (antes ~31.5%).
    Razón: Al dividir el flujo hacia islas lejanas, y tener ambas islas
    altas tasas de retorno a Puno, la ciudad consolida su rol de distribuidor.`}
            </pre>
        </div>

        <h3 className={styles.subTitle} style={{marginTop:'40px'}}>9. Preguntas de Reflexión</h3>
        <ul className={styles.paperList}>
            <li>
                <strong>¿Es viable el desarrollo turístico de Anapia según tu modelo?</strong><br/>
                Sí, alcanza un 8–9% del mercado rápidamente. Sin embargo, su éxito es a costa directa de Amantaní, no necesariamente trayendo turistas nuevos al sistema (juego de suma cero en este modelo cerrado).
            </li>
            <li>
                <strong>¿Qué estrategia de marketing recomendarías para Anapia?</strong><br/>
                No competir solo con Amantaní. Fomentar el tour &quot;Ruta de las Islas Lejanas&quot; (Amantaní + Anapia) para que los turistas visiten <strong>AMBAS</strong> en lugar de elegir una. Esto se ve reflejado en el arco Amantaní → Anapia.
            </li>
            <li>
                <strong>¿Cómo cambiaría el sistema si Anapia ofreciera precios más bajos que Amantaní?</strong><br/>
                Aumentaría T[Puno → Anapia] y disminuiría T[Puno → Amantaní]. Amantaní podría colapsar a un destino marginal (&lt;5%) si no se diferencia.
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