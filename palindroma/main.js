/** Comprobar si una frase es palindroma */
"use strict";
var frase = prompt("Introduce una frase");
var frase1="";
var frase2="";

frase1 = frase.replace(/ /g,"");

for (let i= (frase1.length-1); i>=0; i--){
    //frase2 += frase.charAt(i);   
    frase2 += frase1[i];   
}

if (frase1==frase2){
    document.write("Es palindroma");
}else{
    document.write("NOO Es palindroma");
}
document.write("La frase es: "+frase);
document.write("La frase vuelta es: "+frase2);
