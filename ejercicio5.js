// funcion que admita como parámetro un número 1-7
// nos devolverá el nombre del día de la semana
// si esta fuera del rango, devolvera erros
function dayOfWeek(dayNumber) {
    if (!dayNumber) throw new Error('Numero de día incorrecto')
    if (typeof dayNumber != 'number') throw new Error('Tienes que pasar un numero')
    if (dayNumber < 1 || dayNumber > 7) throw new Error('Dia fuera de rango')

    const names = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    return names[dayNumber - 1]
}
try {
    console.log(dayOfWeek())
} catch (e) {
    console.error('Error')
}