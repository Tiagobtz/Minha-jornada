function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
        return response.json()
    })
    .then(function(json){
        alert(`Título do primeiro post: ${json[0].body}`)
    })
}

document.querySelector("#botao").addEventListener("click", clicou)