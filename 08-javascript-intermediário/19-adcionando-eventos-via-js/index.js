// ESTA SÃO ALGUMAS DAS FORMAS DE ADCIONAR EVENTOS ATRAVÉS DO JS

// let selectDeEstados = document.querySelector("select[name='estados']")

// selectDeEstados.addEventListener('change', function(){
//     alert(`Alterou para ${selectDeEstados.value}`)
// })

document
    .querySelector("select[name = 'estados']").addEventListener('change', function(event){
        alert(event.target.value)
    })