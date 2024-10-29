// Dado un array de nombres const nombres =['Ana','Bea','Paula']
// y un array de numeros const ptos= [4,7,1]
// Crea una funcion que reciba como parametros los nombres y puntos
// y devuelva un nuevo arrray que contenfa un objeto con nombre y puntos
// ej:
/**
 * const nuevoArray= [
 * {nombre:'Ana' , ptos:'4'}
 * ]
 */

const nombres = ['Ana', 'Bea', 'Paula']
const ptos = [4, 7, 1]
function unir(nombres, ptos) {
    if (!nombres || !ptos || nombres?.length !== ptos?.length) return []

    return nombres?.map((nombre, index) => ({ nombre, ptos: ptos[index] }))
}
console.log(unir())
