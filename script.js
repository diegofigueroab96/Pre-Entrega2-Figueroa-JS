const productos = [
    {id: 1, nombre: "Camisa Nike", categoria: "ropa", categoriaID: 2, valor: 1000},
    {id: 2, nombre: "Zapatillas Nike", categoria: "calzado", categoriaID: 1,valor: 2000},
    {id: 3, nombre: "Zapatillas Puma", categoria: "calzado", categoriaID: 1,valor: 1500},
    {id: 4, nombre: "Camisa Polo", categoria: "ropa", categoriaID: 2,valor: 1200},
    {id: 5, nombre: "Reloj Casio", categoria: "accesorios", categoriaID: 3,valor: 800},
    {id: 6, nombre: "Gorro Nike", categoria: "accesorios", categoriaID: 3,valor: 500}
  ];
  
let carrito = [];

let lista = Number(prompt("Hola, bienvenido a nuestro negocio de moda.\nPor favor escribe el número de la opción que quieras:\n1. Calzado\n2. Ropa\n3. Accesorios\n4. Ver carrito\n5. Sacar del carrito\n6. Salir"));
while (lista !==6){
while (lista < 6){
if (lista < 4) {
let productosFiltrados = productos.filter (producto => producto.categoriaID === lista)
let mensaje = "Que producto quieres agregar al carrito? Ingresa el ID"
productosFiltrados.forEach (producto => {mensaje += `\n ID:${producto.id}-${producto.nombre}-$${producto.valor}`})
let elegirProducto = parseInt (prompt(mensaje))

let agregarAlCarrito = productosFiltrados.find (producto => producto.id === elegirProducto)

carrito.push(agregarAlCarrito)
}
else if (lista === 4) { let mensajeCarrito = "Estos son los productos que tienes en el carro:\n"
carrito.forEach (producto => {mensajeCarrito += `\n ${producto.nombre}-$${producto.valor}`})
alert(mensajeCarrito) 
}

else if(lista === 5) { let mensajeBorrar = "Que producto quiere eliminar del carrito? Escribe el ID"
carrito.forEach (producto => {mensajeBorrar += `\n ID: ${producto.id}-${producto.nombre}-$${producto.valor}`})
let eliminarDelCarrito = parseInt (prompt(mensajeBorrar))
let indiceProducto = carrito.findIndex((producto) => producto.id === eliminarDelCarrito);

  if (indiceProducto !== -1) {
    carrito.splice(indiceProducto, 1); 
    alert("Producto eliminado del carrito.");
  } else {
    alert("No se encontró ningún producto con ese ID en el carrito.");
  }
}

lista = Number (prompt("Por favor escribe el número de la opción que quieras:\n1. Calzado\n2. Ropa\n3. Accesorios\n4. Ver carrito\n5. Sacar del carrito\n6. Salir"))
}

if (lista === 6) {break}
alert("Esa opción no es valida")
lista = Number (prompt("Por favor escribe el número de la opción que quieras:\n1. Calzado\n2. Ropa\n3. Accesorios\n4. Ver carrito\n5. Sacar del carrito\n6. Salir"))
}
console.log(carrito)
alert ("Hasta luego, esperamos verte pronto")