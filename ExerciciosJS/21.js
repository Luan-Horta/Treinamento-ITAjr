// (Pag 4) Criar uma função que receba um array de números e retorne o menor número desse array.


const getMenor = array => array.reduce( (acumulado, atual) => acumulado < atual ? acumulado : atual )

const numeros = [10, 5, 35, 65, -1]
const menorNumero = getMenor(numeros)
console.log(menorNumero)