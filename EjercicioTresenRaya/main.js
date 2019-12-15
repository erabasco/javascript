"use strict";
var body = document.getElementsByTagName("body")[0];
var celdas = document.getElementsByTagName("td");

// Creo el <table> y el elemento <tbody>
var tabla = document.createElement("table");
var tblBody = document.createElement("tbody");
var fila, celda;
var totalFilas = 3;
var totalColumnas = 3;
var turno, titulo, tirada = 1;
var jug1 = 0;
var jug2 = 0;
var mensaje;
var intervalo;
var turno;


window.addEventListener("load", function () {
    insertarTitulo();
    dibujarTabla();
    insertarJugadores();
    comenzarPartida();

});


function insertarTitulo() {
    // insertar título
    var titulo = document.createElement('p');
    titulo.appendChild(document.createTextNode("Tres en Raya"));
    titulo.setAttribute('id', 'titulo');
    body.appendChild(titulo);
}

function dibujarTabla() {
    var ordenElemento = 0;
    // Dibujo la tabla
    for (var i = 0; i < totalFilas; i++) {
        fila = document.createElement("tr");   // Crea las filas de la tabla
        for (var j = 0; j < totalColumnas; j++) {
            // Creo un elemento <td> y un nodo de texto, para insertar contenido
            celda = document.createElement("td");
            celda.setAttribute("id", ordenElemento++); // añado un numero de celda para identificarlas   
            fila.appendChild(celda);
        }
        tblBody.appendChild(fila);  // añado la fila al tbody
    }

    tabla.appendChild(tblBody);  // añado el tbody a la tabla
    body.appendChild(tabla);   // añado la tabla al nodo body


}

function insertarJugadores() {
    var capaJugadores;

    // capaJugadores
    capaJugadores = document.createElement("div");
    capaJugadores.setAttribute('id', 'capaJugadores');

    //Jugador X
    capaJugadores.appendChild(crearJugador("X")[0]);
    capaJugadores.appendChild(crearJugador("X")[1]);

    //Jugador 0
    capaJugadores.appendChild(crearJugador("0")[0]);
    capaJugadores.appendChild(crearJugador("0")[1]);


    // boton 
    capaJugadores.appendChild(crearBoton());

    //mensaje de jugador ganador
    mensaje = document.createElement('p');
    mensaje.setAttribute("id", "mensajeFinal");
    mensaje.innerHTML = "";


    // añadimos capa jugadores al body, debajo de la tabla
    body.appendChild(capaJugadores);
    body.appendChild(mensaje);
}

function crearJugador(n) {
    let etiqueta, elemento;
    etiqueta = document.createElement("label");
    etiqueta.appendChild(document.createTextNode("Turno Jugador " + n + ": "));
    etiqueta.setAttribute("id", "etiqueta" + n);

    elemento = document.createElement('input');
    elemento.setAttribute('type', 'text');
    elemento.setAttribute('size', '3');
    elemento.setAttribute('readonly', 'readonly');
    elemento.setAttribute("id", "input" + n);
    // devuelvo tanto la etiqueta como el input en un array
    return [etiqueta, elemento];
}

function crearBoton() {
    let boton;
    boton = document.createElement('input');
    boton.setAttribute('type', 'button');
    boton.setAttribute('value', 'Comenzar');
    boton.setAttribute('id', 'inicio');
    return boton;
}


function comenzarPartida() {

    document.getElementById('inicio').addEventListener("click", function () {
        //Limpiamos las celdas por si viene de otra partida
        reiniciar();
        for (let ele of celdas) {
            ele.innerHTML = ""; //vaciado de casillas del juego anterior
            ele.addEventListener('click', celdaPulsada); //si hacemos click pintamos
        }
        generarTurno(); // turno aleatorio al principio de la partida
    });
}


function celdaPulsada() {

    let x = '<img src="imagen/imagenX.png">';
    let y = '<img src="imagen/imagen0.png">';


    if (this.innerHTML == '') {
        if (turno == 1) {
            this.innerHTML = x;
            this.setAttribute('id', 'x');
            document.getElementById("etiqueta0").setAttribute("class", "turnojugador");
            document.getElementById("etiquetaX").removeAttribute("class");

            turno = 2;
            clearInterval(intervalo);
            document.getElementById("inputX").value="";
            cuentAtras();

        } else if (turno == 2) {
            this.innerHTML = y;
            this.setAttribute('id', '0');
            document.getElementById("etiqueta0").removeAttribute("class");

            turno = 1;
            clearInterval(intervalo);
            document.getElementById("input0").value="";
            cuentAtras();
        }

    }


    // comprobamos que celdas estan pulsadas
    if ((celdas[0].id == 'x' && celdas[1].id == 'x' && celdas[2].id == 'x') ||
        (celdas[3].id == 'x' && celdas[4].id == 'x' && celdas[5].id == 'x') ||
        (celdas[6].id == 'x' && celdas[7].id == 'x' && celdas[8].id == 'x') ||

        (celdas[0].id == 'x' && celdas[3].id == 'x' && celdas[6].id == 'x') ||
        (celdas[1].id == 'x' && celdas[4].id == 'x' && celdas[7].id == 'x') ||
        (celdas[2].id == 'x' && celdas[5].id == 'x' && celdas[8].id == 'x') ||

        (celdas[0].id == 'x' && celdas[4].id == 'x' && celdas[8].id == 'x') ||
        (celdas[2].id == 'x' && celdas[4].id == 'x' && celdas[6].id == 'x')


    ) { //si es combinación ganadora
        mensaje.innerHTML = "Ha ganado la partida el jugador X";
        jug1 = jug1 + 1;
        fin();
    }

    if ((celdas[0].id == '0' && celdas[1].id == '0' && celdas[2].id == '0') ||
        (celdas[3].id == '0' && celdas[4].id == '0' && celdas[5].id == '0') ||
        (celdas[6].id == '0' && celdas[7].id == '0' && celdas[8].id == '0') ||

        (celdas[0].id == '0' && celdas[3].id == '0' && celdas[6].id == '0') ||
        (celdas[1].id == '0' && celdas[4].id == '0' && celdas[7].id == '0') ||
        (celdas[2].id == '0' && celdas[5].id == '0' && celdas[8].id == '0') ||

        (celdas[0].id == '0' && celdas[4].id == '0' && celdas[8].id == '0') ||
        (celdas[2].id == '0' && celdas[4].id == '0' && celdas[6].id == '0')


    ) { //si es combinación ganadora
        mensaje.innerHTML = "Ha ganado la partida el jugador 0";
        jug2 = jug2 + 1;
        fin();
    }
    //incremento en numero de tiradas de esta partida
    tirada++;
    // compruebo las tiradas que llevan para ver si se ha acabado la partida sin ganador
    if (tirada ==10) {
        mensaje.innerHTML = "La partida ha quedado en tablas";
        tirada=1;
        fin();
    }


}
function generarTurno() {
    // generamos un numero aleatorio entre 1 y 2
    turno = parseInt(Math.round(Math.random() * (2 - 1) + 1));

    // borramos el posible turno
    document.getElementById("etiquetaX").removeAttribute("class");
    document.getElementById("etiqueta0").removeAttribute("class");

    if (turno == 1) {
        document.getElementById("etiquetaX").setAttribute("class", "turnojugador");
    } else {
        document.getElementById("etiqueta0").setAttribute("class", "turnojugador");
    }
    cuentAtras();
}

function reiniciar() {
    for (let ele of celdas) {
        ele.innerHTML = ""; //vaciado de casillas del juego anterior
        ele.setAttribute('id', '');
    }
    //borramos el mensaje del ganador
    mensaje.innerHTML = "";
    tirada=1;
    //limpiamos temporizador
    clearInterval(intervalo);
    document.getElementById("inputX").value="";
    document.getElementById("input0").value="";
}

function cuentAtras() {
    var count = 15;
    var number;

    if (turno == 1) {
        number = document.getElementById("inputX");
    } else {
        number = document.getElementById("input0");
    }


    number.value = count;
    intervalo = setInterval(function () {
        count--;
        number.value = count;
        if (count == 0) {
            clearInterval(intervalo);
            if (turno == 1) {
                turno = 2;
                number.value = "";
                document.getElementById("etiqueta0").setAttribute("class", "turnojugador");
                document.getElementById("etiquetaX").removeAttribute("class");
                cuentAtras();
            } else {
                turno = 1;
                number.value = "";
                document.getElementById("etiquetaX").setAttribute("class", "turnojugador");
                document.getElementById("etiqueta0").removeAttribute("class");
                cuentAtras();
            }
        }
    }, 1000);
}

function fin() { 
    // Eliminamos todos los eventos y limpiamos los temporizadores
    for (let ele of celdas) {
        ele.removeEventListener('click', celdaPulsada); 
    }
    clearInterval(intervalo);
    document.getElementById("inputX").value="";
    document.getElementById("input0").value="";
}