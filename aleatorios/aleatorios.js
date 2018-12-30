/* guardar 100 numeros aleatorios del 1 al 200 en un array y 
colocar los pares al principio y los impares al final.
   numero = parseInt(Math.round(Math.random() * (49 - 1) + 1));
*/

aAleatorios = new Array();

aAleatorios[0]= parseInt(Math.round(Math.random() * (200 - 1) + 1));
numero = parseInt(Math.round(Math.random() * (200 - 1) + 1));

for (let i = 0; i < 100; i++) {
    while ((aAleatorios.indexOf(parseInt(numero)) > -1)) {
        numero = parseInt(Math.round(Math.random() * (200 - 1) + 1));
        
    }
    if (numero%2==0){
        aAleatorios.push(numero); // pone al final
    }else{
        aAleatorios.unshift(numero); // pone al pricipio
    }
    aAleatorios[i]=numero;
}

//Mostrar los números
for (let i = 0; i < 100; i++) {
    document.write(aAleatorios[i]+"<br>");
}