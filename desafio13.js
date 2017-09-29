/*
Envolva todo o código desse desafio em uma IIFE.
*/
(function(){
/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.


*/


// método toString() retorna um string com o array.

var arr = [1,2,3,4,5];
var stringArr = arr.toString();

console.log( 'O array em formato de string é: ', stringArr);
// ?

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
// ?
var sul = ['RS', 'SC', 'PR'];
var sudeste = ['SP', 'RJ', 'MG', 'ES'];
/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
var brasil = sul.concat(sudeste);

console.log( '\nAlguns Estados do Brasil: ',brasil );
// ?

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
11-Rondônia/RO
12-Acre/AC
13-Amazonas/AM

*/

//coloca os tres estados em inicio do brasil
brasil.unshift('RO', 'AC','AM');

console.log( '\nMais estados adicionados: ', brasil );
// ?

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
brasil.shift();
console.log( '\nEstado removido: ',brasil);
// ?

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/

var newSul = brasil.slice(2,5);


/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil: ', newSul );
// ?

/*
Mostre no console todos os estados que estão em `brasil`.
*/


console.log( '\nAlguns Estados do Brasil: ', brasil);

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
// ?
var nordeste = ['AL', 'BA', 'CE', 'MA', 'PB', 'PE'];
/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste: ', nordeste );
// ?

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
    var newSudeste = brasil.slice(5,9);
    brasil.splice(5,9);
/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
// ?

//console.log(brasil.concat(nordeste));

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste: ',newSudeste);
// ?

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil: ', brasil);
// ?

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/

var newBrasil = []
brasil.forEach((function(item, indice){
    var objEstado = {
        id: indice,
        estado: item
    }
    newBrasil.push(objEstado);
}));
console.log(newBrasil);

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );
// ?

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/

var maisDe7 =  brasil.every(function(estadoT){
     return estadoT.length > 7;
});

console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?', maisDe7 );

if(maisDe7)
console.log('Sim, todos os estados tem mais de 7 letras!');
else
    console.log('Nem todos os estados tem mais de 7 letras');


console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?', maisDe7 );
// ?
/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("


*/

var ceEsta =  brasil.some(function(estadoT){
    return estadoT === 'CE';
     
});

console.log( '\nCeará está incluído em `brasil`? ',(ceEsta ? 'Ceará está incluído!':'Ceará não foi incluído') );
// if(ceEsta)
//     console.log('Ceará está incluído!');
//     else
//         console.log('Ceará não foi incluído');

// ?

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/

var novoArr = [];
brasil.map(function(estado, indice){
    var newObjt = {
        id: indice++,
        estado: estado+' pertence ao Brasil.'
    }

    novoArr.push(newObjt);
});


/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:',novoArr );
// ?

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
// ?

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );


// ?

})();