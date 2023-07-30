function adicaoDeCaractere(){
    // Selecionando o valor digitado no input e atribuindo ele a variável 'caractere'
    let caractere = document.getElementById('entrada').value

    // Limpar o campo de digitação
    document.getElementById('entrada').value = ''

    // Limpar os espaços em branco nas extremidades da string
    caractere.trim()

    switch (caractere) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            // Adcionando o caractere referente ao campo de Números
            document.getElementById('numeros').value += caractere
            break;
        default:
            // Adcionando o caractere referente ao campo de Letras
            document.getElementById('letras').value += caractere
    }
}