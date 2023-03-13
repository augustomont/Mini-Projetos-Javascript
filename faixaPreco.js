//Crinado funçoes para mostrar produtos em uma feixa de preço


//Primeira opção, usando uma variavel
let faixas = [
    {tooltip: 'Até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 até 1000', minimo: 700, maximo: 1000},
    {tooltip: '1000 ou mais', minimo: 1000, maximo: 99999}
]
 console.log(faixas)



 //Segunda opção usando Factory function
 function criaFaixaPreco(tooltip,minimo,maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
 }

 let faixa2 = [
    criaFaixaPreco('a',1,100),
    criaFaixaPreco('b',100,1000),
    criaFaixaPreco('c',1000, 999999)
 ]
console.log(faixa2)



 //terceira opção usando Constructor function
 function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
 }

 let faixa3 = [
    new FaixaPreco('d',10,20),
    new FaixaPreco('e',20,30),
    new FaixaPreco('f',30,999)
 ]
console.log(faixa3)