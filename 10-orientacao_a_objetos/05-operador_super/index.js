class Animal {
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir(){
        console.log('Dormir')
    }
}

class Passaro extends Animal{
    constructor(bico, cor, tamanho, peso){
        super(cor, tamanho, peso)
        this.bico = bico
    }

    voar(){
        console.log('Voar')
    }
}

class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso){
        super('Médio', cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }

    falar(){
        console.log('Falar')
    }
}

let papagaio = new Papagaio(true, 'Azul', 30, 350)
console.log(papagaio)

let filhoteDePapagaio = new Papagaio(false, 'Verde', 10, 30)
console.log(filhoteDePapagaio)

class Cachorro extends Animal{
    constructor(cor, tamanho, peso){
        super(cor, tamanho, peso)
    }
}

let cahorro = new Cachorro('Branco', 50, 150)
console.log(cahorro)