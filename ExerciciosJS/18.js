// (Pag 4) Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você
// está desenvolvendo no momento é a de somar o total das despesas. 
// Crie uma função que receba um array de produtos e retorne o total das despesas.

const getPreco = obj => obj.preco
const soma = (p1, p2) => p1 + p2
const calcularDespesa = arrayProdutos => arrayProdutos.map(getPreco).reduce(soma)

const produtos = [
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]

const totalDasDespesas = calcularDespesa(produtos)
console.log(totalDasDespesas) // retornará 34599.89
