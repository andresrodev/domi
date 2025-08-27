<div align="center">

<img src="src/assets/model-left.png" alt="Domi Jewelry" height="220" />

### Domi Jewelry — Vite + React + Tailwind

Elegancia moderna para una tienda de joyería. Este proyecto es una SPA construida con React, TypeScript y Tailwind CSS, optimizada con Vite para un flujo de desarrollo rápido y una entrega ligera.

---

</div>

## ✨ Características

- **UI moderna** con Tailwind CSS y tipografías limpias
- **Rendimiento** gracias a Vite y su HMR ultrarrápido
- **Componentización** en React con TypeScript para mayor robustez
- **Imágenes optimizadas** en `public/images` y `src/assets`
- **Estructura clara** lista para escalar

## 🧱 Stack

- Vite + React + TypeScript
- Tailwind CSS + PostCSS

## 🚀 Empezar

Requisitos: Node.js 18+ y npm.

```bash
# 1) Instalar dependencias
npm install

# 2) Levantar entorno de desarrollo
npm run dev

# 3) Construir para producción
npm run build

# 4) Previsualizar build de producción
npm run preview
```

El servidor de desarrollo imprime la URL local (por defecto `http://localhost:5173`).

## 📂 Estructura del proyecto (resumen)

```text
project/
├─ public/
│  └─ images/            # Imágenes públicas (joyería)
├─ src/
│  ├─ assets/            # Recursos internos (ej. model-left.png)
│  ├─ components/        # Componentes reutilizables
│  ├─ App.tsx            # Entrada de la aplicación
│  └─ main.tsx           # Bootstrap de React
├─ index.html            # Documento base
├─ tailwind.config.js    # Configuración de Tailwind
└─ vite.config.ts        # Configuración de Vite
```

## 🖼️ Vista previa

> Portada de referencia usada en el diseño:

<p align="center">
  <img src="src/assets/model-left.png" alt="Modelo con joyería" width="360" />
  <br/>
  <em>Estética minimalista y cálida para resaltar la joyería.</em>
  
</p>

## 🧩 Scripts disponibles

- `npm run dev`: modo desarrollo con HMR
- `npm run build`: compila a producción (`dist/`)
- `npm run preview`: sirve la build para verificación local

## 🔧 Configuración rápida

- Estilos globales: `src/index.css`
- Temas/colores: `tailwind.config.js`
- Imágenes del catálogo: `public/images/jewerly/*`

## 📦 Despliegue

La salida de producción queda en `dist/`. Puedes desplegarla en:

- **Vercel**: arrastra la carpeta o conecta el repo (framework: Vite)
- **Netlify**: build `npm run build` y `dist` como directorio de publicación
- **GitHub Pages**: sirve el contenido de `dist/` (con flujo de CI si lo prefieres)

## 🛡️ Licencia

Este proyecto se distribuye bajo la licencia MIT. Úsalo libremente en proyectos personales o comerciales.

---

<div align="center">
Hecho con ☕ y pasión por el buen diseño.
</div>


