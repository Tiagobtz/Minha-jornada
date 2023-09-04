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

// O polimorfismo é capacidade de sobrescrever um método específico de uma classe filha sem precisar criar um novo método em especial na classe pai.

class Avestruz extends Passaro{
    constructor(bico, cor, tamanho, peso){
        super(bico, cor, tamanho, peso)
    }

    enterrarCabeca(){
        console.log('Enterrar cabeça')
    }

    voar(){
        console.log('Não consegue voar')
    }
}

let avestruz = new Avestruz('Grande', 'Preto e branco', 250, 1500)
console.log(avestruz.voar())