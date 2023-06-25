// O método REDUCE irá transformar os valores presentes em um ARRAY em um único valor, como por exemplo o resultado da soma de valores de um ARRAY.


let ordens = [
    {cliente: 'Tiago', tipo: 'compra', quantidade: 56, ativo: 'NFLX34'},
    {cliente: 'Maria', tipo: 'compra', quantidade: 76, ativo: 'AAPL34'},
    {cliente: 'João', tipo: 'compra', quantidade: 21, ativo: 'GOGL34'}
]

// Utilizando o laço FOR para somar valores dos objetos de um array

// let quantidadeDeOrdens = 0

// for (let i = 0; i < ordens.length; i ++){
//     quantidadeDeOrdens += ordens[i].quantidade
// }

// console.log(quantidadeDeOrdens)

// Utilizando o método REDUCE para somar valores de um objeto dentro de um array

// let quantidadeDeOrdens = ordens.reduce(function(somaOrdens, ordem){
//     return somaOrdens + ordem.quantidade
// }, 0)

// console.log(quantidadeDeOrdens)



let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => somaOrdens + ordem.quantidade, 0)
console.log(quantidadeDeOrdens)
