/*clase persona con atributos nombre, edad.
estudiante , heredará de persona y tendrá :  hijos, aNomHijos

Un metodo de clase llamado obtDetalles que pida los valores
otro llamado visDatos que los visualice.
Crear la clase Estudiante que herede de persona
Que pida Estudiantes hasta que sea * */


"use strict";

var aEstudiantes = new Array();

class Persona{
    constructor(nombre,edad){
        this.nombre= nombre;
        this.edad= edad;
    }
}
class Estudiante extends Persona{
    constructor(nombre, edad, hijos, aNomHijos){
        super(nombre,edad);
        this.hijos=hijos;
        this.aNomHijos=aNomHijos;
    }

    visDatos(){
        document.write("<br>Nombre:"+this.nombre+" Edad:"+this.edad+"  Hijos: "+this.hijos);
        for (let i = 0; i < this.hijos; i++) {
            document.write("<br>"+this.aNomHijos[i]);
            
        }
    }
}

function pedirDatos(){
    var nombre =prompt("Dame nombre");
    var edad, hijos;

    while(nombre!='*'){
        edad = prompt("Dame edad");
        hijos = prompt("Nº de Hijos");
        aEstudiantes.push(new Estudiante(nombre, edad, hijos, pideNombres(hijos)));
        nombre =prompt("Dame nombre *-> salir");
    }
}
function pideNombres(total){
    let aNombres = new Array();
    for (let i = 0; i < total; i++) {
        aNombres.push(prompt("dame nombre hijo: "));
    }
    return aNombres;
}

function mostrarEstudiantes(){
    for (const ele of aEstudiantes) {
        ele.visDatos();
    }
}

pedirDatos();
mostrarEstudiantes();