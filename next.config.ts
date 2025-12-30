import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Obligatorio para GitHub Pages
  basePath: "/Programacion-Numerica", // CRUCIAL: El nombre exacto de tu repo
  images: {
    unoptimized: true, // GitHub Pages no optimiza imágenes dinámicamente
  },
};

export default nextConfig;