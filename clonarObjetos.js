// Clonando objetos, e manipulando conteúdo

// Objeto origem
const filme = {
    titulo : 'Vingadores',
    ano : 2018 ,
    personagem : 'Thor'
}


//Clones

//Usando o spread{...}
const obj2 = {...filme}
console.log(obj2)

//Usando assign e adicionando elementos
const obj3 = Object.assign({
    genero: 'ação',
    duracao: 120}
    ,filme)
console.log(obj3)