// (Pag 5) Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
// ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a seguir:


const inverter = obj => {
    newObj = {}
    Object.entries(obj).map( ([chave, valor]) => [valor, chave] ).forEach( ([chave, valor]) => {
        Object.defineProperty(newObj, chave, {value: valor, enumerable: true, writable: true})
    })
    return newObj
}

objeto = { a: 1, b: 2, c: 3 }
objetoInvertivo = inverter(objeto)
console.log(objetoInvertivo)