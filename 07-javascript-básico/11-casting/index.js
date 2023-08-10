// Lembre-se que os dados coletados pelo 'prompt são do tipo STRING

// let numero1 = prompt('Digite um número:')
// let numero2 = prompt('Digite outro número:')

// Nesse caso ocorrerá uma concatenação pois os dados presentes nas variáveis são do tipo STRING

//console.log(numero1 + numero2)

// Para converter valores do tipo STRING para valores do tipo NUMBER pode ser utilizado os comandos parseInt() => (para números inteiros), parseFloat() => (para números fracionais) e Number() => (suporta números inteiros e fracioanais).

// Dessa forma ocorrerá uma soma

// numero1 = parseInt(numero1)       ou      numero1 = Number(numero1)
// numero2 = parseInt(numero2)       ou       numero2 = Number(numero2)

// console.log(numero1 + numero2)

let numero1 = 10
let numero2 = 30

// Dessa forma teremos o resultado de uma soma como esperado

console.log(numero1 + numero2)

// Para convertemos os dados do tipo NUMBER para STRING iremos utilizar o comando toString()

// Dessa forma irá acontecer uma concatenação

console.log(numero1.toString() + numero2.toString())