// (Pag 4) crie uma função que receba um array com uma quantidade
// indeterminada de números e retorne a média simples desses números.

const soma = (a, b) => a + b
const calcularMedia = array => array.reduce(soma) / array.length

const numeros = [1, 2, 3, 4, 5]

console.log(calcularMedia(numeros)) 