let data = new Date()  // Atribuindo a variável data o objeto 'Date'.

// No exemplo abaixo está sendo utilizado 3 métodos para exibir a data atual. Cada um dos 3 métodos servem para selecionar a data atual.
document.write(`<strong>${data.getDate()}/${data.getMonth()}/${data.getFullYear()}</strong>`)
document.write('<br></br><br></br>')
document.write(data.toString())        //Data atual 26/07/2023



// Adcionar ou remover dias
document.write('<br></br><br></br>')
data.setDate(data.getDate() +1)   //Aqui adcionamos mais um dia, sendo assim o resultado será 27/07/2023
document.write(data.toString())

// Adcionar ou remover meses
document.write('<br></br><br></br>')
data.setMonth(data.getMonth() + 1)  //Aqui estamos adcionando um mês, sendo assim o resultado será 27/08/2023
document.write(data.toString())

// Adcionar ou remover anos
document.write('<br></br><br></br>')
data.setFullYear(data.getFullYear() + 7)  //Aqui estamos adcionando 7 anos, sendo assim o resultado será 27/08/2030
document.write(data.toString())