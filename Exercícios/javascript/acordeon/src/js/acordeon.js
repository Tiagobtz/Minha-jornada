const itensPerguntasERespostas = document.querySelectorAll(".item")

itensPerguntasERespostas.forEach(function(item){
    item.addEventListener("click", function(){

        const itemAtualAtivo = document.querySelector(".ativo")
        
        if (itemAtualAtivo){
            itemAtualAtivo.classList.remove("ativo")
        }
        
        item.classList.add("ativo")
    })
})

