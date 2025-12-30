/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./poster.module.css";

export default function PosterCientificoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

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

  // Controladores del Modal
  const openModal = () => { 
      setIsModalOpen(true); 
      setZoom(1); 
      setPosition({ x: 0, y: 0 }); 
  };
  
  const closeModal = () => setIsModalOpen(false);
  
  const zoomIn = (e: React.MouseEvent) => { 
      e.stopPropagation(); 
      setZoom(prev => Math.min(prev + 0.25, 4)); 
  };
  
  const zoomOut = (e: React.MouseEvent) => { 
      e.stopPropagation(); 
      setZoom(prev => Math.max(prev - 0.25, 0.5)); 
  };

  // Lógica de arrastre (Pan) de la imagen
  const handleMouseDown = (e: React.MouseEvent) => {
      setIsDragging(true);
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      setPosition({ x: e.clientX - startPos.x, y: e.clientY - startPos.y });
  };

  const handleMouseUp = () => {
      setIsDragging(false);
  };

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

      {/* HEADER (AHORA FIJO/ESTÁTICO EN PANTALLA) */}
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

      {/* CONTENIDO DEL PAPER */}
      <div className={styles.paperContainer}>
        
        {/* BOTÓN FLOTANTE (PRIMERA POSICIÓN ABSOLUTA DENTRO DEL PAPER) */}
        <div className={styles.floatingButtonContainer}>
            <button onClick={openModal} className={styles.posterButton}>
                <i className="fas fa-expand-arrows-alt"></i> Ver Póster Científico Original
            </button>
            <p style={{marginTop:'10px', color:'#777', fontSize:'0.9rem', fontFamily:'Segoe UI'}}>
                Haga clic para ver la versión visual completa del póster
            </p>
        </div>

        {/* TÍTULO */}
        <h1 className={styles.paperTitle}>
            Modelamiento de la segunda derivada como predictor de colapso sanitario pediátrico en Puno: análisis de la dinámica epidemiológica de neumonía en 2025
        </h1>
        <div className={styles.paperMeta}>
            <span className={styles.authorName}>Anthony Rusbel Puma Huanca</span>
            <span className={styles.affil}>Escuela Profesional de Ingeniería Estadística e Informática, Universidad Nacional del Altiplano, Puno, Perú</span>
            <span className={styles.affil}>24 de diciembre de 2025</span>
        </div>

        {/* ABSTRACT */}
        <div className={styles.abstractBox}>
            <p className={styles.text} style={{marginBottom:0}}>
                <strong>Abstract:</strong> La región de Puno, ubicada en el altiplano peruano, enfrenta cada año temporadas de heladas que incrementan significativamente la incidencia de neumonía en menores de cinco años, elevando el riesgo de colapso sanitario pediátrico. Este estudio propone un modelo de alerta temprana basado en el análisis numérico de la segunda derivada (f&apos;&apos;) de la curva epidemiológica de casos semanales. Se integraron datos del CDC-MINSA y del SENAMHI correspondientes al año 2025. Mediante splines cúbicos de suavizado y diferencias finitas centradas, se estimó la aceleración del contagio y se correlacionó con descensos térmicos. El modelo detectó una fase crítica con 14 días de anticipación al colapso hospitalario, demostrando que f&apos;&apos;(t) &gt; 0 constituye un indicador más sensible que el conteo absoluto de casos. Además, se identificó un rezago de 7 días entre descensos térmicos (ΔT ≤ -2°C) y picos en la aceleración, con una correlación cruzada de r = -0,78 (p &lt; 0,01). La implementación en R incluye un tablero interactivo con Shiny para uso operativo en salud pública.
            </p>
            <p className={styles.keywords}>
                <strong>Palabras clave:</strong> neumonía infantil, segunda derivada, alerta temprana, análisis numérico, salud pública, Puno.
            </p>
        </div>

        {/* 1. INTRODUCCIÓN */}
        <h2 className={styles.sectionTitle}>1. Introducción</h2>
        <p className={styles.text}>
            La neumonía aguda es una de las principales causas de mortalidad infantil en el Perú, especialmente en regiones de alta altitud como Puno [1]. Las bajas temperaturas durante los friajes agudizan la vulnerabilidad respiratoria en la población pediátrica, generando sobredemanda en servicios de salud que a menudo conduce a colapsos asistenciales [3]. Los sistemas tradicionales de vigilancia epidemiológica, basados en umbrales absolutos de casos, carecen de capacidad predictiva.
        </p>
        <p className={styles.text}>
            El análisis diferencial ofrece una alternativa prometedora. Mientras que la primera derivada f&apos;(t) mide la velocidad del contagio, la segunda derivada f&apos;&apos;(t) mide su aceleración, permitiendo identificar puntos de inflexión antes de que la curva se vuelva exponencial [2]. Este trabajo implementa un modelo predictivo basado en este principio, integrando datos epidemiológicos y climáticos mediante técnicas de análisis numérico.
        </p>

        {/* 2. OBJETIVOS */}
        <h2 className={styles.sectionTitle}>2. Objetivos</h2>
        <h3 className={styles.subTitle}>2.1 Objetivo general</h3>
        <p className={styles.text}>
            Desarrollar un modelo de alerta temprana basado en diferenciación numérica para monitorear la dinámica de la neumonía en Puno y prever matemáticamente el colapso sanitario pediátrico.
        </p>
        <h3 className={styles.subTitle}>2.2 Objetivos específicos</h3>
        <ul className={styles.paperList}>
            <li>Calcular la velocidad (f&apos;) y aceleración (f&apos;&apos;) del contagio mediante diferencias finitas centradas.</li>
            <li>Implementar splines cúbicos de suavizado en R para eliminar ruido estocástico.</li>
            <li>Correlacionar la aceleración positiva con descensos térmicos para emitir alertas preventivas.</li>
            <li>Desarrollar un tablero de control visual interactivo con Shiny.</li>
        </ul>

        {/* 3. MATERIALES Y MÉTODOS */}
        <h2 className={styles.sectionTitle}>3. Materiales y Métodos</h2>
        
        <h3 className={styles.subTitle}>3.1 Fuentes de datos</h3>
        <ul className={styles.paperList}>
            <li><strong>SENAMHI:</strong> Temperaturas mínimas diarias en Puno (2025).</li>
            <li><strong>CDC-MINSA:</strong> Reportes semanales de neumonía en menores de 5 años (2025).</li>
        </ul>

        <h3 className={styles.subTitle}>3.2 Suavizado mediante splines cúbicos</h3>
        <div className={styles.mathBlock}>
            min_f &#123; ∑(y_i - f(x_i))² + λ ∫ [f&apos;&apos;(x)]² dx &#125;
        </div>

        <h3 className={styles.subTitle}>3.3 Cálculo de derivadas (Diferencias Finitas Centradas)</h3>
        <div className={styles.mathBlock}>
            f&apos;(t_i) ≈ 
            <span className={styles.fraction}>
                <span className={styles.num}>f(t_&#123;i+1&#125;) - f(t_&#123;i-1&#125;)</span>
                <span className={styles.den}>2h</span>
            </span>
            <br/><br/>
            f&apos;&apos;(t_i) ≈ 
            <span className={styles.fraction}>
                <span className={styles.num}>f(t_&#123;i+1&#125;) - 2f(t_i) + f(t_&#123;i-1&#125;)</span>
                <span className={styles.den}>h²</span>
            </span>
        </div>

        <h3 className={styles.subTitle}>3.4 Lógica de alerta temprana</h3>
        <div className={styles.mathBlock}>
            Alerta(t) = 
            <span style={{display:'inline-block', textAlign:'left', marginLeft:'10px', fontSize:'1.1rem'}}>
                Verde, si f&apos;&apos;(t) ≤ 0 <br/>
                Amarilla, si 0 &lt; f&apos;&apos;(t) ≤ τ <br/>
                Roja, si f&apos;&apos;(t) &gt; τ
            </span>
        </div>
        <p className={styles.text} style={{textAlign:'center'}}>Donde τ = percentil 90 histórico.</p>

        <h3 className={styles.subTitle}>3.5 Correlación clima-salud</h3>
        <div className={styles.mathBlock}>
            ρ_&#123;TA&#125;(k) = 
            <span className={styles.fraction}>
                <span className={styles.num}>∑ (T_t - T̄)(A_&#123;t+k&#125; - Ā)</span>
                <span className={styles.den}>√[∑(T_t - T̄)² ∑(A_t - Ā)²]</span>
            </span>
        </div>

        {/* 4. RESULTADOS */}
        <h2 className={styles.sectionTitle}>4. Resultados</h2>
        
        <h3 className={styles.subTitle}>4.1 Detección de fase crítica</h3>
        <p className={styles.text}>
            Durante la semana 25, f&apos;&apos;(t) superó el umbral crítico (τ = 2,5) y permaneció positiva, generando una alerta roja 14 días antes del colapso hospitalario.
        </p>
        
        <div className={styles.tableWrapper}>
            <p style={{textAlign:'center', fontStyle:'italic', color:'#aaa', marginBottom:'10px'}}>Tabla 1: Indicadores de alerta temprana — Semana 25</p>
            <table className={styles.paperTable}>
                <thead>
                    <tr><th>Parámetro</th><th>Valor</th><th>Umbral</th></tr>
                </thead>
                <tbody>
                    <tr><td>Casos semanales</td><td>142</td><td>150</td></tr>
                    <tr><td>Velocidad (f&apos;)</td><td>18,7</td><td>15</td></tr>
                    <tr><td>Aceleración (f&apos;&apos;)</td><td>4,2</td><td>2,5</td></tr>
                </tbody>
            </table>
        </div>

        <h3 className={styles.subTitle}>4.2 Relación clima-enfermedad</h3>
        <p className={styles.text}>
            Se identificó un rezago óptimo de 7 días entre heladas (ΔT ≤ -2°C) y aumentos en f&apos;&apos;, con r = -0,78 (p &lt; 0,01).
        </p>

        {/* 5. DISCUSIÓN */}
        <h2 className={styles.sectionTitle}>5. Discusión</h2>
        <p className={styles.text}>
            Este modelo representa un cambio de paradigma: de la vigilancia reactiva a la gestión predictiva. La segunda derivada captura la &quot;curvatura epidémica&quot; y permite distinguir entre crecimientos lineales y exponenciales en etapas tempranas. La integración de variables climáticas mejora la contextualización del modelo en regiones altoandinas.
        </p>
        <ul className={styles.paperList}>
            <li><strong>Limitaciones:</strong> Dependencia de la calidad de datos y necesidad de validación prospectiva.</li>
        </ul>

        {/* 6. CONCLUSIONES */}
        <h2 className={styles.sectionTitle}>6. Conclusiones</h2>
        <ol className={styles.paperList}>
            <li>La segunda derivada f&apos;&apos;(t) es un indicador temprano confiable de saturación hospitalaria.</li>
            <li>El modelo anticipa colapsos con al menos 14 días de ventaja.</li>
            <li>La correlación clima-enfermedad valida la inclusión de variables meteorológicas.</li>
            <li>La herramienta es escalable, de bajo costo y lista para implementación operativa.</li>
        </ol>

        {/* REFERENCIAS */}
        <div style={{marginTop:'4rem', borderTop:'1px solid #333', paddingTop:'2rem'}}>
            <h3 style={{fontSize:'1.4rem', color:'#fff', marginBottom:'1rem'}}>Referencias Bibliográficas</h3>
            <ul style={{fontSize:'1rem', color:'#aaa', listStyle:'none', padding:0}}>
                <li style={{marginBottom:'8px'}}>[1] Burden, R. L. and Faires, J. D. (2011). <em>Análisis Numérico</em>. Cengage Learning.</li>
                <li style={{marginBottom:'8px'}}>[2] Cacciapaglia, G. et al. (2020). <em>Second wave COVID-19 pandemics</em>. Scientific Reports.</li>
                <li style={{marginBottom:'8px'}}>[3] CDC-MINSA (2025). <em>Reporte de Vigilancia Epidemiológica</em>. Ministerio de Salud.</li>
                <li style={{marginBottom:'8px'}}>[4] SENAMHI (2025). <em>Registros Climáticos de la Región Puno</em>.</li>
            </ul>
        </div>

      </div>

      {/* --- MODAL (VENTANA FLOTANTE) --- */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                
                {/* CABECERA MODAL */}
                <div className={styles.modalHeader}>
                    <div className={styles.modalTitle}>
                        <i className="fas fa-file-image"></i> Paper del Poster Cientifico
                    </div>
                    <div className={styles.zoomControls}>
                        <button className={styles.controlBtn} onClick={zoomOut} title="Alejar"><i className="fas fa-minus"></i></button>
                        <span style={{color:'white', display:'flex', alignItems:'center'}}>{Math.round(zoom * 100)}%</span>
                        <button className={styles.controlBtn} onClick={zoomIn} title="Acercar"><i className="fas fa-plus"></i></button>
                        <button className={styles.closeBtn} onClick={closeModal} title="Cerrar"><i className="fas fa-times"></i></button>
                    </div>
                </div>

                {/* CUERPO MODAL (IMAGEN) */}
                <div 
                    className={styles.modalBody}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <img 
                        ref={imgRef}
                        src="/Imagenes/poster.png" 
                        alt="Poster Científico" 
                        className={styles.modalImage}
                        style={{ 
                            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
                            cursor: isDragging ? 'grabbing' : 'grab' 
                        }}
                        draggable={false}
                    />
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