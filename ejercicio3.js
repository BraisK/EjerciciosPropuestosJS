const estados = {
    CLASIFICADO: 'clasificado',
    DESCALIFICADO: 'descalificado',
    NOPRESENTADO: 'noPresentado'
}
const participantes = [
    { nombre: 'juan', ptos: 5, estado: estados.CLASIFICADO },
    { nombre: 'ana', ptos: 15, estado: estados.CLASIFICADO },
    { nombre: 'pedro', ptos: 6, estado: estados.DESCALIFICADO },
    { nombre: 'maría', ptos: 6, estado: estados.NOPRESENTADO }
]

/* Mostrar la media  de puntos de todos los clasificados*/
/* 
let participantesClasificados = []
for (let i = 0; i < participantes.length; i++) {
    let participante = participantes[i]
    if (participante.estado === 'clasificado') {
        participantesClasificados.push(participante)
    }
}
console.log(participantesClasificados) */

// let isClasdified = (participante) => participante.estado === estados.CLASIFICADO

let participantesClasificados = participantes
    .filter((participante) => participante.estado === estados.CLASIFICADO)

// let sumar = (acum, participante) => acum + participante.ptos

if (participantesClasificados.length !== 0) {
    const sumaPuntos = participantesClasificados
        .reduce((acum, participante) => acum + participante.ptos, 0)

    console.log(sumaPuntos / participantesClasificados.length)
} else {
    console.log('No hay participantes clasificados')
}