// Exercicio para somar os multiplos de 3 e 5


somar(10)
function somar(quant){
    let num = 0
    let num3 = 0
    let num5 = 0
    

     for(num;num<=quant;num++){
        if(num%3===0){
        num3 += num;}
        
        if(num%5===0){
            num5 += num}
        }
        console.log(num3+num5)
}