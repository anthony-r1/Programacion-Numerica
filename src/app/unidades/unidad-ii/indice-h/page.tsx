"use client";

import { useEffect } from "react";
import Link from "next/link";
import styles from "./indice-h.module.css";

export default function IndiceHPage() {

  // Efecto de estrellas
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

      {/* HEADER LIMPIO (Sin texto central) */}
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
            <i className="fas fa-id-card"></i>
          </div>
          <h1 className={styles.heroTitle}>Reporte de Índice H</h1>
          <p className={styles.heroSubtitle}>
            Ingenieros de FINESI e Investigadores con Índice h &gt; 10
          </p>
      </section>

      <div className={styles.container}>
        
        {/* INTRODUCCIÓN */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.1s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-book-open"></i> Introducción
            </h2>
            <div className={styles.text}>
              <p>
                En el marco del curso de Programación Numérica, se realizó una revisión de la producción científica 
                de los docentes de la Facultad de Ingeniería Estadística e Informática (FINESI) de la Universidad 
                Nacional del Altiplano (UNA), utilizando la base de datos Scopus. Además, se consultó el Registro 
                Nacional de Investigadores y Científicos del Perú (RENACYT) para identificar el nivel de reconocimiento 
                de docentes y estudiantes investigadores. Finalmente, se identificaron investigadores internacionales 
                con índice h &gt; 10 en áreas relacionadas con métodos numéricos.
              </p>
            </div>
          </div>
        </section>

        {/* TABLA 1: DOCENTES FINESI */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.2s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-table"></i> Tabla 1: Docentes de la FINESI en Scopus
            </h2>
            <div className={styles.text}>
              <p>
                Se identificaron 32 docentes en la plana oficial de la FINESI. A continuación, se presenta la lista completa con sus métricas verificadas en Scopus.
              </p>
            </div>
            
            <div className={styles.tableWrapper}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Índice h</th>
                    <th>Publicaciones</th>
                    <th>Citas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Ibáñez-Quispe, Vladimiro</td><td>5</td><td>21</td><td>52</td></tr>
                  <tr><td>Torres-Cruz, Fred</td><td>4</td><td>40</td><td>--</td></tr>
                  <tr><td>Canqui-Flores, Bernabé</td><td>3</td><td>8</td><td>20</td></tr>
                  <tr><td>Carpio Vargas, Edgar Eloy</td><td>3</td><td>9</td><td>27</td></tr>
                  <tr><td>Tumi-Figueroa, Ernesto Nayer</td><td>3</td><td>6</td><td>23</td></tr>
                  <tr><td>Mendoza-Mollocondo, Charles Ignacio</td><td>3</td><td>8</td><td>17</td></tr>
                  <tr><td>Villasante-Saravia, Fredy Heric</td><td>2</td><td>2</td><td>7</td></tr>
                  <tr><td>Huata-Panca, Percy</td><td>2</td><td>3</td><td>14</td></tr>
                  <tr><td>Juarez-Vargas, Juan Carlos</td><td>1</td><td>3</td><td>2</td></tr>
                  <tr><td>Lopez-Cueva, Milton Antonio</td><td>1</td><td>6</td><td>4</td></tr>
                  <tr><td>Choquejahua-Acero, Remo</td><td>1</td><td>2</td><td>2</td></tr>
                  <tr><td>Apaza-Tarqui, Alejandro</td><td>1</td><td>5</td><td>6</td></tr>
                  <tr><td>Coyla-Idme, Leonel</td><td>1</td><td>5</td><td>1</td></tr>
                  <tr><td>Pari-Condori, Elqui Yeye</td><td>1</td><td>3</td><td>1</td></tr>
                  <tr><td>Laura Murillo, Ramiro</td><td>1</td><td>2</td><td>1</td></tr>
                  <tr><td>Quispe Carita, Ángel Javier</td><td>1</td><td>1</td><td>--</td></tr>
                  <tr><td>Melgarejo-Bolivar, Romel P.</td><td>1</td><td>6</td><td>--</td></tr>
                  <tr><td>Alémán Gonzales, Leonid</td><td>0</td><td>4</td><td>0</td></tr>
                  <tr><td>Tito Lipa, José Pánfilo</td><td>0</td><td>3</td><td>0</td></tr>
                  <tr><td>Perez Quispe, Samuel Donato</td><td>--</td><td>--</td><td>--</td></tr>
                  <tr><td>Quispe Yapo, Edgardo</td><td>--</td><td>--</td><td>--</td></tr>
                  <tr><td>Roque Claros, Roberto Elvis</td><td>--</td><td>--</td><td>--</td></tr>
                  <tr><td>Lluen Vallejos, Cesar Augusto</td><td>--</td><td>--</td><td>--</td></tr>
                  <tr><td>Azan̆ero de Aguirre, Emma Orfelinda</td><td>--</td><td>--</td><td>--</td></tr>
                  <tr><td>Morillos Valderrama, Santos Octavio</td><td>--</td><td>--</td><td>--</td></tr>
                  <tr><td>Salas Pilco, Maria Maura</td><td>--</td><td>--</td><td>--</td></tr>
                  <tr><td>Gonzales Achata, Alfredo Ernesto</td><td>--</td><td>--</td><td>--</td></tr>
                  <tr><td>Puma Huaman, Beto</td><td>--</td><td>--</td><td>--</td></tr>
                  <tr><td>Alvarez Rozas, Teresa Paola</td><td>--</td><td>--</td><td>--</td></tr>
                  <tr><td>Apaza Cutipa, Renzo</td><td>--</td><td>--</td><td>--</td></tr>
                  <tr><td>Vargas Valverde, Confesor Milan</td><td>--</td><td>--</td><td>--</td></tr>
                  <tr><td>Paredes Quispe, Juan Reynaldo</td><td>--</td><td>--</td><td>--</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TABLA 2: RENACYT */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.3s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-certificate"></i> Tabla 2: Nivel en RENACYT
            </h2>
            <div className={styles.text}>
              <p>
                Esta tabla incluye a todos los docentes y estudiantes investigadores de la FINESI registrados en RENACYT (CONCYTEC).
              </p>
            </div>

            <div className={styles.tableWrapper}>
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th style={{width: '40%'}}>Nombre</th>
                    <th>Nivel RENACYT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Ibáñez-Quispe, Vladimiro</td><td>Investigador Senior (REGINA)</td></tr>
                  <tr><td>Torres-Cruz, Fred</td><td>Investigador RENACYT nivel II</td></tr>
                  <tr><td>Canqui-Flores, Bernabé</td><td>Investigador Calificado</td></tr>
                  <tr><td>Carpio Vargas, Edgar Eloy</td><td>Nivel V</td></tr>
                  <tr><td>Tumi-Figueroa, Ernesto Nayer</td><td>Nivel II (María Rostworowski, 2019--2022)</td></tr>
                  <tr><td>Mendoza-Mollocondo, Charles Ignacio</td><td>Investigador Calificado</td></tr>
                  <tr><td>Huata-Panca, Percy</td><td>Nivel V</td></tr>
                  <tr><td>Choquejahua-Acero, Remo</td><td>Nivel VII</td></tr>
                  <tr><td>Lopez-Cueva, Milton Antonio</td><td>Investigador Calificado</td></tr>
                  <tr><td>Apaza-Tarqui, Alejandro</td><td>Investigador Calificado</td></tr>
                  <tr><td>Coyla-Idme, Leonel</td><td>Investigador Calificado</td></tr>
                  <tr><td>Pari-Condori, Elqui Yeye</td><td>Investigador Calificado</td></tr>
                  <tr><td>Laura Murillo, Ramiro</td><td>Investigador Calificado</td></tr>
                  <tr><td>Quispe Carita, Ángel Javier</td><td>Investigador Calificado</td></tr>
                  <tr><td>Puma Huaman, Beto</td><td>Nivel VII</td></tr>
                  <tr><td>Roque Claros, Roberto Elvis</td><td>Investigador Calificado</td></tr>
                  <tr><td>Apaza Cutipa, Renzo</td><td>Investigador Calificado</td></tr>
                  <tr><td>Paredes Quispe, Juan Reynaldo</td><td>Investigador Calificado</td></tr>
                </tbody>
              </table>
            </div>
            
            <div style={{background: 'rgba(255,255,255,0.05)', padding:'15px', borderRadius:'8px', borderLeft:'3px solid #D0002D'}}>
                <p style={{color: '#aaa', fontSize:'0.9rem', margin:0}}>
                    <strong>Notas sobre RENACYT:</strong> Los niveles &quot;Investigador Senior&quot; e &quot;Investigador Asociado&quot; corresponden a categorías oficiales del RENACYT (CONCYTEC).
                    Para los docentes sin mención explícita en DINA o CTI Vitae, se asume &quot;No registrado&quot;.
                </p>
            </div>
          </div>
        </section>

        {/* HALLAZGOS CLAVE */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.4s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-search"></i> Hallazgos Clave
            </h2>
            <ul className={styles.findingsList}>
                <li>El docente con mayor impacto en Scopus es <strong>Vladimiro Ibáñez Quispe</strong> (h = 5), además reconocido como Investigador Senior en RENACYT.</li>
                <li>Solo dos docentes tienen nivel registrado en RENACYT: <strong>Ibáñez Quispe</strong> y <strong>Canqui Flores</strong>.</li>
                <li>Ningún docente de la FINESI tiene índice h &gt; 10 en Scopus.</li>
            </ul>
          </div>
        </section>

        {/* INVESTIGADORES INTERNACIONALES */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.5s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-globe"></i> Investigadores Internacionales (h &gt; 10)
            </h2>
            <div className={styles.text}>
                <p>Dado que no hay docentes en la FINESI con h mayor a 10, se identificaron dos referentes mundiales cuyo trabajo está directamente relacionado con la programación y el análisis numérico.</p>
            </div>

            {/* Investigador 1 */}
            <div className={styles.researcherCard}>
                <div className={styles.resName}>1. Prof. Dr. Nasser Sweilam</div>
                <div style={{color: '#ccc', marginBottom: '10px'}}>Universidad de El Cairo, Egipto</div>
                
                <div className={styles.resStats}>
                    <span><i className="fas fa-chart-line"></i> h-index: 39</span>
                    <span><i className="fas fa-file-alt"></i> Publicaciones: 150+</span>
                    <span><i className="fas fa-quote-right"></i> Citas: 5,000+</span>
                </div>
                
                <p style={{color:'#999', fontSize:'0.95rem'}}>
                    <strong>Áreas clave:</strong> Análisis numérico, ecuaciones diferenciales fraccionarias, control óptimo, modelado de enfermedades (cáncer, COVID-19).<br/><br/>
                    <strong>Ejemplo relevante:</strong> Desarrolló métodos numéricos para resolver ecuaciones diferenciales fraccionarias aplicadas a tratamientos médicos. Uno de sus artículos tiene más de 390 citas. Este investigador demuestra cómo los métodos numéricos pueden usarse para resolver problemas reales en biología y medicina.
                </p>
            </div>

            {/* Investigador 2 */}
            <div className={styles.researcherCard}>
                <div className={styles.resName}>2. Prof. Dr. George Karniadakis</div>
                <div style={{color: '#ccc', marginBottom: '10px'}}>Brown University, EE.UU.</div>
                
                <div className={styles.resStats}>
                    <span><i className="fas fa-chart-line"></i> h-index: 85</span>
                    <span><i className="fas fa-file-alt"></i> Publicaciones: 400+</span>
                    <span><i className="fas fa-quote-right"></i> Citas: 35,000+</span>
                </div>
                
                <p style={{color:'#999', fontSize:'0.95rem'}}>
                    <strong>Áreas clave:</strong> Métodos espectrales, simulación numérica de fluidos, machine learning aplicado a ecuaciones diferenciales, computación científica.<br/><br/>
                    <strong>Contribución destacada:</strong> Es pionero en el uso de redes neuronales para resolver ecuaciones diferenciales parciales (PINNs: Physics-Informed Neural Networks). Su trabajo combina programación numérica con inteligencia artificial, mostrando la evolución moderna del campo.
                </p>
            </div>

          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.6s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-check-circle"></i> Conclusión
            </h2>
            <div className={styles.text}>
              <p>
                La FINESI cuenta con un grupo de docentes con producción científica verificable en Scopus y reconocimiento en RENACYT, 
                liderado por Vladimiro Ibáñez Quispe. Además, se observa la participación activa de <strong>tres estudiantes investigadores</strong> (Hugo Ticona, Mariluz Inquilla y Juan Inquilla) en el sistema nacional de investigación. 
                Aunque aún no se alcanzan niveles internacionales de impacto (h &gt; 10), estos esfuerzos sientan las bases para una cultura investigadora en crecimiento dentro de la facultad.
              </p>
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