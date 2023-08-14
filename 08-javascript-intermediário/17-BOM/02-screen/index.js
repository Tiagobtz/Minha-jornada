// Essas duas propriedades servem para medir a altura e largura da tela do navegador, desconsiderando a barra de tarefas e status.

let altura = window.screen.availHeight
let largura = window.screen.availWidth

if (largura < 500){
    document.write('Lógica para impressão do menu versão mobile')
} else {
    document.write('Lógica para impressão do menu versão web')
}