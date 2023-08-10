// Algumas maneiras de como trabalhar com ARRAYS utilizando o método forEach()

let listaDeConvidados = ['Tiago', 'Maria', 'João', 'Miguel']

// listaDeConvidados.forEach(function(valor, indice, array){
//     console.log(valor, indice, array)
// })

// listaDeConvidados.forEach(function(valor){
//     console.log(valor)
// })

let f = function(valor){
    console.log(valor)
}

listaDeConvidados.forEach(f)