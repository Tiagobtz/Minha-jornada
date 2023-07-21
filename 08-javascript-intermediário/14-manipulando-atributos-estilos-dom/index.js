function alterarCorDeFundoPrimeiroPost() {
    let posts = document.getElementsByClassName('post')
    let primeiroPost = posts[0]
    
    primeiroPost.style.backgroundColor = "blue"
    primeiroPost.style.color = "#fff"
    primeiroPost.style.margin = "50px"
}

function aumentarFonteDoSegundoPost() {
    let textoPosts = document.getElementsByClassName('texto-post')
    
    // Come o método abaixo adcionamos uma nova classe a os nossos elementos através do Js
    textoPosts[1].classList.add('fonte-grande')
    // Com o método abaixo listamos todas as classes presentes nos elementos
    console.log(textoPosts[1].classList)
}

// Utilizando parâmetros do HTML para o JS

function marcarRadio(genero) {
    let radioMasculino = document.getElementById('genero-masculino')
    let radioFeminino = document.getElementById('genero-feminino')

    if (genero === 'M'){
        radioMasculino.checked = true
    }else if (genero === 'F'){
        radioFeminino.checked = true
    }
}