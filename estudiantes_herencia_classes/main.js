/*clase persona con atributos nombre, edad genero. 
Un metodo de clase llamado obtDetalles que pida los valores
otro llamado visDatos que los visualice.
Crear la clase Estudiante que herede de persona, tendrá de más curso
Crea y Muestra tres estudiantes*/
"use strict";
var aEstudiantes = new Array(); // array de objetos estudiantes

class Persona {
    constructor(nombre, edad, genero) {
        this.nombre;
        this.edad;
        this.genero;
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso) {
        super(nombre, edad, genero);
        this.curso;
    }
    obtDetalles() {
        this.nombre = prompt("Nombre");
        this.edad = numerico("edad");
        this.genero = prompt("genero");
        this.curso = numerico("curso");
    }
    visDatos() {
        document.write("Nombre: " + this.nombre + " Edad: " + this.edad + " Genero: " + this.genero + " Curso: " + this.curso+"<br>");
    }

}

function numerico(cadena){
    let numero=prompt(cadena);
    while(isNaN(numero)){
        numero=prompt("Error: debe ser un numero\n"+cadena);
    }
    return parseInt(numero);
}

for (let i = 0; i < 3; i++) {
    aEstudiantes[i] = new Estudiante;
    aEstudiantes[i].obtDetalles();
}
for (const ele of aEstudiantes) {
    ele.visDatos();
}



