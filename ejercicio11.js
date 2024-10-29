// Crea un programna que al ejecutarlo te muestre una frase motivadora para animarte
// Usa este API: https://frasedeldia.azurewebsites.net/api/phrase

async function fetchDayPhrase() {
    const response = await fetch('https://frasedeldia.azurewebsites.net/api/phrase')
    const { phrase } = await response.json()
    console.log(phrase)

}

fetchDayPhrase()
