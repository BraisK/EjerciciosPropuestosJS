// Dada una lista de alumnos
// Muestra por pantalla la suma de todos las notas solo de los aprobados
// Muestra tambien el array por consola pero de forma ordenada( menos a mayor ) por nota
const alumnos = [
    { nombre: 'Juan', nota: 3.6 },
    { nombre: 'Ana', nota: 2 },
    { nombre: 'Pedro', nota: 9 },
    { nombre: 'Antonio', nota: 5 }
]
// Suma de todos los aprobados
/* const notasAprobados = alumnos
    .filter((alumno) => alumno?.nota >= 5)
    .map(alumno => alumno.nota)
    .reduce((acum, nota) => acum + nota, 0) */

Number.prototype.isPassed = function () {
    return (this >= 5)
}

const notasAprobados = alumnos
    .filter((alumno) => alumno.nota.isPassed())
    //.map(alumno => alumno.nota)
    .reduce((acum, alumno) => acum + alumno.nota, 0)

console.log(notasAprobados)
console.log(alumnos.sort((a, b) => a.notas - b.notas))

