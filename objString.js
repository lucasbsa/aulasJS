(function(){
    console.log('lucas'.length); // tamanho da string
    console.log('lucas'.charAt(0));//pegando um caracter pelo indice
    console.log('lucas'[0]); // posso usar como array
    console.log('lucas'.concat(' barreto')); //nao muda a string original
    console.log('lucas'.indexOf('s')); // index onde a string está
    console.log('lucas'.lastIndexOf('s'));
    console.log('lucas'.replace('u', 'A')) //troca um unico caracter
    //achou o primeiro u já substitui e sai
    console.log('lucas'.slice(1,4)); // colocamos o intervalo da string que eu quero buscar
    // nao mostra a letra do indice 4
    console.log('lucas:f'.split(':')); //igual no java/c#
    var nome = 'maria eduarda';
    var nome1 = nome.split('a');
    console.log(nome1);
    var nome2 = nome.split('a').join('A');
    console.log(nome2);
    console.log('lucas'.substring(0,2));//pega parte da string
    console.log('lucas'.toLocaleUpperCase()); //tudo maiusculo
    console.log('lucas'.slice(1)); // retorna sem o primeiro caracter
    
    
})();