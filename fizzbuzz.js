// Exercicio de logica para treirar condicionais
   
const resultado = fizzBuzz('f')
console.log(resultado)


function fizzBuzz(num){
    if (typeof num !== 'number') {
        return 'NaN'
    }
    else if(num%3 ==0 && num%5 ==0){
        return 'fizzBuzz'
    }
    else if(num%3 ==0){
        return 'fizz'
    }
    else if(num%5 ==0){
        return 'Buzz'
    }
    else if(num%3 !==0 || num%5 !==0){
        return num
    }
   
}
