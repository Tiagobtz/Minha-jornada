// O BOM é uma API que nos permite acessar e interagir diretamente com o browser

let janela

function abrirPopUp(){
    janela = window.open('http://www.google.com', 'Minha calculadora', 'width=250, height=100')
}

function fecharPopUp(){
    janela.close()
}