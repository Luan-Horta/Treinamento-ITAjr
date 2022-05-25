// (Pag 2) Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:

const f = array => [array[0], array[array.length - 1]]

console.log(f([7, 14, true, 'chama', 'olá']))