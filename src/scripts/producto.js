export class Producto {

    constructor (Img, Name, Precio, Marca) {
        this.Img=Img;
        this.Name=Name;
        this.Precio=Precio;
        this.Marca=Marca;
        };
    
    getPrecio() 
    {
        return this.Precio;
    };


    setPrecio(nuevoPrecio)
    {
        this.Precio = nuevoPrecio;
    };

    getName()
    {
        return this.Name;
    };

    setName(nuevoNombre)
    {
        this.Name = nuevoNombre;
    };

    getImg() 
    {
        return this.Img;
    };

    setImg(nuevaImg) 
    {
        this.Img = nuevaImg;
    };

    getMarca() 
    {
        return this.Marca;
    };

    setMarca(nuevaMarca) 
    {
        this.Marca = nuevaMarca;
    };

};