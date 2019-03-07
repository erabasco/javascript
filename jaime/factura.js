{
    // Datos empresa
    let nombreEmpresa, cifEmpresa, direccionEmpresa, emailEmpresa, telefonoEmpresa, guardarDatosEmpresa, limpiarDatosEmpresa;

    // Datos cliente
    let nombreCliente, cifCliente, direccionCliente, emailCliente, telefonoCliente, guardarDatosCliente, limpiarDatosCliente;

    // Datos productos
    let inputNuevoProducto, inputNuevoUnidades, inputNuevoPrecio, inputNuevoIVA, buttonNuevaLinea, tablaLineas;

    let fecha, moneda, observaciones;

    let lineas = [];

    function init() {
        nombreEmpresa = document.getElementById('nombreEmpresa');
        cifEmpresa = document.getElementById('cifEmpresa');
        direccionEmpresa = document.getElementById('direccionEmpresa');
        emailEmpresa = document.getElementById('emailEmpresa');
        telefonoEmpresa = document.getElementById('telefonoEmpresa');
        guardarDatosEmpresa = document.getElementById('guardarDatosEmpresa');
        limpiarDatosEmpresa = document.getElementById('limpiarDatosEmpresa');

        nombreCliente = document.getElementById('nombreCliente');
        cifCliente = document.getElementById('cifCliente');
        direccionCliente = document.getElementById('direccionCliente');
        emailCliente = document.getElementById('emailCliente');
        telefonoCliente = document.getElementById('telefonoCliente');
        guardarDatosCliente = document.getElementById('guardarDatosCliente');
        limpiarDatosCliente = document.getElementById('limpiarDatosCliente');

        inputNuevoProducto = document.getElementById('nuevoProducto');
        inputNuevoUnidades = document.getElementById('nuevoUnidades');
        inputNuevoPrecio = document.getElementById('nuevoPrecio');
        inputNuevoIVA = document.getElementById('nuevoIVA');
        buttonNuevaLinea = document.getElementById('nuevaLinea');
        tablaLineas = document.getElementById('tablaLineas');

        buttonNuevaLinea.addEventListener('click', nuevaLinea);


        // Fecha por defecto
        fecha = document.getElementById('fecha');
        fecha.valueAsDate = new Date();

        moneda = document.getElementById('moneda');
        observaciones = document.getElementById('observaciones');


        document.getElementById('crearFactura').addEventListener('click', crearFactura);

    }

    function nuevaLinea() {
        let descripcionProducto = inputNuevoProducto.value;
        let unidades = parseInt(inputNuevoUnidades.value);
        let precio = parseFloat(inputNuevoPrecio.value);
        let IVA = parseInt(inputNuevoIVA.value);

        let linea = new Linea(descripcionProducto, unidades, precio, IVA);

        lineas.push(linea);
        aniadirLinea(linea);

        descripcionProducto.value = '';
        unidades.value = '';
        precio.value = '';
        IVA.value = '';
        // descripcionProducto.value = '';
    }

    function aniadirLinea(linea) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');

        let aux = td.cloneNode();
        aux.innerText = linea.descripcionProducto;
        tr.appendChild(aux);

        aux = td.cloneNode();
        aux.innerText = linea.unidades;
        tr.appendChild(aux);

        aux = td.cloneNode();
        aux.innerText = linea.precio + '€';
        tr.appendChild(aux);

        aux = td.cloneNode();
        aux.innerText = linea.iva + '%';
        tr.appendChild(aux);

        aux = td.cloneNode();
        aux.innerText = linea.importe + '€';
        tr.appendChild(aux);

        tablaLineas.appendChild(tr);
    }

    function crearFactura() {
        let emisor = new Emisor(nombreEmpresa.value, cifEmpresa.value, direccionEmpresa.value, telefonoEmpresa.value, emailEmpresa.value);
        let cliente = new Cliente(nombreCliente.value, cifCliente.value, direccionCliente.value, telefonoCliente.value, emailCliente.value);

        let factura = new Factura(fecha.value, moneda.value, emisor, cliente, lineas, observaciones.value);
        console.log(factura);


    }


    window.addEventListener('load', init);
}