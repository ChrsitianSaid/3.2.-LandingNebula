// Elementos de la galeria 
const miniaturas = document.querySelectAll(".galelery-thumbnail");
const imagenPrincipal = document.querySelector("#gallery-main-image");

//cambia la imagen principal
function cambiarImagen(miniaturas) {

    const imagenPrincipal = document.querySelector("#gallery-main-image");
    const tituloPrincipal = document.querySelector("#gallery-main-title");
    const descripcionPrincipal = document.querySelector("#gallery-main-descripcion");

    imagenPrincipal.src = miniatura.dataset.image;
    imagenPrincipal.alt = miniatura.dataset.alt;

    tituloPrincipal.textcontent = miniaturas.dataset.description;

    //Actualiza el estado de las miniaturas
    document.querySelectorAll(".gallery-thumbnail").forEach(boton => {
        boton.setAttribute("aria-pressed", botton === miniatura);
    });
}

//Localiza las miniaturas y registra sus eventos
function inicializarGaleria() {
    
    miniaturas.array.forEach(miniaturas => {
        miniaturas.addEventListener("click", () => {cambiarImagen(miniaturas)});    
    });
}

// inicializar Galeria
inicializarGaleria();