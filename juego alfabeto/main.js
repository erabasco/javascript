/**
 * Crear los botones del alfabeto de forma desordenada
 * cuando se pulse en ellos que desaparezcan
 * tienen que borrarse en orden
 * 
 * Me ha explicado que al pulsar el botón debe aparecer las letras desordenadas
  Hay que darle en orden alfabético a la letra
  Y si es correcta desaparece
  Al final Puntúa contando errore
 */

"use strict"
var body;
var orden = 97;
var errores=0;

window.addEventListener("load", function(){
    body = document.getElementsByTagName("body")[0];
    body.appendChild(crearBoton());
    document.getElementById("inicio").addEventListener("click",iniciar);
    


});

function crearBoton(){
    let boton=document.createElement("input");
    boton.setAttribute("type","button");
    boton.setAttribute("id","inicio");
    boton.setAttribute("value","Iniciar partida");
    return boton;
}

function iniciar(){
    generarAbecedario();

}

function generarAbecedario(){
    var aAbecedarioOrdenador = new Array();
    var aAbecedarioDesordenado= new Array();

    // va desde la 97 hasta la 122 - Ordenado
    for (let i = 97; i < 123; i++) {      
        aAbecedarioOrdenador.push(i);
        console.log(aAbecedarioOrdenador);      
    }

    aAbecedarioDesordenado= aAbecedarioOrdenador.sort(function () { //metodo apra desordenar el array
        return Math.random() - 0.5
    });

    for (let ele of aAbecedarioDesordenado){
        let letra=document.createElement("input");
        letra.setAttribute("type","button");
        letra.setAttribute("id",ele)
        letra.setAttribute("value",String.fromCharCode(ele));
        letra.setAttribute("class","letra");
        letra.addEventListener("click",comprobar);
        body.appendChild(letra);
    }
 
}
function comprobar(){
    if (this.getAttribute("id")==orden)
    {
        orden++
        body.removeChild(this);
    }else{
        errores++;
    }
    if (orden>122){
        alert("Partida terminada!! Ha tenido errores: "+errores);
        errores=0;
        orden=97;
    }
}

