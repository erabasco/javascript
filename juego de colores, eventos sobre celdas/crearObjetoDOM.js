function crearObjeto(objeto, tipo, clave, texto) {
    var nodo = document.createElement(objeto);
    if (tipo != null) {
        nodo.setAttribute("type", tipo)
    }
    nodo.setAttribute("id", clave);
    if (texto != null) {
        nodo.setAttribute("value", texto);
    }
   
return nodo;
}
