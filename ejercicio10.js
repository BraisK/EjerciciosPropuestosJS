/**
 * const nuevoArray =[
 *  { nombre: 'Juan', nota: [2,4,6] },
    { nombre: 'Ana', nota: [5,5,5] },
    { nombre: 'Pedro', nota: [3,6,8] }
    ]
 */
// Funcion de acepte comom parametro un array de alumnos (de nombres y notas)
// y devuelve un nuevo array con nombres y medias
/**
 * const nuevoArray = [
 * { nombre: 'Juan', media: 4 },
 * { nombre: 'Ana', media: 5 },
 * { nombre: 'Pedro', media: 5.66 }]
 */
const nuevoArray = [
    { nombre: 'Juan', notas: [2, 4, 6] },
    { nombre: 'Ana', notas: [5, 5, 5] },
    { nombre: 'Pedro', notas: [3, 6, 8] }
]
function calculadorMedia(alumnos) {
    return alumnos.map(({ nombre, notas }) =>
    ({
        nombre,
        media: notas.reduce((acum, nota) => acum + nota, 0) / notas.length
    })
    )
}

const datosConMedia = calculadorMedia(nuevoArray)
console.log(datosConMedia.map((a) => a.media))
