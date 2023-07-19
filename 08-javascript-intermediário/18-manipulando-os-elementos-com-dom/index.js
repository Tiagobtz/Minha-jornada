function adcionarComentario(){
    let inputComentario = document.getElementsByName('novo-comentario')
    let textoDigitado = inputComentario[0].value
    let novoComentario = document.getElementById('novo-comentario')

    novoComentario.innerHTML += `<p><strong>Novo comentário:</strong> ${textoDigitado}</p>`
}