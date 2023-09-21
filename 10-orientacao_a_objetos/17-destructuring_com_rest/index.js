/*
let array = [10, 20, 30, 40]

let [primeiroValor, ...resto] = array
console.log(primeiroValor)
console.log(resto) */

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

let {a, ...resto} = obj
console.log(a)
console.log(resto)