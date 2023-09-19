// Com o Destructuring Assignment podemos desestruturar valores de uma estrutura de dados, como por exemplo arrays e objetos.

let frutas = ['Abacaxi', 'Uva', 'Maçã', 'Laranja']
let [a, b, c, d, e = 'Banana'] = frutas

console.log(a, b, c, d, e)

let coisas = [['Abacaxi', 'Uva', 'Maçã', 'Laranja'], ['Tiago', 'Maria']]
let [[, , fruta3]] = coisas
console.log(fruta3)
// let [, [, nome2]] = coisas
// console.log(nome2)