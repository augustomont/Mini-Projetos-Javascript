// "Factory Functions" Criando uma função para usar como base para criação de novos objetos no mesmo padrão, utilizando os mesmos parametros 


// Função que fabrica novos objetos automaticamente
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
    }
}

const cel1 = criarCelular('Asus',6.1,5000)
console.log(cel1)

const cel2 = criarCelular('Sony',5.8,4500)
console.log(cel2)

const cel3 = criarCelular('Motorola',6.2,6000)
console.log(cel3)