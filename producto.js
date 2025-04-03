const producto=function(Id, Img, Name, Precio, Marca){
    this.Id=Id,
    this.Img=Img,
    this.Name=Name,
    this.Precio=Precio,
    this.Marca=Marca

    getPrecio()
    {
        return this.Precio
    }
};