function exibirArtigo(id, callbackSucesso, callbackErro){
    if (true){
        callbackSucesso('Funções de callback em JS', 'Funções de callback são muito utilizadas...')
    } else {
        callbackErro('Erro ao recuperar os dados')
    }
}

let callbackSucesso = function(titulo, descricao){
    document.write(`<h2>${titulo}</h2>`)
    document.write(`<p>${descricao}</p>`)
}

let callbackErro = function(erro){
    document.write(`<p><strong>ERRO: ${erro} </strong></p>`)
}

exibirArtigo(1, callbackSucesso, callbackErro)