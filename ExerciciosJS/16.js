// (Pag 3) Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
// exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é bissexto ou não.

const checarBissexto = ano => {
    const Mult4 = ano % 4 == 0
    const Mult100 = ano % 100 == 0
    const Mult400 = ano % 400 == 0
    let resultado = false
    if ( (Mult4 == true && Mult100 == false) || (Mult400 == true) )
        resultado = true
    return resultado
}

console.log(checarBissexto(2022)) //não é multiplo de 4 -> false
console.log(checarBissexto(2020)) //multiplo de 4 e não é multiplo de 100 -> true
console.log(checarBissexto(2100)) //multiplo de 4 e 100, mas não é multiplo de 400 -> false 
console.log(checarBissexto(2000)) //multiplo de 400 -> true 
