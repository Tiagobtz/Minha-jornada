function soma(){
    let resultado = 0

    for(let i in arguments ){
        resultado += arguments[i]
    }

    return resultado
}

console.log(soma(2,3))