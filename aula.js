//Aula mostrando os principais conceitos e ferramentas do JavaScript

console.log('Augusto')
console.log("monteiro")

let idade = 5
const nome = 'Augusto Eu'
let altura = '1,71'
let aprovado = true
let namoradas = ['gaby','aglays','bia']
let pessoa = {idade,altura}
let grupo = {nome,pessoa,namoradas}


console.log(grupo)

// Par ou Impar//
function parimp(n){
    if(n%2==0){
        return 'par'
    } else {return 'impar'}
}

let res = parimp(12)

console.log(res)

// Somar//
function soma(n1=0,n2=0){
    return n1+n2
}

let res2 = soma(5,2)

console.log(res2)


let aug = 'legal'
let dai = 'chata'

let casalBom = aug!=dai? 'da certo':'não da certo';

console.log(casalBom)

let a = 'azul'
let b = 'vermelho'

let c = a
a = b
b = c
console.log(a)
console.log(b)


// Usando o If pra dar bom dia

let hora = 22;

if (hora > 06 && hora < 12){
    console.log('bom dia!!');
}
else if(hora >= 12 && hora < 18){
    console.log('Boa tarde!');
}
else{
    console.log('boa noite!');
}


// Usando o switch
 
let permissao = 'diretor'
switch (permissao){
    case 'comum':
    console.log('usuario restrito')
    break

    case 'gerente':
    console.log('chefia')
    break

    case 'diretor':
    console.log('diretoria')
    break

    default:
    console.log('Usuario não permitido')
}


// Usando o Loop com for

let i = 0

for(i ; i < 5 ; i++){
    console.log('Augusto', i)
}

i=0
for( i; i <= 10 ; i++){
    if(i % 2 !== 0){
        console.log('Augusto lindao');
    }
};

// Usando o loop WHile
i = 5
while(i>0){
    console.log('Daiane')
    i--
}

// usando o loop do-while
i=0
do{
    console.log('Augusto',i)
    i++
}while(i<10)


// usando o loop for-in

const cadastro = {
    nome : 'Augusto',
    idade : 15,
    cidade : 'Rio de Janeiro'
}

for(let chave in cadastro){
    console.log (chave,cadastro [chave])
}

const cores = ['azul', 'vermelho', 'amarelo']
console.log(cores)
//para imprimir os valores, é necessario atribuir os valores a uma variavel. por isso usa o for-in
for(let indice in cores){
    console.log(indice, cores[indice])
}


// usando loop com for-of 
// Diferença do For-in, é que esse só imprime os valores. no For-in voce consegue imprimir a posição dentro do array
for(let cor of cores){
    console.log(cor)
}


// Exercicio de mostrar o maior numero
/*let carlos = {
    PontosC: 11
}
let andre = {
    PontosA: 15
}

 if(carlos.PontosC<andre.PontosA){
        console.log('andre')
    }
    else{
        console.log('carlos')
    }*/

    let maiorValor = max(15,10) 

    function max(num1,num2){
        return num1 > num2 ? 'andre' : 'carlos'
    }

    console.log(maiorValor)


    // Exercicio proposto
   
    const resultado = fizzBuzz('f')
    console.log(resultado)

    
    function fizzBuzz(num){
        if (typeof num !== 'number') {
            return 'NaN'
        }
        else if(num%3 ==0 && num%5 ==0){
            return 'fizzBuzz'
        }
        else if(num%3 ==0){
            return 'fizz'
        }
        else if(num%5 ==0){
            return 'Buzz'
        }
        else if(num%3 !==0 || num%5 !==0){
            return num
        }
       
    }
