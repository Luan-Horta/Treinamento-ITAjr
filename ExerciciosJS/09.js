// (Pag 2) Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
// que o segundo será o número de vezes que haverá repetição. Um array será retornado.

const repetir = (elemento, numero) => {
    let newArray = []
    for (let i = 0; i < numero; ++i) {
        newArray.push(elemento)
    }
    return newArray
}

console.log(repetir('olá', 3))

