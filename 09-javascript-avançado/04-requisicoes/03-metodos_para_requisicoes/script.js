function inserir(){
    fetch('https://jsonplaceholder.typicode.com/posts', 
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
        }
    )
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        console.log(json)
    })
}

document.querySelector("#inserir").addEventListener("click", inserir)