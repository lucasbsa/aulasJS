// // variáveis 

// // var nome = 'Lucas';
// // var idade = 26;
// // var sexo = 'Masculino';


// var pessoa1 = {nome: 'Lucas',idade:26, sexo:'masculino', getNome1: function(){
//     return this.nome;
// }};
// var pessoa2 = {nome: 'fernanda',idade:20, sexo:'femino',getNome1: function(){
//     return this.nome;
// }};
// var pessoa3 = {nome: 'Robert',idade:30, sexo:'masculino',getNome1: function(){
//     return this.nome;
// }};
// //console.log(pessoa);

// var cadastro = [pessoa1, pessoa2, pessoa3];

// function mostrarPessoas(){
//     return cadastro;
// }


// for(var i = 0;i<3;i++){
//     if(cadastro[i].getNome1() === 'Lucas')
//         console.log('muito bom para ser verdade!');
//         else
//             console.log(cadastro[i].getNome1());

// }


// var mostrarIdade = function(){
// //    console.log(pessoa.idade);
// };
// //console.log(pessoa);

// var numero = [1,1,1,1,5];
// //console.log(numero);
//  cinco = 0;
//  tres = 0;
// if(cinco === tres)
//     cinco = 5;
// else
//     tres = 3;    

    

// console.log('entrou no if ',cinco,'nao entrou no if ', tres);

// function teste(){
//     return 'nadei';
// }

// console.log(teste());


// var pessoa = {
//     nome: 'Lucas',
  
// }







// var roupas = {
//     camisa: 'g',
//     calcas: '44',
//     //método de um objeto
//     queTamanho: function(){
//         return this.camisa;
//     }
// };


// console.log(roupas.queTamanho());

// function arrayteste() {
//     return [1,2,3];
// };

// // pegar um valor de uma posição
// console.log(arrayteste()[2]);

// //pegando uma propriedade do array
// console.log(mostrarPessoas()[0].getNome1());


// function myFunction(){
//     return {
//         nome: 'vera',
//         idadeVera:45,
//         mostrar: function(){return this.nome;},
//         mostrarIdadeDaVera: function(){return this.idadeVera;}
// }



// };

// console.log('Teste de function ',myFunction().mostrar());

// var pegandoProp = myFunction().mostrarIdadeDaVera();

// console.log('Idade da vera: ', pegandoProp);


// console.log(    'executando pelo cmd ');

// var myArray = [1,2,3, true, 'Lucas'];
// //funcao que retorna um array
// var myFunction = function(arr){
//     return myArray;
// }

// console.log(myFunction());

// // imprimir segundo indice do array
// console.log(myArray[1]);

// // funcao que recece um array e um numero
// // e retorna o valor que esta no indice
// var myArrayValores = [1,2,3];
// var returnIndex = function(arr, number){
//     return arr[number];
// }

// console.log(returnIndex(myArrayValores,0));

// console.log('--------------------------------------');

// var arrayTiposDiferente = [1, 'Lucas', true, false, 5.5];
// console.log(returnIndex(arrayTiposDiferente,0));
// console.log(returnIndex(arrayTiposDiferente,1));
// console.log(returnIndex(arrayTiposDiferente,2));
// console.log(returnIndex(arrayTiposDiferente,3));
// console.log(returnIndex(arrayTiposDiferente,4));

// console.log('-----------------------------------');

// console.log(arrayTiposDiferente);

// console.log('-----------------------------------');

// var book = function(nome){
    
//         livro1 = { NomeLivro: 'A', Autor: 'matheus', Editora: 'P', paginas: 400},
//         livro2 = { NomeLivro: 'B', Autor: 'matheus',Editora: 'P', paginas: 500},
//         livro3 = { NomeLivro: 'C', Autor: 'zezinho',Editora: 'O', paginas:250}
//         console.log(this.livro1.NomeLivro);
    

//     if(livro1.NomeLivro === nome) 
//         return 'Livro A: ----'+this.livro1.NomeLivro+' Páginas : '+this.livro1.paginas; 
//          else if(livro2.NomeLivro === nome)
//              return 'Livro B: ------'+this.livro2.NomeLivro+' O livro tem : '+this.livro2.paginas+'páginas';
//              else if(livro3.NomeLivro === nome)
//                  return 'Livro C:-------- '+this.livro3.NomeLivro+' Páginas : '+ this.livro3.paginas;
//                  else(nome === null) //mostra todos os livros quando nao colocamos parametros
//                      return 'Livro1: '+this.livro1.NomeLivro+' Livro 2 : '+this.livro2.NomeLivro+' Livro 3 : '+this.livro3.NomeLivro;
                    
// }

// console.log(book('A'));

// var num = 5;
// var b = num !== 5 ? 10 : 16

// console.log(num);
// console.log(b);

// var x = 1;

// function mySwitch(){
// switch(x){
//     case 1 :
//     console.log(x);
//     break;
//     case 2 :
//     console.log(x);
//     break;
//     case 3 :
//     console.log(x);
//     break;
//     default:
//     console.log(    'x nao e nada');
//     break;

// }
// }

// console.log(mySwitch(x));


// var championship = 'gauchão';

// console.log(championship);

// var teams = [' Grêmio', 'Juventude', 'Caxias', 'São josé', 'Inter', 'Aimoré', 
// 'Novo Humburgo', 'Pelotas', 'Brasil PL'];

// console.log('Times do Gauchão', teams);

// function showTeamPosition(x){
//     if(x<5)
//         return 'O time que está em '+ ++x +'º lugar é o '+teams[--x];
//         else
//             return 'Não temos informação sobre o time!';
// }

// console.log(showTeamPosition(4));
// var y  = 20;
// while(y<=30){
//     console.log(y++)   ;
// }


// function convertToHex( color ){
//     var hexa = 1;
//     switch(color){
//         case 'red':
//             console.log('Essa cor é red', color);
//         break;
//         case 'blue':
//             console.log('essa cor é blue: ', color);
//             break;
//             default:
//              console.log("Não há hexa correspondente");
//             break;
//     }
// }

// console.log(convertToHex('blue'));

// // contar elementos de um array - lenght
// var arr = ['lucas', {bola: 'azul'},123 ];
 
// var qtd = arr.length;
// console.log(arr);

// // comando push() array

// arr.push('teste');
// console.log(arr);


//  //console.log(arrayCriado);

// var a = [];
// a.push('Lucas teste ');
// console.log(a);


// desafio 7

// var arrayDesafio = [5, 'lucas',{carro: 'verde'}, 12, 'tchau'];

// console.log(arrayDesafio);

// function addItem(item){
//     arrayDesafio.push(item);
//     return arrayDesafio;

// }
// var novaArr = [1, 'Gremio', {futebol: 'jogador'}];
// console.log(addItem('sul'));
// console.log(addItem(novaArr));

// console.log('O segundo elemento do segundo array é '+arrayDesafio[6][2].futebol);

// console.log('O primeiro array tem '+ arrayDesafio.length+' itens');

// console.log('O segundo array tem '+ arrayDesafio[6].length+' itens');

// // mostrar os numeros pares com while
// var dez = 10;
// var vinte = 20;
// while(dez<=vinte){
//     var pares = dez%2;
//     if(pares === 0){
//         console.log('pares '+dez);
//     } 
//         dez++;
// }

// arrayDesafio.push(function soma(x,y){ return x+y;});


// console.log('O primeiro array tem '+ arrayDesafio.length+' itens');
// console.log('Aqui está a soma do array dois '+arrayDesafio[7](15,5));

// NOMEAR AS FUNCOES

// //// funcao anonima
// var funcao = function(){
//     return 'hi';
// }

// //// funcao nomeada
// var funcao = function nada(){
//     return 'hi';
// }

// console.log(funcao());
// console.log(funcao.name);


/// PROGRAMAÇÃO FUNCIONAL

// function person(){
//     return {
//         nome: 'Fernando',
//         idade: 26,
//         sobrenome: 'Barreto'
//     };
// };

// console.log('Acessando propriedades do obj: '+person().nome);


// function adder(x){
//     function adderOther(y){
//         return x + y;
//     };
//     return adderOther;
// }

// //// acessando uma funcao dentro de outra funcao
// console.log(adder(10)(10));


// function variavel(func){
//     return func();
// }

// function maisUma(){
//     return 'return function';
// }

// //// sem invocar a funcao maisUma
// console.log(variavel(maisUma));


//// desafio da semana 8

// var sum  = function calculateSum(x,y){
//     return x+y;
// }

// var valor1 = 10;

// // console.log('A soma de '+ sum().getX() +' e ' +sum().getY +'é igual a '+ sum(10,15));




// function numeroUm(x){
//     return function(y){
//         return function(y){ 
//             return y;
//         };
         
//     }
// }

// console.log(numeroUm()()(5));


// function calculator(oper){
//     return function(num1, num2){
//         switch(oper)
//         {
//             case '+': 
//                 var soma = num1+num2;
//                 console.log('Resultado da operação:'+ num1,oper,num2    +' = ',soma);
//                 break;

//                 case '-': 
//                 var subtracao = num1-num2;
//                 console.log('Resultado da operação:'+ num1,oper,num2    +' = ',subtracao);
//                 break;

//                 case '*': 
//                 var multiplicacao = num1*num2;
//                 console.log('Resultado da operação:'+ num1,oper,num2    +' = ',multiplicacao);
//                 break;

//                 case '/': 
//                 var divisao = num1/num2;
//                 console.log('Resultado da operação:'+ num1,oper,num2    +' = ',divisao);
//                 break;

//                 case '%': 
//                 var modulo = num1%num2;
//                 console.log('Resultado da operação:'+ num1,oper,num2    +' = ',modulo);
//                 break;

//                 default:
//                     console.log('Operação inválida');
//                     break;

//         }
//     }
// }

// //console.log(calculator('88')(5,10));


// var sum = calculator('+');
// var mul = calculator('*');
// var sub = calculator('-');
// var div = calculator('/');
// var  mod = calculator('%');

// console.log(sum(5,10));


// console.log(mul(5,10));

// console.log(sub(5,10));

// console.log(div(5,10));

// console.log(mod(2,1));


////  HOISTING <----------------------------------------

// uma expressão IIFE - função autoexcutavel(escopo local, controle total)
/* (function sum(){ 
    console.log(1+2);
    //return 1+3; nao funciona porque nao podemos acessar de fora
})(); */


 
/* (function myFunction() {
    var number2 = 20;
    var number1 = 10;
    console.log( 'Na função `myFunction`, o primeiro número é', number1 );
    console.log( 'Na função `myFunction`, o segundo número é', number2 );
    console.log( number1 + number2);
   
})();*/


// (function(){

// (function myFunction2() {
//     var number1 = 10;
//     var number2 = 20;

//     var sum = function sum() {
//         return number1 + number2;
//     };

//     console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
//     return sum();


// })(); 


// (function myFunction3() {
//     var number2 = 50;
//     var number1 = 40;
//     console.log( 'A soma de 40 e 50 é igual a', sum() );
//     console.log( 'Na função myFunction3, number1 é igual a', number1 );

//     return sum();
//     function sum() {
//         return number1 + number2;
//     };
    
// })() ;

// function callback(){

// }

// function calculator(numero1, numero2){
//     return function(callback){
//         return callback(numero1, numero2);
//     };
// }

// var sum = calculator(10,2);
// var sub = calculator(15,5);
// var mult = calculator(20,2);
// var div = calculator(50,30);
// var mod = calculator(2, 1);

// console.log('Função de soma: '+sum(function(num1, num2){
//     return num1+num2;
// }));

// console.log('Função de subtração: '+sub(function(num1, num2){
//     return num1-num2;
// }));

// console.log('Função de multiplicação: '+sub(function(num1, num2){
//     return num1*num2;
// }));


// console.log('Função de divisão: '+sub(function(num1, num2){
//     return num1/num2;
// }));



// console.log('Função de modulo: '+sub(function(num1, num2){
//     return num1%num2;
// }));


// })();

// wrapper objects <------/* -----------------------------

/*var name = 'lucas';

console.log(name.length);

// wrapper construtores

var sobrenome = new String('Barreto'); //construtores, como o JS faz qd fizemos
//var name = 'lucas';

console.log(sobrenome.length, sobrenome.valueOf());

//conversores

var nome = String(10); // converte para string
var numero = Number('10'); // converte para numero
var vdd = Boolean(0); // false

// como testar os tipode de valores
// typeof<operand> //  testar com valores primitivos, com obj não

console.log(typeof(nome)); */


// DESAFIO 10

/* (function(){ */
    // console.log('aqui');

    // var five = Number('5');
    // console.log( five + ' é número?', typeof five === 'number' );
    
    // var concat = String('10' + '10');
    // console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );
    
    /*
    Voltando ao exemplo da calculadora, vamos utilizar mais uma abordagem
    funcional, mas dessa vez, separando algumas responsabilidades.
    - Primeiro, crie um objeto chamado `operation` que terá as propriedades:
    '+', '-', '*', '/' e '%'.
    - Cada propriedade vai receber uma função (logo, elas serão métodos), e essa
    função receberá dois parâmetros e retornará a operação referente à sua
    propriedade, usando os valores passados por parâmetro.
    */
    // ?

/*     var operation = {
        '+' : function(numero1, numero2){
            return numero1+numero2;
        },
        '-': function(numero1, numero2){
            return numero1-numero2;
        } ,
        '*':function(numero1, numero2){
            return numero1*numero2;
        },
        '/': function(numero1, numero2){
            return numero1/numero2;
        },
        '%': function(numero1, numero2){
            return numero1%numero2;
        },
    }
     */
  //  console.log(operation(10,2));


    /*
    Crie uma função chamada `isOperatorValid`, que receberá um operador por
    parâmetro.
    - Essa função será responsável por verificar se o operador passado por
    parâmetro a ela é válido, ou seja, se ele é igual a '+', '-', '*', '/' ou
    '%'.
    - Se for igual a qualquer um desses, ela deverá retornar "true".
    Caso contrário, "false".
    - O desafio é fazer o retorno sem usar "if" ou "switch".
  /*   */
/*   function isOperatorValid(oper){
      return !operation[oper];
     
  } */


    /*
    Agora vamos criar a calculadora.
    - Crie uma função chamada `calculator`, que receberá como parâmetro um
    operador;
    - Se o operador não for válido, a função deve retornar "false";
    - Se o operador for válido, retornar uma segunda função que receberá dois
    parâmetros;
    - Se algum dos parâmetros não for um número, retornar "false";
    - Senão, retornar o método do objeto "operation" criado acima, baseado no
    operador passado para a função "calculator", e passando para esse método
    os dois parâmetros da função de retorno de "calculator".
    */

  /*   function calculator(oper)
    {   
        if(!isOperatorValid(oper)){
            return false;
        }
        return function(numero1, numero2){
            if(typeof numero1 !== 'number' && typeof numero2  !== 'number'){
                    return false;
            }
            return operation[oper](numero1, numero2);
        }     
    } */

  //console.log('teste de calcular '+calculator('+')(10,2));


    
    /*
    Crie uma função chamada "showOperationMessage" que recebe três parâmetros:
    - o operador, o primeiro número e o segundo número. O retorno da função
    deve ser a frase:
    'A operação [NUMBER1] [OPERATOR] [NUMBER2] =';
    Essa função mostrará a mensagem da operação que criaremos mais abaixo.
    */
    
/*     function showErrorMessage(oper, numero1, numero2){
        return 'A operação '+numero1+' '+oper+' ' +' = ';
    } */
    
    /*
    Crie uma função chamada "showErrorMessage" que recebe um parâmetro: o
    operador da operação cálculo, quando a operação não for válida.
    Essa função deverá retornar a frase:
    'Operação "[OPERATOR]" não permitida!'
    */

  /*   function showOperationMessage(oper){
        if(isOperatorValid()=== false)
            return   'Operação '+oper+' não permitida!';

    } */
    
    /*
    Nossa calculadora está pronta! Agora vamos testá-la:
    PASSO 1:
    - Declare 3 variáveis: "number1" e "number2", iniciando com valor zero, e
    "operationSignal", sem valor por enquanto.
    */
    
/*     var numberOne, numberTwo = 0;
    var operationSignal; */

    
    /*
    PASSO 2:
    Atribua à variável operationSignal o operador de soma, e declare uma
    variável chamada "sum", que receba a função "calculator", passando por
    parâmetro a variável que recebeu o sinal da operação.
    */
/*     var operationSignal = '+';
    var sum = calculator(operationSignal); */
    
    /*
    PASSO 3:
    "sum" agora é uma função, e, se o sinal correto não foi passado para a
    função "calculator", "sum" será false. Certifique-se de que "sum" não é
    "false", e então atribua às variáveis "number1" e "number2", dois números
    que serão os operandos da operação de soma.
    Após isso, mostre no console o resultado da operação, passando dois
    parâmetros para o método "log" de "console":
    - O primeiro será a mensagem da operação (usando a função criada acima);
    - O segundo, a função de soma, passando os dois operandos.
    - Se "sum" for "false", mostrar no console a mensagem de erro.
    */
  /*   
    if(sum){
        numberOne = 10;
        numberTwo = 20;
        console.log('Mensagem de erro :'+showOperationMessage(operationSignal, numberOne, numberTwo) );
    }
     */
    /*
    Repita desde o "PASSO 2" com as operações de subtração, multiplicação,
    divisão e resto. Crie variáveis com os nomes "subtraction",
    "multiplication", "division" e "mod".
    */
    // ?
    
    /*
    Repita o PASSO 2 novamente, mas passando um operador inválido, para ver se
    a mensagem de erro será mostrada no console.
    */
    // ?

//})();
