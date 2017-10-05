// use strict
// lança erro qd declaramos variaveis sem o var

(function(){
    //'use strict'; //diretiva que mostra par ao browser, esta em escopo estrito

     
   // myname = 'não aparece'; // var global, melhor nao
    // nem deixa executar, sem o var, quando usamos o use strict

     var local = 'aparece';
    console.log(local);

    var obj = {
        prop1:{
            prop2:{
                prop3:{
                    prop31:'prop31',
                    prop32:'prop32',
                    prop33: 'prop33'
                }
            }
        }
    }

    console.log(obj.prop1.prop2.prop3.prop31); // para acessar uma propriedade de um objeto
    // sem o with precisamos colocar sempre o caminho
    with( obj.prop1.prop2.prop3) { //busca sem precisarmos digitar tudo sempre
        console.log(prop31, prop32, prop33);
    }
   // não e permitido em use strict

    var objeto = {
        prop1: 'prop1',
        prop2: 'prop2',
        prop3: 'prop3'
    }
    vconsole.log(delete objeto.prop1, objeto); // deletei a prop1
})();

