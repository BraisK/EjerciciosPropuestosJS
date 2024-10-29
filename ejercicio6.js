// Dado este codigo crea una funcion llamada incrementador que
// aumente en 1 unidad el numero pasado por parametro
// Conviertela a una funcion tipo flecha
/*
let n= 5
function incrementador(n){
}
console.log(n)
*/
let n = 5
const incrementador = (n) => n + 1
n = incrementador(n)
console.log(n)