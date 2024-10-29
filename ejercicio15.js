/**
 * Muestra por pantalla el valor de los puntos del jugador,
 * ante cualquier problema mostrar 'error' por consola
 * ej :  no existe el jugador, not tenga ptos
 */
const jugador = {
    nombre: 'Juan',
    ptos: 3
}
const jugador2 = {
    nombre: 'Juan'
}
const jugador3 = {

}
const jugador4 = {
    nombre: '    ',
    ptos: 5

}
function showPoints(jugador) {
    // || evalua si lo de la izq es falsy
    // ?? evalua si lo de la izq es null o undefined
    if (typeof jugador?.nombre !== 'string' || jugador?.nombre.trim().length <= 0) return 'error'
    if (typeof jugador?.ptos !== 'number') return 'error'
    return jugador?.ptos ?? 'error'
}

console.log(showPoints(jugador))
console.log(showPoints(jugador2))
console.log(showPoints(jugador3))
console.log(showPoints(jugador4))