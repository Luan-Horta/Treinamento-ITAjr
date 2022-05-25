// (Pag 6) Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.


const getMaior = array => array.reduce( (acumulado, atual) => acumulado > atual ? acumulado : atual )

const getSegundoMaior = array => getMaior(array.filter( e => e < getMaior(array) ))

const getTerceiroMaior = array => getMaior(array.filter( e => e < getSegundoMaior(array) ))

numeros = [12, 16, 1, 5]

console.log(getMaior(numeros))
console.log(getSegundoMaior(numeros))
console.log(getTerceiroMaior(numeros))
