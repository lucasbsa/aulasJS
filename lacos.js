// do/while primeiro entra e depois verifica se a expressao e valida

var count = 0;

while(count < 10){ // primeiro verifica, depois entra
    console.log('while');
    console.log(count);
    count++;
}


 do{ // primeira vez ele sempre entra para depois verificar
    console.log('do'); 
    console.log(count);
     count--;
 }while(count<0)


 for(var i = 0;i<10;i++){
     console.log('i '+i);
 }


 var pessoa = {
     nome : 'lucas',
     idade: 26,
     get: function(){
         return this.nome;
     }
 }


 // for in

 console.log(pessoa);
function encontrar(){
     for(var pro in pessoa){
      if(pessoa.get() === 'lucas')
           return(  'encontrei' );
           else
             return('nao achei');
 }}

console.log(encontrar());
 console.log('lucas está na pessoa','nome' in pessoa);

 //SALTOS  
 // return 
// break
// continue

