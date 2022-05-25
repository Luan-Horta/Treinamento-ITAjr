// (Pag 2) Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.

const repetirSimbolo = (numero, simbolo) => {
    let str = ""
    for (let i = 0; i < numero; ++i) {
        str += simbolo
    }
    return str
}

console.log(repetirSimbolo(4, '+'))
console.log(repetirSimbolo(3, '-'))