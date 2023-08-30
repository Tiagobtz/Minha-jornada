// Modelo do objeto
class contaBancaria {
    constructor(){
        this.agencia = 1005
        this.numeroConta = 15884569
        this.saldo = 50
    }

    despositar(valorDoDeposito){
        this.saldo += valorDoDeposito
    }

    sacar(valorDoSaque){
        this.saldo -= valorDoSaque
    }

    consultarSaldo(){
        this.saldo
    }
}

// Criando o objeto com base no modelo (classe) acima
x = new contaBancaria()
y = new contaBancaria()

x.despositar(150)
console.log(x.saldo)
console.log(y.saldo)