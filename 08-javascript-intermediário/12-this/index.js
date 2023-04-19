'use strict'
// console.log(this)
// console.log(window)
// console.log(this === window)

// this.nome = 'Tiago'
// function saudar(){
//     console.log('this no contexto de função', this) //FICAR SEMPRE ATENTO AO ESCOPO AO UTILIZAR O THIS
//     console.log(`Olá ${this.nome}`)
// }
// saudar()

// let usuario = {
//     nome: 'Tiago',
//     saudar: function(){
//         console.log('this no contexto do método', this)
//         console.log('this no contexto do método', this.nome)
//     }
// }
// usuario.saudar()

let comida = {
    nome: 'Feijão',
    temperatura: 0,
    // NESTE EXEMPLO O MÉTODO COZINHAR DO OBJETO COMIDA RECEBEU UM PARÂMETRO.
    cozinhar: function(temperaturaParaCozinhar){
        console.log('this no contexto objeto comida', this)
        this.temperatura = temperaturaParaCozinhar
    }
}
console.log(comida)
comida.cozinhar(100)
console.log(comida)