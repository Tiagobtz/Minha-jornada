// Contexto SPREAD

// Strings

let titulo = 'Como estudar JavaScript'
console.log(titulo)
console.log(...titulo)
console.log([...titulo])

// Arrays

let listaCursos1 = ['NodeJs e MongoDB', 'ES6, TypeScript e Angular']
let listaCursos2 = ['Multiplataforma Android/IOS', 'Introdução de GNU/Linux']
let listaCursosCompleto = [...listaCursos1, 'Web completo', ...listaCursos2]
console.log(listaCursosCompleto)

// Objetos

let pessoa = {nome: 'Tiago', idade: 27}
let clone = {endereco: 'Rua abc', ...pessoa}
console.log(clone)