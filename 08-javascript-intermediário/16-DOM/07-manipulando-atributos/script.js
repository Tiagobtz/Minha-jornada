function clicou(){
    let input = document.querySelector('input')
    let botao = document.querySelector('#botao')

    if (input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password')
        botao.innerHTML = 'Mostrar senha'
    } else {
        input.setAttribute('type', 'text')
        botao.innerHTML = 'Ocultar senha'
    }
}