/* Escrever Strings mantendo a formatação original escrita.
Muito otilizado para Emails, por exemplo*/




const name = 'Augusto'

//estrutura de data
const now = new Date();
const formattedDate = `${now.toLocaleTimeString()}, ${now.getDate()} ${now.toLocaleString('default', { month: 'long' })} ${now.getFullYear()}`;


//Exemplo de email
const emal = 
`Olá ${name}!

Que bom ter voce no nosso time.

Abraços

${formattedDate}`

console.log(emal)