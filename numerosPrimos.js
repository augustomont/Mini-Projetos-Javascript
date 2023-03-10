//Função para mostrar todos os numeros primos até um certo numero


exibirNumerosPrimos(35)

function exibirNumerosPrimos(quant){
    for(let numero= 2; numero<=quant; numero++){
        if(numeroPrimo(numero))
            console.log(numero)
    }
}

//função para saber se o numero é primo
function numeroPrimo(numero){
    for(let divisor=2; divisor<numero ; divisor++){
        if(numero % divisor == 0){
            return false
        }
    }
    return true
}