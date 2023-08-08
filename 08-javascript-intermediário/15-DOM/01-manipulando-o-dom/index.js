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