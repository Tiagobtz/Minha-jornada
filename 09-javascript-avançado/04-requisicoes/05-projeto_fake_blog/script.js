async function carregarPosts(){
    let posts = document.querySelector(".posts")
    posts.innerHTML = `Carregando...`

    let resposta = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await resposta.json()
    
    if (json.length > 0){
        posts.innerHTML = ''

        for(let i in json){
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}<hr></div>`
            posts.innerHTML += postHtml
        }
    } else {
        posts.innerHTML = "Nenhum post encontrado"
    }
}

carregarPosts()