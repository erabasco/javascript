/**
 * Modificar la clase de la frase anterior
 */

"use strict"
var numClick = 0;
window.addEventListener("load", function () {
    var texto = document.getElementById("texto");
    texto.addEventListener("click", cambiarClase)
});

function cambiarClase() {
    switch (numClick) {
        case 0:
            texto.classList.add("resaltado");
            break;
        case 1:
            texto.classList.add("rojo");
            break;
        case 2:
            texto.classList.add("centrado");
            break;
        case 3:
            texto.classList.remove("centrado");
            break;
        case 4:
            texto.classList.remove("rojo");
            break;
        case 5:
            texto.classList.remove("resaltado");
            numClick=-1;
            break;
        default:
            break;
    }
    numClick++;

}