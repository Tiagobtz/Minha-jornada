let usuario = {
    nome: 'Tiago',
    excluir: function(){
        console.log(`O usuário ${this.nome} foi excluido!`) // ESTA É UMA FORMA DE ADCIONAR MÉTODOS A UM OBJETO.
    }
}
usuario.excluir()