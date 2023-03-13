//Manipulando Arrays

const numeros = [1,2,3,4,5]
console.log(numeros)

//Adcionando elementos

//Inicio
numeros.unshift('a')
console.log(numeros)

//No Meio
numeros.splice(2,0,'b')
console.log(numeros)

//No final
numeros.push('c')
console.log(numeros)