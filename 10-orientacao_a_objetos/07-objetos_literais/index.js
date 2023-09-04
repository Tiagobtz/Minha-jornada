class Produto {
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

// Objeto instanciado através de uma classe

let produto = new Produto('Notebook', 2200)
produto.verDescricao()

// Objeto descritivo, mas conhecido como objeto literal

let produtoLiteral = {
    descricao: 'Geladeira',
    preco: 1800,
    verDescricao: function(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}
produtoLiteral.verDescricao()