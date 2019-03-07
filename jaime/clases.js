{
    function Cliente(nombre, cif, direccion, telefono, email) {
        this.nombre = nombre;
        this.cif = cif;
        this.direccion = direccion;
        this.email = email;
        this.telefono = telefono;
    }

    function Linea(descripcionProducto, unidades, precio, iva) {
        this.descripcionProducto = descripcionProducto;
        this.unidades = unidades;
        this.precio = precio.toFixed(2);
        this.iva = iva;
        this.importe = ((precio * unidades) + ((precio * unidades) * iva / 100)).toFixed(2);
    }

    function Emisor(nombre, cif, direccion, telefono, email) {
        this.nombre = nombre;
        this.cif = cif;
        this.direccion = direccion;
        this.telefono = telefono;
        this.email = email;
    }

    function Factura(fecha, moneda, emisor, cliente, lineas, observaciones) {
        this.fecha = fecha;
        this.moneda = moneda;
        this.emisor = emisor;
        this.cliente = cliente;
        this.lineas = lineas;
        this.observaciones = observaciones;
        this.total = this.calculaTotal();
        this.id = this.uniqueID();
    }

    Factura.prototype.uniqueID = (function() {
        let id = 0; 
        return function() { return id++; };  
     })();

    Factura.prototype.calculaTotal = function () {
        let total = 0;
        this.lineas.forEach(element => {
            total += parseFloat(element.importe);
        });
        return total.toFixed(2);
    };
}