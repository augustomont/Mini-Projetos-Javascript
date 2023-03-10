//Criando cadastro de endereços

//Exemplo de endereço
const endereco = {
    rua: 'treze',
    cidade: 'Rio de Janeiro',
    cep: 23000
}


// Função para preencher o endereço automaticamente
function exibirEndereco(rua, cidade, cep){
    return{
        rua,
        cidade,
        cep
    }
}
const end1 = exibirEndereco('quatorze', 'Para', 25000)
console.log(end1)

const end2 = exibirEndereco('quinza', 'pomerode', 45000)
console.log(end2)