/**
 * Convierte a una funcion de tipo flecha
 * y mejora la funcion en la medida de lo posible
 */

/* function firstLetter(text) {
    return text[0]
} */

const firstLetter = (text) => {
    if (typeof text !== 'string' || text.length === 0) throw new Error('No es un String')
    return text.charAt(0)
}


try {
    console.log(firstLetter('hola'))
    console.log(firstLetter(''))
    console.log(firstLetter(null))
    console.log(firstLetter(undefined))
    const nombre = firstLetter('Angel') + firstLetter('Gonzalez') + firstLetter()
    console.log(nombre)

} catch (e) {

}

