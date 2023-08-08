// Utilizando o método sort() para ordenar os elementos do array em ordem alfanumérica

let listaDeFrutas = ['Morango', 'Banana', 'Uva', 'Abacate']
 console.log(listaDeFrutas.sort())


// Utilizando o método sort() com o auxilio de uma função para ordenar números. Pois se utilizassemos apenas o método sort() a lógica respeitaria a ordem alfanumérica.

let numeros = [40, 2, 7, 53, 8, 12, 25]
console.log(numeros.sort(ordenarNumeros))

function ordenarNumeros(a, b){
    return a - b
}