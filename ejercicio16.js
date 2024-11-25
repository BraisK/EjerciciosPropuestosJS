/**
 * Un correo electrónico se considera valido si cumple:
 * - Tiene un formato nombre@dominio.net, donde:
 *      - nombre puede estar compuesto por letras y numeros,puntos o guiones bajo
 *      - dominio puede estar compuesto por letras y numero
 *      - ext es una extension entre 2 y 4 letras (.com, .es)
 * Dado un array de correos electronicos:
 * - La cantidad total de correos electronicos validos <-- array
 * - Los dominios unicos de los correos electrónicos validos <-- set
 * - Lista de correos electrónicos organizados por dominios <-- diccionario(map)
 * */

function validatorCorreo(email){
    
    const regex = /^[a-z0-9_.]+@\w+\.[a-z]{2,4}$/
    return regex.test(email)
}
const emails= [
    'usuario@dominio.com',
    'jose@dominio.com',
    'ana@gmail.es',
    'a&b@gmail.com',
    'hola@gmail.c',
    'hoAa@gmail.ce'
]
const emailsValidos = emails.filter( email => validatorCorreo(email))
console.log(emailsValidos.length)

const dominios = emailsValidos.map(email => email.split('@')[1])
const dominiosUnicos = new Set(dominios)
console.log(dominiosUnicos)

const correosPorDominio = {}
emailsValidos.forEach(email=>{
    const dominio = email.split('@')[1]
    if(!correosPorDominio[dominio]){
        correosPorDominio[dominio] = []
    }
    correosPorDominio[dominio].push(email)
})
console.log(correosPorDominio)
