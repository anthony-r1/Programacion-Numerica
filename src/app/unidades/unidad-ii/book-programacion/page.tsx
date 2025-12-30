"use client";

import styles from "./book-programacion.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/unidades/unidad-ii" className={styles.backLink}>← Volver</Link>
        <h1>Book: Programación Numérica</h1>
      </header>
      
      <main className={styles.content}>
        <section className={styles.card}>
          <h2>Contenido del Tema</h2>
          <p>Bienvenido a la sección de Book: Programación Numérica. Aquí se desarrollará el contenido correspondiente a la Unidad II.</p>
        </section>
      </main>
    </div>
  );
}
