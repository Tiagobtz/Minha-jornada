class Cadeira {
    constructor(quantidadeDePernas, giratoria, cor){
        this.quantidadeDePernas = quantidadeDePernas
        this.giratoria = giratoria
        this.cor = cor
    }

    girarCadeira(){
        if (this.giratoria === true){
            console.log('A cadeira é giratória')
        } else {
            console.log('A cadeira não é giratória')
        }
    }
}

let cadeiras = Array()

cadeiras.push(new Cadeira(4, false, 'Azul'))
cadeiras.push(new Cadeira(1, true, 'Vermelha'))

console.log(cadeiras[1].girarCadeira())