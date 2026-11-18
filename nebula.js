
/* =====================================
   1. GALERÍA DINÁMICA
===================================== */

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
