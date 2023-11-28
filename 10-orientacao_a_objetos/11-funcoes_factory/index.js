// Declarando a entidade (classe) Pessoa
class Pessoa {
    idade = 0

    constructor(nome){
        this.nome = nome
    }
}

// Criando a função 'factory'
function criarPessoa(nome, idade){
    let p = new Pessoa(nome)
    p.idade = idade
    return p
}

// Atribuindo o retorno da função factory a variável p1
let p1 = criarPessoa('Tiago', 27)
console.log(`${p1.nome} tem ${p1.idade} anos`)

// Programação funcional (factory)

function criarCarro(modelo, ano, cor){
    return {
        modelo,
        ano,
        cor,
        dadosDoCarro(){
            return `Modelo: ${this.modelo} Ano: ${this.ano} Cor: ${this.cor}`
        }
    }
}

let carro_1 = criarCarro('Corolla', 2023, 'prata')
console.log(carro_1.dadosDoCarro())