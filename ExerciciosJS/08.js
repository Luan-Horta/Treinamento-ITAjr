// (Pag 2) Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

const mult = (a, b) => {
    let result = 0
    if (a < 0 || b < 0)  
        result = "Os números devem ser não negativos."
    for (let i = 0; i < b; ++i) {
        result += a
    }
    return result
}

console.log(mult(5, 5))
console.log(mult(0, 7))
console.log(mult(7, 0))
console.log(mult(5, -5))

