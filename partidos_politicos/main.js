"use strict";
var totalVotos=0;
var aPartidos = new Array();


class Partido{
    constructor(nombre,votos,porcentaje,escanios){
        this.nombre = nombre;
        this.votos=votos;
        this.porcentaje=0;
        this.escanios=0;
    }
    calcularPorc(){
        this.porcentaje = Math.round((this.votos / totalVotos) * 100);
    }
    mostrarPartido(){
        document.write("<br>Partido:"+this.nombre+" Votos: "+this.votos+" Porcentaje: "+this.porcentaje+" Escaños: "+this.escanios);
    }
}

function pedirDatos(){
    var nombre = prompt("Dame nombre");
    var i=0; // para contador

    while(nombre!="*"){
        aPartidos[i] = new Partido();
        aPartidos[i].nombre = nombre;
        aPartidos[i].votos = prompt("Votos");
        totalVotos+=parseInt(aPartidos[i].votos);
        i++;
        document.write("<br>Votos: "+totalVotos);
        nombre = prompt("Dame nombre"); 
    }
    // una vez termino de insertarlos calculo el porcentaje
    for (const ele of aPartidos) {
        ele.calcularPorc();
    }

}

function mostrarPartidos(){
    for (const ele of aPartidos) {
        ele.mostrarPartido();
    }
}
function ordenarVotos(){
    aPartidos.sort(function (a,b) {
        if (a.votos > b.votos){
            return -1;
        }else if (a.votos<b.votos){
            return 1;
        }else{
            return 0;
        }
    })
}
pedirDatos();
mostrarPartidos();
ordenarVotos();
document.write("Ordenados: <br><br>");
mostrarPartidos();