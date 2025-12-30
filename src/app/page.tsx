"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import "./home.css"; // Importamos los estilos del home

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [socialOpen, setSocialOpen] = useState(false);
  const [cardFlipped, setCardFlipped] = useState(false);
  const roleTextRef = useRef<HTMLSpanElement>(null);

  // Lógica de carga inicial y efecto de escritura
  useEffect(() => {
    // 1. Manejo de Carga (Loading Screen)
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      setLoading(false);
      startTyping();
    } else {
      sessionStorage.setItem("hasVisited", "true");
      // Simulación de carga (1.5 segundos)
      const timer = setTimeout(() => {
        setLoading(false);
        startTyping();
      }, 1500);
      return () => clearTimeout(timer);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Función del efecto de escritura (Typing Effect)
  const startTyping = () => {
    const roles = ["Front End Developer", "Data Analyst", "Statistical Engineer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentRole = roles[roleIndex];
      const speed = isDeleting ? 50 : 100;
      
      if (roleTextRef.current) {
        if (isDeleting) {
            roleTextRef.current.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            roleTextRef.current.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(type, 2000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, speed);
      }
    };

    type();
  };

  return (
    <>
      {/* --- PANTALLA DE CARGA --- */}
      {loading && (
        <div id="loading-screen" style={{ opacity: loading ? 1 : 0, transition: "opacity 0.5s" }}>
          <div className="loader-content">
            <h1 className="neon-text">BIENVENIDOS</h1>
            <div className="loading-bar-container">
              <div className="loading-bar" style={{ width: "100%", transition: "width 1s ease-out" }}></div>
            </div>
          </div>
        </div>
      )}

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div id="main-content" style={{ opacity: loading ? 0 : 1, transition: "opacity 1s", display: loading ? 'none' : 'block' }}>
        
        <header className="pill-navbar">
          <div className="pill-container">
            <div className="brand-area">
              <i className="fab fa-linux brand-icon"></i>
              <span className="brand-name">ARPH</span>
            </div>
            
            <nav className="pill-nav-links">
              <Link href="/" className="nav-link active-link">
                <i className="fas fa-home"></i> Home
              </Link>
              <Link href="/descripcion" className="nav-link">
                <i className="fas fa-file-alt"></i> Descripcion
              </Link>
              <Link href="/unidades" className="nav-link">
                <i className="fas fa-cubes"></i> Unidades
              </Link>
            </nav>
          </div>
        </header>

        <main className="hero">
          <div className="hero-left">
            <div className="glass-badge">INGENIERIA ESTADISTICA E INFORMATICA</div>
            
            <h1 className="block-title">
              BIENVENIDO A MI<br />
              <span className="granate-filled granate-contour">PORTAFOLIO</span>
            </h1>
            
            <h2 className="role-subtitle">
              <span id="role-text" ref={roleTextRef}></span><span className="cursor">|</span>
            </h2>
            
            <p className="hero-desc">
              En este portafolio presento el desarrollo de algoritmos diseñados para resolver problemas matemáticos complejos que carecen de una solución analítica directa.
            </p>

            <div className="tech-badges">
              <span className="glass-pill">JavaScript</span>
              <span className="glass-pill">C/C++</span>
              <span className="glass-pill">Julia</span>
              <span className="glass-pill">R</span>
              <span className="glass-pill">Python</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="id-card-scene" id="card-scene">
              
              <div className="lanyard-container">
                <div className="lanyard-arm lanyard-arm-left">
                  <div className="lanyard-text">ANTHONY ANTHONY ANTHONY ANTHONY ANTHONY</div>
                </div>
                <div className="lanyard-arm lanyard-arm-right">
                  <div className="lanyard-text">ANTHONY ANTHONY ANTHONY ANTHONY ANTHONY</div>
                </div>
              </div>

              {/* Tarjeta con evento CLICK */}
              <div 
                className="id-card-wrapper" 
                id="draggable-card"
                onClick={() => setCardFlipped(!cardFlipped)}
              >
                <div 
                  className="card-inner" 
                  id="card-inner-rotator"
                  style={{ transform: cardFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                  
                  <div className="card-face card-front">
                    <div className="card-header granate-glow">
                      <i className="fas fa-fingerprint"></i> statistical and computer engineer
                    </div>
                    <div className="photo-area">
                      {/* Asegúrate de que la imagen exista en public/Imagenes/hola.jpg */}
                      <img src="/Imagenes/hola.jpg" alt="Foto" className="profile-img" />
                    </div>
                    <div className="vertical-text-opaque">ANTHONY</div>
                    <div className="card-footer-white">
                      <h3>ANTHONY RUSBEL PUMA HUANCA</h3>
                      <div className="role-badge">DEVELOPER AND PROGRAMMER</div>
                    </div>
                  </div>

                  <div className="card-face card-back">
                    <div className="qr-box">
                      <i className="fas fa-qrcode"></i>
                    </div>
                    <h3>CONTACT INFO</h3>
                    <p>anthonyrusbel135@gmail.com</p>
                    <div className="card-footer-white">
                      <div className="role-badge">SCAN ME</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* --- SOCIAL DRAWER --- */}
      <div className={`social-fixed-right ${socialOpen ? "active" : ""}`} id="social-drawer">
        <div className="toggle-bar" id="social-toggle" onClick={() => setSocialOpen(!socialOpen)}></div>
        <div className="social-icons">
            {/* SOLUCIÓN AL ERROR DE TYPESCRIPT: Casting a React.CSSProperties */}
            <a href="#" style={{ "--i": 1 } as React.CSSProperties}><i className="fab fa-github"></i></a>
            <a href="#" style={{ "--i": 2 } as React.CSSProperties}><i className="fab fa-linkedin"></i></a>
            <a href="#" style={{ "--i": 3 } as React.CSSProperties}><i className="fab fa-instagram"></i></a>
            <a href="#" style={{ "--i": 4 } as React.CSSProperties}><i className="fab fa-facebook"></i></a>
            <a href="#" style={{ "--i": 5 } as React.CSSProperties}><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>
    </>
  );
}