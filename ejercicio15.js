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
function showPoints(jugador) {
    if (jugador?.ptos) return console.log(jugador.ptos)
    return console.error('error')


}

showPoints(jugador)
showPoints(jugador2)
showPoints(jugador3)