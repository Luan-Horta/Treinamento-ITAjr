// (Pag 2) Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
// nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
// propriedade especificada no segundo parâmetro.

const removerPropriedade = (obj, propDeletada ) => {
    let newObj = {}
    Object.entries(obj).forEach( ([prop, valor]) => {
        if (prop != propDeletada) {
            Object.defineProperty(newObj, prop, { 
                enumerable: true,
                writable: true,
                value: valor
            })
        }
    })
    return newObj
}

const objeto = {
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}

const novoObjeto = removerPropriedade(objeto, 'descricao')
console.log(novoObjeto)
console.log(Object.is(novoObjeto, objeto))