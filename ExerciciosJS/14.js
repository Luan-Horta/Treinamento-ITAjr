// (Pag 3) Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
// elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
// exemplos abaixo para um melhor entendimento:

const pessoa = {
    nome: 'luan',
    idade: 18,
    peso: 68,
    altura: 172
}

// poderia usar apenas... ?
console.log(Object.entries(pessoa))
