botao.addEventListener('click', function(){
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    let sexo = document.getElementById('sexo').value
    let profissao = document.getElementById('profissao').value
    let botao = document.getElementById('botao')

    let objeto = {
    nome,
    idade,
    sexo,
    profissao,
    verResumo(){
        console.log(`Seu nome é ${this.nome}, você tem ${this.idade} anos. Seu sexo é ${this.sexo} e sua profissão é ${this.profissao}`)
    }
}
    objeto.verResumo()
})