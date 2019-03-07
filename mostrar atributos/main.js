/**
 * Mostrar los atributos y nombres de todos los elementos en el div mostrar
 * al pulsar sobre algún radio button que se convierta en botón
 */

"use strict"
window.addEventListener("load", function () {
    document.getElementById("boton").addEventListener("click", mostrar);
    // recorremos los radios y le asignamos eventos onclick
    // querySelector podemos seleccionar todos los elementos tipo radio.
    let oRadios = document.querySelectorAll("[type='radio']");
    for (let ele of oRadios) {
        ele.addEventListener("click", convertirBoton)
    }

});

function mostrar() {
    // voy a comprobar que elemento está seleccionado
    // recogo la colección de input
    let oInput = document.getElementsByTagName("input");
    for (let ele of oInput) {
        document.getElementById("mostrar").innerHTML += ele.nodeName;
        // ahora voy a mostrar cada uno de los atributos d
        for (let atr of ele.attributes) {
            document.getElementById("mostrar").innerHTML += " " + atr.nodeName + " = " + atr.nodeValue + " ";
        }
        document.getElementById("mostrar").innerHTML += "<br>";
    }
}

function convertirBoton() {
    this.type="button";
    //quitar el texto
    //document.querySelector("[class='"+this.value+"']").innerHTML="";
    // forma de Mari luz, el [0] es porque es una colección solo habrá un elemento pero hay que referenciarlo
    // así
    document.getElementsByClassName(this.value)[0].innerHTML="";

    //establecer evento click
    this.addEventListener("click", function(){
        alert("Me he convertido a botón")
    })

    this.removeAttribute("id") //eliminar el atributo id

}