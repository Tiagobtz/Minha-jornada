let nome = 'Tiago Henrique'

// A propriedade length serve para verificar o comprimento de uma string (ou seja,    verificar o número de caracteres de uma variável)
console.log(nome.length)

// Com o método charAt() podemos buscar um caractere inserindo seu respectivo índice.
console.log(nome.charAt(6)) 

// Com o método indexOf() podemos buscar o valor do índice na primeira ocorrência de um caractere.
console.log(nome.indexOf('i'))

// Com o método replace() podemos buscar um valor presente na string e alterar este valor por outro.
console.log(nome.replace('Henrique', 'Araújo'))

// Com o método substring() podemos "recortar" caracteres com base nos valores de seus índices, onde o primeiro parâmetro informa onde deve começar, e o segundo informa até onde deve ser recortado.
console.log(nome.substring(6, 14))

// Com o método abaixo convertemos todos os caracteres da string para caracteres com "caixa alta" ou seja maiúsculos.
console.log(nome.toUpperCase())

// Com o método abaixo convertemos todos os caracteres da string para caracteres com "caixa baixa" ou minúsculos.
console.log(nome.toLowerCase())