/* esse foi o meu codigo

let velocidade = medidor(71)
console.log(velocidade)

function medidor(vel){
    const limite = 70
    const pontosPorKm = 5
    if((vel-limite)/pontosPorKm >12 ){
        return 'Carteira suspensa'}
        else if(vel-limite>0){
            return 'voce foi multado, e perdeu '+ Math.floor((vel-(limite-pontosPorKm))/pontosPorKm) + ' Pontos na carteira'
        }
       else{ return 'Sua velocidade é de '+ vel + 'km/h'
    }
}

*/

//esse foi o indicado pelo tutorial
verificarVelocidade(700);

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70
    const kmPorPonto = 5
    const pontos = Math.floor(((velocidade - velocidadeMaxima)/kmPorPonto))
   
    if(velocidade <= velocidadeMaxima){
        console.log('ok')
    }
    else{     
        if(pontos >= 12)
            console.log('CArteira Suspensa')
        else
            console.log('pontos ',pontos)
    }
}