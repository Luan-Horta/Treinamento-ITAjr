// (Pag 4) Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão
// deverá ser de duas casas decimais, arredondando se necessário.

const calcularAreaTriangulo = (base, altura) => (base * altura * 0.5).toFixed(2)

const area = calcularAreaTriangulo(9.25, 13.1)
console.log(area)