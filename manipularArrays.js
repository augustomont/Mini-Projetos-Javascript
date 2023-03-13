//Manipulando Arrays


//Elementos primitivos
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



//Consultando elementos usando numero de referencia

//saber em qual espaço esta localizado tal elemento
console.log(numeros.indexOf('b'))

//saber a ultima posiçaõ que apareceu um objeto que se repete dentro da array
//Vou colocar mais um 'a'
numeros.push('a')
console.log(numeros.lastIndexOf('a'))

//Saber se um elemento esta dentro da Array
console.log(numeros.includes('a'))
console.log(numeros.includes('f'))



//Elementos de referencia

const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'}
]


//Achar  um elemento dentro de uma arrays de objetos

//usando o find(). criei a const só pra poder imprimir no console
const achar = marcas.find(function(achar){
    return achar.nome == 'b'
})
console.log(achar)

//usando Arrow para achar
const achar2 = marcas.find((achar2) => achar2.nome == 'a')
console.log(achar2)