const inputs = document.querySelectorAll(".inputs")
const smalls = document.querySelectorAll("small")
const nome = document.querySelector("[data-input='nome']")
const email = document.querySelector("[data-input='email']")
const telefone = document.querySelector("[data-input='telefone']")
const mensagem = document.querySelector("[data-input='mensagem']")
const botao = document.querySelector(".botao")
const enviado = document.querySelector(".envio-de-dados")

botao.addEventListener("click", function(){
    
    if (nome.value === '' || email.value === '' || telefone.value === '' || mensagem.value === ''){
        
        smalls.forEach(function(small){
            small.classList.add("erro")        
        })
        
        inputs.forEach(function(input){
            input.classList.add("erro")
        })
    
    }else{
        
        smalls.forEach(function(small){
            small.classList.remove("erro")
        })
         
        inputs.forEach(function(input){
            input.classList.add("correto")
        })
        
        enviado.innerHTML = "Dados enviados"
     }
})