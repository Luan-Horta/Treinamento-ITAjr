/* 
 (Pag 6) Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
 num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
 com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.

 Exemplo: 

 recerberMelhorEstudante({
      Joao: [8, 7.6, 8.9, 6], // média 7.625
      Mariana: [9, 6.6, 7.9, 8], // média 7.875
      Carla: [7, 7, 8, 9] // média 7.75
 }) // retornará { nome: "Mariana", media: 7.875 }
*/

const getMaior = array => array.reduce( (acumulado, atual) => acumulado > atual ? acumulado : atual )

const getMelhorEstudante = obj => {
    const arrayNomes = Object.keys(obj)
    const arrayMedias = Object.values(obj).map( notas => notas.reduce( (a, b) => a + b ) / notas.length )
    const maiorMedia = getMaior(arrayMedias)
    let posicaoDoMelhor
    arrayMedias.forEach( (media, i) => {
        if (media == maiorMedia)
            posicaoDoMelhor = i
    })
    const melhorEstudante = {}
    Object.defineProperty(melhorEstudante, 'nome', { value: arrayNomes[posicaoDoMelhor], enumerable: true, writable: true })
    Object.defineProperty(melhorEstudante, 'media', { value: arrayMedias[posicaoDoMelhor], enumerable: true, writable: true })
    return melhorEstudante
}

const turma01 = {
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}

console.log(getMelhorEstudante(turma01))