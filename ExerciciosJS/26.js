// (Pag 5) Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
// consoantes, ou seja, sem as vogais.


const removerVogais = string => {
    let newString = ""
    for (let i in string) {
        charI = string.charAt(i)
        if (charI != 'a' && charI != 'e' && charI != 'i' && charI != 'o' && charI != 'u')
            newString += charI 
    }
    return newString
}

console.log(removerVogais('Luan'))
console.log(removerVogais('26 muito melhor que 25'))
