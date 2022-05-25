// (Pag 5) Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
// de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.


const buscarPalavrasSemelhantes = (palavra, array) => {
    let tamanhoPalavra = 0
    for (let i in palavra) {
        ++tamanhoPalavra
    }
    return array.filter( string => palavra == string.substring(0, tamanhoPalavra) )
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]))