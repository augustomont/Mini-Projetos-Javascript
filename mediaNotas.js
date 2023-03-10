// Calculando a media de notas dentro de uma Array


const array = [70,70,80,1,100]

console.log(mediaNotas(array))

function mediaNotas(notas){
    const media = calcularMedia(notas)

    if(media < 59) return 'F'
    if(media < 69) return 'D'
    if(media < 79) return 'C'
    if(media < 89) return 'B'
    return 'A'
}

function calcularMedia(array){
    let soma = 0
    for(let valor of array){
        soma += valor
    }
    return soma/(array.length)
}