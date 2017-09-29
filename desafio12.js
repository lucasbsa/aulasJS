/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
(function(){
var person = {
    name: 'Maria',
    lastname: 'Souza',
    age: 78
}
for(var prop in person){
    console.log( 'Propriedades de "person": ',person[prop] );
}


/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?

console.log(Object.keys(person));

var objkeys = Object.keys(person);
for(var i=0;i<objkeys.length;i++){
    console.log(objkeys[i]);
}


/*
Crie um array vazio chamado `books`.
*/

var books = [];



/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
var book1 = {nome: 'A', pages:45}
var book2 = {nome: 'B', pages:455}
var book3 = {nome: 'C', pages:457}
books.push(book1);
books.push(book2);
books.push(book3);

console.log( '\nLista de livros:' );

for(var i=0;i<books.length;i++){
    console.log(books[i]);
}

/*
Mostre no console todos os livros.
*/
// ?

console.log( '\nLivro que está sendo removido:', books.pop() );
/*
Remova o último livro, e mostre-o no console.
*/
// ?


console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
for(var i=0;i<books.length;i++){
    console.log(books[i]);
}


/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
// ?

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
var myName = ['l','u','c','a','s']
console.log( '\nMeu nome é: ', myName.join(' ') );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é: ',myName.reverse() );
console.log( '\nMeu nome é: ', myName.join(' ') );
/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética: ', myName.sort() );
console.log( '\nMeu nome é: ', myName.join(' ') );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?

})();