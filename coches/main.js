/*Escribe un script que cree un array de objetos de tipo coche.
 1. Las propiedades serán Matrícula, Marca, modelo y km y un método que permita visualizar todas sus propiedades.
 2.Pedir por teclado los datos de los coches, F terminará la entrada de datos. Kms sólo podrá ser numérico.
 3.Mostrar todoss los coches ordenados por kms de mayor a menor.
 4. Mostrar el coche con menor número de kms.
 */

"use strict";
var aCoches = new Array();

class Coche{
    constructor(matricula,km){
        this.matricula = matricula;
        this.km = km;
    }
    mostrarDatos(){
        document.write("Matricula:" + this.matricula + " Kilómetros:" + this.km + "<br>");
    }
}

function pedirDatos(){
    let matricula = prompt("Introduce la Matrícula (F salir)");
    let km;
    let i=0;

    while(matricula!='F'){
        aCoches[i] = new Coche();
        aCoches[i].matricula = matricula;
        km = prompt("Introduce Kms");
        while (isNaN(km)){
            km = prompt("Introduce Kms");
        }
        aCoches[i].km = km;
        i++;
        matricula = prompt("Introduce la Matrícula (F salir)");
    }
}

function mostrarCoches(){
    var ultimo;
    aCoches.sort(function (a,b){
        if (a.km>b.km){
            return -1;
        }else if (a.km < b.km){
            return 1;
        }else{
            return 0;
        }
    })
    for (const ele of aCoches) {
        ele.mostrarDatos();
    }
    document.write(" El último");
   aCoches[aCoches.length-1].mostrarDatos();
}

pedirDatos();
mostrarCoches();
