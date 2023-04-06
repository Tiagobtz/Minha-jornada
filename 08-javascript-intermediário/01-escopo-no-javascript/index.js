// ESCOPO DE BLOCO

// if (true){
//     const mensagem = 'Olá'
//     console.log(mensagem)
// }
// console.log(mensagem)

// ESCOPO DE BLOCO AUTÔNOMO

// {
//    let mensagem = 'Olá'
//    console.log(mensagem)
// }
// console.log(mensagem)

// VARIÁVEIS DO TIPO VAR NÃO CRIAM ESCOPO DE BLOCO, EXCETO QUANDO É DECLARADA DENTRO DE UMA FUNÇÃO

// {
//     var mensagem = 'Olá'
//     console.log(mensagem)
// }
// console.log(mensagem)

// ESCOPO DE FUNÇÃO

function falar(){
    const mensagem = 'Olá, Mundo!'
    console.log(mensagem)
    function falarOutraCoisa(){

    }
    falarOutraCoisa()
    console.log(falarOutraCoisa)
}
falar()

// let url = 'https://github.com/Tiagobtz'
// console.log(url)