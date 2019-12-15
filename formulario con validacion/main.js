//  Insertar un reCaptcha en el formulario. --> Hecho en index.html

"use strict";

var nombreApe, genero, email, provincia;
var fechaReserva, fechaSalida, tlf;
var errorFechaReserva, errorEmail, errorFechaSalida, errorTelefono, intentos;
var error = ""; //variable para guardar los errores
var enviar = true; // variable que cambiará a false si alguna validación fallara.

window.addEventListener("load", function () {
    //establecemos los objetos a variables
    nombreApe = document.forms[0].elements[0]; //formulario 0 elemento 0 dentro del formulario
    genero = document.getElementsByName("genero");
    email = document.getElementById("email");
    provincia = document.getElementById("provincia");
    fechaReserva = document.getElementById("fechaReserva");
    fechaSalida = document.getElementById("fechaSalida");
    tlf = document.getElementById('tlfno');
    errorEmail = document.getElementById("errorEmail");
    errorFechaReserva = document.getElementById("errorfechaReserva");
    errorFechaSalida = document.getElementById("errorfechaSalida");
    errorTelefono = document.getElementById("errorTelefono");
    intentos = document.getElementById("intentos");


    //ESTABLECEMOS LOS EVENTOS

    // 3. y 9. Almacenar en una cookie el nº de intentos, comprobando valores son correctos...
    intentos.innerHTML = "Nº de intentos en el envío de datos: " + mostrarIntentos();

    // 10.     Pedir confirmación de envío del formulario si todos los datos son correctos.
    document.forms[0].addEventListener('submit', validarFormulario);


    // 4. Nombre y Apellidos al perder el foco convertir a mayúsculas.
    nombreApe.addEventListener('blur', function () {
        this.value = this.value.toUpperCase();
        document.getElementById("errorNomApe").innerHTML = "";
    });


    /* 5. Validar con expresión regular el e-mail, Si error mostrar mensaje y no permitir que el campo pierda el foco
          ^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$ */
    email.addEventListener('blur', function () {
        let patronEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
        if (!patronEmail.test(email.value)) {
            errorEmail.innerHTML = "Formato de correo incorrecto";
            email.focus();
            enviar = false;
        } else {
            errorEmail.innerHTML = "";
        }
    });

    // 6. Validamos el telefono con metodo keypress (solo números y espacios en blanco) 
    //    Y al perder el foco comprobamos que es correcto el formato 999 99 99 99
    tlf.addEventListener('keypress', validarNum);
    tlf.addEventListener('blur', function () {
        let patronTlf = /^([0-9]{3})(\s)\d{2}(\s)\d{2}(\s)\d{2}$/;
        errorTelefono.innerHTML = ""; // inicializamos mensaje de error
        if (!patronTlf.test(tlf.value)) {
            errorTelefono.innerHTML = "Formato incorrecto 999 99 99 99";
            tlf.focus();
            enviar = false;
        }
    });

    // 7. y 8. Validamos las 2 fechas tanto con keypress como al perder el foco
    fechaReserva.addEventListener("keypress", validarValoresFecha);
    fechaReserva.addEventListener("blur", validarFechaReserva);

    fechaSalida.addEventListener("keypress", validarValoresFecha);
    fechaSalida.addEventListener("blur", validarFechaSalida);



});
/* Funcion que permite introducir numeros y barra invertida junto con caracteres especiales de desplazamiento o
  control como desplazarse borrar etc ...
  Del 0 al 31 serían caracteres de control para el Mac, sino no me funciona     Números del 48 al 57  caracter /  47
*/
function validarValoresFecha(e) {
    if (this.value.length == 2 || this.value.length == 5) {
        if (e.which != 47) {
            e.preventDefault(); //invalida la aparación del caracter si no es espacio blanco
        }
    }else if (this.value.length > 9) {
        e.preventDefault(); //para controlar la longitud
    }
   else if ((e.which < 48 || e.which > 57) && (e.which < 0 || e.which > 31)) {
        e.preventDefault(); //invalida la aparación del caracter si no es númerico o barra 
    }
  
}

/* Funcion que permite introducir numeros y espacios en blanco junto con caracteres especiales de desplazamiento o
  control como desplazarse borrar etc ...
  Del 0 al 31 serían caracteres de control (MAC)     El 32 espacios en blanco        Número del 48 al 57 
*/
function validarNum(e) {
    // si estamos en la posición 3, 6 o 9, lleva un espacio en blanco
    if (this.value.length == 3 || this.value.length == 6 || this.value.length == 9) {
        if (e.which != 32) {
            e.preventDefault(); //invalida la aparación del caracter si no es espacio blanco
        }
    } else
        if ((e.which < 48 || e.which > 57) && (e.which < 0 || e.which > 30)) { //which indica cual es el caracter ASCII 
            e.preventDefault(); //invalida la aparación del caracter si no es númerico
        }

}


/*

Validar el campo Fecha salida utilizando el método keypress (no se mostrarán nada más que números 
y '/'. Debe cumplir el formato: dd/mm/aaaa. Se pide validar que sea una fecha de calendario correcta 
antes de perder el foco. Si se produce algún error mostrar el mensaje en el span y poner el foco en el 
campo Fecha salida. */

/*Validar el campo Fecha llegada utilizando una expresión regular. Debe cumplir el formato: dd/mm/aaaa.
  Esta función nos va a servir para validar el formato de cualquier fecha*/
function validarFecha(fecha) {

    /* Explicación patrón:
    dias: [0][1-9]     - Si empieza por 0 el siguiente valor tendrá que ser desde 1 a 9, no puede haber día: 00
          [1-2][0-9]   - Si primer dígito es 1 ó 2, siguiente puede ser desde el 0-9, 10,20 ... 29 ..
          |3[0-1]      - Si primer dígito es 3, el siguiente solo puede ser 0-1. 30 ó 31

    meses: [0][1-9] - Si primer digito empieza por 0, siguientes 1-2, 01-09
           [1][0-2] - Si primer digito empieza por 1, siguientes 0-2, 10-11-12

    años:  20\d{2}  - Podrá introducir 4 dígitos, limitaremos la fecha desde 20.., 
                      los 2 primeros dígitos tienen que ser 20 

    Carácter separador: (\/)
    */

    let patronFecha = /^([0][1-9]|[1-2][0-9]|3[0-1])(\/)([0][1-9]|[1][0-2])(\/)(20\d{2})$/;
    error = "";
    if (patronFecha.test(fecha.value)) {
        //si el formato de la fecha es correcto compruebo que tb sea una fecha correcta de calendario
        if (validarFechaCalendario(fecha.value)) {
            return true;
        } else {
            //pasamos mensaje de error
            error = "<br>Fecha calendario incorrecta!! ";
            enviar = false;
            return false;
        }
    } else {
        //pasamos mensaje de error
        error = "<br>Formato de fecha incorrecto!!, debe ser dd/mm/aaaa ";
        enviar = false;
        return false;
    }


}
/* FuncionValidar que sea una fecha de calendario correcta antes de perder el foco Si se produce algún 
error mostrar el mensaje en el span y poner el foco en el campo Fecha llegada. */

function validarFechaReserva() {
    //inicializo el valor de error a 0 por si viene de otro error en la misma linea
    errorFechaReserva.innerHTML = "";

    if (!validarFecha(fechaReserva)) {
        errorFechaReserva.innerHTML += error;
        enviar = false;
        fechaReserva.focus();
    }
}


function validarFechaSalida() {
    //inicializo el valor de error a 0 por si viene de otro error en la misma linea
    errorFechaSalida.innerHTML = "";

    if (!validarFecha(fechaSalida)) {
        errorFechaSalida.innerHTML += error;
        enviar = false;
        fechaSalida.focus();
    }
}

function validarFechaCalendario(fechaString) {

    var fechaSplit;
    var fechaDate;
    var valida = true; //fecha valida a true


    // divido la fecha que recibo en un array con dd mm y aaaa   
    fechaSplit = fechaString.split("/");

    // doy la vuelta a la fecha paa que quede con formato aaaa/mm/dd
    fechaString = fechaSplit[2] + "/" + fechaSplit[1] + "/" + fechaSplit[0];

    fechaDate = new Date(fechaString); //paso la cadena con formato aaaa/mm/dd a objeto Date

    // comprobamos que los dias y meses son correctos.
    if (fechaSplit[2] != fechaDate.getFullYear()) {  //año
        valida = false;
    }
    if (fechaSplit[1] != fechaDate.getMonth() + 1) { // mes
        valida = false;
    }
    if (fechaSplit[0] != fechaDate.getDate()) {  // dia
        valida = false;
    }


    if (valida) { // si la fecha segun calendario es correcta y controla días como febrero
        return true;
    } else {
        enviar = false;
        return false;
    }
}


/* Almacenar en una cookie el número de intentos de envío del formulario que se van produciendo y 
      mostrar un mensaje en el contenedor "Nº de intentos en el envío de datos:  X". 
      Es decir, cada vez que se pulsa el botón de enviar y los datos son correctos, 
      tendrá que incrementar el valor de la cookie en 1 y mostrar su contenido en el div antes mencionado. 
      Nota: para poder actualizar el contenido de un contenedor o div, la propiedad ha modificar para ese 
      objeto es innerHTML.

    Antes de enviar los datos se comprobará que todos los datos son requeridos, excepto observaciones. 
    En caso contrario se mostrará el texto de error en la etiqueta span correspondiente.
    Pedir confirmación de envío del formulario si todos los datos son correctos.  
  */
function validarFormulario(e) {
    // comprobamos que todos los valores son requeridos y que no ha habido ningún error.
    error = " <b>*Campo requerido</b>";
    let check = false;  // para el campo genero
    enviar=true;


    //nombre
    if (nombreApe.value == "") {
        document.getElementById('errorNomApe').innerHTML = error;
        enviar = false;
    } else {
        document.getElementById('errorNomApe').innerHTML = "";
    }

    //genero: recorrer todos los elementos del array
    for (let ele of genero) {
        if (ele.checked == true) {
            check = true;
        }
    }
    if (!check) {
        document.getElementById("errorGenero").innerHTML = error;
        enviar = false;
    } else {
        document.getElementById('errorGenero').innerHTML = "";
    }

    //email
    if (email.value == "") {
        document.getElementById("errorEmail").innerHTML = error;
        enviar = false;
    } else {
        document.getElementById('errorEmail').innerHTML = "";
    }

    //telefono
    if (tlf.value == "") {
        document.getElementById("errorTelefono").innerHTML = error;
        enviar = false;
    }else {
        document.getElementById('errorTelefono').innerHTML = "";
    }

    //provincia
    if (provincia.selectedIndex == 0) {
        document.getElementById("errorProvincia").innerHTML = error;
        enviar = false;
    }else {
        document.getElementById('errorProvincia').innerHTML = "";
    }

    //fecha reserva
    if (fechaReserva.value == "") {
        document.getElementById("errorfechaReserva").innerHTML = error;
        enviar = false;
    }else {
        document.getElementById('errorfechaReserva').innerHTML = "";
    }

    //fecha salida
    if (fechaSalida.value == "") {
        document.getElementById("errorfechaSalida").innerHTML = error;
        enviar = false;
    }else {
        document.getElementById('errorfechaSalida').innerHTML = "";
    }

    //reCaptcha
    if (grecaptcha.getResponse() == "") {
        document.getElementById("errorreCaptcha").innerHTML = error;
        enviar = false;
    }else {
        document.getElementById('errorreCaptcha').innerHTML = "";
    }


    // si no ha habido ningún error de validación podemos sumar un nuevo intento a la cookie
    // 10. Pedir confirmación de envío del formulario si todos los datos son correctos.  
    if (enviar && confirm("Todos los datos son correctos ¿Desea enviar el formulario?")) {
        incrementaVisitas();    
    }
    else {
        e.preventDefault();
    }
}

function incrementaVisitas() {
    // si existe rescatamos el valor y le sumamos 1
    if (document.cookie != "") {

        let aCookies = document.cookie.split("; ");
        for (let ele of aCookies) {
            let aDatos = ele.split("=");
            if (aDatos[0] == "contador") {
                //contador = parseInt(parseInt(aDatos[1]) + 1);
                document.cookie = "contador=" + parseInt(parseInt(aDatos[1]) + 1);
            }
        }
    } else {
        // si la cookie no existe la creamos con valor = 1,
        document.cookie = "contador=1";
    }
}

function mostrarIntentos() {
    let contador = 0;
    let aCookies = document.cookie.split("; ");
    for (let ele of aCookies) {
        let aDatos = ele.split("=");
        if (aDatos[0] == "contador") {
            contador = parseInt(parseInt(aDatos[1]));
        }
    }
    return contador;
}