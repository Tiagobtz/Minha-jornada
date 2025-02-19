let numero1 = document.getElementById('numero1') as HTMLInputElement
let numero2 = document.getElementById('numero2') as HTMLInputElement
let botao = document.getElementById('botao') as HTMLButtonElement
let resultado = document.getElementById('resultado') as HTMLDivElement

function calcular(n1, n2){
    return n1 + n2
}

botao.addEventListener('click', function(){
    resultado.innerHTML = calcular(numero1.value, numero2.value)
})