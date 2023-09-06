let Carro = function(){
    let velocidadeMaxima = 180
    let quilometrosRodados = 0
    this.cor = 'Amarelo'
    this.modelo = 'Chevette'
    this.velocidadeAtual = 0

    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual() + 50
        if (velocidade > velocidadeMaxima){
            velocidade = velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)
        
        setQuilometrosRodados(0.07)
        console.log(quilometrosRodados)
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual
    }

    let setQuilometrosRodados = function(q){
        quilometrosRodados += q
    }
}

let carro = new Carro()
console.log(carro.velocidadeAtual)
console.log(carro.acelerar())
console.log(carro.velocidadeAtual)
console.log(carro.acelerar())
console.log(carro.velocidadeAtual)
console.log(carro.acelerar())
console.log(carro.velocidadeAtual)
console.log(carro.acelerar())
console.log(carro.velocidadeAtual)
console.log(carro.acelerar())
console.log(carro.velocidadeAtual)
console.log(carro.acelerar())