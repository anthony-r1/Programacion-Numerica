/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./gradiente.module.css";

export default function GradienteFuncionPage() {
  const [copied, setCopied] = useState("");

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

  const copiarCodigo = (texto: string, id: string) => {
    navigator.clipboard.writeText(texto).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(""), 2000);
    });
  };

  // --- CÓDIGOS COMPLETOS DEL LATEX ---

  const codigoR1 = `#--- 1. Cargar Paquetes ---
library(shiny)
library(ggplot2)
library(dplyr)
library(tidyr)
library(DT) # Para tablas interactivas

#--- 2. Definir las Funciones ---
f <- function(x){
  return(x^2)
}

df <- function(x){
  return(2 * x)
}

#--- 3. Definir la Interfaz de Usuario (UI) ---
ui <- fluidPage(
  # Título de la aplicación
  titlePanel("Simulador de Descenso de Gradiente"),

  # Layout con barra lateral
  sidebarLayout(
    
    #--- Barra Lateral (Inputs)---
    sidebarPanel(
      h4("Parámetros de Entrada"),
      
      numericInput(
        inputId = "x_inicial",
        label = "Valor Inicial (X):",
        value = 3.0,
        step = 0.5
      ),
      
      numericInput(
        inputId = "tasa_aprendizaje",
        label = "Tasa de Aprendizaje (α):",
        value = 0.01,
        step = 0.01,
        min = 0.001
      ),
      
      sliderInput(
        inputId = "num_iteraciones",
        label = "Número de Iteraciones:",
        min = 5,
        max = 100,
        value = 20
      )
    ),

    #--- Panel Principal (Outputs)---
    mainPanel(
      h3("Resultados de la Simulación"),
      
      plotOutput(outputId = "grafico_descenso"),
      
      hr(),
      
      h3("Tabla de Iteraciones"),
      
      DT::dataTableOutput(outputId = "tabla_resultados")
    )
  )
)

#--- 4. Definir la Lógica del Servidor (Server)---
server <- function(input, output){
  
  #--- Cálculo Reactivo ---
  datos_calculados <- reactive({
    x_n <- input$x_inicial
    tasa <- input$tasa_aprendizaje
    iteraciones <- input$num_iteraciones
    
    lista_resultados <- list()
    
    for(i in 1:iteraciones){
      fx <- f(x_n)
      gradiente <- df(x_n)
      x_siguiente <- x_n - tasa * gradiente
      
      lista_resultados[[i]] <- data.frame(
        Iteracion = i,
        Xn = x_n,
        Fx = fx,
        dF_dx = gradiente,
        X_sig = x_siguiente
      )
      
      x_n <- x_siguiente
    }
    
    resultados <- bind_rows(lista_resultados)
    return(resultados)
  })
  
  #--- Output: Gráfico ---
  output$grafico_descenso <- renderPlot({
    resultados <- datos_calculados()
    
    resultados_largo <- resultados %>%
      pivot_longer(
        cols = c(Xn, Fx, dF_dx, X_sig),
        names_to = "Métrica",
        values_to = "Valor"
      )
    
    ggplot(resultados_largo, aes(x = Iteracion, y = Valor, color = Métrica)) +
      geom_line(linewidth = 1) +
      geom_point(size = 1.5) +
      labs(
        title = paste("Convergencia en", input$num_iteraciones, "iteraciones"),
        x = "Iteración",
        y = "Valor"
      ) +
      theme_minimal(base_size = 13)
  })
  
  #--- Output: Tabla Interactiva ---
  output$tabla_resultados <- DT::renderDataTable({
    resultados <- datos_calculados()
    
    DT::datatable(
      resultados,
      options = list(pageLength = 10, scrollX = TRUE),
      rownames = FALSE,
      colnames = c(
        "Iteración",
        "X",
        "f(X)",
        "f'(X)",
        "X_{sig}"
      )
    ) %>%
      DT::formatRound(columns = c("Xn", "Fx", "dF_dx", "X_sig"), digits = 6)
  })
  
}

#--- 5. Ejecutar la Aplicación---
shinyApp(ui = ui, server = server)`;

  const codigoJulia1 = `# 1. Cargar paquetes
using Plots
using DataFrames
using Printf
using CSV

#--- CONFIGURACIÓN---
# 2. Definir la ruta de salida
ruta_salida = @__DIR__

# 3. Parámetros iniciales
x_n_inicial = 3.0
tasa_aprendizaje = 0.01
num_iteraciones = 50 #<--Puedes cambiar esto a 20, 50, o lo que quieras!

#--- DEFINICIONES---
# 4. Definir la función y su derivada
f(x) = x^2
df(x) = 2x

#--- EJECUCIÓN---
println("Iniciando cálculo de descenso de gradiente...")

# 5. Preparar un DataFrame para guardar los resultados
resultados = DataFrame(
  Iteracion = Int[],
  Xn = Float64[],
  Fx = Float64[],
  f_prima_x = Float64[],
  radf_x = Float64[]
)

# 6. Bucle de iteraciones
x_n = x_n_inicial # Reinicia el valor
for i in 1:num_iteraciones
  global x_n
  # Calcular valores
  fx = f(x_n)
  f_prima = df(x_n)
  
  # Calcular el siguiente Xn
  x_siguiente = x_n - tasa_aprendizaje * f_prima
  
  # Guardar en el DataFrame
  push!(resultados, (i, x_n, fx, f_prima, x_siguiente))
  
  # Imprimir en la consola (formateado)
  @printf "%2d | %8.6f | %9.7f | %8.6f | %8.6f\\n" i x_n fx f_prima x_siguiente
  
  # Actualizar x_n para la próxima iteración
  x_n = x_siguiente
end

println("Cálculo finalizado.")

#--- GUARDAR RESULTADOS---
# 7. Crear el gráfico
p = plot(
  resultados.Iteracion,
  [resultados.Xn resultados.Fx resultados.f_prima_x resultados.radf_x],
  label = ["Xn" "F(x)" "f’(x)" "radf(x)"],
  xlabel = "Iteración",
  ylabel = "Valores",
  title = "Descenso de Gradiente para f(x) = x^2",
  legend = :topright,
  marker = :circle
)

# 8. Definir nombres de archivo
archivo_csv = joinpath(ruta_salida, "resultados_gradiente.csv")
archivo_png = joinpath(ruta_salida, "grafico_gradiente.png")

# 9. Exportar todo
try
  CSV.write(archivo_csv, resultados)
  savefig(p, archivo_png)
  
  println("\\n¡Éxito! Archivos guardados en:")
  println(ruta_salida)
catch e
  println("\\nError al guardar archivos: $e")
end

# 10. Muestra el gráfico al final (opcional, se abrirá una ventana)
display(p)
println("\\nGráfico generado. Presiona ENTER en la terminal para salir.")
readline()`;

  const codigoRShinyComp = `# app.R
library(shiny)
library(ggplot2)
library(dplyr)

ui <- fluidPage(
  titlePanel("Comparación: OLS vs Gradiente Descendente (f(x) = x^2 + ruido)"),
  
  sidebarLayout(
    sidebarPanel(
      h4("Parámetros"),
      
      numericInput("n", "Tamaño de la muestra", value = 10000, min = 100, max = 1e6),
      numericInput("noise_sd", "Desviación del ruido", value = 1, min = 0.1, step = 0.1),
      numericInput("alpha", "Tasa de aprendizaje (GD)", value = 0.001, min = 1e-6, step = 0.0001),
      numericInput("epochs", "Épocas (GD)", value = 200, min = 10, max = 1000),
      
      actionButton("run", "Ejecutar Simulación", class = "btn-primary"),
      
      hr(),
      h5("Resultados (aparecen tras ejecutar)"),
      verbatimTextOutput("summary")
    ),
    
    mainPanel(
      plotOutput("plot", height = "500px"),
      br(),
      h4("Tiempos de ejecución"),
      verbatimTextOutput("timing")
    )
  )
)

server <- function(input, output, session){
  
  # Almacenar resultados reactivos
  results <- reactiveVal(NULL)
  timing <- reactiveVal(NULL)
  summary_text <- reactiveVal("")
  
  observeEvent(input$run, {
    withProgress(message = "Generando datos...", value = 0.1, {
      
      # 1. Generar datos
      set.seed(123)
      n <- input$n
      x <- rnorm(n, mean = 0, sd = 2)
      y <- x^2 + rnorm(n, mean = 0, sd = input$noise_sd)
      
      # 2. OLS
      incProgress(0.2, detail = "Ajustando OLS...")
      t_ols <- system.time({
        ols_fit <- lm(y ~ x + I(x^2))
      })
      coefs_ols <- coef(ols_fit)
      
      # 3. Gradiente Descendente
      incProgress(0.3, detail = "Ejecutando Gradiente Descendente...")
      
      # Normalizar x para estabilidad (opcional pero recomendado)
      x_mean <- mean(x)
      x_sd <- sd(x)
      x_norm <- (x - x_mean) / x_sd
      
      # Inicializar parámetros
      b0 <- 0; b1 <- 0; b2 <- 0
      N <- length(x)
      alpha <- input$alpha
      epochs <- input$epochs
      
      t_gd <- system.time({
        for(i in 1:epochs) {
          y_pred <- b0 + b1 * x_norm + b2 * (x_norm^2)
          error <- y_pred - y
          
          db0 <- (2/N) * sum(error)
          db1 <- (2/N) * sum(error * x_norm)
          db2 <- (2/N) * sum(error * (x_norm^2))
          
          b0 <- b0 - alpha * db0
          b1 <- b1 - alpha * db1
          b2 <- b2 - alpha * db2
        }
      })
      
      # Preparar datos para gráfico (muestra pequeña)
      idx <- sample(seq_len(n), min(2000, n))
      df_plot <- tibble::tibble(
        x = x[idx],
        x_norm = x_norm[idx],
        y_real = y[idx],
        y_ols = coefs_ols[1] + coefs_ols[2] * x[idx] + coefs_ols[3] * x[idx]^2,
        y_gd = b0 + b1 * x_norm[idx] + b2 * (x_norm[idx]^2)
      )
      
      # Guardar resultados
      results(list(df_plot = df_plot, coefs_ols = coefs_ols, b0 = b0, b1 = b1, b2 = b2))
      timing(list(ols = t_ols["elapsed"], gd = t_gd["elapsed"]))
      
      summary_text(
        paste0(
          "OLS = ", round(coefs_ols[1], 4),
          " | β1 = ", round(coefs_ols[2], 4),
          " | β2 = ", round(coefs_ols[3], 4), "\\n",
          "GD = ", round(b0, 4),
          " | β1 = ", round(b1, 4),
          " | β2 = ", round(b2, 4)
        )
      )
    })
  })
  
  output$plot <- renderPlot({
    req(results())
    df <- results()$df_plot
    
    ggplot(df, aes(x = x)) +
      geom_point(aes(y = y_real), color = "gray60", alpha = 0.6, size = 0.8) +
      geom_line(aes(y = y_ols, color = "OLS"), size = 1.1) +
      geom_line(aes(y = y_gd, color = "Gradiente Descendente"), linetype = "dashed", size = 1.1) +
      scale_color_manual(values = c("OLS" = "steelblue", "Gradiente Descendente" = "firebrick")) +
      labs(
        title = "Comparación: OLS vs Gradiente Descendente",
        subtitle = "Modelo: y = β0 + β1 x + β2 x^2 + ε",
        x = "x",
        y = "y",
        color = "Método"
      ) +
      theme_minimal(base_size = 13)
  })
  
  output$summary <- renderText({
    summary_text()
  })
  
  output$timing <- renderText({
    req(timing())
    t <- timing()
    paste0(
      "Tiempo OLS: ", round(t$ols, 4), " seg\\n",
      "Tiempo GD: ", round(t$gd, 4), " seg"
    )
  })
}

shinyApp(ui, server)`;

  const codigoRProfvis = `#============================================
# COMPARACIÓN OLS vs GD usando f(x) = x^2
#============================================

library(profvis)
library(ggplot2)

profvis({
  
  #==============================
  # 1. GENERACIÓN DE DATOS
  #==============================
  set.seed(123)
  n <- 1e6 # 1 millón de observaciones
  
  x <- rnorm(n, mean = 0, sd = 2)
  y <- x^2 + rnorm(n, mean = 0, sd = 1) # función base f(x) = x^2 + ruido
  
  #==============================
  # 2. MODELO OLS (y ~ x + x^2)
  #==============================
  cat("Ejecutando OLS...\\n")
  tiempo_ols <- system.time({
    modelo_ols <- lm(y ~ x + I(x^2))
  })
  coefs_ols <- coef(modelo_ols)
  cat("OLS β0 =", round(coefs_ols[1], 4),
      "| β1 =", round(coefs_ols[2], 4),
      "| β2 =", round(coefs_ols[3], 4), "\\n")
  print(tiempo_ols)
  
  #==============================
  # 3. MODELO GRADIENTE DESCENDENTE (GD)
  #==============================
  cat("Ejecutando Gradiente Descendente...\\n")
  N <- length(x)
  alpha <- 1e-9 # tasa de aprendizaje ajustada
  epochs <- 50 # menos iteraciones, suficiente para converger
  
  # Inicialización de parámetros
  b0 <- 0
  b1 <- 0
  b2 <- 0
  
  tiempo_gd <- system.time({
    for(i in 1:epochs) {
      y_pred <- b0 + b1 * x + b2 * (x^2)
      error <- y_pred - y
      
      # Derivadas parciales
      db0 <- (2 / N) * sum(error)
      db1 <- (2 / N) * sum(error * x)
      db2 <- (2 / N) * sum(error * (x^2))
      
      # Actualización de parámetros
      b0 <- b0 - alpha * db0
      b1 <- b1 - alpha * db1
      b2 <- b2 - alpha * db2
      
      if(i %% 10 == 0){
        cat("Iter:", i, " β0=", round(b0, 3),
            " β1=", round(b1, 3),
            " β2=", round(b2, 3), "\\n")
      }
    }
  })
  
  cat("GD β0 =", round(b0, 3),
      "| β1 =", round(b1, 3),
      "| β2 =", round(b2, 3), "\\n")
  print(tiempo_gd)
  
  #==============================
  # 4. COMPARACIÓN DE TIEMPOS
  #==============================
  cat("\\n==== COMPARACIÓN DE RENDIMIENTO ====\\n")
  cat("Tiempo OLS:", round(tiempo_ols[3], 4), " segundos\\n")
  cat("Tiempo GD:", round(tiempo_gd[3], 4), " segundos\\n")
  
  #==============================
  # 5. GRAFICAR RESULTADOS
  #==============================
  cat("\\nGenerando gráfica...\\n")
  
  # Tomamos una muestra para graficar (para evitar sobrecarga de memoria)
  idx <- sample(1:n, 2000)
  df_plot <- data.frame(
    x = x[idx],
    y_real = y[idx],
    y_ols = coefs_ols[1] + coefs_ols[2] * x[idx] + coefs_ols[3] * (x[idx]^2),
    y_gd = b0 + b1 * x[idx] + b2 * (x[idx]^2)
  )
  
  ggplot(df_plot, aes(x = x)) +
    geom_point(aes(y = y_real), color = "gray70", alpha = 0.5, size = 1) +
    geom_line(aes(y = y_ols, color = "OLS"), size = 1.2) +
    geom_line(aes(y = y_gd, color = "Gradiente Descendente"),
              size = 1.2, linetype = "dashed") +
    scale_color_manual(values = c("OLS" = "blue", "Gradiente Descendente" = "red")) +
    labs(
      title = "Comparación OLS vs Gradiente Descendente\\nf(x) = x^2 + ruido",
      x = "x",
      y = "y",
      color = "Método"
    ) +
    theme_minimal(base_size = 14)
})`;

  const codigoJuliaComp = `#--- 1. Cargar Paquetes ---
using GLM
using DataFrames
using Plots
using Random
using Printf

#--- 2. Configuración y Generación de Datos---
Random.seed!(trunc(Int, time()))
n_datos = 5000

println("Generando $n_datos datos aleatorios...")
x_data = rand(n_datos) .* 50
y_data = 5.0 .+ (3.0 .* x_data) .+ (randn(n_datos) .* 8.0)
df_datos = DataFrame(X = x_data, Y = y_data)

#--- 3. OLS: Mínimos Cuadrados Ordinarios---
println("\\n--- Calculando OLS (Mínimos Cuadrados)---")
(b0_ols, b1_ols) = @time begin
  modelo_ols = lm(@formula(Y ~ X), df_datos)
  coefs_ols = coef(modelo_ols)
  (coefs_ols[1], coefs_ols[2])
end
@printf "Tiempo tomado para OLS (ver arriba)\\n"
@printf "OLS -> Intercepto: %.4f, Pendiente: %.4f\\n" b0_ols b1_ols

#--- 4. GD: Descenso de Gradiente ---
println("\\n--- Calculando GD (Descenso de Gradiente)---")
tasa_aprendizaje = 0.001
num_iteraciones = 5000
b0_gd = 0.0
b1_gd = 0.0

(b0_gd, b1_gd) = @time begin
  local b0_gd = 0.0
  local b1_gd = 0.0
  
  for iter in 1:num_iteraciones
    y_pred = b0_gd .+ b1_gd .* x_data
    error = y_pred .- y_data
    
    grad_b0 = (2 / n_datos) * sum(error)
    grad_b1 = (2 / n_datos) * sum(error .* x_data)
    
    b0_gd -= tasa_aprendizaje * grad_b0
    b1_gd -= tasa_aprendizaje * grad_b1
  end
  (b0_gd, b1_gd)
end
@printf "Tiempo tomado para %d iteraciones de GD (ver arriba)\\n" num_iteraciones
@printf "GD -> Intercepto: %.4f, Pendiente: %.4f\\n" b0_gd b1_gd

#--- 5. Visualización---
println("\\nGenerando gráfico...")
y_pred_ols = b0_ols .+ b1_ols .* x_data
y_pred_gd = b0_gd .+ b1_gd .* x_data

p = scatter(
  x_data, y_data,
  label = "Datos Aleatorios",
  title = "Comparación OLS (Azul) vs GD (Rojo)",
  legend = :topleft
)
plot!(p, x_data, y_pred_ols, label = "Línea OLS", color = :blue, linewidth = 2.5)
plot!(p, x_data, y_pred_gd, label = "Línea GD", color = :red, linestyle = :dash, linewidth = 2.5)

display(p)
# readline()`;


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

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
          <div className={styles.heroIcon}>
            <i className="fas fa-layer-group"></i>
          </div>
          <h1 className={styles.heroTitle}>Gradiente de una Función</h1>
          <p className={styles.heroSubtitle}>
            Conceptos, Simulación y Comparación (OLS vs GD)
          </p>
      </section>

      <div className={styles.container}>
        
        {/* 1. DEFINICIÓN */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.1s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-book"></i> ¿Qué es el gradiente?
            </h2>
            <div className={styles.text}>
              <p>
                El gradiente de una función escalar <em>f(x)</em> es un vector que apunta en la dirección de mayor crecimiento de la función. 
                En optimización, el descenso de gradiente utiliza la derivada para encontrar mínimos locales.
              </p>
              <div className={styles.formulaBox}>
                x<sub>n+1</sub> = x<sub>n</sub> − α · f&apos;(x<sub>n</sub>)
              </div>
              <p>Donde <strong>α</strong> es la tasa de aprendizaje.</p>
            </div>
          </div>
        </section>

        {/* 2. CÓDIGO EN R (GRADIENTE) */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.2s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fab fa-r-project"></i> Código en R (Simulador Shiny)
            </h2>
            
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>simulador_gradiente.R</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoR1, "c1")}>
                        {copied === "c1" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoR1}</pre>
            </div>

            {/* TABLA DE RESULTADOS MANUALES */}
            <h3 style={{color:'#D0002D', marginTop:'30px'}}>Resultados Numéricos (Ejemplo Excel)</h3>
            <div className={styles.tableWrapper}>
                <table className={styles.dataTable}>
                    <thead>
                        <tr><th>Iter</th><th>Xn</th><th>f(Xn)</th><th>f&apos;(Xn)</th><th>Xn+1</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>1</td><td>3.000000</td><td>9.000000</td><td>6.000000</td><td>2.940000</td></tr>
                        <tr><td>2</td><td>2.940000</td><td>8.643600</td><td>5.880000</td><td>2.881200</td></tr>
                        <tr><td>3</td><td>2.881200</td><td>8.301313</td><td>5.762400</td><td>2.823576</td></tr>
                        <tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
                        <tr><td>10</td><td>2.501243</td><td>6.256218</td><td>5.002487</td><td>2.451218</td></tr>
                    </tbody>
                </table>
            </div>

            {/* IMAGEN 1: EXCEL */}
            <div className={styles.imageWrapper}>
                <img src="/Imagenes/1.png" alt="Gráfico en Excel" />
                <div className={styles.imgCaption}>Figura 1: Gráfico de convergencia en Excel</div>
            </div>

            {/* IMAGEN 2: R */}
            <div className={styles.imageWrapper}>
                <img src="/Imagenes/2.png" alt="Gráfico en R" />
                <div className={styles.imgCaption}>Figura 2: Resultado del simulador en R Shiny</div>
            </div>

          </div>
        </section>

        {/* 3. CÓDIGO EN JULIA (GRADIENTE) */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.3s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-code"></i> Código en Julia
            </h2>
            
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>gradiente.jl</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoJulia1, "c2")}>
                        {copied === "c2" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoJulia1}</pre>
            </div>

            {/* IMAGEN 3: JULIA */}
            <div className={styles.imageWrapper}>
                <img src="/Imagenes/3.png" alt="Gráfico en Julia" />
                <div className={styles.imgCaption}>Figura 3: Gráfico de convergencia generado en Julia</div>
            </div>
          </div>
        </section>

        {/* 4. COMPARACIÓN OLS vs GD (TEORÍA) */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.4s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-balance-scale"></i> Comparación: OLS vs GD
            </h2>
            <div className={styles.text}>
                <p>
                    <strong>OLS (Mínimos Cuadrados Ordinarios):</strong> Solución analítica exacta. Rápida para datos pequeños, pero costosa computacionalmente (inversión de matrices) para Big Data.
                </p>
                <p>
                    <strong>GD (Gradiente Descendente):</strong> Método iterativo aproximado. Escalable a millones de datos y modelos no lineales (Redes Neuronales), pero requiere ajustar hiperparámetros (tasa de aprendizaje).
                </p>
            </div>
            
            <div className={styles.infoList}>
                <ul>
                    <li><strong>Tamaño de muestra:</strong> OLS sufre con n &gt; 10^5. GD se mantiene eficiente.</li>
                    <li><strong>Exactitud:</strong> OLS es exacto. GD es una aproximación que depende de las iteraciones.</li>
                </ul>
            </div>
          </div>
        </section>

        {/* 5. COMPARACIÓN EN R SHINY */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.5s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fab fa-r-project"></i> Comparación en R (Shiny)
            </h2>
            
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>comparacion_shiny.R</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoRShinyComp, "c3")}>
                        {copied === "c3" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoRShinyComp}</pre>
            </div>

            {/* IMAGEN 4: R SHINY COMPARACIÓN */}
            <div className={styles.imageWrapper}>
                <img src="/Imagenes/4.png" alt="Gráfico R Shiny Comparación" />
                <div className={styles.imgCaption}>Figura 4: Interfaz Shiny comparando OLS vs GD</div>
            </div>
          </div>
        </section>

        {/* 6. COMPARACIÓN EN R PROFVIS */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.6s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-tachometer-alt"></i> Rendimiento con Profvis (R)
            </h2>
            
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>profiling.R</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoRProfvis, "c4")}>
                        {copied === "c4" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoRProfvis}</pre>
            </div>

            {/* IMAGEN 5: R PROFVIS */}
            <div className={styles.imageWrapper}>
                <img src="/Imagenes/5.png" alt="Gráfico R Profvis" />
                <div className={styles.imgCaption}>Figura 5: Análisis de tiempo de ejecución (Profiling)</div>
            </div>
          </div>
        </section>

        {/* 7. COMPARACIÓN EN JULIA */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.7s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-code"></i> Comparación en Julia
            </h2>
            
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>comparacion.jl</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoJuliaComp, "c5")}>
                        {copied === "c5" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoJuliaComp}</pre>
            </div>

            {/* IMAGEN 6: JULIA COMPARACIÓN */}
            <div className={styles.imageWrapper}>
                <img src="/Imagenes/6.png" alt="Gráfico Julia Comparación" />
                <div className={styles.imgCaption}>Figura 6: Gráfico comparativo generado en Julia</div>
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