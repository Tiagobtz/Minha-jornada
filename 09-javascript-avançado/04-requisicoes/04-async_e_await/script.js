async function clicou(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()
    alert(`Título do primeiro post: ${json[0].title} `)

    alert('CLICOU')
}

async function inserir(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            title: 'Título de teste',
            body: 'Corpo de teste',
            userId: 2
        })
    })
    let json = await response.json()
    console.log(json)
}

document.querySelector("#botao").addEventListener("click", clicou)
document.querySelector("#botao-inserir").addEventListener("click", inserir)