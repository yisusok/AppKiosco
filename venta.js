const Venta=function(Productos, agregarProductos, PrecioFinal){
    this.Productos=[];
    this.agregarProductos= function(producto)
    {
        this.productos.push(producto)
    };
    this.PrecioFinal=getPrecioFinal

    getPrecioFinal(productos)
    {   var total=0
        for(let j=0; j<this.Productos.length;j++ ) {
        total+=this.Productos[i].getPrecio()
        }
    return total
    }
}