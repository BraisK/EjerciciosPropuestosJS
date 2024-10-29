const productos = [
    { nombre: 'p1', precio: 100, caducado: false },
    { nombre: 'p2', precio: 150, caducado: false },
    { nombre: 'p3', precio: 90, caducado: true },
    { nombre: 'p4', precio: 10, caducado: true }
]

// Muestra los productos caducados (filter)
const caducados = productos.filter(p => p.caducado === true)
console.log(caducados)
// Muestra el total del precio de los productos caducados(reduce)
const totalPrecioCaducados = caducados.reduce((acum, p) => acum + p.precio, 0)
console.log(totalPrecioCaducados)

// Muestra el precio de cada producto aplicando un descuento del 10% (map)
//          - Muestra nombre y precioConDescuento
const productoConDto = productos
    .map(p => ({ nombre: p.nombre, precioDto: p.precio * 0.90 }))
console.log(productoConDto)


// Muestra el precio con el descuento del 10% solo del producto llamado p3 (find o filter)
const productoP3 = productoConDto
    .find(p => p.nombre === 'p3')?.precioDto ?? 'El producto no existe'
console.log(productoP3)

// Solo usa arrowFunctions y orden superior