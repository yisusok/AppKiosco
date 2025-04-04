// REPASAR Y CORREGIR

class Inventario {
    constructor() {
        this.productos = []; 
    }

    agregarProducto(producto) {
        this.productos.push({ producto, cantidad: 1 });
    }

    agregarCantidad(nombre, cantidad) {
        const item = this.productos.find(p => p.producto.Name === nombre);
        if (item) {
            item.cantidad += cantidad;
        }
    }

    quitarCantidad(nombre, cantidad) {
        const item = this.productos.find(p => p.producto.Name === nombre);
        if (item) {
            item.cantidad = Math.max(0, item.cantidad - cantidad);
        }
    }

    eliminarProducto(nombre) {
        this.productos = this.productos.filter(p => p.producto.Name !== nombre);
    }
}
