// (Pag 4) Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.


const soma = array => array.reduce( (acumulado, atual) => acumulado + atual )

const numeros = [1, 2, 3, 4, 5]

console.log(soma(numeros))