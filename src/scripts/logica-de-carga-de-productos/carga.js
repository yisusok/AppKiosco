import { Producto } from "../producto.js";
import { Inventario } from "../inventario.js";

document.addEventListener("DOMContentLoaded", () => {
    const productoForm= document.getElementById("Formulario-p")
    const productoImg= document.getElementById("imagen")
    const productoNombre= document.getElementById("nombre")
    const productoPrecio= document.getElementById("precio")
    const productoMarca= document.getElementById("marca")




    productoForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        
        let nuevoProducto= new Producto(productoImg.value, productoNombre.value, productoPrecio.value, productoMarca.value)
        
        let nuevoInventario= new Inventario
        nuevoInventario.agregarProducto(nuevoProducto)

        console.log(nuevoInventario.productos)

        

        productoForm.reset()
    })
})
