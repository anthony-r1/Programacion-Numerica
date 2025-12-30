"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./eigen.module.css";

export default function EigenPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

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

  const openModal = () => { setIsModalOpen(true); setZoom(1); };
  const closeModal = () => setIsModalOpen(false);
  const zoomIn = () => setZoom(prev => Math.min(prev + 0.1, 2));
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.5));

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

      <div className={styles.contentWrapper}>
        
        {/* BOTÓN PDF */}
        <div className={styles.pdfButtonContainer}>
            <button onClick={openModal} className={styles.pdfButton}>
                <i className="fas fa-file-pdf"></i> Ver Documento PDF Original
            </button>
            <p style={{marginTop:'10px', color:'#777', fontSize:'0.9rem', fontFamily:'Segoe UI'}}>
                Haga clic para visualizar el archivo PDF completo (eigen.pdf)
            </p>
        </div>

        {/* TÍTULO */}
        <h1 className={styles.docTitle}>Actividad de Eigenvalores y Eigenvectores</h1>
        <div className={styles.docMeta}>
            <span className={styles.authorName}>Estudiante: Anthony Rusbel Puma Huanca</span>
            <span style={{display:'block', marginTop:'5px'}}>Código: 240132 | Docente: Fred Torres Cruz</span>
        </div>

        {/* SECCIÓN EJERCICIOS */}
        <h2 className={styles.sectionTitle}>Ejercicios Resueltos</h2>
        
        {/* Ejercicio 1 */}
        <h3 className={styles.exerciseTitle}>Ejercicio 1</h3>
        <p className={styles.text}>Encuentra los eigenvalores y eigenvectores de:</p>
        <div className={styles.mathBlock}>
            A = 
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>4</div><div className={styles.matrixCell}>0</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>0</div><div className={styles.matrixCell}>7</div></div>
            </div>
        </div>
        <p className={styles.text}>
            <strong>Solución:</strong> En matrices diagonales, los eigenvalores están en la diagonal.
            <br/> λ<sub>1</sub> = 4, λ<sub>2</sub> = 7
        </p>
        <p className={styles.text}>Los eigenvectores son los vectores unitarios:</p>
        <div className={styles.mathBlock}>
            v<sub>1</sub> = <div className={styles.matrix}><div className={styles.matrixRow}><div className={styles.matrixCell}>1</div></div><div className={styles.matrixRow}><div className={styles.matrixCell}>0</div></div></div>
            , v<sub>2</sub> = <div className={styles.matrix}><div className={styles.matrixRow}><div className={styles.matrixCell}>0</div></div><div className={styles.matrixRow}><div className={styles.matrixCell}>1</div></div></div>
        </div>
        <p className={styles.text}><strong>Verificación para v<sub>1</sub>:</strong></p>
        <div className={styles.mathBlock}>
            A v<sub>1</sub> = 
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>4</div><div className={styles.matrixCell}>0</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>0</div><div className={styles.matrixCell}>7</div></div>
            </div>
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>1</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>0</div></div>
            </div>
            =
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>4</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>0</div></div>
            </div>
            = 4 <div className={styles.matrix}><div className={styles.matrixRow}><div className={styles.matrixCell}>1</div></div><div className={styles.matrixRow}><div className={styles.matrixCell}>0</div></div></div> = λ<sub>1</sub> v<sub>1</sub>
        </div>
        <p className={styles.text}><strong>Verificación para v<sub>2</sub>:</strong></p>
        <div className={styles.mathBlock}>
            A v<sub>2</sub> = 
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>4</div><div className={styles.matrixCell}>0</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>0</div><div className={styles.matrixCell}>7</div></div>
            </div>
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>0</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>1</div></div>
            </div>
            =
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>0</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>7</div></div>
            </div>
            = 7 <div className={styles.matrix}><div className={styles.matrixRow}><div className={styles.matrixCell}>0</div></div><div className={styles.matrixRow}><div className={styles.matrixCell}>1</div></div></div> = λ<sub>2</sub> v<sub>2</sub>
        </div>

        {/* Ejercicio 2 */}
        <h3 className={styles.exerciseTitle}>Ejercicio 2</h3>
        <p className={styles.text}>Calcula eigenvalores y eigenvectores de:</p>
        <div className={styles.mathBlock}>
            B = 
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>1</div><div className={styles.matrixCell}>2</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>2</div><div className={styles.matrixCell}>1</div></div>
            </div>
        </div>
        
        <p className={styles.text}><strong>Paso 1:</strong> Formar B - λI</p>
        <div className={styles.mathBlock}>
            B - λI = 
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>1 - λ</div><div className={styles.matrixCell}>2</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>2</div><div className={styles.matrixCell}>1 - λ</div></div>
            </div>
        </div>

        <p className={styles.text}><strong>Paso 2:</strong> Determinante</p>
        <div className={styles.mathBlock}>
            det(B - λI) = (1 - λ)² - 4 = λ² - 2λ - 3 = 0
        </div>

        <p className={styles.text}><strong>Paso 3:</strong> Resolver</p>
        <div className={styles.mathBlock}>
            (λ - 3)(λ + 1) = 0 &nbsp; ⇒ &nbsp; λ<sub>1</sub> = 3, λ<sub>2</sub> = -1
        </div>

        <p className={styles.text}><strong>Paso 4a:</strong> Eigenvector para λ<sub>1</sub> = 3</p>
        <div className={styles.mathBlock}>
            (B - 3I) v<sub>1</sub> = 
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>-2</div><div className={styles.matrixCell}>2</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>2</div><div className={styles.matrixCell}>-2</div></div>
            </div>
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>v<sub>1</sub></div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>v<sub>2</sub></div></div>
            </div>
            = 
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>0</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>0</div></div>
            </div>
        </div>
        <p className={styles.subStep}>-2v<sub>1</sub> + 2v<sub>2</sub> = 0 ⇒ v<sub>2</sub> = v<sub>1</sub>. Tomamos v<sub>1</sub>=1 ⇒ v<sub>2</sub>=1.</p>
        <div className={styles.mathBlock}>
            v<sub>1</sub> = <div className={styles.matrix}><div className={styles.matrixRow}><div className={styles.matrixCell}>1</div></div><div className={styles.matrixRow}><div className={styles.matrixCell}>1</div></div></div>
        </div>

        <p className={styles.text}><strong>Paso 4b:</strong> Eigenvector para λ<sub>2</sub> = -1</p>
        <div className={styles.mathBlock}>
            (B + I) v<sub>2</sub> = 
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>2</div><div className={styles.matrixCell}>2</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>2</div><div className={styles.matrixCell}>2</div></div>
            </div>
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>v<sub>1</sub></div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>v<sub>2</sub></div></div>
            </div>
            = 
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>0</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>0</div></div>
            </div>
        </div>
        <p className={styles.subStep}>2v<sub>1</sub> + 2v<sub>2</sub> = 0 ⇒ v<sub>2</sub> = -v<sub>1</sub>. Tomamos v<sub>1</sub>=1 ⇒ v<sub>2</sub>=-1.</p>
        <div className={styles.mathBlock}>
            v<sub>2</sub> = <div className={styles.matrix}><div className={styles.matrixRow}><div className={styles.matrixCell}>1</div></div><div className={styles.matrixRow}><div className={styles.matrixCell}>-1</div></div></div>
        </div>

        {/* Ejercicio 3 */}
        <h3 className={styles.exerciseTitle}>Ejercicio 3</h3>
        <p className={styles.text}>Para la función f(x<sub>1</sub>, x<sub>2</sub>) = 2x<sub>1</sub>² + x<sub>2</sub>² - 2x<sub>1</sub>x<sub>2</sub>:</p>
        
        <p className={styles.text}><strong>a) Calcula la matriz Hessiana</strong></p>
        <p className={styles.subStep}>
            ∂²f/∂x₁² = 4, ∂²f/∂x₂² = 2, ∂²f/∂x₁∂x₂ = -2
        </p>
        <div className={styles.mathBlock}>
            H = 
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>4</div><div className={styles.matrixCell}>-2</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>-2</div><div className={styles.matrixCell}>2</div></div>
            </div>
        </div>

        <p className={styles.text}><strong>b) Encuentra sus eigenvalores</strong></p>
        <div className={styles.mathBlock}>
            det(H - λI) = (4 - λ)(2 - λ) - 4 = λ² - 6λ + 4 = 0
        </div>
        <div className={styles.mathBlock}>
            λ = (6 ± √[36 - 16]) / 2 = (6 ± √20) / 2 = 3 ± √5
        </div>
        <p className={styles.subStep}>(λ ≈ 5.236 y λ ≈ 0.764)</p>

        <p className={styles.text}><strong>c) Clasifica el punto crítico (0, 0)</strong></p>
        <p className={styles.text}>
            Ambos eigenvalores son positivos ⇒ (0, 0) es un <strong>mínimo local</strong>.
        </p>

        {/* Ejercicio 4 */}
        <h3 className={styles.exerciseTitle}>Ejercicio 4</h3>
        <p className={styles.text}>Determina si el punto crítico (0, 0) de f(x<sub>1</sub>, x<sub>2</sub>) = -x<sub>1</sub>² - 2x<sub>2</sub>² es máximo o mínimo usando eigenvalores de la Hessiana.</p>
        
        <p className={styles.text}><strong>Paso 1:</strong> Segundas derivadas</p>
        <p className={styles.subStep}>
            ∂²f/∂x₁² = -2, ∂²f/∂x₂² = -4, ∂²f/∂x₁∂x₂ = 0
        </p>
        <div className={styles.mathBlock}>
            H = 
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>-2</div><div className={styles.matrixCell}>0</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>0</div><div className={styles.matrixCell}>-4</div></div>
            </div>
        </div>

        <p className={styles.text}><strong>Paso 2:</strong> Eigenvalores (matriz diagonal)</p>
        <p className={styles.subStep}>λ<sub>1</sub> = -2, λ<sub>2</sub> = -4</p>

        <p className={styles.text}><strong>Paso 3:</strong> Clasificar</p>
        <p className={styles.text}>
            Ambos eigenvalores son negativos ⇒ (0, 0) es un <strong>máximo local</strong>.
        </p>

        {/* Ejercicio 5 */}
        <h3 className={styles.exerciseTitle}>Ejercicio 5</h3>
        <p className={styles.text}>
            Verifica que v = (2, 1)<sup>T</sup> es eigenvector de C = 
            <span className={styles.inlineMath}>
                <span style={{display:'inline-flex', verticalAlign:'middle', borderLeft:'1px solid #aaa', borderRight:'1px solid #aaa', padding:'0 2px'}}>
                    <span style={{display:'flex', flexDirection:'column'}}><span>3</span><span>1</span></span>
                    <span style={{display:'flex', flexDirection:'column', marginLeft:'5px'}}><span>2</span><span>4</span></span>
                </span>
            </span>
            y encuentra su eigenvalor asociado λ.
        </p>
        
        <p className={styles.text}><strong>Paso 1:</strong> Calcular C v</p>
        <div className={styles.mathBlock}>
            C v = 
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>3</div><div className={styles.matrixCell}>2</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>1</div><div className={styles.matrixCell}>4</div></div>
            </div>
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>2</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>1</div></div>
            </div>
            =
            <div className={styles.matrix}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>8</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>6</div></div>
            </div>
        </div>

        <p className={styles.text}><strong>Paso 2:</strong> Verificar si es múltiplo de v</p>
        <p className={styles.subStep}>
            Supongamos C v = λ v = 
            <div className={styles.matrix} style={{verticalAlign:'middle'}}>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>2λ</div></div>
                <div className={styles.matrixRow}><div className={styles.matrixCell}>λ</div></div>
            </div>
            <br/>
            Entonces: 2λ = 8 ⇒ λ = 4. <br/>
            Y λ = 6 (de la segunda componente). <br/>
            Pero 4 ≠ 6.
        </p>

        <p className={styles.text} style={{borderTop:'1px dashed #555', paddingTop:'10px'}}>
            <strong>Conclusión:</strong> v <strong>no es</strong> un eigenvector de C (ya que (8, 6) no es múltiplo de (2, 1)).
        </p>

      </div>

      {/* --- MODAL PDF --- */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <div className={styles.modalTitle}><i className="fas fa-file-pdf"></i> Visor de PDF</div>
                    <div className={styles.zoomControls}>
                        <button className={styles.controlBtn} onClick={zoomOut} title="Alejar"><i className="fas fa-minus"></i></button>
                        <span style={{color:'white', display:'flex', alignItems:'center'}}>{Math.round(zoom * 100)}%</span>
                        <button className={styles.controlBtn} onClick={zoomIn} title="Acercar"><i className="fas fa-plus"></i></button>
                        <button className={styles.closeBtn} onClick={closeModal}><i className="fas fa-times"></i></button>
                    </div>
                </div>
                <div className={styles.modalBody}>
                    <iframe 
                        src="/Programacion-Numerica/pdfs/eigen.pdf" 
                        className={styles.pdfEmbed}
                        title="Documento PDF"
                        style={{
                            transform: `scale(${zoom})`,
                            transformOrigin: 'top center',
                            width: `${100 / zoom}%`,
                            height: `${100 / zoom}%`
                        }}
                    ></iframe>
                </div>
            </div>
        </div>
      )}

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2025 Programación Numérica FINESI - Universidad Nacional del Altiplano</p>
          <p>Docente: Fred Torres Cruz</p>
        </div>
      </footer>
    </div>
  );
}