import type { Metadata } from "next";
import { Russo_One, Rajdhani } from "next/font/google"; 
import "./globals.css";

// Configuración profesional de fuentes con Next.js
const russoOne = Russo_One({ 
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-russo",
});

const rajdhani = Rajdhani({ 
  weight: ["500", "600", "700"], 
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "Portafolio - Anthony Rusbel",
  description: "Ingeniería Estadística e Informática",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* FontAwesome CDN */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${russoOne.variable} ${rajdhani.variable}`}>
        {children}
      </body>
    </html>
  );
}