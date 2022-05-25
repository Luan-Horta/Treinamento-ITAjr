// (Pag 5) Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
// vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
// maiúsculas de minúsculas


const contarCaractere = (c, string) => {
    let aparicao = 0
    for (let i in string) {
        if (string.charAt(i) == c)
            ++aparicao
    }
    return aparicao
}

aparicoes_r = contarCaractere("r", "A sorte favorece os audazes")
console.log(aparicoes_r)

aparicoes_R = contarCaractere("R", "A sorte favorece os audazes")
console.log(aparicoes_R)