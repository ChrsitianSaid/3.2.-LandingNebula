
// 1. GALERÍA DINÁMICA

// Cambia la imagen principal y su información
function cambiarImagen(miniatura) {

    const imagenPrincipal = document.querySelector("#gallery-main-image");
    const tituloPrincipal = document.querySelector("#gallery-main-title");
    const descripcionPrincipal = document.querySelector("#gallery-main-description");

    // Actualiza la imagen principal
    imagenPrincipal.src = miniatura.dataset.image;
    imagenPrincipal.alt = miniatura.dataset.alt;

    // Actualiza el título y la descripción
    tituloPrincipal.textContent = miniatura.dataset.title;
    descripcionPrincipal.textContent = miniatura.dataset.description;

    // Actualiza el estado de las miniaturas
    document.querySelectorAll(".gallery-thumbnail").forEach(boton => {
        boton.setAttribute("aria-pressed", boton === miniatura);
    });
}

// Localiza las miniaturas y registra sus eventos
function inicializarGaleria() {

    const miniaturas = document.querySelectorAll(".gallery-thumbnail");

    miniaturas.forEach(miniatura => {
        miniatura.addEventListener("click", () => {
            cambiarImagen(miniatura);
        });
    });
}

// Inicializa la galería
inicializarGaleria();


/* =====================================
   2. VENTANA MODAL DEL VÍDEO
===================================== */

// Elementos de la ventana modal
const modalVideo = document.querySelector("#video-modal");
const botonAbrirVideo = document.querySelector("#open-video");
const botonCerrarVideo = document.querySelector("#close-video");
const video = document.querySelector("#nebula-video");

// Abre la ventana y reproduce el vídeo
function abrirVideo() {
    modalVideo.showModal();
    video.play();
}

// Cierra la ventana y detiene el vídeo
function cerrarVideo() {
    video.pause();
    video.currentTime = 0;
    modalVideo.close();
}

// Registra los eventos de los botones
botonAbrirVideo.addEventListener("click", abrirVideo);
botonCerrarVideo.addEventListener("click", cerrarVideo);

// Cierra la ventana al pulsar fuera del vídeo
modalVideo.addEventListener("click", (evento) => {
    if (evento.target === modalVideo) {
        cerrarVideo();
    }
});




