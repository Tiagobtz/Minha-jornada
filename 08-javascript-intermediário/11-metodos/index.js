let usuario = {
    nome: 'Tiago',
    // ESTA É UMA FORMA DE ADCIONAR MÉTODOS A UM OBJETO.
    excluir: function(){
        console.log(`O usuário ${this.nome} foi excluido!`)
    }
}
usuario.excluir()