inventario.agregarProducto(nuevoProducto);
console.log(inventario.productos);

const productoDiv = document.createElement("div");
productoDiv.classList.add(`producto-${contador}`);

productoDiv.innerHTML = `
    <img src="${productoImg.value}" alt="${productoNombre.value}" width="100">
    <h3>${productoNombre.value}</h3>
    <p>Precio: $${productoPrecio.value}</p>
    <p>Marca: ${productoMarca.value}</p>
`;

contenedor.appendChild(productoDiv);
contador++;