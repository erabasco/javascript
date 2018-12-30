/** Mostrar a traves de una ventana con dimensiones aleatorias entre 200-500
 * que se pida una fecha con formato dd/mm/aaaa y que se compruebe que la fecha es correcta 
 * y muestre los días que faltan para esta navidad.
 */

 "use strict";
    var fechaString;
    var fechaSplit;
    var fechaNavidad= new Date("2018/12/24");
    var fechaDate;
    var valido=true;

    fechaString= prompt("Dame fecha formato dd/mm/aaaa");
    // divido array con dd mm y aaaa   
    fechaSplit= fechaString.split("/");
  
    // doy la vuelta a la fecha paa que quede con formato aaaa/mm/dd
    fechaString =fechaSplit[2]+"/"+fechaSplit[1]+"/"+fechaSplit[0];
    
    fechaDate = new Date(fechaString); //paso la cadena a objeto Date

    //si formato correcto
    if (fechaDate!="Invalid Date"){
        // comprobamos que los dias y meses son correctos.
        if (fechaSplit[2]!=fechaDate.getFullYear()){  //año
            valido=false;
        }
        if (fechaSplit[1]!=fechaDate.getMonth()+1){ // mes
            valido=false;
        }
        if (fechaSplit[0]!=fechaDate.getDate()){  // dia
            valido=false;
        }

    }
    if (valido){ // si la fecha tiene formato ok y controla días como febrero
        document.write("<br>Fecha buena, quedan para navidad: "+((fechaNavidad-fechaDate)/(1000*60*60*24)));
    }else{
        document.write("Error en la fecha");
    }