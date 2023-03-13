

//Função construção, para fazer postagens
function Postagem(titulo,mensagem,autor){
    return{
        titulo,
        mensagem,
        autor,
        visualizacoes: 0,
        comentarios: [],
        estaAoVivo: true
    }
}

let postagem = Postagem('a','b','c')
console.log(postagem)



//Criando uma variavel pra postar uma mensagem automatica

/*let postagens = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        {autor: 'a',mensagem: 'b'},
        {autor: 'a',mensagem: 'b'}
    ],
    estaAoVivo: true
}

console.log(postagem)

*/