import Link from "next/link";
import styles from "./book-programacion.module.css";

export default function LibroPage() {
  // RUTA DEL PDF (Directa a public/pdfs/libro.pdf con el prefijo del repo)
  const pdfPath = "/Programacion-Numerica/pdfs/libro.pdf";

  return (
    <div className={styles.container}>
      {/* FONDO DECORATIVO */}
      <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', 
          zIndex: -1, background: 'radial-gradient(circle at 50% 50%, #1a0505 0%, #000000 90%)'
      }}></div>

      {/* HEADER TIPO PANEL (IDÉNTICO A LA FOTO QUE PEDISTE) */}
      <header className={styles.header}>
        {/* Botón a la izquierda */}
        <Link href="/unidades/unidad-ii" className={styles.backButton}>
          <i className="fas fa-arrow-left"></i> Volver a Unidad 2
        </Link>

        {/* Tus datos a la derecha */}
        <div className={styles.studentInfo}>
            <span className={styles.infoBadge}>
                <i className="fas fa-user-graduate"></i> Anthony Rusbel Puma Huanca
            </span>
            <span className={styles.infoBadge}>
                <i className="fas fa-id-card"></i> 240132
            </span>
        </div>
      </header>

      {/* TÍTULO */}
      <h1 className={styles.pageTitle}>Libro Guía: Métodos Numéricos</h1>

      {/* INTRODUCCIÓN */}
      <div className={styles.card}>
        <h2 style={{color: '#fff', marginBottom: '15px', fontSize: '1.5rem'}}>
            <i className="fas fa-book" style={{color: '#D0002D', marginRight: '10px'}}></i>
            Introducción
        </h2>
        <p className={styles.text}>
          El presente material bibliográfico, titulado <strong>&quot;Análisis Numérico y Computación Científica&quot;</strong>, sirve como pilar fundamental para el desarrollo del curso. Este recurso profundiza en la base teórica de los algoritmos implementados en este portafolio, cubriendo desde la resolución de ecuaciones no lineales (Newton-Raphson, Secante) hasta sistemas de simulación estocástica.
          <br/><br/>
          Se recomienda su consulta para entender la deducción matemática detrás del código y explorar casos de estudio aplicados a la ingeniería estadística e informática.
        </p>
      </div>

      {/* VISOR PDF */}
      <div className={styles.pdfContainer}>
        <iframe 
            src={pdfPath} 
            className={styles.pdfFrame} 
            title="Libro de Programación Numérica"
        />
      </div>

      {/* BOTÓN DESCARGA (Fallback) */}
      <div className={styles.downloadSection}>
        <p style={{color: '#888', marginBottom: '10px'}}>¿Problemas para visualizar?</p>
        <a href={pdfPath} target="_blank" rel="noopener noreferrer" className={styles.downloadBtn}>
          <i className="fas fa-download"></i> Descargar PDF Completo
        </a>
      </div>
      
    </div>
  );
}