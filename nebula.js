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

//2. VENTANA MODAL DEL VÍDEO
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

// 3. REPRODUCTOR DE AUDIO
const audio = document.querySelector("#nebula-audio");
const botonAudio = document.querySelector("#audio-toggle");
const botonSilencio = document.querySelector("#audio-mute");

// Reproducir y pausar el audio
botonAudio.addEventListener("click", async () => {
    if (audio.paused) {
        try {
            await audio.play();

            botonAudio.textContent = "Pausar audio";
            botonAudio.setAttribute("aria-pressed", "true");

        } catch (error) {
            console.error("No se pudo reproducir el audio:", error);
        }

    } else {
        audio.pause();

        botonAudio.textContent = "Reproducir audio";
        botonAudio.setAttribute("aria-pressed", "false");
    }
});

// Silenciar y activar el sonido
botonSilencio.addEventListener("click", () => {
    audio.muted = !audio.muted;

    botonSilencio.textContent = audio.muted
        ? "Activar sonido"
        : "Silenciar";

    botonSilencio.setAttribute(
        "aria-pressed",
        String(audio.muted)
    );
});




