// (Pag 1) Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.

const maiorOuIgual = (a, b) => {
    let result = (a >= b)
    result = (typeof(a) == typeof('0') || typeof(b) == typeof('0')) ? false : result
    return result
}

console.log(maiorOuIgual(5, 1))
console.log(maiorOuIgual(1, 5))
console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual("3", "2"))


