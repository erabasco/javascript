"use strict";
var importe = 0;
var billeteEntregado;
var cincuenta=0;
var veinte=0;
var diez=0;
var cinco=0;
var uno=0;
var vuelta=0;


function generaImporte(){
    importe = parseInt(Math.round(Math.random()*(500-1)+1));

    billeteEntregado = pedirNumero("Importe a pagar="+importe+ "\nImporte que va a entregar");
}

function calcularDevolucion(){
    vuelta = billeteEntregado-importe;
    document.write("<br>Importe a pagar: "+importe);
    document.write("<br>Importe que entrega el cliente: "+billeteEntregado);
    document.write("<br>Devolución: "+vuelta);
    while (vuelta>50){
        cincuenta++;
        vuelta -=50;
    }
    while (vuelta>20){
        veinte++;
        vuelta -=20;
    }
    while (vuelta>10){
        diez++;
        vuelta -=10;
    }
    while (vuelta>5){
        cinco++;
        vuelta -=5;
    }
    while (vuelta>=1){
        uno++;
        vuelta -=1;
    }
   
    document.write("<br>Billetes de 50 = "+cincuenta);
    document.write("<br>Billetes de 20 = "+veinte);
    document.write("<br>Billetes de 10 = "+diez);
    document.write("<br>Billetes de 5 = "+cinco);
    document.write("<br>Billetes de 1 = "+uno);

}


function pedirNumero(cadena){
    let numero = prompt(cadena);
    if(isNaN(numero) && numero>importe){
        document.write("Error debe ser un nº o mayor a al importe a pagar \n"+cadena);
        numero = prompt(cadena);
    }
    return parseInt(numero);
}

generaImporte();
calcularDevolucion();
