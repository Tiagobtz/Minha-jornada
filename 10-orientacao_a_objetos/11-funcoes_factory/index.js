let bicicletaFactory = function(cor, marcha, aro){
    return {
        cor,
        marcha,
        aro,
        pedalar(){console.log('O MÉTODO FOI EXECUTADO.')}
    }
}

let bicicleta1 = bicicletaFactory('Preta', 21, 26)
let bicicleta2 = bicicletaFactory('Vemelha', 18, 12)
console.log(bicicleta1)
console.log(bicicleta2)