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

// Contexto REST

function soma(...param){
    let resultado = 0

    param.forEach(function(v){
        resultado += v
    })
    return resultado 
}

console.log(soma(2, 3, 5))

function multiplicar(m, ...p){
    let resultado = 0

    p.forEach(function(v){
        resultado += m * v
    })
    return resultado
}

console.log(multiplicar(2, 10, 10, 10))