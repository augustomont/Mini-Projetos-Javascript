// Função para exibir apenas conteudo que não seja numero

const filme = {
    titulo : 'Vingadores',
    ano : 2018 ,
    personagem : 'Thor'
}

exibirPropriedades(filme)
function exibirPropriedades(obj){
    for(let indice in obj){
        if(typeof obj[indice] != 'number'){
        console.log(obj[indice])}
        }
    }


