let pessoas = [ // Array
    {nome: 'Tiago', idade: 26},
    {nome: 'João', idade: 30},      // Objetos
    {nome: 'Antônio', idade: 30}
]

// Utilizando o laço FOR para manipular alguns dados do ARRAY

// let nomeDePessoas = []

// for (let i = 0; i < pessoas.length; i ++){
//     nomeDePessoas.push(pessoas[i].nome)
// }
// console.log(nomeDePessoas)

// Utilizando o método MAP 

// let nomeDePessoas = pessoas.map(function(pessoa){
//     return pessoa.nome
// })
// console.log(nomeDePessoas)

// Utilizando o método MAP com ARROW THE FUNCTION   

let nomeDePessoas = pessoas.map(pessoa => pessoa.nome)
console.log(nomeDePessoas)

