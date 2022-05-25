// (Pag 3) Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.


const filtroNumerico = array => array.filter( elemento => typeof(elemento) == 'number')

const array = ["Javascript", 1, "3", "Web", 20]
const novoArray = filtroNumerico(array)

console.log(novoArray)