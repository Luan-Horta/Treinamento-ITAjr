// (Pag 1) Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
// de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
// tipo ...".

const inverso = x => {
    let result
    if (typeof(x) == 'number')
        result = -1 * x
    else if (typeof(x) == 'boolean')
        result = !x
    else 
        result = `booleano ou número esperados, mas o parâmetro é do tipo ${typeof(x)}`
    return result
}

console.log(inverso(-10))
console.log(inverso(true))
console.log(inverso(false))
console.log(inverso("10"))
console.log(inverso(Function))
