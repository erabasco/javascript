"use strict";
var aEquipos = new Array(); // array de equipos
class Equipo{
    constructor(nomEquipo, numJug, aNomJug){
        this.nomEquipo=nomEquipo;
        this.numJug =numJug;
        this.aNomJug = aNomJug;
    }
    ordenAlfDesEquipo(){

    }
    mostrarEquipos(){
        document.write("Equipo: "+ this.nomEquipo);
       for (let i = 0; i < this.aNomJug.length; i++) {
           document.write("<br> Jugador "+i+ " "+this.aNomJug[i]);
       }
    }
}

function pedirDatos(){
    var equipo, numJug;
    equipo = prompt("Introduce nombre equipo");
    numJug = numero("Introduce Nº de jugadores");
    aEquipos.push(new Equipo(equipo, numJug, pideNombres(numJug)));
}

function pideNombres(total){
    let aNombres = new Array();
    let nombre;
    for (let i = 0; i < total; i++) {
       nombre=prompt("Introduce nombre del jugador: ");
       aNombres.push(nombre);       
    }
    return aNombres;
}

function numero(cadena){
    let numero = prompt(cadena);
    while (isNaN(numero)){
        numero = prompt("error\n"+cadena);
    }
    return parseInt(numero);
}

pedirDatos();
for (const ele of aEquipos) {
    ele.mostrarEquipos();
}