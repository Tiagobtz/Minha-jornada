// O método MAP irá criar um novo array a partir de um array existente, aplicando uma função a cada elemento do array original. Essa função é usada para transformar cada elemento individualmente, e o resultado é armazenado no novo array. O novo array gerado terá o mesmo comprimento do array original. Em outras palavras, o map mapeia cada elemento do array original para um novo elemento no array resultante.

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
console.log(pessoas)
console.log(nomeDePessoas)

