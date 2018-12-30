/*Cine de 15 filas x 6 columnas */
"use strict";
var aButacas = new Array();

function reiniciar() {

    for (let filas = 0; filas < 15; filas++) {
        aButacas[filas] = new Array();
        for (let columnas = 0; columnas < 6; columnas++) {
            aButacas[filas][columnas] = "L";
            //document.write("Hola");

        }
    }
}

function mostrarArray() {
    document.write("<table border=1>");
    //pinto la cabecera de la fila 1 y una celda más para incluir la cabecera

    document.write("<tr>");
    document.write("<td> </td>");
    for (let columnas = 0; columnas < aButacas[0].length; columnas++) {
        document.write("<td>" + (columnas + 1) + "</td>");
    }
    document.write("</tr>");
    //pinto lo demás
    for (let filas = 0; filas < aButacas.length; filas++) {
        document.write("<td>" + (filas + 1) + "</td>");
        for (let columnas = 0; columnas < aButacas[filas].length; columnas++) {
            //añado una columna más para mostrar el nº de fila

            document.write("<td>" + aButacas[filas][columnas] + "</td>");
        }

        document.write("<tr>");

    }
    document.write("</table><br>");
}

function reservar() {
    var fila = 0;
    var columna = 0;
    fila = prompt("introduce fila entre 1 y 15");
    columna = prompt("introduce columna entre 1 y 6");
    // antes de reservar hay que ver que está libre
    if (aButacas[fila - 1][columna - 1] == "L") {
        aButacas[fila - 1][columna - 1] = "R";
    } else {
        alert("Ya está reservada esa fila y columna");
    }

}

function cancelar() {
    var fila = 0;
    var columna = 0;
    fila = prompt("introduce fila Cancelación entre 1 y 15");
    columna = prompt("introduce Cancelación columna entre 1 y 6");
    if (aButacas[fila - 1][columna - 1] == "R") {
        aButacas[fila - 1][columna - 1] = "L";
    } else {
        alert("No se puede cancelar");
    }
}

function menu() {
    reiniciar(); //reinicio el array a todo libre

    let opcion;
    do{
        opcion = prompt("Introduce opción:\n1. Mostrar Butacas\n2.Reservar\n3.Cancelar\n4.Salir");
        //pedimos hasta q sea correcto
        while (!isNaN(opcion) && (opcion > 4 || opcion < 1)) {
            opcion =prompt("Error!\nIntroduce opción:\n1.Mostrar Butacas\n2.Reservar\n3.Cancelar\n4.Salir");
        }
        opcion = parseInt(opcion);
        switch (opcion) {
            case 1:
                mostrarArray();
                break;
            case 2:
                reservar();
                break;
            case 3:
                cancelar();
                break;
    
            default:
                break;
        }
    }while(opcion!=4);
    
}


menu();