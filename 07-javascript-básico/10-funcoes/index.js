//    function nomeDaFuncao() {
//         bloco de execução
//    }

//    nomeDaFuncao()

//    function nomeDaFuncao(parametro1, parametro2) {
//         bloco de execução
//    }

//    nomeDaFuncao(parametro1, parametro2)

// UTILIZANDO SEM PARÂMETROS

// function incentivarQuester() {
//       window.alert('Muito bem, você chegou ao JS, continue assim!')
// }

// incentivarQuester()

// UTILIZANDO OS PARÂMETROS

// function soma(numero1, numero2) {
//     console.log(numero1 + numero2)
// }

// soma(1, 5)

// UTILIZANDO O COMANDO RETURN

// function soma(numero1, numero2) {
//     return numero1 + numero2
// }
    
// let resultadoDaSoma = soma(1, 5)

// resultadoDaSoma = soma(resultadoDaSoma, 10)

// console.log(resultadoDaSoma)

// UTILIZANDO UM VALOR PADRÃO

function incentivarQuester(nomeQuester = 'Quester') {
    window.alert(`Muito bem, ${nomeQuester} você chegou ao JS, continue assim!`)
}
    
incentivarQuester('Tiago')