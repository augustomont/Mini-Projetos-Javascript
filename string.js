

//Tipo Primitivo
const mensagem= 'minha primeira mensagem'

//Tipo Objeto
const outraMensagem = new String('Bom dia')


//Maniulando Strings

//tipo
console.log(typeof mensagem)
console.log(typeof outraMensagem)

//Tamanho
console.log(outraMensagem.length)

//Buscar elemento por Endereço
console.log(outraMensagem[2])
console.log(outraMensagem.indexOf('a'))

//Verificar se existe tal elemento
console.log(mensagem.includes('primeira'))
console.log(mensagem.includes('blabla'))

//Verificando se começã/termina com tal elemento
console.log(mensagem.startsWith('verde'))
console.log(mensagem.startsWith('m'))
console.log(mensagem.endsWith('xxx'))
console.log(mensagem.endsWith('m'))

//Colocando outro elemento na string
console.log(mensagem.replace('minha','sua'))

//Separar, ou quebras a string
console.log(mensagem.split(' '))