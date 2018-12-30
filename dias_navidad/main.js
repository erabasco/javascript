/* calcular el nº de dias que quedan antes de navidad a partir de una fecha introducida
El formato de la fecha será dd/mm/yyyy 

/Podemos crear el objeto Date con todos los parámetros
var fecha = new Date(año,mes,dia,hora,minutos,segundos);
//O con algunos parámetros
var fecha = new Date(año,mes,dia,hora);
*/
"use strict";
var fechaString, fechaDate;
var fechaSplit; // para convertirlo en un array
var fechaVuelta; // fecha con formato correcto
var fechaNavidad = new Date("2018/12/25"); // Navidad este año

fechaString = prompt("Introduce una fecha con formato dd/mm/yyyy");
// para comprobar si una fecha es correcta debe tener este formato: Date(año,mes,dia,hora,minutos,segundos)
// por lo que voy a dividir la fecha introducida

fechaSplit = fechaString.split("/"); // divide cadena en array de subcadenas la usaremos para darle la vuelta
fechaVuelta = fechaSplit[2] + "/" + fechaSplit[1] + "/" + fechaSplit[0]; //queda formato: yyyy/mmm/dd

fechaDate = new Date(fechaVuelta);


if (fechaDate == "Invalid Date") {
    fechaString = prompt("Error: Introduce una fecha con formato dd/mm/yyyy");
    //fechaDate = new Date(fechaString);
} else {
    // comprobamos que los días, mes y año son correctos
    if (fechaSplit[2] == fechaDate.getFullYear()) {
        document.write("año bien");
    }else{
        document.write("No año");
        document.write(fechaSplit[0]);
    }
    if (parseInt(fechaSplit[1]-1) == fechaDate.getMonth()) {
        document.write("mes correcto");
    }else{
        document.write("No mes");
        document.write(parseInt(fechaSplit[1]-1)+"<br>");
        document.write(fechaDate.getMonth());
    }
    if (parseInt(fechaSplit[0]) == fechaDate.getDate()) {
        document.write("dia correcto");
    }else{
        document.write("No dia");
        document.write(parseInt(fechaSplit[0])+"<br>");
        document.write(fechaDate.getDate());
    }
    var fechaHoy = new Date();
    document.write(fechaHoy);

    document.write("<br>Diferencia fechas "+((fechaNavidad-fechaDate)/(1000*60*60*24)));
    // como la resta devuelve milisegundos lo pasamos a dias

}

