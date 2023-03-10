//Outra alternativa para criar Objetos automaticamente

//Função que cria novos objetos automaticamente
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria){
    const celular = {}

    celular.marcaCelular = marcaCelular
    celular.tamanhoTela = tamanhoTela
    celular.capacidadeBateria = capacidadeBateria
    
    return celular
}

const cel1 = criarCelular('Asus',7.3,5000)
console.log(cel1)

const cel2 = criarCelular('Apple', 4.6,3000)
console.log(cel2)