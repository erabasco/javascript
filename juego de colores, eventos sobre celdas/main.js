"use strict";
let capa, color;
window.addEventListener("load", function() {
  crearTitulo();
  crearCajas();
  crearBoton();
});

function crearTitulo() {
  let titulo = crearObjeto("h1", null, "titulo", null);
  let texto = document.createTextNode("Juego de Colores ");
  titulo.appendChild(texto);
  document.body.appendChild(titulo);
}

function crearCajas() {
  capa = crearObjeto("div", null, "capaCajas", null);
  let labelF = crearObjeto("label", null, null, null);
  let textoF = document.createTextNode("Filas ");
  let cajaF = crearObjeto("input", "text", "fils", null);
  let labelC = crearObjeto("label", null, null, null);
  let textoC = document.createTextNode("Columnas ");
  let cajaC = crearObjeto("input", "text", "cols", null);
  //filas
  labelF.appendChild(textoF);
  capa.appendChild(labelF);
  capa.appendChild(cajaF);
  //establecer el evento para controlar que no permitan introducir otro dato que no sea números
  textoF.addEventListener("keypress", validarFilaCol);
  //columnas
  labelC.appendChild(textoC);
  capa.appendChild(labelC);
  capa.appendChild(cajaC);
  //establecer el evento para controlar que no permitan introducir otro dato que no sea números
  textoC.addEventListener("keypress", validarFilaCol);
  document.body.appendChild(capa);
}

function crearBoton() {
  let boton = crearObjeto("input", "button", "ejecutar", "ejecutar");
  capa.appendChild(boton);
  //establecer el evento del botón
  boton.addEventListener("click", ejecutar);
}

function ejecutar() {
  //comprobar que las filas y columnas tienen los datos correctos
  if (
    document.getElementById("fils").value <= 10 &&
    document.getElementById("cols").value <= 10
  ) {
    crearTabla();
  } else {
    alert("Datos incorrectos, corríjalos");
  }
}

function validarFilaCol(e) {
  let evento = e || window.event;
  if (evento.which < 49 || evento.which > 57) {
    evento.preventDefault();
  }
}

function crearTabla() {
  let table = crearObjeto("table", null, "tabla", null);
  table.setAttribute("border", 1);
  for (let i = 0; i < document.getElementById("fils").value; i++) {
    let tr = crearObjeto("tr", null, null, null);
    for (let j = 0; j < document.getElementById("cols").value; j++) {
      let td = crearObjeto("td", null, null, null);
      //establecer los eventos
      td.addEventListener("mouseover", entrarRaton);
      td.addEventListener("mouseout", salirRaton);
      td.addEventListener("click", fijarColor);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  capa.appendChild(table);
}

function entrarRaton() {
  color = "rgb(" + genAle() + "," + genAle() + "," + genAle() + ")";
  this.style.background = color;
}

function genAle() {
  return Math.round(Math.random() * 255);
}
function salirRaton() {
  this.style.background = null;
}

function fijarColor() {
  this.style.background = color;
  //quitar eventos para que no tengan funcionalidad
  this.removeEventListener("mouseover", entrarRaton);
  this.removeEventListener("mouseout", salirRaton);
  this.removeEventListener("click", fijarColor);
}
