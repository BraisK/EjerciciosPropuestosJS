/*Mejora esta funcion*/
function calculador(name) {
    if (name === undefined) {
        throw new Error('valor indefinido para el nombre')
    } else {
        if (name === null) {
            throw new Error('No has especificado el nombre')
        } else {
            if (name.length <= 0) {
                throw new Error('nombre vacio')
            } else {
                let upper = name.toUpperCase()
                let firstCharacter = name[0]
                return firstCharacter.toUpperCase()
            }
        }
    }
}
function firstCharacterToUpperCase(name) {
    const n = name?.trim()
    if (!n) throw new Error('Error en el nombre')
    return n[0].toUpperCase()

}
try {
    //calculador()
    //calculador(null)
    //calculador('')
    //firstCharacterToUpperCase()
    //firstCharacterToUpperCase('')
    //firstCharacterToUpperCase(null)
    console.log(firstCharacterToUpperCase('     g '))
    //console.log(firstCharacterToUpperCase('hola'))
} catch (error) {
    console.error('error')
}