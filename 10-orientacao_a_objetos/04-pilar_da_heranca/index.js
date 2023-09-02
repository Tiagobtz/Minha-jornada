// A herança é um conceito muito interessante da programação orientada a objetos. Entendendo bem esse conceito na prática, podemos reutilizar e fazer a manutenção de nossos códigos com mais precisão.

class Animal {
    constructor(){
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }

    dormir(){
        console.log('Dormir')
    }
}

class Cachorro extends Animal {
    constructor(){
        super()
        this.orelhas = 'Grandes e caidas'
    }

    correr(){
        console.log('Correr')
    }

    rosnar(){
        console.log('Rosnar')
    }
}

class Passaro extends Animal{
    constructor(){
        super()
        this.bico = 'Médio'
    }

    voar(){
        console.log('Voar')
    }
}

class Papagaio extends Passaro {
    constructor(){
        super()
        this.sabeFalar = true
    }

    falar(){
        console.log('Falar')
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio() 

console.log(cachorro)
console.log(passaro)
console.log(papagaio)