// Dada una lista de periféricos..
// Añade 'Raton y teclado' al final de la lista
// Elimina la 'Impresora de la lista

let periferics = ['Impresora', 'Escaner', 'Tableta']
console.log(periferics)
periferics.push('Raton', 'Teclado')
console.log(periferics)

const newList = periferics.filter(p => p !== 'Impresora')
console.log(newList)

