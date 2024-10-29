// dado este objeto, muestra por consola todos los nombres
// separados por ';'
const usuarios = [
    { info: { name: 'Jose', rol: 'user' }, ranking: 2 },
    { info: { name: 'Maria', rol: 'user' }, ranking: 6 },
    { info: { name: 'Paula', rol: 'admin' }, ranking: 4 },
    { ranking: 4 },
    { info: { name: '', rol: 'admin' }, ranking: 4 },
]

const nombres = usuarios
    .map(usuario => usuario.info?.name || 'Sin nombre')
    .join(';')
console.log(nombres)
