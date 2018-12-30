/** mostrar la fecha con formato: Hoy es jueves, 13 de Diciembre de 2018 y son las 9:3 horas
 * en una ventana creada con un alto y ancho aleatorio entre 200 y 500*/
"use strict";
var fecha = new Date();


function abrir() {
    var dimension = Math.round(Math.random() * (500 - 200) + 200);
    var ventana;

    ventana = open("", "Ventana", "height=" + dimension + ",width=" + dimension);
    ventana.document.write("Hoy es "+diasemana()+", "+fecha.getDate()+" de "+mes()+ " de "+fecha.getFullYear()+" y son las "+fecha.getHours()+":"+fecha.getMinutes()+"horas");
    if (ventana.opener){
        ventana.document.write("la ventana esta abierta");
    }
}

function diasemana(){
    let dia = fecha.getDay();
    switch (dia) {
        case 0:
            return "Domingo"
            break;
        case 1:
            return "Lunes"
            break;
        case 2:
            return "Martes"
            break;
        case 3:
            return "Miercoles"
            break;
        case 4:
            return "Jueves"
            break;
        case 5:
            return "Viernes"
            break;
        case 6:
            return "Sabado"
            break;
        default:
            break;
    }
}

function mes(){
    let mes = fecha.getMonth();
    switch (mes) {
        case 0:
            return "Enero"
            break;
        case 1:
            return "Febrero"
            break;
        case 2:
            return "Marzo"
            break;
        case 3:
            return "Abril"
            break;
        case 4:
            return "Mayo"
            break;
        case 5:
            return "Junio"
            break;
        case 6:
            return "Julio"
            break;
        case 7:
            return "Agosto"
            break;
        case 8:
            return "Septiembre"
            break;
        case 9:
            return "Octubre"
            break;
        case 10:
            return "Noviembre"
            break;
        case 11:
            return "Diciembre"
            break;



        default:
            break;
    }
}