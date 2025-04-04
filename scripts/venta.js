const Venta=function(Productos, agregarProductos, PrecioFinal){
    this.Productos=[];
    agregarProductos(producto)
    {
        this.productos.push(producto)
    };

    getPrecioFinal(productos)
    {   var total=0
        for(let j=0; j<this.Productos.length;j++ ) {
        total+=this.Productos[i].getPrecio()
        }
    return total
    }

    getCantidadProductos() 
    {
        return this.Productos.length;
    }
}