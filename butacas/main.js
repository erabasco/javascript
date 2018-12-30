/*Cine de 15 filas x 6 columnas */

"use strict";

var aButacas = new Array();

function pintaTabla(){

    for (let filas = 0; filas < 15; filas++) {
        aButacas[filas] = new Array();
        for (let columnas = 0; columnas < 6; columnas++) {
            aButacas[filas][columnas]="L";
        }
    }
    // pinto la tabla
    document.write("<table border=1>");

    //cabecera fila superior
    document.write("<tr>");
    document.write("<td> </td>");
    for (let columnas = 0; columnas < 6; columnas++) {
        document.write("<td>" + (columnas + 1) + "</td>");
    }
    document.write("</tr>");
    
    
    for (let filas = 0; filas < 15; filas++) {
        
        document.write("<tr>");

        //pinto primera celda izquierda
        document.write("<td>"+ filas+"</td>");
        
        for (let columnas = 0; columnas < 6; columnas++) {
            
            document.write("<td>"+ aButacas[filas][columnas]+"</td>");
            
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
pintaTabla();