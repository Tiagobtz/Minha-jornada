function alterarEstilo(corDeFundo, largura, altura){
    document.getElementById('quadrado').style.backgroundColor = corDeFundo
    document.getElementById('quadrado').style.width = largura
    document.getElementById('quadrado').style.height = altura

    console.log(corDeFundo, largura, altura)
}