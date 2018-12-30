"use strict";

var aEquipos = new Array(); // array de objetos

class Equipo{
    constructor(nomEquipo, numJug, aNomJug){
        this.nomEquipo=nomEquipo;
        this.numJug=numJug;
        this.aNomJug=aNomJug;
    }
    ordenAlfDesEquipo(){
        this.aNomJug.sort();
    }
    mostrarEquipo(){
        document.write("<br>Equipo: "+this.nomEquipo);
        for (let i = 0; i < this.aNomJug.length; i++) {
           document.write("<br>Jugador: "+(i+1)+ ": "+this.aNomJug[i]);           
        }
    }
}

function pedirDatos(){
    let nombre= prompt("Introduce nombre equipo, * ->salir");
    let jugadores;
    while (nombre!='*'){
        jugadores = pideNumero("Nº de jugadores");
        aEquipos.push(new Equipo(nombre, jugadores, pideNombres(jugadores)));
        nombre= prompt("Introduce nombre equipo, * ->salir");
    }
    for (const ele of aEquipos) {
       
        ele.ordenAlfDesEquipo();
    }

}

function pideNumero(cadena){
    let numero= prompt(cadena);
    while (isNaN(numero)){
        numero= prompt("Error: \n"+cadena);
    }
    return parseInt(numero);
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

function mostrarEquipos(){
    for (const ele of aEquipos) {
        ele.mostrarEquipo();
    }
}

function ordenarPorJugadores(){
    aEquipos.sort(function (a,b){
        if (a.numJug>b.numJug){
            return -1;
        }else if (a.numJug<b.numJug){
            return 1;
        }else{
            return 0;
        }
    });
}

pedirDatos();
ordenarPorJugadores();
mostrarEquipos();


