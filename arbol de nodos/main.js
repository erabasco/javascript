/**
 * Mostrar todo el arbol de nodos
 */

"use strict"
window.addEventListener("load", function () {
    var principal = document.documentElement;
    mostrarHijos(principal);
});


function mostrarHijos(nodo) {
    // recorremos la colección de nodos
    for (let hijo of nodo.childNodes) {
        // comprobamos que no sea un nodo raro de los #text
        if (hijo.nodeName != "#text") {
            document.write(`<br>Tipo: ${hijo.nodeType} ${hijo.nodeName}: `);
            // comprobamos a su vez tiene hijos
            if (hijo.hasChildNodes()) {
                // si tiene hijos volvemos a recorrer ese nodo
                mostrarHijos(hijo);
            } else {
                // si no es nodo que muestre el hijo
                document.write(hijo.nodeValue+"<br>");
            }
        }
    }
}
