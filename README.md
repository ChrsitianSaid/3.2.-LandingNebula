# 3.2.-LandingNebula

# NÉBULA — Digital Art

## 1. Descripción del proyecto

Nébula es una landing page dedicada a la presentación de un artista digital especializado en paisajes de ciencia ficción y mundos imaginarios.

Este proyecto parte de la landing page desarrollada en la UT3 y evoluciona incorporando interactividad mediante JavaScript, efectos visuales con CSS3, SVG inline y control multimedia mediante la API HTMLMediaElement.

## 2. Objetivos de la UT4

- Integrar el logotipo o iconografía mediante SVG inline.
- Crear una galería dinámica utilizando JavaScript puro.
- Implementar un modal para reproducir el vídeo de presentación.
- Crear un reproductor de audio personalizado.
- Aplicar efectos visuales y transiciones CSS3.
- Mantener las atribuciones y respetar las licencias de los recursos.
- Verificar la compatibilidad con distintos navegadores y dispositivos.

## 3. Tecnologías utilizadas

- HTML5.
- CSS3.
- JavaScript (Vanilla JS).
- SVG inline.
- API HTMLMediaElement.
- Bootstrap 5 para el modal.
- Formatos multimedia WebP, MP3 y MP4.

## 4. Estructura del proyecto

```text
3.2.-LandingNebula/
│
├── assets/
│   ├── audio/
│   │   └── sonidoPagina.mp3
│   ├── img/
│   │   ├── LogoNebula.webp
│   │   ├── heroNebula.webp
│   │   ├── navePlaneta.webp
│   │   ├── paisajeMarPlaneta.webp
│   │   ├── paisajePlaneta.webp
│   │   └── boton_cohete_contacto.gif
│   └── video/
│       └── videoNebula.mp4
│
├── index.html
├── styles.css
├── nebula.js
└── README.md
```

La estructura podrá ampliarse durante el desarrollo de las siguientes fases.

## 5. Funcionalidades previstas

### SVG inline

El logotipo o los iconos principales se integrarán directamente en el HTML mediante elementos SVG. Sus propiedades visuales podrán modificarse mediante CSS.

### Galería dinámica

Las miniaturas permitirán seleccionar una obra y actualizar la imagen principal con su versión de mayor resolución.

### Modal de vídeo

El vídeo de presentación se abrirá mediante una ventana modal. JavaScript controlará su reproducción y pausa.

### Reproductor de audio

Se sustituirán los controles nativos por controles personalizados que permitan reproducir, pausar y silenciar el audio.

### Efectos visuales

Se aplicarán transiciones, transformaciones y estados de interacción para mejorar la experiencia de uso.

## 6. Instalación y ejecución

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto.
3. Abrir `index.html` en un navegador compatible.

No se necesita una base de datos ni un servidor backend para ejecutar esta landing page.

## 7. Propiedad intelectual y licencias

Los recursos multimedia utilizados en el proyecto deben conservar sus atribuciones y respetar las condiciones de sus respectivas licencias.

La licencia Creative Commons de la obra Nébula se definirá durante la fase de propiedad intelectual.

También se documentará la compatibilidad entre la licencia elegida y las licencias de los recursos externos, incluyendo el supuesto de utilizar un recurso con licencia CC BY-SA.

## 8. Compatibilidad y pruebas

Durante la fase de verificación se comprobará el funcionamiento de la página en:

- Google Chrome.
- Mozilla Firefox.
- Microsoft Edge.

También se realizarán pruebas en resoluciones de escritorio, tablet y móvil, verificando la accesibilidad y el tamaño mínimo de los controles táctiles.

Los resultados de las pruebas se incorporarán a esta documentación una vez realizadas.

## 9. Autoría

Proyecto académico desarrollado como continuación de la actividad UT3, dentro del ciclo de Desarrollo de Aplicaciones Web.

**Autor:** Christian Said Jiménez Mahecha.