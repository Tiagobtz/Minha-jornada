function verificarNumero(){
    let mensagem = document.getElementById('mensagem')
    mensagem.innerHTML = ''

    let numero = document.getElementById('numero').value

    try {
        if (numero.trim() == ''){
            throw "Campo vazio"
        } else if (isNaN(numero)){
            throw "Você deve digitar um número"
        } else if (numero < 5){
            throw "Valor abaixo do que é permitido"
        } else if (numero > 10){
            throw "Valor maior do que é permitido"
        } else {
            mensagem.innerHTML = `Você digitou o número ${numero}`
        }
    } catch(error) {
        mensagem.innerHTML = `${error}`
    } finally {
        document.getElementById('numero').value = ''
    }
}