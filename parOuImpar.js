//Exercicio para mostrar todos os numeros pares, e impares, de uma lista

parimp(8)

function parimp(quant){
    let num = 1
   for(num;num<=quant;num++){
    if(num%2==0){
        console.log(num,'par')
    }
    else{
        console.log(num,'impar')
    }
   }
}