// Dado un array de passwords, indicar si todos son validos
// Un password será valido si
// - Tiene almenos 8 caracteres
// - Tiene almenos 1 mayuscula
// - Tiene almenos2 numeros

const passwords = ['SGAG52345jestgha']

const isValid = (password) => {
    return password.length >= 8 && /[A-Z]/.test(password) && /.*\d.*\d-*/.test(password)
    // password && /^(?=.*[A-Z])(?=(.*\d){2,}).{8,}/.test(password)
}

const isAlmost1Upper = (text) => /[A-Z]/.test(text)
const has2Numbers = (text) => /.*\d.*\d-*/.test(text)

const isValid2 = (password) => (
    // return password.length >= 8 && /[A-Z]/.test(password) && /.*\d.*\d-*/.test(password)
    password && /^(?=.*[A-Z])(?=(.*\d){2,}).{8,}/.test(password)
)
const isValid3 = (password) => password.length >= 8 && isAlmost1Upper && has2Numbers

const cumple = passwords.every(password => isValid(password))
const cumple2 = passwords.every(password => isValid2(password))
const cumple3 = passwords.every(password => isValid3(password))
console.log(cumple)
console.log(cumple2)
console.log(cumple3)
