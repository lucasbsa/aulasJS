// valores primitivos nao sao obj

var nome = 'lucas';
nome.length // propriedade

console.log(nome.length);

//construtores

var name = new String('Lucas');
var age = new Number(30);

// tras o nome, nome virou um obj
console.log(nome.valueOf());

// conversao

var numero = String(10); // converte numero para string
 
var stringg = Number('45'); // converte number para string