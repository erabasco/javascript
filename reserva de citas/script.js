"use strict";
//Variables
var tabla, fila, cabeceraHorizontal, capaConsultas, horario, cabeceraVertical, numConsulta, columna, celda, aux, posicionI, posicionJ;
//Creo array bidimensional, con el tamaño de la zona de celdas que van a tener el evento click.
var aConsultas = new Array();
for (let i = 0; i < 5; i++) {
    aConsultas[i] = new Array();
    for (let j = 0; j < 6; j++) {
        aConsultas[i][j] = "";
    }
}
//Array con las horas para guardar en el array de consultas la hora de la consulta.
var aHoras = ["9 h", "10 h", "11 h", "12 h", "13 h", "14 h"];
//variable para mostrar los datos de la consulta antes de borrarla.
var infoConsulta = "";
//Ejecucion al inicio
window.addEventListener("load", function () {
    //La entrada de datos no es posible hasta que no se selecciona una cita libre.
    document.getElementById("entradaDatos").style.display = "none";
    pintaTabla();
    document.getElementById("numPac").addEventListener("keypress", validarNumPac);
    document.getElementById("nombre").addEventListener("blur", validarNombre);
    document.getElementById("genero").addEventListener("blur", validarGenero);
    document.getElementById("guardar").addEventListener("click", guardar);
    document.getElementById("cancelar").addEventListener("click", cancelar);
})

function pintaTabla() {
    tabla = document.createElement("table");
    fila = document.createElement("tr");
    capaConsultas = document.getElementById("consultas");
    capaConsultas.appendChild(tabla);
    tabla.appendChild(fila);
    for (let i = 0; i < 7; i++) {
        cabeceraHorizontal = document.createElement("th");
        cabeceraHorizontal.setAttribute("class", "cabecera");
        if (i > 0) {
            horario = document.createTextNode((i + 8) + " h");
            cabeceraHorizontal.appendChild(horario);
        }
        fila.appendChild(cabeceraHorizontal);
    }
    for (let index = 0; index < 5; index++) {
        fila = document.createElement("tr");
        tabla.appendChild(fila);
        numConsulta = document.createTextNode(index + 1);
        cabeceraVertical = document.createElement("th");
        cabeceraVertical.setAttribute("class", "cabecera");
        cabeceraVertical.appendChild(numConsulta);
        fila.appendChild(cabeceraVertical);
        for (let i = 0; i < 6; i++) {
            columna = document.createElement("td");
            columna.setAttribute("id", index + ":" + i);
            columna.addEventListener("click", seleccionaConsulta);
            fila.appendChild(columna);
        }
    }
}

function seleccionaConsulta() {
    //Cogemos el id, para despues separar las dos cifras para tener la fila y columna, y con ello comprobar si está libre o no
    //esa cita en el array de consultas.
    celda = this.id;
    aux = celda.split(":");
    posicionI = aux[0];
    posicionJ = aux[1];
    if (aConsultas[posicionI][posicionJ] != "") {
        //En caso de no estar libre, la mostramos y damos la opcion a eliminarla.
        infoConsulta = aConsultas[posicionI][posicionJ];
        if (confirm("Cita:\n"+infoConsulta+"\n¿Desea cancelar cita?")) {
            aConsultas[posicionI][posicionJ] = "";
            this.style.background = "none";
        }
    } else {
        //Si está libre, marcamos en rojo, y mostramos el formulario para la introduccion de datos.
        this.style.background = "red";
        document.getElementById("entradaDatos").style.display = "block";
    }
}

function validarNumPac(e) {
    let evento = e || window.event;
    if ((evento.which < 48 || evento.which > 57) && evento.which != 8) {
        evento.preventDefault();
    }
}
//funcion para validar nombre con expresion regular y mantiene el foco mientras sea incorrecto
function validarNombre() {
    let expresion = /^[a-zá-ú\s]+$/i;
    if (!expresion.test(this.value)) {
        document.getElementById("errorNom").innerHTML = "Dato invalido";
        this.focus();
    } else {
        document.getElementById("errorNom").innerHTML = "";
    }
}
//funcion para validar genero con expresion regular y mantiene el foco mientras sea ncorrecto
function validarGenero() {
    let expresion = /^(hombre|mujer)$/i;
    if (!expresion.test(this.value)) {
        document.getElementById("errorGen").innerHTML = "Dato invalido";
        this.focus();
    } else {
        document.getElementById("errorGen").innerHTML = "";
    }
}

function guardar(e) {
    let control = true;
    let evento = e || window.event;
    if (document.getElementById("numPac").value.length == 0) {
        control = false;
        document.getElementById("errorPac").innerHTML = "Dato requerido";
    }
    if (document.getElementById("nombre").value.length == 0) {
        control = false;
        document.getElementById("errorNom").innerHTML = "Dato requerido";
    }
    if (document.getElementById("genero").value.length == 0) {
        control = false;
        document.getElementById("errorGen").innerHTML = "Dato requerido";
    }
    if (!control) {
        evento.preventDefault();
    } else {
        //agregamos en el array el cliente con los datos
        aConsultas[posicionI][posicionJ] = "Consulta: " + (parseInt(posicionI) + 1) + "\nHora: " + aHoras[posicionJ] + "\nNº paciente: " + document.getElementById("numPac").value
        //alert(aConsultas[posicionI][posicionJ]); 
        //ponemos los compos vacios y quitamos el formulario
        document.getElementById("numPac").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("genero").value = "";
        document.getElementById("entradaDatos").style.display = "none";
    }
}

//Funcion para cancelar en caso de no querer guardar al final una cita, entonces vuelve la celda a tener color de libre,
//Limpiamos los campos del formulario para que aparezcan vacios en la proxima seleccion de celda, y quitamos el formulario.
function cancelar() {
    document.getElementById(celda).style.background = "none";
    document.getElementById("numPac").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("entradaDatos").style.display = "none";
}