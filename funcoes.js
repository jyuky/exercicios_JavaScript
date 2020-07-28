//-----------------------caso 1--------------------------//
//A função é composta por:
//palavra reservada function
//o nome da função( que deve seguir as mesmas regras de nomeação de variáveis )
//parenteses ( que poderão conter ou não paramentros )
//{} ( que conterá o que a função deve fazer)

function fazAlgo(){
     a = 1 + 1;
}

//a função só é executada quando ela é chamada

fazAlgo(); //para chamar a função (escreva o nome da função e coloque os parenteses)

//Neste caso a função esta fazendo o cauculo porem ela não retorna 
//então se jogada no terminal é como se nada tivesse sendo feito 

//-----------------------caso 2- Função sem efeito colateral-------------------------//


function retornaAlgo(){
    a = 1 + 1;

    return a; //Para que a função retorne alguma coisa,é preciso pedir para que ela o faça
              
}
 var minhaVariavel = retornaAlgo();
 console.log(minhaVariavel)


 //Agora a função retorna o valor de a, porém ainda não aparece nada no terminal 
 //pois o valor de a não foi usado para nada

 //Para saber se o valor de a realmente esta sendo retornado
 //vamos atribuir o valor de a (que neste caso é a função) a uma variavel 
 //e imprimir atraves do console.log
 //resposta do console:
 /*Info: Start process (13:28:50)
 2
  Info: End process (13:28:50) */


//-----------------------caso 3--------------------------//

// Uma função sem efeito colateral


function transformaAlgo(x){
    return x + 2;
}

var minhaVariavel2 = transformaAlgo(5); // Neste caso a minha função esta transformando 
//x em 5 e fazendo o cauculo de x + 2 que resultará com 7 
// o x pode ser qualquer coisa ( string, number ou booleano)

console.log(minhaVariavel2); 
//resposta: 7

//------------------------------------------

function transformaAlgo(x){  //Eu posso ter varios parametros (x,y,z), por exemplo
    return "gatinho";
    //Eu tambem posso transformar o x em qualquer outra coisa(neste exemplo vou transformar em um gatinho)
    //Sendo assim, independente do parametro que eu passe, a função irá transformar em um gatinho 
}

var minhaVariavel2 = transformaAlgo(5);
console.log(minhaVariavel2);

//resposta gatinho


//--------------------------------------------

//Com a passagem de parametros eu tbm posso dar um nome ao gatinho,


function transformaAlgo(x){  
    return "gatinho: " + x;
    //neste caso a função ira concatenar o gatinho com o parametro 

    
}

var minhaVariavel2 = transformaAlgo("triste");
console.log(minhaVariavel2);

//Resposta: Gatinho: triste


//___ Uma função que transforma, sempre recebe um parametro e retorna alguma coisa



//-----------------------caso 4--Função com efeito colateral------------------------//

// Uma função só deixa de ser uma função sem efeitos colaterais quando ela 
// Recebe parametros
// Retorna parametro 
// Imprime alguma coisa


function transformaAlgo(x){  
    console.log(x)
    //resposta:Triste
    return "gatinho: " + x;
    
}

var minhaVariavel2 = transformaAlgo("triste");
console.log(minhaVariavel2);
//Resposta:gatinho:trsite



//-----------------------caso 4--Função chamada mais de uma vez------------------------//

//A  intenção é que a função seja chamada mais de uma vez e assim possa ser reutilizada no codigo

function transformaAlgo(x){  
    console.log(x)  //Não é regra, mas deve-se evitar o uso de funções com efeito colateral dentro da função
    //resposta:Triste
    return "gatinho: " + x;
    
}

var minhaVariavel2 = transformaAlgo("triste"); 

var minhaOutraVariavel = transformaAlgo("feliz");
//Neste caso eu posso passar outro parametro para a função e transdormar o gatinho e m triste com o uso da mesma função
//Perceba que neste caso o valor foi armazenado em outra variavel  e em seguida foi chamada

console.log(minhaVariavel2);
console.log(minhaOutraVariavel);

/* resposta: gatinho: triste
             gatinho: feliz */

