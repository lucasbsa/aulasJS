// array sao obj

// adicionar itens

// var arr = [];

// arr[0] = 10;
// arr.push(45); //adicionar
// arr.pop(); // remove do final, retorna o valor removido


var array = [];
array.push('arroz');
array.push('feijao');
array.push('macarrão');
array.push('massa');
array.push('lentilha');
array.push('carne');
console.log(array);

// join
// separa as propriedades do obj com ,
console.log( 'os itens que precisamos comprar são: ', array.join(', '));
// inverte os itens do array, modifica o array
//array.reverse();
// ordena por ordem alfabetica
//array.sort();

//retorn array das propriedades
// console.log(Object.keys());

// prop toString() converte obj em string
var obj = {A:1,B:2,C:5};
console.log(obj.toString());


//devolve uma string com os valores do array
console.log(array.toString());

// identifica ql separador vai ter 
console.log(array.join('*'));

// concat concatenação

console.log(array.concat('massa'))
// nao modifica o array principal
console.log(array);

// unshift adiciona um item no inicio do array

console.log(array.unshift('lucas'));
console.log(array);

// shift = remove primeiro item do array e retona o elemento
console.log(array.shift());
console.log(array);

// slice = retorna um pedaço do array, noa modifica o array principal
console.log(array.slice(2));
console.log(array.slice(0,2));

// splice =  modifica o array principal, pode add ou remover elem
console.log(array);

array.splice(2) // remove os elementos depois do segundo elemento

console.log(array);

array.push('macarrão');
array.push('massa');
array.push('lentilha');
array.push('carne');

console.log(array);
array.splice(1,3);  // remove os elementos deste intervalo.

console.log(array);

// adiciona massa no indice 1, o 0 indica que nao remove
console.log(array.splice(1,0,'massa'));
console.log(array);

// com ele nos pedimos que a partir do indice 1
// remova 4 wlwm e adicione 2,3,4,5
//array.splice(1, 4, 2,3,4,5);

//foreach = mais funcional mais rapido que o for

console.log(array);

// só mostra o conteúdo
array.forEach(function(item){
    console.log(item);
});

// mostra o conteudo, indice e array
array.forEach(function(item, indice, array){
    console.log(item, indice, array);
});

// método every = função retorna true ou false sempre, baseado no parametro da funcao que passarmos
// para ele

var arr = [1,2,3,4,5,6,7,8,9,10];

// todos os item precisam ser 5, se nao retorna false
// testar itens do array, testa todos
// usado para verigficar todos itens do array

var every = arr.every(function(item){
    return item < 5;
});

console.log(every);

// some = se pelo menos um elementeo do array for achado
// retornar true, 

var some = arr.some(function(item){
    return item % 2 === 0;
});

// precisa retornar true
console.log('return: ' ,some);


//map percorre todo o array, retorn um novo array
// nao modifica o array principal
// retorn um novo


var map = arr.map(function(item, index, arr){
    return item+10;
});

console.log(arr, map);

// filter = filtra os itens do array

var filter = arr.filter(function(item){
    return item > 2;
});

/// posso encadear
var filter = arr.map(function(item){
    return item > 2;
});

console.log(filter);


// mais encadeados
// com o map percorremos o array add 10 nos item
// com o retorno que é um array
// usamos o filter para selecionarmos
// os itens que sao maiores que 13
var mapEncadeado = arr.map(function(item){
    return item +10;
}).filter(function(item){
    return item > 13;
});


console.log('Map encadeado '+mapEncadeado);

console.log(arr);

// reduce, reduz um array

var reduceArray = ['l','u','c','a','s'];
///var reduce = reduceArray.reduce( function(acumulado, atual, index, array) {
    var reduce = reduceArray.reduceRight( function(acumulado, atual, index, array) {
        
    return acumulado + atual;
},0); // se nao passar o 0 o acumulado começa com o 1 item do array

console.log(reduce);


// indexof() procura se um vAlor existe no index do array
// retorna o indice onde está o elemento

var arrindexOf = [1,2,3,4,5]

console.log(arrindexOf.indexOf(5));

// pesquisar a partir de um indice
// retorna -1 se nao achar o elemento

console.log(arrindexOf.indexOf(1,3));


//lastindexOf() procura do final para o inicio
// exatamente o que o indexOf faz

// isArray()
// 

// returna true se for um array, false se nao for
console.log(Array.isArray(arrindexOf));

