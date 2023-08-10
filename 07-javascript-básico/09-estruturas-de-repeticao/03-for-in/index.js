let listaDeConvidados = Array()

listaDeConvidados['z'] = 'Tiago'
listaDeConvidados[3] = 'Maria'
listaDeConvidados[100] = 'Antonio'
listaDeConvidados[true] = 'José'

console.log(listaDeConvidados)

for (let x in listaDeConvidados){
    console.log(`Índice: ${x} valor: ${listaDeConvidados[x]}`)
}