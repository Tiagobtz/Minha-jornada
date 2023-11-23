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