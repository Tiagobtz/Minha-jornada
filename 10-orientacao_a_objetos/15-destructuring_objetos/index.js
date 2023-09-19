let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        fabricante: 'abc',
        modelo: undefined
    }
}

// let {descricao: d, preco: p, desconto = 5} = produto

// console.log(d, p, desconto)

let {detalhes: {fabricante: f, modelo: m = 'Não informado'}} = produto
console.log(f, m)