let numero = 10.480

// A função abaixo irá arredondar pra cima qualquer número decimal.
console.log(Math.ceil(numero))

// A função abaixo irá assumir apenas o valor inteiro de qualquer número decimal.
console.log(Math.floor(numero))

// A função abaixo irá arrendodar o valor para cima caso o número depois da vírgula seja 5 ou maior. E irá arrendodar para baixo caso o número após a vírgula seja 4 ou menor.
console.log(Math.round(numero))


// A função random() sorteia e retorna um valor, como no exemplo abaixo sorteamos um número entre 0 e 10. Veja que também utilizamos a função floor() para que o número sorteado seja inteiro.
let numeroSorteado = 10
console.log(Math.floor(Math.random() * numeroSorteado + 1))