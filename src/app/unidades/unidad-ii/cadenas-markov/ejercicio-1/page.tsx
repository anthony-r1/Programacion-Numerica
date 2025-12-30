/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./ejercicio1.module.css";

export default function Ejercicio1MarkovPage() {
  const [copied, setCopied] = useState("");

  // Estrellas de fondo (Uso de useEffect para evitar el warning de variable no usada)
  useEffect(() => {
    const starsContainer = document.getElementById("stars-container");
    if (starsContainer) {
      starsContainer.innerHTML = "";
      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = styles.star;
        // Asignación de estilos inline para posiciones aleatorias
        star.style.width = "2px";
        star.style.height = "2px";
        star.style.background = "white";
        star.style.borderRadius = "50%";
        star.style.position = "absolute";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        // Animación simple si no se carga desde CSS
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

      {/* HEADER: BOTÓN ROJO ABSOLUTO */}
      <div className={styles.header}>
        <Link href="/unidades/unidad-ii/cadenas-markov" className={styles.backButton}>
          <i className="fas fa-arrow-left"></i> Volver a Unidad 2
        </Link>
      </div>

      <h1 className={styles.pageTitle}>Actividad de Eigenvalores y Eigenvectores</h1>
      <h2 className={styles.pageSubtitle}>EJERCICIO 1: Modificación de la Matriz de Transición</h2>

      {/* --- TARJETA 1: INSTALACIÓN --- */}
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
NumPy versión: 1.26.4`}
            </pre>
        </div>
      </div>

      {/* --- TARJETA 2: DEFINICIÓN --- */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>2. Definición del Problema</h2>
        <h3 className={styles.subTitle}>2.1. Contexto</h3>
        <p className={styles.text}>El gobierno regional de Puno decide invertir en mejorar la infraestructura de la Isla Taquile para hacerla más atractiva. Como resultado, se espera que más turistas que visitan las Islas Uros continúen hacia Taquile, y que los turistas en Taquile se queden más tiempo (menor probabilidad de regresar inmediatamente a Puno).</p>
        
        <h3 className={styles.subTitle}>2.2. Pregunta de Investigación</h3>
        <ul className={styles.paperList}>
            <li>¿Cuánto aumentó el porcentaje de turistas en Taquile?</li>
            <li>¿Cambió el hub principal?</li>
            <li>¿Qué tan rápido converge el sistema con estos cambios?</li>
        </ul>

        <h3 className={styles.subTitle}>2.3. Enfoque Matemático</h3>
        <p className={styles.text}>Modelaremos el flujo de turistas como una Cadena de Markov usando una matriz de transición T, donde:</p>
        <div className={styles.mathBlock}>
            T<sub>ij</sub> = P(moverse del destino i al destino j)
        </div>
        <p className={styles.text}>El eigenvector asociado al eigenvalue dominante (λ = 1) nos dará la distribución estacionaria.</p>
      </div>

      {/* --- TARJETA 3: CONSTRUCCIÓN MATRIZ --- */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>3. Construcción de la Matriz de Transición</h2>
        <p className={styles.text}>La matriz de transición está basada en los cambios por la inversión:</p>
        <ul className={styles.paperList}>
            <li>Aumenta de 25% a 35% la probabilidad de ir de Uros a Taquile.</li>
            <li>Reduce de 50% a 40% la probabilidad de regresar de Uros a Puno Ciudad.</li>
            <li>Reduce de 40% a 30% la probabilidad de regresar de Taquile a Puno Ciudad.</li>
            <li>Aumenta de 30% a 40% la probabilidad de quedarse en Taquile.</li>
        </ul>

        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> matriz.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`destinos = ['Puno Ciudad', 'Islas Uros', 'Taquile', 'Amantaní']
n_destinos = len(destinos)

# Matriz de transición T (MODIFICADA EJERCICIO 1)
# T[i,j] = probabilidad de moverse del destino i al destino j
T = np.array([
    [0.25, 0.45, 0.20, 0.10], # Desde Puno Ciudad
    [0.40, 0.15, 0.35, 0.10], # Desde Islas Uros (MODIFICADO)
    [0.30, 0.10, 0.40, 0.20], # Desde Taquile (MODIFICADO)
    [0.55, 0.15, 0.10, 0.20]  # Desde Amantaní
])

df_matriz = pd.DataFrame(T, index=destinos, columns=destinos)

print("Matriz de Transición T (Modificada):")
print("=" * 70)
print(df_matriz)
print("\\nCada fila representa la distribución de probabilidad de moverse")
print("desde un destino (fila) hacia otros destinos (columnas)")
print("\\nVerificación: Suma de cada fila debe ser 1.0")
print("-" * 70)
for i, dest in enumerate(destinos):
    suma = T[i,:].sum()
    status = "OK" if abs(suma - 1.0) < 0.001 else "ERROR"
    print(f"{status} {dest :15}: suma = {suma :.3f}")`, "c2")}>{copied === "c2" ? "Copiado" : "Copiar"}</button></div>
            <pre className={styles.preBlock}>
{`# Definición de destinos
destinos = ['Puno Ciudad', 'Islas Uros', 'Taquile', 'Amantaní']
n_destinos = len(destinos)

# Matriz de transición T (MODIFICADA EJERCICIO 1)
# T[i,j] = probabilidad de moverse del destino i al destino j
T = np.array([
    [0.25, 0.45, 0.20, 0.10], # Desde Puno Ciudad
    [0.40, 0.15, 0.35, 0.10], # Desde Islas Uros (MODIFICADO)
    [0.30, 0.10, 0.40, 0.20], # Desde Taquile (MODIFICADO)
    [0.55, 0.15, 0.10, 0.20]  # Desde Amantaní
])

# Crear DataFrame para mejor visualización
df_matriz = pd.DataFrame(T,
                         index=destinos,
                         columns=destinos)

print("Matriz de Transición T (Modificada):")
print("=" * 70)
print(df_matriz)
print("\\nCada fila representa la distribución de probabilidad de moverse")
print("desde un destino (fila) hacia otros destinos (columnas)")
print("\\nVerificación: Suma de cada fila debe ser 1.0")
print("-" * 70)
for i, dest in enumerate(destinos):
    suma = T[i,:].sum()
    status = "OK" if abs(suma - 1.0) < 0.001 else "ERROR"
    print(f"{status} {dest :15}: suma = {suma :.3f}")`}
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
{`Matriz de Transición T (Modificada):
======================================================================
             Puno Ciudad  Islas Uros  Taquile  Amantaní
Puno Ciudad         0.25        0.45     0.20       0.1
Islas Uros          0.40        0.15     0.35       0.1
Taquile             0.30        0.10     0.40       0.2
Amantaní            0.55        0.15     0.10       0.2

Cada fila representa la distribución de probabilidad de moverse
desde un destino (fila) hacia otros destinos (columnas)

Verificación: Suma de cada fila debe ser 1.0
----------------------------------------------------------------------
OK Puno Ciudad    : suma = 1.000
OK Islas Uros     : suma = 1.000
OK Taquile        : suma = 1.000
OK Amantaní       : suma = 1.000`}
            </pre>
        </div>

        {/* IMÁGENES 1 y 2 */}
        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje1/1.png" alt="DataFrame Matriz" />
            <span className={styles.imgCaption}>Figura 1: DataFrame de la Matriz de Transición</span>
        </div>
        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje1/2.png" alt="Verificación Suma" />
            <span className={styles.imgCaption}>Figura 2: Verificación de sumas de fila</span>
        </div>

        <h3 className={styles.subTitle}>3.1. Interpretación de Valores</h3>
        <ul className={styles.paperList}>
            <li><strong>T[1,2] = 0.35:</strong> El 35% de turistas en Uros ahora van a Taquile (efecto de la promoción).</li>
            <li><strong>T[2,2] = 0.40:</strong> El 40% de turistas en Taquile se quedan (mayor retención por infraestructura).</li>
            <li><strong>T[2,0] = 0.30:</strong> Solo el 30% regresa inmediatamente a Puno (reducción del rebote).</li>
        </ul>

        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> heatmap.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`# Visualización de la matriz de transición
plt.figure(figsize =(10, 8))
sns.heatmap(T, annot=True , fmt='.2f', cmap='YlOrRd',
            xticklabels=destinos , yticklabels=destinos ,
            cbar_kws ={'label': 'Probabilidad de Transición'},
            linewidths =0.5, linecolor='gray')
plt.title('Matriz de Transición Modificada\\n(Inversión en Taquile)',
          fontsize =14, fontweight='bold', pad =20)
plt.xlabel('Destino (hacia)', fontsize =12)
plt.ylabel('Origen (desde)', fontsize =12)
plt.tight_layout ()
plt.show()

print("\\nLos valores más oscuros indican mayor probabilidad de transición")`, "c3")}>{copied === "c3" ? "Copiado" : "Copiar"}</button></div>
            <pre className={styles.preBlock}>
{`# Visualización de la matriz de transición
plt.figure(figsize =(10, 8))
sns.heatmap(T, annot=True , fmt='.2f', cmap='YlOrRd',
            xticklabels=destinos , yticklabels=destinos ,
            cbar_kws ={'label': 'Probabilidad de Transición'},
            linewidths =0.5, linecolor='gray')
plt.title('Matriz de Transición Modificada\\n(Inversión en Taquile)',
          fontsize =14, fontweight='bold', pad =20)
plt.xlabel('Destino (hacia)', fontsize =12)
plt.ylabel('Origen (desde)', fontsize =12)
plt.tight_layout ()
plt.show()

print("\\nLos valores más oscuros indican mayor probabilidad de transición")`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje1/3.png" alt="Heatmap" />
            <span className={styles.imgCaption}>Figura 3: Mapa de Calor de Probabilidades de Transición</span>
        </div>
      </div>

      {/* --- TARJETA 4: CÁLCULO EIGENVALUES --- */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>4. Cálculo de Eigenvalues y Eigenvectors</h2>
        <p className={styles.text}>Para encontrar la distribución estacionaria, necesitamos:</p>
        <ul className={styles.paperList}>
            <li>Calcular los eigenvalues y eigenvectors de T<sup>T</sup> (transpuesta).</li>
            <li>Identificar el eigenvalue dominante (λ ≈ 1).</li>
            <li>El eigenvector correspondiente es la distribución estacionaria.</li>
        </ul>

        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> eigen.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`# Calcular eigenvalues y eigenvectors
# Nota: usamos T.T (transpuesta) para cadenas de Markov
eigenvalues , eigenvectors = linalg.eig(T.T)

print("EIGENVALUES ENCONTRADOS")
print("=" * 70)
print("\\nTodos los eigenvalues:")
for i, val in enumerate(eigenvalues):
    if np.isreal(val):
        print(f" λ_{i+1} = {val.real :8.5f}")
    else:
        print(f" λ_{i+1} = {val.real :8.5f} + {val.imag :8.5f}i")

# Identificar el eigenvalue dominante (más cercano a 1)
idx_dominante = np.argmax(np.abs(eigenvalues))
lambda_dominante = eigenvalues[idx_dominante]

print(f"\\nEIGENVALUE DOMINANTE: λ_{idx_dominante +1} = {lambda_dominante.real :.6f}")
print("\\nINTERPRETACIÓN:")
print(" - λ = 1 El sistema tiene un estado estacionario")
print(" - |λ| < 1 El sistema converge hacia el equilibrio")
print(" - La magnitud de λ determina la velocidad de convergencia")

# Visualización de eigenvalues en el plano complejo
plt.figure(figsize =(10, 8))
# ... (código ploteo)
plt.show()

print("\\nEl eigenvalue dominante (estrella roja) está en 1")
print("Esto confirma la existencia de un estado estacionario")`, "c4")}>{copied === "c4" ? "Copiado" : "Copiar"}</button></div>
            <pre className={styles.preBlock}>
{`# Calcular eigenvalues y eigenvectors
# Nota: usamos T.T (transpuesta) para cadenas de Markov
eigenvalues , eigenvectors = linalg.eig(T.T)

print("EIGENVALUES ENCONTRADOS")
print("=" * 70)
print("\\nTodos los eigenvalues:")
for i, val in enumerate(eigenvalues):
    if np.isreal(val):
        print(f" λ_{i+1} = {val.real :8.5f}")
    else:
        print(f" λ_{i+1} = {val.real :8.5f} + {val.imag :8.5f}i")

# Identificar el eigenvalue dominante (más cercano a 1)
idx_dominante = np.argmax(np.abs(eigenvalues))
lambda_dominante = eigenvalues[idx_dominante]

print(f"\\nEIGENVALUE DOMINANTE: λ_{idx_dominante +1} = {lambda_dominante.real :.6f}")
print("\\nINTERPRETACIÓN:")
print(" - λ = 1 El sistema tiene un estado estacionario")
print(" - |λ| < 1 El sistema converge hacia el equilibrio")
print(" - La magnitud de λ determina la velocidad de convergencia")

# Visualización de eigenvalues en el plano complejo
plt.figure(figsize =(10, 8))
# ... (código ploteo)
plt.show()

print("\\nEl eigenvalue dominante (estrella roja) está en 1")
print("Esto confirma la existencia de un estado estacionario")`}
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
{`EIGENVALUES ENCONTRADOS
======================================================================

Todos los eigenvalues:
 λ_1 =  1.00000
 λ_2 =  0.10721 +  0.16426i
 λ_3 =  0.10721 + -0.16426i
 λ_4 = -0.21442

EIGENVALUE DOMINANTE: λ_1 = 1.000000`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje1/4.png" alt="Eigenvalues" />
            <span className={styles.imgCaption}>Figura 4: Eigenvalues en el Plano Complejo</span>
        </div>
      </div>

      {/* --- TARJETA 5: DISTRIBUCIÓN ESTACIONARIA --- */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>5. Distribución Estacionaria</h2>
        <p className={styles.text}>El eigenvector asociado al eigenvalue dominante nos da la distribución de equilibrio de turistas entre los destinos.</p>
        
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> distribucion.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`# Extraer eigenvector correspondiente al eigenvalue dominante
v_dominante = eigenvectors [:, idx_dominante ].real

# Normalizar para que sume 1 (distribución de probabilidad)
dist_estacionaria = v_dominante / v_dominante.sum()

print("DISTRIBUCIÓN ESTACIONARIA DE TURISTAS")
print("=" * 70)
print("\\nDistribución de equilibrio:")
print("-" * 70)

for i, dest in enumerate(destinos):
    porcentaje = dist_estacionaria[i] * 100
    barra = "█" * int(porcentaje / 2)
    print(f"{dest :15} : {porcentaje :6.2f} % {barra}")

# Identificar el hub principal
idx_hub = np.argmax(dist_estacionaria)
print("\\n" + "=" * 70)
print(f"HUB PRINCIPAL: {destinos[idx_hub ]}")
print(f"Concentra el {dist_estacionaria[idx_hub ]*100:.2f} % de turistas en equilibrio")
print("=" * 70)

# Visualización de la distribución estacionaria
fig , (ax1 , ax2) = plt.subplots(1, 2, figsize =(16, 6))
# ... (código ploteo)
plt.show()

print("\\nINTERPRETACIÓN:")
print(f"Puno Ciudad es el centro neurálgico, pero Taquile ha incrementado su importancia.")`, "c5")}>{copied === "c5" ? "Copiado" : "Copiar"}</button></div>
            <pre className={styles.preBlock}>
{`# Extraer eigenvector correspondiente al eigenvalue dominante
v_dominante = eigenvectors [:, idx_dominante ].real

# Normalizar para que sume 1 (distribución de probabilidad)
dist_estacionaria = v_dominante / v_dominante.sum()

print("DISTRIBUCIÓN ESTACIONARIA DE TURISTAS")
print("=" * 70)
print("\\nEigenvector dominante (normalizado):")
print("\\nDistribución de equilibrio:")
print("-" * 70)

for i, dest in enumerate(destinos):
    porcentaje = dist_estacionaria[i] * 100
    barra = "█" * int(porcentaje / 2)
    print(f"{dest :15} : {porcentaje :6.2f} % {barra}")

# Identificar el hub principal
idx_hub = np.argmax(dist_estacionaria)
print("\\n" + "=" * 70)
print(f"HUB PRINCIPAL: {destinos[idx_hub ]}")
print(f"Concentra el {dist_estacionaria[idx_hub ]*100:.2f} % de turistas en equilibrio")
print("=" * 70)

# Visualización de la distribución estacionaria
fig , (ax1 , ax2) = plt.subplots(1, 2, figsize =(16, 6))
# ... (código ploteo)
plt.show()

print("\\nINTERPRETACIÓN:")
print(f"Puno Ciudad es el centro neurálgico, pero Taquile ha incrementado su importancia.")`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
            </div>
            <pre className={styles.terminalBody}>
{`DISTRIBUCIÓN ESTACIONARIA DE TURISTAS
======================================================================

Distribución de equilibrio:
----------------------------------------------------------------------
Puno Ciudad     :  34.22 % █████████████████
Islas Uros      :  23.88 % ███████████
Taquile         :  27.70 % █████████████
Amantaní        :  14.19 % ███████

======================================================================
HUB PRINCIPAL: Puno Ciudad
Concentra el 34.22 % de turistas en equilibrio
======================================================================`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje1/5.png" alt="Distribución Gráfica" />
            <span className={styles.imgCaption}>Figura 5: Gráfico de Distribución de Turistas en Equilibrio</span>
        </div>
      </div>

      {/* --- TARJETA 6: SIMULACIÓN --- */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>6. Validación Mediante Simulación</h2>
        <p className={styles.text}>Vamos a simular la evolución del sistema durante 30 días para verificar que converge al eigenvector dominante.<br/>Estado inicial: Todos los turistas llegan primero a Puno Ciudad.</p>
        
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> simulacion.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`# Estado inicial: todos comienzan en Puno Ciudad
estado_inicial = np.array ([1.0, 0.0, 0.0, 0.0])
print("SIMULACIÓN DE EVOLUCIÓN TEMPORAL")
print("=" * 70)
print(f"Estado inicial: {estado_inicial}")
print("(Todos los turistas llegan primero a Puno Ciudad)\\n")

# Simular evolución durante 30 días
n_dias = 30
evolucion = np.zeros(( n_dias + 1, n_destinos))
evolucion [0] = estado_inicial

for dia in range(n_dias):
    evolucion[dia + 1] = T.T @ evolucion[dia]

# Crear DataFrame para visualización
dias_mostrar = [0, 1, 2, 3, 5, 7, 10, 15, 20, 25, 30]
df_evolucion = pd.DataFrame(
    evolucion[dias_mostrar],
    columns=destinos ,
    index=[f'Día {d}' for d in dias_mostrar]
)

print("Evolución de la distribución por días:")
print("-" * 70)
print(df_evolucion.to_string(float_format=lambda x: f'{x:.4f}'))

# Calcular convergencia
diferencia_final = np.abs(evolucion [-1] - dist_estacionaria)
print("\\n" + "=" * 70)
print(f"Diferencia entre simulación (día 30) y distribución teórica:")
print(f"Error máximo: {diferencia_final.max():.6f}")
print(f"\\nLa simulación converge al eigenvector dominante")
print("=" * 70)

# Visualización de la evolución temporal
fig , (ax1 , ax2) = plt.subplots(1, 2, figsize =(16, 6))
# ... (código ploteo)
plt.show()

print("\\nObservaciones:")
print("Las líneas punteadas muestran la distribución de equilibrio")
print("El sistema converge rápidamente en los primeros 10 días")
print("La escala logarítmica muestra convergencia exponencial")`, "c6")}>{copied === "c6" ? "Copiado" : "Copiar"}</button></div>
            <pre className={styles.preBlock}>
{`# Estado inicial: todos comienzan en Puno Ciudad
estado_inicial = np.array ([1.0, 0.0, 0.0, 0.0])
print("SIMULACIÓN DE EVOLUCIÓN TEMPORAL")
print("=" * 70)
print(f"Estado inicial: {estado_inicial}")
print("(Todos los turistas llegan primero a Puno Ciudad)\\n")

# Simular evolución durante 30 días
n_dias = 30
evolucion = np.zeros(( n_dias + 1, n_destinos))
evolucion [0] = estado_inicial

for dia in range(n_dias):
    evolucion[dia + 1] = T.T @ evolucion[dia]

# Crear DataFrame para visualización
dias_mostrar = [0, 1, 2, 3, 5, 7, 10, 15, 20, 25, 30]
df_evolucion = pd.DataFrame(
    evolucion[dias_mostrar],
    columns=destinos ,
    index=[f'Día {d}' for d in dias_mostrar]
)

print("Evolución de la distribución por días:")
print("-" * 70)
print(df_evolucion.to_string(float_format=lambda x: f'{x:.4f}'))

# Calcular convergencia
diferencia_final = np.abs(evolucion [-1] - dist_estacionaria)
print("\\n" + "=" * 70)
print(f"Diferencia entre simulación (día 30) y distribución teórica:")
print(f"Error máximo: {diferencia_final.max():.6f}")
print(f"\\nLa simulación converge al eigenvector dominante")
print("=" * 70)

# Visualización de la evolución temporal
fig , (ax1 , ax2) = plt.subplots(1, 2, figsize =(16, 6))
# ... (código ploteo)
plt.show()

print("\\nObservaciones:")
print("Las líneas punteadas muestran la distribución de equilibrio")
print("El sistema converge rápidamente en los primeros 10 días")
print("La escala logarítmica muestra convergencia exponencial")`}
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
{`Evolución de la distribución por días:
----------------------------------------------------------------------
        Puno Ciudad  Islas Uros  Taquile  Amantaní
Día 0        1.0000      0.0000   0.0000     0.0000
Día 1        0.2500      0.4500   0.2000     0.1000
...
Día 7        0.3422      0.2388   0.2770     0.1419
...
Día 30       0.3422      0.2388   0.2770     0.1419`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje1/6.png" alt="Simulación" />
            <span className={styles.imgCaption}>Figura 6: Evolución Temporal hacia el Equilibrio</span>
        </div>
      </div>

      {/* --- TARJETA 7: RED DE FLUJO --- */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>7. Visualización de la Red de Flujo</h2>
        <p className={styles.text}>Representación gráfica de los flujos entre destinos, donde el tamaño de los nodos representa la importancia del destino en equilibrio.</p>
        
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> red_flujo.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`# Visualización de la red de flujos
fig , ax = plt.subplots(figsize =(12, 10))

# Posiciones de los nodos (destinos) en forma de red
pos = {
    0: (0.5, 0.75), # Puno Ciudad (centro -arriba)
    1: (0.15, 0.4), # Uros (izquierda)
    2: (0.85, 0.4), # Taquile (derecha)
    3: (0.5, 0.15)  # Amantaní (abajo)
}

# Dibujar nodos (tamaño proporcional a la importancia)
for i, (x, y) in pos.items():
    tamaño = dist_estacionaria[i] * 4000 # Escalado para visualización
    circle = plt.Circle ((x, y), 0.08, color=colores[i], alpha =0.6,
                         edgecolor='black', linewidth=3, zorder =3)
    ax.add_patch(circle)
    ax.text(x, y, destinos[i], ha='center', va='center',
            fontsize =11, fontweight='bold', zorder =4)
    # Añadir porcentaje
    ax.text(x, y-0.12, f'{dist_estacionaria[i]*100:.1f} %',
            ha='center', va='top', fontsize=9,
            style='italic', color='darkblue', zorder =4)

# Dibujar arcos (solo los más significativos > 15 %)
for i in range(n_destinos):
    for j in range(n_destinos):
        if i != j and T[i, j] > 0.15:
            x1, y1 = pos[i]
            x2, y2 = pos[j]

            # Calcular punto medio y offset para curvas
            dx = x2 - x1
            dy = y2 - y1

            # Dibujar flecha curva
            ax.annotate('', xy=(x2, y2), xytext =(x1, y1),
                        arrowprops=dict(
                            arrowstyle='->',
                            lw=T[i,j]*8, # Grosor proporcional a probabilidad
                            color='gray',
                            alpha =0.5,
                            connectionstyle="arc3 ,rad =0.2"
                        ))

            # Etiqueta del flujo
            mid_x , mid_y = (x1 + x2) / 2, (y1 + y2) / 2
            ax.text(mid_x , mid_y , f'{T[i,j]*100:.0f} %',
                    fontsize=8, ha='center',
                    bbox=dict(boxstyle='round ,pad =0.3',
                              facecolor='white', alpha =0.8))

ax.set_xlim ([0, 1])
ax.set_ylim ([0, 1])
ax.axis('off')
ax.set_title('Red de Flujo Turístico - Lago Titicaca\\n' +
             '(Tamaño de nodo = Importancia del destino | ' +
             'Grosor de flecha = Probabilidad de transición)',
             fontsize =14, fontweight='bold', pad =20)

# Leyenda
legend_text = "Flujos mostrados: probabilidad > 15 %"
ax.text (0.5, 0.02, legend_text , ha='center', fontsize =10,
         style='italic', color='gray')

plt.tight_layout ()
plt.show()

print("\\nLa red muestra visualmente:")
print("Puno Ciudad como hub central (nodo más grande)")
print("Flujos principales desde Puno hacia islas")
print("Retorno predominante hacia Puno Ciudad")`, "c7")}>{copied === "c7" ? "Copiado" : "Copiar"}</button></div>
            <pre className={styles.preBlock}>
{`# Visualización de la red de flujos
fig , ax = plt.subplots(figsize =(12, 10))

# Posiciones de los nodos (destinos) en forma de red
pos = {
    0: (0.5, 0.75), # Puno Ciudad (centro -arriba)
    1: (0.15, 0.4), # Uros (izquierda)
    2: (0.85, 0.4), # Taquile (derecha)
    3: (0.5, 0.15)  # Amantaní (abajo)
}

# Dibujar nodos (tamaño proporcional a la importancia)
for i, (x, y) in pos.items():
    tamaño = dist_estacionaria[i] * 4000 # Escalado para visualización
    circle = plt.Circle ((x, y), 0.08, color=colores[i], alpha =0.6,
                         edgecolor='black', linewidth=3, zorder =3)
    ax.add_patch(circle)
    ax.text(x, y, destinos[i], ha='center', va='center',
            fontsize =11, fontweight='bold', zorder =4)
    # Añadir porcentaje
    ax.text(x, y-0.12, f'{dist_estacionaria[i]*100:.1f} %',
            ha='center', va='top', fontsize=9,
            style='italic', color='darkblue', zorder =4)

# Dibujar arcos (solo los más significativos > 15 %)
for i in range(n_destinos):
    for j in range(n_destinos):
        if i != j and T[i, j] > 0.15:
            x1, y1 = pos[i]
            x2, y2 = pos[j]

            # Calcular punto medio y offset para curvas
            dx = x2 - x1
            dy = y2 - y1

            # Dibujar flecha curva
            ax.annotate('', xy=(x2, y2), xytext =(x1, y1),
                        arrowprops=dict(
                            arrowstyle='->',
                            lw=T[i,j]*8, # Grosor proporcional a probabilidad
                            color='gray',
                            alpha =0.5,
                            connectionstyle="arc3 ,rad =0.2"
                        ))

            # Etiqueta del flujo
            mid_x , mid_y = (x1 + x2) / 2, (y1 + y2) / 2
            ax.text(mid_x , mid_y , f'{T[i,j]*100:.0f} %',
                    fontsize=8, ha='center',
                    bbox=dict(boxstyle='round ,pad =0.3',
                              facecolor='white', alpha =0.8))

ax.set_xlim ([0, 1])
ax.set_ylim ([0, 1])
ax.axis('off')
ax.set_title('Red de Flujo Turístico - Lago Titicaca\\n' +
             '(Tamaño de nodo = Importancia del destino | ' +
             'Grosor de flecha = Probabilidad de transición)',
             fontsize =14, fontweight='bold', pad =20)

# Leyenda
legend_text = "Flujos mostrados: probabilidad > 15 %"
ax.text (0.5, 0.02, legend_text , ha='center', fontsize =10,
         style='italic', color='gray')

plt.tight_layout ()
plt.show()

print("\\nLa red muestra visualmente:")
print("Puno Ciudad como hub central (nodo más grande)")
print("Flujos principales desde Puno hacia islas")
print("Retorno predominante hacia Puno Ciudad")`}
            </pre>
        </div>

        <div className={styles.terminalWindow}>
            <div className={styles.terminalHeader}>
                <div className={`${styles.dot} ${styles.red}`}></div>
                <div className={`${styles.dot} ${styles.yellow}`}></div>
                <div className={`${styles.dot} ${styles.green}`}></div>
            </div>
            <pre className={styles.terminalBody}>
{`La red muestra visualmente:
Puno Ciudad como hub central (nodo más grande)
Flujos principales desde Puno hacia islas
Retorno predominante hacia Puno Ciudad`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje1/7.png" alt="Red de Flujo" />
            <span className={styles.imgCaption}>Figura 7: Red de Flujo Turístico - Lago Titicaca</span>
        </div>
      </div>

      {/* --- TARJETA 8: CONCLUSIONES --- */}
      <div className={styles.stepCard}>
        <h2 className={styles.sectionTitle}>8. Conclusiones y Aplicaciones Prácticas</h2>
        <div className={styles.codeBlock}>
            <div className={styles.codeHeader}><span><i className="fab fa-python"></i> conclusiones.py</span><button className={styles.copyButton} onClick={() => copiarCodigo(`print("="*70)
print("CONCLUSIONES DEL ANÁLISIS - EJERCICIO 1 (TAQUILE)")
print("="*70)
print()

print("1. DISTRIBUCIÓN DE EQUILIBRIO:")
print("-" * 70)
for i, dest in enumerate(destinos):
    print(f" {dest :15} : {dist_estacionaria[i]*100:5.1f} %")
print(f"\\n Puno Ciudad es el HUB principal, pero Taquile ha crecido notablemente.")
print()

print("2. VELOCIDAD DE CONVERGENCIA:")
print("-" * 70)
if len(eigenvalues) > 1:
    lambda_2 = sorted(np.abs(eigenvalues), reverse=True)[1]
    tasa_convergencia = -np.log(lambda_2)
    tiempo_convergencia = int(5 / tasa_convergencia) if tasa_convergencia > 0 else 0
    print(f" Segundo eigenvalue: {lambda_2 :.4f}")
    print(f" El sistema converge al equilibrio en ~{ tiempo_convergencia} días")
    print(f" Convergencia: Exponencial (rápida)")
print()

print("3. IMPLICACIONES PARA PLANIFICACIÓN TURÍSTICA:")
print("-" * 70)
print(" INFRAESTRUCTURA HOTELERA:")
print(f" Taquile tiene ahora una demanda del {dist_estacionaria[2]*100:.1f} %")
print(" Se necesita invertir más en hoteles/hospedaje en Taquile.")
print()
print(" TRANSPORTE ACUÁTICO:")
print(" Ruta Uros-Taquile es vital para mantener este flujo.")
print()

print("4. APLICACIONES DEL MODELO:")
print("-" * 70)
print(" - Evaluar impacto de nuevas atracciones turísticas")
print()

# Proyección con 1000 turistas
print("="*70)
print("PROYECCIÓN: 1000 TURISTAS AL MES")
print("="*70)
turistas_totales = 1000
print("\\nDistribución promedio de turistas en equilibrio:")
print("-" * 70)
for i, dest in enumerate(destinos):
    turistas_dest = int(dist_estacionaria[i] * turistas_totales)
    print(f" {dest :15} : {turistas_dest :4d} turistas/día ({ dist_estacionaria[i]*100:.1f} %)")
print()

# Flujos importantes
print("Flujos diarios más importantes:")
print("-" * 70)
flujos = []
for i in range(n_destinos):
    for j in range(n_destinos):
        if i != j and T[i,j] > 0.15:
            flujo = dist_estacionaria[i] * T[i,j] * turistas_totales
            flujos.append (( destinos[i], destinos[j], T[i,j], flujo))

flujos.sort(key=lambda x: x[3], reverse=True)
for origen , destino , prob , cantidad in flujos:
    print(f" {origen :12} {destino :12} : {int(cantidad):3d} turistas/día ({ prob *100:.0f} %)")
print()
print("="*70)`, "c8")}>{copied === "c8" ? "Copiado" : "Copiar"}</button></div>
            <pre className={styles.preBlock}>
{`print("="*70)
print("CONCLUSIONES DEL ANÁLISIS - EJERCICIO 1 (TAQUILE)")
print("="*70)
print()

print("1. DISTRIBUCIÓN DE EQUILIBRIO:")
print("-" * 70)
for i, dest in enumerate(destinos):
    print(f" {dest :15} : {dist_estacionaria[i]*100:5.1f} %")
print(f"\\n Puno Ciudad es el HUB principal, pero Taquile ha crecido notablemente.")
print()

print("2. VELOCIDAD DE CONVERGENCIA:")
print("-" * 70)
if len(eigenvalues) > 1:
    lambda_2 = sorted(np.abs(eigenvalues), reverse=True)[1]
    tasa_convergencia = -np.log(lambda_2)
    tiempo_convergencia = int(5 / tasa_convergencia) if tasa_convergencia > 0 else 0
    print(f" Segundo eigenvalue: {lambda_2 :.4f}")
    print(f" El sistema converge al equilibrio en ~{ tiempo_convergencia} días")
    print(f" Convergencia: Exponencial (rápida)")
print()

print("3. IMPLICACIONES PARA PLANIFICACIÓN TURÍSTICA:")
print("-" * 70)
print(" INFRAESTRUCTURA HOTELERA:")
print(f" Taquile tiene ahora una demanda del {dist_estacionaria[2]*100:.1f} %")
print(" Se necesita invertir más en hoteles/hospedaje en Taquile.")
print()
print(" TRANSPORTE ACUÁTICO:")
print(" Ruta Uros-Taquile es vital para mantener este flujo.")
print()

print("4. APLICACIONES DEL MODELO:")
print("-" * 70)
print(" - Evaluar impacto de nuevas atracciones turísticas")
print()

# Proyección con 1000 turistas
print("="*70)
print("PROYECCIÓN: 1000 TURISTAS AL MES")
print("="*70)
turistas_totales = 1000
print("\\nDistribución promedio de turistas en equilibrio:")
print("-" * 70)
for i, dest in enumerate(destinos):
    turistas_dest = int(dist_estacionaria[i] * turistas_totales)
    print(f" {dest :15} : {turistas_dest :4d} turistas/día ({ dist_estacionaria[i]*100:.1f} %)")
print()

# Flujos importantes
print("Flujos diarios más importantes:")
print("-" * 70)
flujos = []
for i in range(n_destinos):
    for j in range(n_destinos):
        if i != j and T[i,j] > 0.15:
            flujo = dist_estacionaria[i] * T[i,j] * turistas_totales
            flujos.append (( destinos[i], destinos[j], T[i,j], flujo))

flujos.sort(key=lambda x: x[3], reverse=True)
for origen , destino , prob , cantidad in flujos:
    print(f" {origen :12} {destino :12} : {int(cantidad):3d} turistas/día ({ prob *100:.0f} %)")
print()
print("="*70)`}
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
CONCLUSIONES DEL ANÁLISIS - EJERCICIO 1 (TAQUILE)
======================================================================

1. DISTRIBUCIÓN DE EQUILIBRIO:
----------------------------------------------------------------------
 Puno Ciudad      :  34.2 %
 Islas Uros       :  23.9 %
 Taquile          :  27.7 %
 Amantaní         :  14.2 %

 Puno Ciudad es el HUB principal, pero Taquile ha crecido notablemente.

2. VELOCIDAD DE CONVERGENCIA:
----------------------------------------------------------------------
 Segundo eigenvalue: 0.2144
 El sistema converge al equilibrio en ~3 días
 Convergencia: Exponencial (rápida)

3. IMPLICACIONES PARA PLANIFICACIÓN TURÍSTICA:
----------------------------------------------------------------------
 INFRAESTRUCTURA HOTELERA:
 Taquile tiene ahora una demanda del 27.7 %
 Se necesita invertir más en hoteles/hospedaje en Taquile.

 TRANSPORTE ACUÁTICO:
 Ruta Uros-Taquile es vital para mantener este flujo.

4. APLICACIONES DEL MODELO:
----------------------------------------------------------------------
 - Evaluar impacto de nuevas atracciones turísticas

======================================================================
PROYECCIÓN: 1000 TURISTAS EN EL SISTEMA
======================================================================

Distribución promedio de turistas en equilibrio:
----------------------------------------------------------------------
 Puno Ciudad      :  342 turistas/día (34.2 %)
 Islas Uros       :  238 turistas/día (23.9 %)
 Taquile          :  277 turistas/día (27.7 %)
 Amantaní         :  141 turistas/día (14.2 %)`}
            </pre>
        </div>

        <div className={styles.imageContainer}>
            <img src="/Imagenes/eje1/8.png" alt="Proyección" />
            <span className={styles.imgCaption}>Figura 8: Proyección de Flujos Diarios Importantes</span>
        </div>

        {/* PREGUNTAS DE REFLEXIÓN (CON COMILLAS CORREGIDAS) */}
        <h3 className={styles.subTitle} style={{marginTop:'40px'}}>Preguntas de reflexión</h3>
        <ul className={styles.paperList}>
            <li>
                <strong>¿Valió la pena la inversión en Taquile desde el punto de vista de distribución turística?</strong><br/>
                Sí, valió la pena. Al aumentar la probabilidad de quedarse en Taquile al 40% y aumentar el flujo desde Uros, la isla incrementa significativamente su &quot;cuota de mercado&quot; (participación en el equilibrio estacionario), reduciendo la dependencia absoluta de Puno Ciudad.
            </li>
            <li>
                <strong>¿Cómo afectaría esto a los ingresos de Taquile vs otros destinos?</strong><br/>
                Los ingresos de Taquile aumentarían de forma no lineal (exponencial). Al retener turistas (pernoctación), el gasto por turista se duplica o triplica (cena + hospedaje + desayuno) en comparación con un turista de paso (&quot;full day&quot;). Puno Ciudad vería una ligera reducción en el flujo de retorno inmediato, pero se beneficia al consolidar un circuito turístico más robusto que atrae más gente a la región en general.
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