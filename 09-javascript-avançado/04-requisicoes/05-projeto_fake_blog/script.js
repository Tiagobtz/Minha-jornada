async function carregarPosts(){
    let resposta = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = document.querySelector('.posts')
    posts.innerHTML = 'Carregando...'
    
    let json = await resposta.json()

    if (json.length > 0){
        posts.innerHTML = ''
        for (i in json) {
            let postHtml = `<div><h1>${json[i].title}</h1><hr>${json[i].body}</div>`
            posts.innerHTML += postHtml
        }
        
    }
}
carregarPosts()

async function addNovoPost(titulo, corpo){
    await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            title: titulo,
            body: corpo,
        })
    })
    titulo = document.getElementById('campo-titulo').value = ''
    corpo = document.getElementById('campo-corpo').value = ''
    carregarPosts()

}

document.querySelector('#botao-inserir').addEventListener('click', function(){
    let titulo = document.getElementById('campo-titulo').value
    let corpo = document.getElementById('campo-corpo').value

    if (titulo && corpo){
        addNovoPost(titulo, corpo)
    } else {
        alert('Preencha todos os campos.')
    }
})
carregarPosts()
