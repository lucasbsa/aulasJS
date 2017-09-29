(function(){
    


})(); // SEM O () a funcao nao e invocada


function carro(){

    var espe = {
        cor: 'verde',
        portas: 5
    }

    return espe;

}
// retorn o objeto
console.log(carro());
// retorna uma propriedade especifica do obj
console.log(carro().cor);
console.log(carro().portas);
console.log('-------------------------------------------------');
function adder(x){
    return function(y){
       return x + y;        
    };
}

var teste = adder(3);

console.log('primeira chamada: ',teste(30));
console.log(adder(9)(3));
console.log('-------------------------------------------------');
function showOtherFunction(func){
    return func();
}

function retorno(){
    return 'gremio maior do universo';
};

console.log('Mostrar uma funcao: '+showOtherFunction(retorno));

console.log('-------------------------------------------------');

// DESAFIO SEMANA 08


/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var x = 10;
var y = 20;
// criei uma variavel e ela recebe uma função
// com isso ela vira uma função
// e para chamar-lá preciso usar sum();
 var sum = function calculateSum(x,y){
     return x+y;
 }

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/

console.log('A soma de '+x+' é igual a '+y+' e o resultado é ',sum(x,y));

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
// nao precisamos invocar a funcao para usar o .name
console.log('O nome da função que faz a soma é: ',sum.name);

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName(){
    return 'lucas';
}
console.log('O nome da função é: '+showName.name);

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
 
var varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/

// dúvida
console.log('A função '+varShowName.name+' retorna '+varShowName());

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
// ?

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
// ?

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
// ?

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
// ?

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
// ?