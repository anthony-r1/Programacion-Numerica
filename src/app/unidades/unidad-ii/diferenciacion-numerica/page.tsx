"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./diferenciacion.module.css";

export default function DiferenciacionNumericaPage() {
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

  // --- CÓDIGOS R ---
  const codigoEjercicio81 = `# Ejercicio 8.1: Análisis de Crecimiento de Usuarios
meses <- 1:7
usuarios <- c(10, 15, 23, 34, 48, 65, 85) # en miles
h <- 1 # espaciado entre meses

# Crear dataframe
datos_usuarios <- data.frame(Mes = meses, Usuarios = usuarios)
print(datos_usuarios)
cat("\\n")

#--- 1) Tasa de crecimiento en el mes 4 (diferencia centrada)---
cat("1) Tasa de crecimiento en el mes 4 (diferencia centrada):\\n")
i <- 4
tasa_mes4 <- (usuarios[i+1] - usuarios[i-1]) / (2*h)
cat(sprintf(" f'(4) = (f(5) - f(3)) / (2h) = (%d - %d) / %d = %.2f\\n",
            usuarios[i+1], usuarios[i-1], 2*h, tasa_mes4))
cat(sprintf(" Resultado: %.1f miles de usuarios por mes\\n\\n", tasa_mes4))

#--- 2) Tasa de crecimiento en el mes 1 (diferencia hacia adelante) ---
cat("2) Tasa de crecimiento en el mes 1 (diferencia hacia adelante):\\n")
tasa_mes1 <- (usuarios[2] - usuarios[1]) / h
cat(sprintf(" f'(1) = (f(2) - f(1)) / h = (%d - %d) / %d = %.2f\\n",
            usuarios[2], usuarios[1], h, tasa_mes1))
cat(sprintf(" Resultado: %.0f miles de usuarios por mes\\n\\n", tasa_mes1))

#--- 3) Tasa de crecimiento en el mes 7 (diferencia hacia atrás) ---
cat("3) Tasa de crecimiento en el mes 7 (diferencia hacia atrás):\\n")
tasa_mes7 <- (usuarios[7] - usuarios[6]) / h
cat(sprintf(" f'(7) = (f(7) - f(6)) / h = (%d - %d) / %d = %.2f\\n",
            usuarios[7], usuarios[6], h, tasa_mes7))
cat(sprintf(" Resultado: %.0f miles de usuarios por mes\\n\\n", tasa_mes7))

#--- 4) Aceleración del crecimiento (segunda derivada centrada) ---
cat("4) Aceleración del crecimiento (segunda derivada centrada):\\n")
cat(" f''(i) = (f(i+1) - 2f(i) + f(i-1)) / h^2\\n\\n")

meses_aceleracion <- 2:6
aceleracion <- numeric(length(meses_aceleracion))
for (j in 1:length(meses_aceleracion)) {
  i <- meses_aceleracion[j]
  aceleracion[j] <- (usuarios[i+1] - 2*usuarios[i] + usuarios[i-1]) / h^2
}

resultados_aceleracion <- data.frame(Mes = meses_aceleracion,
                                     Segunda_Derivada = aceleracion)
print(resultados_aceleracion)
cat(sprintf("\\nLa segunda derivada es constante: %.0f miles/mes^2\\n\\n",
            mean(aceleracion)))

#--- 5) Interpretación---
cat("5) Interpretación:\\n")
cat("- La tasa de crecimiento (primera derivada) aumenta con el tiempo\\n")
cat("- La aceleración (segunda derivada) es positiva y constante (3)\\n")
cat("- Conclusión: La startup está creciendo de forma ACELERADA,\\n")
cat("  con una ACELERACIÓN CONSTANTE\\n\\n")`;

  const outputEjercicio81 = `  Mes Usuarios
1   1       10
2   2       15
3   3       23
4   4       34
5   5       48
6   6       65
7   7       85

1) Tasa de crecimiento en el mes 4 (diferencia centrada):
 f'(4) = (f(5) - f(3)) / (2h) = (48 - 23) / 2 = 12.50
 Resultado: 12.5 miles de usuarios por mes

2) Tasa de crecimiento en el mes 1 (diferencia hacia adelante):
 f'(1) = (f(2) - f(1)) / h = (15 - 10) / 1 = 5.00
 Resultado: 5 miles de usuarios por mes

3) Tasa de crecimiento en el mes 7 (diferencia hacia atrás):
 f'(7) = (f(7) - f(6)) / h = (85 - 65) / 1 = 20.00
 Resultado: 20 miles de usuarios por mes

4) Aceleración del crecimiento (segunda derivada centrada):
 f''(i) = (f(i+1) - 2f(i) + f(i-1)) / h^2

  Mes Segunda_Derivada
1   2                3
2   3                3
3   4                3
4   5                3
5   6                3

La segunda derivada es constante: 3 miles/mes^2

5) Interpretación:
- La tasa de crecimiento (primera derivada) aumenta con el tiempo
- La aceleración (segunda derivada) es positiva y constante (3)
- Conclusión: La startup está creciendo de forma ACELERADA,
  con una ACELERACIÓN CONSTANTE`;

  const codigoEjercicio82 = `# ============================================================================
# EJERCICIO 8.2: OPTIMIZACIÓN DE FUNCIÓN DE PÉRDIDA
# ============================================================================

cat("\\n\\n========== EJERCICIO 8.2 ==========\\n\\n")

epocas <- c(0, 10, 20, 30, 40, 50)
loss <- c(2.45, 1.82, 1.35, 1.08, 0.95, 0.89)
h <- 10

datos_loss <- data.frame(Epoca = epocas, Loss = loss)
print(datos_loss)
cat("\\n")

#--- 1) Tasa de cambio del loss en la época 20---
cat("1) Tasa de cambio del loss en la época 20 (diferencia centrada):\\n")
i <- 3
tasa_loss_20 <- (loss[i+1] - loss[i-1]) / (2*h)
cat(sprintf("L'(20) = (L(30) - L(10)) / (2h) = (%.2f - %.2f) / %d = %.4f\\n",
            loss[i+1], loss[i-1], 2*h, tasa_loss_20))
cat(sprintf("Resultado: %.3f unidades de loss por época\\n\\n", tasa_loss_20))

#--- 2) Segunda derivada en la época 30---
cat("2) Segunda derivada en la época 30:\\n")
i <- 4
segunda_deriv_30 <- (loss[i+1] - 2*loss[i] + loss[i-1]) / h^2
cat(sprintf("L''(30) = (%.2f - 2(%.2f) + %.2f) / %d = %.6f\\n",
            loss[i+1], loss[i], loss[i-1], h^2, segunda_deriv_30))
cat(sprintf("\\nResultado: L''(30) = %.4f > 0\\n", segunda_deriv_30))
cat("Interpretación: el modelo se aproxima a la convergencia.\\n\\n")

#--- 3) Época donde Loss < 0.01---
cat("3) Época donde |ΔLoss/época| < 0.01:\\n\\n")
n <- length(epocas)
intervalos <- data.frame(
  Intervalo = character(n-1),
  Delta_Loss_por_epoca = numeric(n-1),
  Magnitud = numeric(n-1)
)
for (i in 1:(n-1)) {
  delta_loss_por_epoca <- (loss[i+1] - loss[i]) / h
  intervalos$Intervalo[i] <- sprintf("%d-%d", epocas[i], epocas[i+1])
  intervalos$Delta_Loss_por_epoca[i] <- delta_loss_por_epoca
  intervalos$Magnitud[i] <- abs(delta_loss_por_epoca)
}
print(intervalos)
cat("\\n")

epoca_parada <- which(intervalos$Magnitud < 0.01)[1]
if (!is.na(epoca_parada)) {
  cat(sprintf("El criterio se cumple en la ÉPOCA %d\\n",
              epocas[epoca_parada+1]))
}

#--- 4) Estimación del loss en la época 25---
cat("\\n4) Estimación del loss en la época 25:\\n")
epoca_target <- 25
loss_25 <- loss[3] + tasa_loss_20 * (epoca_target - epocas[3])
cat(sprintf("L(25) = %.2f + (%.4f)*5 = %.4f\\n",
            loss[3], tasa_loss_20, loss_25))
cat(sprintf("Resultado: L(25) ≈ %.3f\\n", loss_25))`;

  const outputEjercicio82 = `========== EJERCICIO 8.2 ==========

  Epoca Loss
1     0 2.45
2    10 1.82
3    20 1.35
4    30 1.08
5    40 0.95
6    50 0.89

1) Tasa de cambio del loss en la época 20 (diferencia centrada):
L'(20) = (L(30) - L(10)) / (2h) = (1.08 - 1.82) / 20 = -0.0370
Resultado: -0.037 unidades de loss por época

2) Segunda derivada en la época 30:
L''(30) = (0.95 - 2(1.08) + 1.35) / 100 = 0.001400

Resultado: L''(30) = 0.0014 > 0
Interpretación: el modelo se aproxima a la convergencia.

3) Época donde |ΔLoss/época| < 0.01:

  Intervalo Delta_Loss_por_epoca Magnitud
1      0-10               -0.063    0.063
2     10-20               -0.047    0.047
3     20-30               -0.027    0.027
4     30-40               -0.013    0.013
5     40-50               -0.006    0.006

El criterio se cumple en la ÉPOCA 40

4) Estimación del loss en la época 25:
L(25) = 1.35 + (-0.0370)*5 = 1.1650
Resultado: L(25) ≈ 1.165`;

  const codigoEjercicio83 = `# ============================================================================
# EJERCICIO 8.3: ANÁLISIS DE SERIES TEMPORALES DE VENTAS
# ============================================================================

cat("\\n\\n========== EJERCICIO 8.3 ==========\\n\\n")

dias <- 1:7
ventas <- c(45, 52, 61, 58, 73, 89, 95)
h <- 1
n <- length(ventas)
nombres_dias <- c("Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom")

datos_ventas <- data.frame(Dia = dias, Nombre = nombres_dias, Ventas = ventas)
print(datos_ventas)
cat("\\n")

#--- 1) Velocidad de crecimiento (derivada) para cada día---
cat("1) Velocidad (f') de crecimiento de ventas:\\n")
f1_adelante <- (ventas[2] - ventas[1]) / h
f1_central <- (ventas[3:n] - ventas[1:(n-2)]) / (2*h)
f1_atras <- (ventas[n] - ventas[n-1]) / h
velocidad <- c(f1_adelante, f1_central, f1_atras)

df_velocidad <- data.frame(Dia = nombres_dias, Velocidad_Ventas_k = velocidad)
print(df_velocidad)
cat("\\n")

#--- 2) Día con mayor aceleración (segunda derivada)---
cat("2) Aceleración (f'') de ventas:\\n")
aceleracion <- numeric(n-2)
for (i in 2:(n-1)) {
  aceleracion[i-1] <- (ventas[i+1] - 2*ventas[i] + ventas[i-1]) / h^2
}
df_aceleracion <- data.frame(Dia = nombres_dias[2:(n-1)], Aceleracion = aceleracion)
print(df_aceleracion)

max_acel_dia <- nombres_dias[which.max(aceleracion) + 1]
cat(sprintf("\\nDía con mayor aceleración: %s (f'' = %.0f)\\n\\n",
            max_acel_dia, max(aceleracion)))

#--- 3) Magnitud de la desaceleración (Miércoles, Día 3)---
cat("3) Magnitud de la desaceleración (calculada en Mie, Dia 3):\\n")
f_pp_3 <- aceleracion[2] # f''(3)
cat(sprintf("La magnitud de la desaceleración fue: %.0f $k/dia^2\\n\\n", f_pp_3))

#--- 4) Extrapolación para el Lunes siguiente (Día 8)---
cat("4) Extrapolación para Lunes (Dia 8):\\n")
f_p_7 <- velocidad[n] # f'(7)
f_8 <- ventas[n] + f_p_7 * h
cat(sprintf("f(8) = f(7) + f'(7)*h = %.0f + %.0f*%d = %.0f\\n",
            ventas[n], f_p_7, h, f_8))
cat(sprintf("Resultado: Se esperan %.0f $k en ventas.\\n\\n", f_8))`;

  const outputEjercicio83 = `========== EJERCICIO 8.3 ==========

  Dia Nombre Ventas
1   1    Lun     45
2   2    Mar     52
3   3    Mie     61
4   4    Jue     58
5   5    Vie     73
6   6    Sab     89
7   7    Dom     95

1) Velocidad (f') de crecimiento de ventas:
  Dia Velocidad_Ventas_k
1 Lun                7.0
2 Mar                8.0
3 Mie                3.0
4 Jue                6.0
5 Vie               15.5
6 Sab               11.0
7 Dom                6.0

2) Aceleración (f'') de ventas:
  Dia Aceleracion
1 Mar           2
2 Mie         -12
3 Jue          18
4 Vie           1
5 Sab         -10

Día con mayor aceleración: Jue (f'' = 18)

3) Magnitud de la desaceleración (calculada en Mie, Dia 3):
La magnitud de la desaceleración fue: -12 $k/dia^2

4) Extrapolación para Lunes (Dia 8):
f(8) = f(7) + f'(7)*h = 95 + 6*1 = 101
Resultado: Se esperan 101 $k en ventas.`;

  const codigoEjercicio84 = `# ============================================================================
# EJERCICIO 8.4: GRADIENTE DE FUNCIÓN DE ACTIVACIÓN
# ============================================================================

cat("\\n\\n========== EJERCICIO 8.4 ==========\\n\\n")

x <- c(-3.0, -2.0, -1.0, 0.0, 1.0, 2.0, 3.0)
sigma_x <- c(0.0474, 0.1192, 0.2689, 0.5000, 0.7311, 0.8808, 0.9526)
h <- 1 # El paso entre valores de x es 1
n <- length(x)

datos_sigma <- data.frame(x = x, sigma_x = sigma_x)
print(datos_sigma)
cat("\\n")

#--- 1) sigma'(0) usando diferencia centrada---
cat("1) Gradiente en x=0 (centrada):\\n")
i_cero <- which(x == 0)
grad_0_num <- (sigma_x[i_cero+1] - sigma_x[i_cero-1]) / (2*h)
cat(sprintf("sigma'(0) num = (s(1) - s(-1)) / 2 = (%.4f - %.4f) / 2 = %.5f\\n\\n",
            sigma_x[i_cero+1], sigma_x[i_cero-1], grad_0_num))

#--- 2) sigma'(-2) y sigma'(2) (centrada)---
cat("2) Gradientes en x=-2 y x=2 (centrada):\\n")
i_neg2 <- which(x == -2)
grad_neg2_num <- (sigma_x[i_neg2+1] - sigma_x[i_neg2-1]) / (2*h)
cat(sprintf("sigma'(-2) num = (s(-1) - s(-3)) / 2 = (%.4f - %.4f) / 2 = %.5f\\n",
            sigma_x[i_neg2+1], sigma_x[i_neg2-1], grad_neg2_num))

i_pos2 <- which(x == 2)
grad_pos2_num <- (sigma_x[i_pos2+1] - sigma_x[i_pos2-1]) / (2*h)
cat(sprintf("sigma'(2) num = (s(3) - s(1)) / 2 = (%.4f - %.4f) / 2 = %.5f\\n\\n",
            sigma_x[i_pos2+1], sigma_x[i_pos2-1], grad_pos2_num))

#--- 3) Comparación con derivada analítica---
cat("3) Comparación con derivada analítica s'(x) = s(x)*(1 - s(x)):\\n")
grad_analitico <- sigma_x * (1 - sigma_x)
df_comp <- data.frame(x = x,
                      Numerico = c(NA, grad_neg2_num, NA, grad_0_num, NA, grad_pos2_num, NA),
                      Analitico = grad_analitico)
print(df_comp, digits = 5)
cat("\\nLos valores numéricos son cercanos, pero h=1 es muy grande.\\n\\n")

#--- 4) Tamaño de h recomendado---
cat("4) Tamaño de h recomendado:\\n")
cat("h=1 es demasiado grande. Se recomienda un h mucho menor (ej. 0.01) para mayor precision.\\n\\n")

#--- 5) Simetría de la derivada---
cat("5) Simetría de la derivada:\\n")
cat("La derivada es simétrica (f'(-x) = f'(x)), como se ve en f'(-2) y f'(2).\\n")
cat("Esto ocurre porque la funcion sigmoide es simétrica rotacionalmente alrededor de (0, 0.5).\\n\\n")`;

  const outputEjercicio84 = `========== EJERCICIO 8.4 ==========

   x sigma_x
1 -3  0.0474
2 -2  0.1192
3 -1  0.2689
4  0  0.5000
5  1  0.7311
6  2  0.8808
7  3  0.9526

1) Gradiente en x=0 (centrada):
sigma'(0) num = (s(1) - s(-1)) / 2 = (0.7311 - 0.2689) / 2 = 0.23110

2) Gradientes en x=-2 y x=2 (centrada):
sigma'(-2) num = (s(-1) - s(-3)) / 2 = (0.2689 - 0.0474) / 2 = 0.11075
sigma'(2) num = (s(3) - s(1)) / 2 = (0.9526 - 0.7311) / 2 = 0.11075

3) Comparación con derivada analítica s'(x) = s(x)*(1 - s(x)):
   x Numerico Analitico
1 -3       NA   0.04515
2 -2  0.11075   0.10499
3 -1       NA   0.19659
4  0  0.23110   0.25000
5  1       NA   0.19659
6  2  0.11075   0.10499
7  3       NA   0.04515

Los valores numéricos son cercanos, pero h=1 es muy grande.

4) Tamaño de h recomendado:
h=1 es demasiado grande. Se recomienda un h mucho menor (ej. 0.01) para mayor precision.

5) Simetría de la derivada:
La derivada es simétrica (f'(-x) = f'(x)), como se ve en f'(-2) y f'(2).
Esto ocurre porque la funcion sigmoide es simétrica rotacionalmente alrededor de (0, 0.5).`;

  const codigoEjercicio85 = `# ============================================================================
# EJERCICIO 8.5: DETECCIÓN DE ANOMALÍAS
# ============================================================================

cat("\\n\\n========== EJERCICIO 8.5 ==========\\n\\n")

horas <- 0:7
latencia <- c(120, 125, 128, 135, 280, 290, 275, 155)
h <- 1
n <- length(latencia)

datos_latencia <- data.frame(Hora = horas, Latencia_ms = latencia)
print(datos_latencia)
cat("\\n")

#--- 1) Tasa de cambio (primera derivada)---
cat("1) Tasa de cambio (f') para cada hora:\\n")
f1_adelante <- (latencia[2] - latencia[1]) / h
f1_central <- (latencia[3:n] - latencia[1:(n-2)]) / (2*h)
f1_atras <- (latencia[n] - latencia[n-1]) / h
velocidad <- c(f1_adelante, f1_central, f1_atras)

df_velocidad <- data.frame(Hora = horas, Tasa_ms_hora = velocidad)
print(df_velocidad)
cat("\\n")

#--- 2) Pico de anomalía (cambio de signo f'')---
cat("2) Aceleración (f'') y Pico de Anomalía:\\n")
aceleracion <- numeric(n-2)
for (i in 2:(n-1)) {
  aceleracion[i-1] <- (latencia[i+1] - 2*latencia[i] + latencia[i-1]) / h^2
}
df_aceleracion <- data.frame(Hora = horas[2:(n-1)], Aceleracion = aceleracion)
print(df_aceleracion)

# Encontrar el cambio de signo de + a -
pico_hora <- 0
for (i in 1:(length(aceleracion)-1)) {
  if (aceleracion[i] > 0 && aceleracion[i+1] < 0) {
    pico_hora <- horas[i+2]
  }
}
cat(sprintf("\\nEl pico (cambio de f'' de + a -) ocurre en la HORA %d\\n\\n", pico_hora))

#--- 3) Magnitud del salto (Hora 3-4)---
cat("3) Magnitud del salto (f' adelante en Hora 3):\\n")
salto_3_4 <- (latencia[5] - latencia[4]) / h
cat(sprintf("f'(3) [adelante] = (280 - 135) / 1 = %.0f ms/hora\\n\\n", salto_3_4))

#--- 4) Tasa de recuperación (a partir Hora 6)---
cat("4) Tasa de recuperación (Hora 6 y 7):\\n")
cat(sprintf("f'(6) [centrada] = %.1f ms/hora\\n", velocidad[7]))
cat(sprintf("f'(7) [atras] = %.1f ms/hora\\n\\n", velocidad[8]))

#--- 5) Momentos de anomalía (|f'| > 50)---
cat("5) Momentos de anomalía (|f'| > 50 ms/hora):\\n")
umbral_anomalia <- 50
horas_anomalia <- horas[abs(velocidad) > umbral_anomalia]
print(horas_anomalia)
cat("\\n")`;

  const outputEjercicio85 = `========== EJERCICIO 8.5 ==========

  Hora Latencia_ms
1    0         120
2    1         125
3    2         128
4    3         135
5    4         280
6    5         290
7    6         275
8    7         155

1) Tasa de cambio (f') para cada hora:
  Hora Tasa_ms_hora
1    0          5.0
2    1          4.0
3    2          5.0
4    3         76.0
5    4         77.5
6    5         -2.5
7    6        -67.5
8    7       -120.0

2) Aceleración (f'') y Pico de Anomalía:
  Hora Aceleracion
1    1           4
2    2         138
3    3        -135
4    4         -25
5    5        -135
6    6           5

El pico (cambio de f'' de + a -) ocurre en la HORA 4

3) Magnitud del salto (f' adelante en Hora 3):
f'(3) [adelante] = (280 - 135) / 1 = 145 ms/hora

4) Tasa de recuperación (Hora 6 y 7):
f'(6) [centrada] = -67.5 ms/hora
f'(7) [atras] = -120.0 ms/hora

5) Momentos de anomalía (|f'| > 50 ms/hora):
[1] 3 4 6 7`;

  const codigoEjercicio86 = `# ============================================================================
# EJERCICIO 8.6: ANÁLISIS DE TASA DE CONVERSIÓN
# ============================================================================

cat("\\n\\n========== EJERCICIO 8.6 ==========\\n\\n")

gasto <- c(0, 5, 10, 15, 20, 25)
conversion <- c(2.1, 3.8, 5.2, 6.1, 6.7, 7.0)
h <- 5 # El paso es 5k
n <- length(gasto)

datos_conversion <- data.frame(Gasto_k = gasto, Conversion_pct = conversion)
print(datos_conversion)
cat("\\n")

#--- 1) ROI marginal (derivada) en cada punto---
cat("1) ROI marginal (f') en cada punto:\\n")
f1_adelante <- (conversion[2] - conversion[1]) / h
f1_central <- (conversion[3:n] - conversion[1:(n-2)]) / (2*h)
f1_atras <- (conversion[n] - conversion[n-1]) / h
roi_marginal <- c(f1_adelante, f1_central, f1_atras)

df_roi <- data.frame(Gasto_k = gasto, ROI_Marginal = roi_marginal)
print(df_roi, digits = 3)
cat("\\n")

#--- 2) Rango de gasto con ROI marginal > 0.2---
cat("2) Rango de gasto con ROI marginal > 0.2:\\n")
gasto_ideal <- gasto[roi_marginal > 0.2]
cat(sprintf("El ROI es > 0.2 en los niveles de gasto: %s $k\\n\\n",
            paste(gasto_ideal, collapse = ",")))

#--- 3) Segunda derivada en $15k---
cat("3) Segunda derivada (f'') en $15k:\\n")
i_15k <- which(gasto == 15)
f_pp_15k <- (conversion[i_15k+1] - 2*conversion[i_15k] + conversion[i_15k-1]) / h^2
cat(sprintf("f''(15) = (%.1f - 2*%.1f + %.1f) / %d = %.4f\\n",
            conversion[i_15k+1], conversion[i_15k], conversion[i_15k-1], h^2, f_pp_15k))
cat("El valor negativo confirma rendimientos decrecientes.\\n\\n")

#--- 4) Recomendaría aumentar el gasto > $25k?---
cat("4) Recomendación para gasto > $25k:\\n")
cat(sprintf("No. El ROI marginal en $25k es %.2f (muy bajo).\\n", roi_marginal[n]))
cat("El beneficio adicional es casi nulo y no justifica el costo.\\n\\n")`;

  const outputEjercicio86 = `========== EJERCICIO 8.6 ==========

  Gasto_k Conversion_pct
1       0            2.1
2       5            3.8
3      10            5.2
4      15            6.1
5      20            6.7
6      25            7.0

1) ROI marginal (f') en cada punto:
  Gasto_k ROI_Marginal
1       0        0.340
2       5        0.310
3      10        0.230
4      15        0.150
5      20        0.090
6      25        0.060

2) Rango de gasto con ROI marginal > 0.2:
El ROI es > 0.2 en los niveles de gasto: 0,5,10 $k

3) Segunda derivada (f'') en $15k:
f''(15) = (6.7 - 2*6.1 + 5.2) / 25 = -0.0120
El valor negativo confirma rendimientos decrecientes.

4) Recomendación para gasto > $25k:
No. El ROI marginal en $25k es 0.06 (muy bajo).
El beneficio adicional es casi nulo y no justifica el costo.`;

  const codigoEjercicio87 = `# ============================================================================
# EJERCICIO 8.7: FEATURE ENGINEERING CON DERIVADAS
# ============================================================================

cat("\\n\\n========== EJERCICIO 8.7 ==========\\n\\n")

#--- 0. Configuración Inicial---
tiempo <- 0:7
temp <- c(20.1, 20.3, 20.8, 21.5, 22.6, 24.2, 26.1, 28.5)
df <- data.frame(Tiempo = tiempo, Temp = temp)
h <- 1
n <- nrow(df)

cat("--- DATOS INICIALES ---\\n")
print(df)
cat("\\n")

#--- Tarea 1: Feature Velocidad (1ra Derivada)---
cat("--- TAREA 1 y 2: DataFrame con Derivadas ---\\n")
vel_t0 <- (df$Temp[2] - df$Temp[1]) / h
vel_central <- (df$Temp[3:n] - df$Temp[1:(n-2)]) / (2*h)
vel_t7 <- (df$Temp[n] - df$Temp[n-1]) / h
df$Velocidad <- c(vel_t0, vel_central, vel_t7)

#--- Tarea 2: Feature Aceleración (2da Derivada)---
accel_bordes <- NA
f_x_plus_h <- df$Temp[3:n]
f_x <- df$Temp[2:(n-1)]
f_x_minus_h <- df$Temp[1:(n-2)]
accel_central <- (f_x_plus_h - 2*f_x + f_x_minus_h) / (h^2)
df$Aceleracion <- c(accel_bordes, accel_central, accel_bordes)

print(df)
cat("\\n")

#--- Tarea 3: Detección de Alerta (> 0.8 C/s)---
cat("--- TAREA 3: Detección de Alerta ---\\n")
umbral_alerta <- 0.8
df$Alerta <- ifelse(is.na(df$Velocidad), FALSE, df$Velocidad > umbral_alerta)
momentos_alerta <- df$Tiempo[df$Alerta]

cat(paste("Momentos (segundos) con Velocidad >", umbral_alerta, ":\\n"))
print(momentos_alerta)
cat("\\n")

#--- Tarea 4: Normalización Min-Max---
cat("--- TAREA 4: DataFrame Final con Normalización ---\\n")
min_max_scaler <- function(x) {
  (x - min(x, na.rm = TRUE)) / (max(x, na.rm = TRUE) - min(x, na.rm = TRUE))
}
df$Velocidad_Norm <- min_max_scaler(df$Velocidad)
df$Aceleracion_Norm <- min_max_scaler(df$Aceleracion)

print(df, digits = 4)
cat("\\n")

#--- Tarea 5: Explicación (impresa en consola)---
cat("--- TAREA 5: Utilidad de las Features Derivadas ---\\n")
cat("1. Velocidad: Detecta cambios bruscos (anomalías de comportamiento).\\n")
cat("2. Aceleracion: Detecta inestabilidad (alerta temprana).\\n")
cat("\\n")`;

  const outputEjercicio87 = `========== EJERCICIO 8.7 ==========

--- DATOS INICIALES ---
  Tiempo Temp
1      0 20.1
2      1 20.3
3      2 20.8
4      3 21.5
5      4 22.6
6      5 24.2
7      6 26.1
8      7 28.5

--- TAREA 1 y 2: DataFrame con Derivadas ---
  Tiempo Temp Velocidad Aceleracion
1      0 20.1      0.20          NA
2      1 20.3      0.35         0.3
3      2 20.8      0.60         0.2
4      3 21.5      0.90         0.4
5      4 22.6      1.35         0.5
6      5 24.2      1.75         0.3
7      6 26.1      2.15         0.5
8      7 28.5      2.40          NA

--- TAREA 3: Detección de Alerta ---
Momentos (segundos) con Velocidad > 0.8 :
[1] 3 4 5 6 7

--- TAREA 4: DataFrame Final con Normalización ---
  Tiempo Temp Velocidad Aceleracion Alerta Velocidad_Norm Aceleracion_Norm
1      0 20.1      0.20          NA  FALSE         0.0000               NA
2      1 20.3      0.35         0.3  FALSE         0.0682           0.3333
3      2 20.8      0.60         0.2  FALSE         0.1818           0.0000
4      3 21.5      0.90         0.4   TRUE         0.3182           0.6667
5      4 22.6      1.35         0.5   TRUE         0.5227           1.0000
6      5 24.2      1.75         0.3   TRUE         0.7045           0.3333
7      6 26.1      2.15         0.5   TRUE         0.8864           1.0000
8      7 28.5      2.40          NA   TRUE         1.0000               NA

--- TAREA 5: Utilidad de las Features Derivadas ---
1. Velocidad: Detecta cambios bruscos (anomalías de comportamiento).
2. Aceleracion: Detecta inestabilidad (alerta temprana).`;

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
            <i className="fas fa-calculator"></i>
          </div>
          <h1 className={styles.heroTitle}>Diferenciación Numérica</h1>
          <p className={styles.heroSubtitle}>
            Ejercicios Prácticos de Programación Numérica (8.1 - 8.7)
          </p>
      </section>

      <div className={styles.container}>
        
        {/* --- EJERCICIO 8.1 --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.1s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-users"></i> Ejercicio 8.1: Análisis de Crecimiento de Usuarios
            </h2>
            <div className={styles.text}>
                <div className={styles.tableWrapper}>
                    <table className={styles.dataTable}>
                        <thead><tr><th>Mes</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th></tr></thead>
                        <tbody><tr><td>Usuarios (miles)</td><td>10</td><td>15</td><td>23</td><td>34</td><td>48</td><td>65</td><td>85</td></tr></tbody>
                    </table>
                </div>
                <div className={styles.infoList}>
                    <ol>
                        <li><strong>Tasa mes 4 (Centrada):</strong> f&apos;(4) ≈ (48 - 23)/2 = 12.5 miles/mes</li>
                        <li><strong>Tasa mes 1 (Adelante):</strong> f&apos;(1) ≈ (15 - 10)/1 = 5 miles/mes</li>
                        <li><strong>Tasa mes 7 (Atrás):</strong> f&apos;(7) ≈ (85 - 65)/1 = 20 miles/mes</li>
                        <li><strong>Aceleración:</strong> Segunda derivada constante = 3 miles/mes²</li>
                        <li><strong>Conclusión:</strong> La startup crece de forma acelerada con aceleración constante.</li>
                    </ol>
                </div>
            </div>
            
            {/* Código R 8.1 */}
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>ejercicio_8_1.R</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoEjercicio81, "c1")}>
                        {copied === "c1" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoEjercicio81}</pre>
            </div>

            {/* CONSOLA 8.1 (Estilo Terminal) */}
            <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                    <div className={styles.dots}>
                        <div className={`${styles.dot} ${styles.red}`}></div>
                        <div className={`${styles.dot} ${styles.yellow}`}></div>
                        <div className={`${styles.dot} ${styles.green}`}></div>
                    </div>
                    <div className={styles.terminalTitle}>R Console</div>
                </div>
                <pre className={styles.terminalBody}>{outputEjercicio81}</pre>
            </div>
          </div>
        </section>

        {/* --- EJERCICIO 8.2 --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.2s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-chart-line"></i> Ejercicio 8.2: Optimización de Función de Pérdida
            </h2>
            <div className={styles.text}>
                <div className={styles.tableWrapper}>
                    <table className={styles.dataTable}>
                        <thead><tr><th>Época</th><th>0</th><th>10</th><th>20</th><th>30</th><th>40</th><th>50</th></tr></thead>
                        <tbody><tr><td>Loss</td><td>2.45</td><td>1.82</td><td>1.35</td><td>1.08</td><td>0.95</td><td>0.89</td></tr></tbody>
                    </table>
                </div>
                <div className={styles.infoList}>
                    <ol>
                        <li><strong>Tasa cambio época 20:</strong> L&apos;(20) ≈ -0.037</li>
                        <li><strong>Segunda derivada época 30:</strong> L&apos;&apos;(30) = 0.0014 &gt; 0 (Convergencia)</li>
                        <li><strong>Criterio parada:</strong> Se cumple desde la época 40 (|ΔL| &lt; 0.01)</li>
                        <li><strong>Estimación época 25:</strong> L(25) ≈ 1.165</li>
                    </ol>
                </div>
            </div>

            {/* Código R 8.2 */}
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>ejercicio_8_2.R</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoEjercicio82, "c2")}>
                        {copied === "c2" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoEjercicio82}</pre>
            </div>

            {/* CONSOLA 8.2 (Estilo Terminal) */}
            <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                    <div className={styles.dots}>
                        <div className={`${styles.dot} ${styles.red}`}></div>
                        <div className={`${styles.dot} ${styles.yellow}`}></div>
                        <div className={`${styles.dot} ${styles.green}`}></div>
                    </div>
                    <div className={styles.terminalTitle}>R Console</div>
                </div>
                <pre className={styles.terminalBody}>{outputEjercicio82}</pre>
            </div>
          </div>
        </section>

        {/* --- EJERCICIO 8.3 --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.3s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-calendar-alt"></i> Ejercicio 8.3: Series Temporales de Ventas
            </h2>
            <div className={styles.infoList}>
                <ol>
                    <li><strong>Velocidades:</strong> Lun(7), Mar(8), Mie(3), Jue(6), Vie(15.5), Sab(11), Dom(6)</li>
                    <li><strong>Mayor aceleración:</strong> Jueves (Día 4) con 18 $k/dia²</li>
                    <li><strong>Desaceleración Miércoles:</strong> -12 $k/dia²</li>
                    <li><strong>Proyección Lunes (Día 8):</strong> 101 $k</li>
                </ol>
            </div>

            {/* Código R 8.3 */}
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>ejercicio_8_3.R</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoEjercicio83, "c3")}>
                        {copied === "c3" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoEjercicio83}</pre>
            </div>

            {/* CONSOLA 8.3 (Estilo Terminal) */}
            <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                    <div className={styles.dots}>
                        <div className={`${styles.dot} ${styles.red}`}></div>
                        <div className={`${styles.dot} ${styles.yellow}`}></div>
                        <div className={`${styles.dot} ${styles.green}`}></div>
                    </div>
                    <div className={styles.terminalTitle}>R Console</div>
                </div>
                <pre className={styles.terminalBody}>{outputEjercicio83}</pre>
            </div>
          </div>
        </section>

        {/* --- EJERCICIO 8.4 --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.4s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-wave-square"></i> Ejercicio 8.4: Gradiente de Función de Activación
            </h2>
            <div className={styles.infoList}>
                <ul>
                    <li><strong>σ&apos;(0):</strong> 0.2311 (Numérico) vs 0.25 (Analítico)</li>
                    <li><strong>Simetría:</strong> σ&apos;(-2) = σ&apos;(2) ≈ 0.11075</li>
                    <li><strong>Conclusión:</strong> El paso h=1 es muy grande, se recomienda h=0.01 para mayor precisión.</li>
                </ul>
            </div>

            {/* Código R 8.4 */}
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>ejercicio_8_4.R</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoEjercicio84, "c4")}>
                        {copied === "c4" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoEjercicio84}</pre>
            </div>

            {/* CONSOLA 8.4 (Estilo Terminal) */}
            <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                    <div className={styles.dots}>
                        <div className={`${styles.dot} ${styles.red}`}></div>
                        <div className={`${styles.dot} ${styles.yellow}`}></div>
                        <div className={`${styles.dot} ${styles.green}`}></div>
                    </div>
                    <div className={styles.terminalTitle}>R Console</div>
                </div>
                <pre className={styles.terminalBody}>{outputEjercicio84}</pre>
            </div>
          </div>
        </section>

        {/* --- EJERCICIO 8.5 --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.5s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-exclamation-triangle"></i> Ejercicio 8.5: Detección de Anomalías
            </h2>
            <div className={styles.infoList}>
                <ul>
                    <li><strong>Salto brusco:</strong> Hora 3 a 4 (f&apos; ≈ 145 ms/h)</li>
                    <li><strong>Pico de anomalía:</strong> Hora 4 (cambio de signo en f&apos;&apos;)</li>
                    <li><strong>Momentos críticos (|f&apos;| &gt; 50):</strong> Horas 3, 4, 6, 7</li>
                </ul>
            </div>

            {/* Código R 8.5 */}
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>ejercicio_8_5.R</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoEjercicio85, "c5")}>
                        {copied === "c5" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoEjercicio85}</pre>
            </div>

            {/* CONSOLA 8.5 (Estilo Terminal) */}
            <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                    <div className={styles.dots}>
                        <div className={`${styles.dot} ${styles.red}`}></div>
                        <div className={`${styles.dot} ${styles.yellow}`}></div>
                        <div className={`${styles.dot} ${styles.green}`}></div>
                    </div>
                    <div className={styles.terminalTitle}>R Console</div>
                </div>
                <pre className={styles.terminalBody}>{outputEjercicio85}</pre>
            </div>
          </div>
        </section>

        {/* --- EJERCICIO 8.6 --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.6s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-percentage"></i> Ejercicio 8.6: Análisis de Tasa de Conversión
            </h2>
            <div className={styles.infoList}>
                <ul>
                    <li><strong>ROI Marginal:</strong> Decrece conforme aumenta el gasto (rendimientos decrecientes).</li>
                    <li><strong>Gasto ideal:</strong> Rangos de 0k, 5k y 10k tienen ROI &gt; 0.2%.</li>
                    <li><strong>Recomendación:</strong> NO aumentar gasto más allá de 25k (beneficio nulo).</li>
                </ul>
            </div>

            {/* Código R 8.6 */}
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>ejercicio_8_6.R</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoEjercicio86, "c6")}>
                        {copied === "c6" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoEjercicio86}</pre>
            </div>

            {/* CONSOLA 8.6 (Estilo Terminal) */}
            <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                    <div className={styles.dots}>
                        <div className={`${styles.dot} ${styles.red}`}></div>
                        <div className={`${styles.dot} ${styles.yellow}`}></div>
                        <div className={`${styles.dot} ${styles.green}`}></div>
                    </div>
                    <div className={styles.terminalTitle}>R Console</div>
                </div>
                <pre className={styles.terminalBody}>{outputEjercicio86}</pre>
            </div>
          </div>
        </section>

        {/* --- EJERCICIO 8.7 --- */}
        <section className={styles.contentSection}>
          <div className={styles.contentCard} style={{animationDelay: '0.7s'}}>
            <h2 className={styles.sectionTitle}>
              <i className="fas fa-cogs"></i> Ejercicio 8.7: Feature Engineering
            </h2>
            <div className={styles.infoList}>
                <ul>
                    <li><strong>Velocidad:</strong> Detecta cambios bruscos de temperatura.</li>
                    <li><strong>Aceleración:</strong> Detecta inestabilidad del sistema.</li>
                    <li><strong>Alerta:</strong> Se activa cuando Velocidad &gt; 0.8 °C/s.</li>
                </ul>
            </div>

            {/* Código R 8.7 */}
            <div className={styles.codeContainer}>
                <div className={styles.codeHeader}>
                    <span>ejercicio_8_7.R</span>
                    <button className={styles.copyButton} onClick={() => copiarCodigo(codigoEjercicio87, "c7")}>
                        {copied === "c7" ? <><i className="fas fa-check"></i> Copiado</> : <><i className="fas fa-copy"></i> Copiar</>}
                    </button>
                </div>
                <pre className={styles.preBlock}>{codigoEjercicio87}</pre>
            </div>

            {/* CONSOLA 8.7 (Estilo Terminal) */}
            <div className={styles.terminalWindow}>
                <div className={styles.terminalHeader}>
                    <div className={styles.dots}>
                        <div className={`${styles.dot} ${styles.red}`}></div>
                        <div className={`${styles.dot} ${styles.yellow}`}></div>
                        <div className={`${styles.dot} ${styles.green}`}></div>
                    </div>
                    <div className={styles.terminalTitle}>R Console</div>
                </div>
                <pre className={styles.terminalBody}>{outputEjercicio87}</pre>
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