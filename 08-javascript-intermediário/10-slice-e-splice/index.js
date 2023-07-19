// REMOVE OS ÍNDICES DE UM ARRAY, PORÉM O ARRAY ORIGINAL NÃO IRÁ SOFRER ALTERAÇÕES:

// let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva']
// let frutasExtraidas = frutas.slice(1, 2)
// console.log(frutasExtraidas)
// console.log(frutas)

// REMOVE OS ÍNDICES DO ARRAY TROCANDO-OS POR OUTROS, FAZENDO COM QUE O ARRAY ORIGINAL SOFRA ALTERAÇÕES:

// let frutas1 = ['Banana', 'Maçã', 'Laranja', 'Uva']
// let frutasExtraidas = frutas1.splice(0, 2,)

// console.log(frutasExtraidas)

let frutas2 = ['Banana', 'Maçã', 'Laranja', 'Uva']
let adcionandoERemovendoFrutas = frutas2.splice(0, 3, 'Goiaba', 'Morango', 'Manga')

console.log(frutas2)
console.log(adcionandoERemovendoFrutas)