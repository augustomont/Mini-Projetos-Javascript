// Comparando as propriedades dos objetos


//Função construção, para criar novos objetos no mesmo formato
function endere(rua,cidade,cep){
    return{
        rua,
        cidade,
        cep
    }
}

const end1 = endere('a','b','c')
console.log(end1)

const end2 = endere('a','b','c')
console.log(end2)

//alocando o end3 no mesmo espaço de memoria do end1
const end3 = end1
console.log(end3)

//Função para comparar as propriedades de cada elemento
function saoIguais(end1,end2){
    return end1.rua === end2.rua &&
            end1.cidade === end2.cidade &&
            end1.cep === end2.cep
}
console.log(saoIguais(end1,end2))

//Função que vai comparar o espaço na memoria
function localMemoria(end1,end2){
    return end1 === end3
}
console.log(localMemoria(end1,end2))