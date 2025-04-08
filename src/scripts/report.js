// CONECTAR VENTA CON REPORTE

class Reporte {
    constructor(venta, fecha, hora, metodoPago) {
        this.precioFinal = venta.getPrecioFinal();
        this.cantidadProductos = venta.getCantidadProductos();
        this.fecha = fecha;
        this.hora = hora;
        this._metodoPago = metodoPago;
    }

    getMetodoPago() {
        return this._metodoPago;
    }

    setMetodoPago(nuevoMetodo) {
        this._metodoPago = nuevoMetodo;
    }
}
