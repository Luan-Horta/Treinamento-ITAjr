// (Pag 3) Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.

const funcao = array => array.filter( (elemento, indice) => (elemento % 2 == 0) && (indice % 2 == 0))

const array1 = funcao([1, 2, 3, 4])
const array2 = funcao([10, 70, 22, 43])

console.log(array1)
console.log(array2)
