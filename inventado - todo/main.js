/**
 * Gestionar la reserva de asientos de un cine de 15 filas x 6 columnas.
 * Al pulsar sobre una fila y columna se ponga en otro color (reserva)
 * tendremos un boton: Reiniciar- que estará activo solo cuando todas las celdas estén ocupadas
 * 
 * Si pulsamos 1 vez sobre la casilla se cambiará a verde (para confirmar)
 * Si pulsamos 2 veces se cambiará a rojo, que indicará que está reservada y no se podrá volver a pulsar
 * 
 * Uso de clases, botones, addEventlistener, disabled, "#text", querySelectorAll("[type='radio']")
 */

"use strict"
var body;
var butacas;

window.addEventListener("load", function () {
    body = document.getElementsByTagName("body")[0];
    dibujarButacas();
    //
    butacas = document.getElementsByTagName("td");
    //añadir eventos
    for (let ele of butacas){
        ele.addEventListener("click",reservar);
    }
    document.querySelectorAll("[type='button']")[0].addEventListener("click",reiniciar);
});

function dibujarButacas() {
    var tabla = document.createElement("table")
    tabla.setAttribute("border", "1");
    for (let i = 0; i< 4; i++) {
        let fila = document.createElement("tr")
        tabla.appendChild(fila);
        for (let columna = 0; columna < 4; columna++) {
           let columna = document.createElement("td");
           columna.setAttribute("width","60px");
           columna.setAttribute("height","60px");
           fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
    body.appendChild(tabla);
    body.appendChild(dibujarBoton());

}

function dibujarBoton(){
 let boton= document.createElement("input");
 boton.setAttribute("type","button");
 boton.setAttribute("value","Reiniciar");
 boton.disabled=true;
 // añado eventListener
 //boton.addEventListener("click",reiniciar);
 return boton;
}

function reservar(){
    let imagen = '<img src="imagenX.png" height="20px">';
    this.innerHTML=imagen;
    // si ya está preservado le cambio el color a definitivo azul
    // y desactivo el botón.
    if (this.getAttribute("class")=="rojo"){
        this.setAttribute("class","azul");
        this.removeEventListener('click', reservar); 

    }else{
        this.setAttribute("class","rojo");       
        document.querySelectorAll("[type='button']")[0].disabled=false;   
    }
    

}

function reiniciar(){
    for (let ele of butacas){
        ele.addEventListener("click",reservar);
        // borramos la clase
        ele.removeAttribute("class","rojo")
    }
}