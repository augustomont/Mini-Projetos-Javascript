// Funcção que exibe asteristicos

exibirAsteristicos(10)

function exibirAsteristicos(quant){
    let padrao = ''
    for(let linha = 1; linha<= quant; linha++){
        padrao += '*'

        console.log(padrao)
    }
}