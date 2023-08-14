// Com esses métodos podemos manipular o tempo de execução dos elementos de nossa página de várias maneiras.

let i = 10

let contagem = setInterval(function(){
    document.write(`${i} <br>`)
    i --

    if (i === 0){
        clearInterval(contagem)
    }
}, 1000)