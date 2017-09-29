// mutáveis
// manipuladps por referencia

// deletar propriedade do obt delete obj.pro
// adicionar obj.nome = 'nome';
// obj manipulados por referencia

// criando objetos

// criando obj literais = obj = {}

// como construtor var obj = new Object();

// com propriedade  var obj = object.create(obj2); obj2 herda as prop do obj
// se mudarmos o obj2 só vai haver mudanças nele

// object.prototype todos obj herdam dele


var obj = {x:1,y:2}
for(var i in obj){
console.log('objeto pai '+obj[i]);
}
var obj1 = Object.create(obj);
obj1.novo = 'lucas';
console.log('teste herdado '+obj1);

for(var o in obj1){
    console.log(obj1[o]);
}

// verificar as propriedades que nao sao herdadas

for(var o in obj1){
    console.log(obj1.hasOwnProperty());
}


/// métodos de obj

console.log(Object.keys(obj)); // coloca as propriedades e coloca em um array

console.log(obj.isPrototypeOf(obj1)); // ver obj que herdou as propriedades
// prototype sempre o princiapal

console.log(JSON.stringify(obj)); // converte o objeto em string
console.log(JSON.parse(obj)); // transforma em obj de novo




