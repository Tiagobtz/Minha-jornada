/*

// SELECIONANDO UTILIZANDO O MÉTODO PARA SELECIONAR O DOCUMENTO ATRAVÉS DO ID
let p = document.getElementById('paragrafo1')
console.log(p)

// SELECIONANDO UTILIZANDO O MÉTODO PARA SELECIONAR O DOCUMENTO ATRAVÉS DO NOME DE CLASSE
let inputs = document.getElementsByClassName('input-de-email')
console.log(inputs[1])

// SELECIONANDO UTILIZANDO O MÉTODO PARA SELECIONAR O DOCUMENTO ATRAVÉS DO NOME DA TAG
let inputPorTag = document.getElementsByTagName('h1')
console.log(inputPorTag)

// SELECIONANDO UTILIZANDO O MÉTODO PARA SELECIONAR O DOCUMENTO COM MAIS POSSIBILIDADES
let inputPorName = document.querySelectorAll("input[name='email']")
console.log(inputPorName[0])
*/

function testar(){
    let teste = document.querySelector("#teste")
    let ul = teste.querySelector("ul")

    let newUl = document.createElement("ul")
    ul.after(newUl)

    for (let i = 0; i < 5; i ++){
        let newLinha = document.createElement("li")
        newLinha.innerHTML = `Item add ${i + 1}`
        newUl.appendChild(newLinha)
    }

    /*
    novaLinha = document.createElement("li") // Para criar um novo elemento
    novaLinha.innerText = "Item adcionado"
    ul.prepend(novaLinha) // Para adcionar o elemento no início
    ul.appendChild(novaLinha) // Para adcionar o elemento no final
    */
}