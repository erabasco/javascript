/** romper una cadena que sea par en dos partes y mostrarla, si no es par pedir otra */
"use strict";

var cadena=""; //, primera="", segunda="";
var primera= new Array();
var segunda = new Array();

cadena = prompt("Introduce una cadena que tenga un nº par de caracteres");

while(cadena.length%2!=0){
    cadena= prompt("Error es impar\nIntroduce una cadena que tenga un nº par de caracteres");
}
/*document.write("La cadena es: "+cadena);
primera= cadena.substring(0, cadena.length / 2);
segunda = cadena.substring(cadena.length / 2, cadena.length);

document.write(primera);
document.write("<br>");
document.write(segunda);*/

/*for (let i = 0; i < cadena.length/2; i++) {
    primera.push(cadena[i]);
}
primera+=' ';
primera.replace(/,/g,'');
document.write(primera);
*/
primera = cadena.substring(0,cadena.length/2);
segunda = cadena.substring(cadena.length/2, cadena.length);
document.write(primera);
document.write("<br>");
document.write(segunda);