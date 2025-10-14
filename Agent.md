## Contexto del Proyecto
Este proyecto consiste en una **landing page** desarrollada con **React + JavaScript** usando **Vite** como entorno de desarrollo. El diseño se implementará bajo la metodología **Atomic Design**, con enfoque **mobile-first**.  

Los estilos se gestionarán con **CSS puro**. Existirá un archivo `index.css` con los estilos globales, aunque el agente puede crear nuevos archivos CSS locales si lo considera necesario para mantener la escalabilidad y modularidad.  

Las imágenes se almacenarán en la ruta:

`src/assets/images/`

## Tecnologías
- **React** con **JavaScript**
- **Vite** (entorno de desarrollo y build)
- **CSS puro**
- Arquitectura **Atomic Design**

## Arquitectura Atomic Design
La estructura de componentes seguirá las capas de Atomic Design:

- **Atoms**: Componentes fundamentales (botones, inputs, etc.)
- **Molecules**: Combinación de Atoms
- **Organisms**: Componentes más complejos (formularios, cards, etc.)
- **Templates**: Plantillas que definen la estructura general de la página
- **Pages**: Páginas completas con su estructura y contenido

## Estructura del Proyecto
La estructura del proyecto se organizará de la siguiente manera:

- `src/`
  - `components/`
    - `atoms/`
    - `molecules/`
    - `organisms/`
    - `templates/`
    - `pages/`
  - `assets/`
    - `images/`
  - `index.css`
  - `App.js`

## Enfoque de Diseño
- **Mobile First**:  
  La landing debe priorizar la visualización en dispositivos móviles.  
  - Definir primero estilos para pantallas pequeñas.  
  - Escalar a pantallas medianas y grandes mediante `@media queries`.  

- **Estilos Globales en `index.css`**:
  - Reset de estilos.
  - Variables CSS si son necesarias (ej: colores, tipografías, tamaños).  
  - Clases utilitarias que puedan reutilizarse en varios componentes.  

- **Estilos Locales**:  
  Si un componente requiere estilos particulares, el agente puede crear un archivo CSS específico (ej: `HeroSection.css`) en la misma carpeta del componente.  

## Reglas para el Agente IA
1. Respetar la **estructura Atomic Design**.  
2. Priorizar siempre el enfoque **mobile-first**.  
3. Usar **CSS modular**: estilos globales en `index.css`, estilos locales para componentes específicos.  
4. Colocar imágenes en `src/assets/images/`.  
5. Mantener el código **limpio, legible y reutilizable**.  
6. Evitar dependencias innecesarias.  
7. Los nombres de carpetas, archivos y componentes deben usar **PascalCase** para componentes (`HeroSection.jsx`) y **kebab-case** para CSS (`hero-section.css`).  