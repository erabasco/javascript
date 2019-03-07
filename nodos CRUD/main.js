/**
 * Crear 4 botones: Insertar / Modificar / Borrar / Añadir delante
 * Que muestre una lista ordenada
 * Si  no hay elementos, tanto modificar, borrar y añadir delante tendrá que estar deshabilitado
 * 
 * Utilizar funciones para crear los nodos.
 */

"use strict"

var n = 1;

window.addEventListener("load", function () {

    var body = document.getElementsByTagName("body")[0];
    let capa;

    // creo un div en body
    //let  capa = document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));

    // creo los 4 botones
    body.appendChild(crearBoton("Insertar"));
    body.appendChild(crearBoton("Modificar"));
    body.appendChild(crearBoton("Borrar"));
    body.appendChild(crearBoton("Delante"));

    // inserto la lista ordenada para mostrar la lista
    capa = document.createElement("ol");
    capa.setAttribute("id", "lista");
    body.appendChild(capa);


    document.getElementById("Insertar").addEventListener("click", insertar);
    document.getElementById("Modificar").addEventListener("click", modificar);
    document.getElementById("Borrar").addEventListener("click", borrar);
    document.getElementById("Delante").addEventListener("click", delante);



});

function crearBoton(id) {
    let boton = document.createElement("input");
    boton.setAttribute('type', 'button');
    boton.setAttribute('value', id);
    boton.setAttribute('id', id);
    return boton;
}

function insertar() {

    document.getElementById("lista").appendChild(creaLi());
    n++;
    // habilitaré los demás botones de borrado y modificar si existen nodos hijos
    // pero para que solo lo compruebe una vez utilizaré esto:
    if (document.getElementById("lista").childNodes.length==1){
        deshabilitarBotones(false);
    }

}

function creaLi() {
    let miLi = document.createElement("li");
    let texto = document.createTextNode("Elemento " + n);
    miLi.appendChild(texto);
    return miLi;
}

function modificar() {
    // modificaremos un li nuevo por el anterior con replaceChild
    document.getElementById("lista").replaceChild(creaLi(), document.getElementById("lista").lastChild);
    n++;

}

function borrar() {
    if ( document.getElementById("lista").hasChildNodes()){
        // si tiene hijos puedo borrar
        document.getElementById("lista").removeChild(document.getElementById("lista").lastChild);
    }
    else{
        // deshabilito botones
        deshabilitarBotones(true);
        n=1;
    }

}

function delante() {
    document.getElementById("lista").insertBefore(creaLi(), document.getElementById("lista").lastChild);
    n++;
}

function deshabilitarBotones(estado) {
    // true habilita , false deshabilita
    let botones = document.querySelectorAll("[type='button']");
    //recorro todos los botones (menos el insertar, que es elemento 0) y los activo
    for (let i = 1; i < botones.length; i++) {
        botones[i].disabled=estado;

    }
}
