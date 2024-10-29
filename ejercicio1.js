/*
*Funcion que divida 2 numeros
Si no se puede realizar la division devolverá un error
*/

function divide(dividend, divider) {
    if (divider === 0) {
        throw new Error('Error al intentar dividir por 0')
    }
    return dividend / divider
}
try {
    console.log(divide(5, 10))
    console.log(divide(50, 0))
    console.log(divide(0, 0))
} catch (error) {
    console.error('Fallo al dividir')
}