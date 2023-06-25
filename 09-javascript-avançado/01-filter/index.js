// O método FILTER como o próprio nome já diz, irá filtrar um determinado ARRAY e criar um novo de acordo com o resultado do teste de uma determinada condição.

let pessoas = [ // Array
    {nome: 'Tiago', idade: 26},
    {nome: 'João', idade: 30},      // Objetos
    {nome: 'Antônio', idade: 30}
]

// Filtrando valores de um array de forma simples utilizando o laço de repetição FOR

// let pessoasCom30Anos = []
// for (let i = 0; i < pessoas.length; i ++){
//     if (pessoas[i].idade === 30){
//         pessoasCom30Anos.push(pessoas[i])
//     }
// }
// console.log(pessoasCom30Anos)

//  Utilizando o método FILTER 

// let pessoasCom30Anos = pessoas.filter(function(pessoa){
//     return pessoa.idade === 30
// })
// console.log(pessoasCom30Anos)

//  Utilzando o FILTER simplificando ainda mais com uma ARROW THE FUNCTION    

let pessoasCom30Anos = pessoas.filter(pessoa => pessoa.idade === 30)
console.log(pessoasCom30Anos)