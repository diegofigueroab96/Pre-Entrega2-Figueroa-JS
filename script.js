const productos = [
    {id: 1, nombre: "Camisa Nike", categoria: "ropa", valor: 1000},
    {id: 2, nombre: "Zapatillas Nike", categoria: "calzado", valor: 2000},
    {id: 3, nombre: "Zapatillas Puma", categoria: "calzado", valor: 1500},
    {id: 4, nombre: "Camisa Polo", categoria: "ropa", valor: 1200},
    {id: 5, nombre: "Reloj Casio", categoria: "accesorios", valor: 800},
    {id: 6, nombre: "Gorro Nike", categoria: "accesorios", valor: 500}
  ];
  
  let carrito = [];
  

let lista = Number(prompt("Hola, bienvenido a nuestro negocio de moda.\nPor favor escribe el número de la opción que quieras:\n1. Calzado\n2. Ropa\n3. Accesorios\n4. Ver carrito\n5. Sacar del carrito\n6. Salir"));
while (lista !==6) {


if (lista == 1) { 
    let calzadosProduct = productos.filter (producto => producto.categoria === "calzado");
 let mensaje = "Cual de este calzado quieres agregar al carrito? Escribe solo la marca.\n";
calzadosProduct.forEach (producto => {mensaje += `\n-${producto.nombre}--${producto.valor}$\n`});
let agregarAlCarrito = prompt(mensaje);
 if (agregarAlCarrito === "nike") { 
  let zapatillasNike =calzadosProduct[0];
carrito.push(zapatillasNike.nombre + "-" +zapatillasNike.valor + "$\n")
alert("Las zapatillas Nike han sido agregadas al carrito");} 
else if (agregarAlCarrito === "puma") {
  let zapatillasPuma =calzadosProduct[1];
  carrito.push(zapatillasPuma.nombre + "-" +zapatillasPuma.valor + "$\n")
alert("Las zapatillas Puma han sido agregadas al carrito");}
}


else if (lista == 2) 
{let ropaProduct = productos.filter (producto => producto.categoria === "ropa");
let mensaje = "Cual de esta ropa quieres agregar al carrito? Escribe solo la marca.\n";
ropaProduct.forEach (producto => {mensaje += `\n-${producto.nombre}--${producto.valor}$\n`});
let agregarAlCarrito = prompt(mensaje);
if (agregarAlCarrito === "nike") {
let camisaNike = ropaProduct[0]
carrito.push(camisaNike.nombre + "-" +camisaNike.valor + "$\n");
alert("La camisa Nike ha sido agregado al carrito")}
else if (agregarAlCarrito === "polo") {
let camisaPolo = ropaProduct[1]
carrito.push(camisaPolo.nombre +"-"+ camisaPolo.valor + "$\n")
alert("La camisa Polo se ha agregado al carrito")}
}

else if (lista == 3) 
{let accesoriosProduct = productos.filter (producto => producto.categoria === "accesorios");
let mensaje = "Cual de estos accesorios quieres agregar al carrito? Escribe solo la marca.\n";
accesoriosProduct.forEach (producto => {mensaje += `\n-${producto.nombre}--${producto.valor}$\n`});
let agregarAlCarrito = prompt(mensaje);
if (agregarAlCarrito === "casio") {
let relojCasio = accesoriosProduct[0];
carrito.push(relojCasio.nombre +"-"+ relojCasio.valor + "$\n");
alert("El reloj Casio ha sido agregado al carrito");}
else if (agregarAlCarrito === "nike"){
let gorroNike = accesoriosProduct[1];
carrito.push(gorroNike.nombre + "-" + gorroNike.valor + "$\n")
alert("El gorro Nike ha sido agregado al carrito")}
}

else if (lista==4) { 
  let mensaje = "Productos en el carrito:\n"
alert (mensaje + carrito)
}

else if (lista==5) {

  let salida = ""

  for (let i = 0; i < carrito.length; i++) {
    salida += `-${i}. ${carrito[i]}\n`
    }

let eliminarProducto = prompt("Escribe el numero del producto que quieres eliminar:\n" + "\n" +salida)

carrito.splice(eliminarProducto, 1)

alert("El producto ha sido eliminado")

}

else {alert("Esa opción no es valida")}


lista = Number(prompt("Por favor, escribe el número de la opción que desees:\n1. Calzado\n2. Ropa\n3. Accesorios\n4. Ver carrito\n5. Sacar del carrito\n6. Salir"))
}

alert("Gracias por venir a nuestra tienda, hasta luego.")

