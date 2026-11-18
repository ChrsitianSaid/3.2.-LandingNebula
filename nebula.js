// Elementos de la galeria 
const miniaturas = document.querySelectAll(".galelery-thumbnail");
const imagenPrincipal = document.querySelector("#gallery-main-image");

//cambia la imagen principal
function cambiarImagen(miniaturas) {
    //Actualiza imagen y texto alternativo
}

//Localiza las miniaturas y registra sus eventos
function inicializarGaleria() {
    miniaturas.array.forEach(miniaturas => {
        miniaturas.addEventListener("click", () => {cambiarImagen(miniaturas)});    
    });
}

// inicializar Galeria
inicializarGaleria();