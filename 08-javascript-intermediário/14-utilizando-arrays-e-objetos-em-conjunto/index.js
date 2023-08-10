// let jogo1 = {
//     nome: 'God of war'
// }

// let jogo2 = {
//     nome: 'The last of us'
// }

// CRIANDO O OBJETO VIDEO GAME COM UM ARRAY PARA GUARDAR OS JOGOS

// let videoGame = {
//     nome: 'Playstation 4',
//     valor: 2500,
//     jogos: [jogo1, jogo2]
// }
// console.log(videoGame)

// let jogo3 = {
//     nome: 'Hollow Knight'
// }

// ADCIONANDO UM NOVO VALOR AO ARRAY JOGOS DO OBJETO VIDEO GAME

// videoGame.jogos.push(jogo3)
// console.log(videoGame)

// IMPRIMINDO O NOME DO JOGO1 NAVEGANDO PELO O OBJETO E O ARRAY
// console.log(videoGame.jogos[0].nome)

// ADCIONANDO UM OBJETO DENTRO DE OUTRO OBJETO.
let clientes = {
    nome: 'Tiago',
    ultimoPedido: {
        nomeDoProduto: 'PS4',
        valor: 2500,
        jogos: [{nome: 'God of war'}, {nome:'The last of us'}]
    }
}

// COMO NAVEGAR ENTRE O OBJETO SENDO O . PARA SELECIONAR AS CARACTERÍSTICAS DOS OBJETOS, E O [] PARA SELECIONAR O ÍNDICE DOS ARRAYS

console.log(clientes.ultimoPedido.jogos[1].nome)