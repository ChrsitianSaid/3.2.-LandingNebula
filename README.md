# NÉBULA — Digital Art

Landing page de presentación de **Nébula**, un artista digital especializado en paisajes de ciencia ficción y mundos imaginarios.

El proyecto comenzó en la UT3 y se ha ampliado en la UT4 incorporando interactividad con JavaScript, controles multimedia personalizados y mejoras de accesibilidad y diseño responsive.

## 1. Objetivos del proyecto

- Presentar la identidad visual y artística de Nébula.
- Mostrar una colección de obras digitales mediante una galería interactiva.
- Incorporar una experiencia audiovisual con vídeo y música ambiental.
- Mejorar la experiencia de usuario mediante efectos visuales y transiciones.
- Mantener una estructura accesible y adaptable a distintos dispositivos.
- Respetar las atribuciones y licencias de los recursos utilizados.

## 2. Tecnologías utilizadas

- **HTML5:** estructura y contenido de la página.
- **CSS3:** diseño visual, animaciones, transiciones y adaptación responsive.
- **JavaScript (Vanilla JS):** interactividad de la galería y controles multimedia.
- **Bootstrap 5:** utilidades de maquetación y distribución de elementos.
- **SVG:** formato vectorial utilizado para el logotipo.
- **HTMLMediaElement:** control de reproducción de audio y vídeo.
- **HTML Dialog:** ventana modal para mostrar el vídeo.

## 3. Funcionalidades

### Galería dinámica

La galería permite seleccionar distintas miniaturas. Al pulsar una de ellas, JavaScript actualiza la imagen principal, su texto alternativo, el título y la descripción de la obra.

### Reproductor de audio

Incluye controles personalizados para:

- Reproducir y pausar la música ambiental.
- Silenciar y volver a activar el sonido.
- Reproducir el audio en bucle.

### Ventana modal de vídeo

El vídeo de presentación se abre en una ventana modal mediante el elemento HTML `<dialog>`. Se puede cerrar con el botón correspondiente y la reproducción se detiene al cerrar la ventana.

### Diseño visual y responsive

La página utiliza una estética oscura de temática espacial, con tonos morados y detalles luminosos. El diseño se adapta a diferentes tamaños de pantalla mediante CSS y Bootstrap.

### Accesibilidad

Se incluyen textos alternativos en las imágenes, etiquetas accesibles en los controles interactivos y estilos de foco visibles para la navegación mediante teclado. También se contempla la preferencia del usuario por reducir el movimiento.

## 4. Estructura del proyecto

```text
3.2.-LandingNebula/
│
├── assets/
│   ├── audio/
│   │   └── sonidoPagina.mp3
│   ├── img/
│   │   ├── Logo.svg
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

## 5. Instalación y ejecución

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto.
3. Abrir `index.html` en un navegador web actualizado.

No se necesita una base de datos ni un servidor backend para ejecutar la página.

## 6. Créditos y licencias

Los recursos multimedia utilizados mantienen sus atribuciones en la propia página:

- **Imagen principal:** Aymad Mahmoud, desde Pexels.
- **Obras de la galería:** recursos de Pixabay, con las atribuciones indicadas en cada obra.
- **Vídeo:** Mikkehouse, desde Pixabay.
- **Audio:** AtlasAudio, desde Pixabay. El archivo ha sido modificado mediante Audio Editor.

Se deben respetar las condiciones de uso y las licencias de cada recurso original.

## 7. Compatibilidad y pruebas

Se han realizado comprobaciones de:

- Adaptación del diseño a resoluciones móviles.
- Navegación mediante teclado.
- Estados de foco de enlaces y botones.
- Apertura y cierre de la ventana modal del vídeo.
- Reproducción, pausa y silencio del audio.
- Selección de imágenes en la galería.

El proyecto está preparado para utilizarse en navegadores modernos compatibles con HTML5, CSS3 y JavaScript.

## 8. Autoría

Proyecto académico desarrollado como continuación de la actividad UT3, dentro del ciclo de Desarrollo de Aplicaciones Web.

**Autor:** Christian Said Jiménez Mahecha.