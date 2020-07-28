



//primeiramente será estabelecido um parametro para a função, sendo este o temp
//este parametro será analizado atravez das  tomadas de decisão do if/eles
//posterioemente será necessario criar uma variavel temp que ira receber o valor de argumento 
//e por fim, os valores de argumento serão passados para a função e serão analizados pelo if/else

function whatShallWear(temp){

    if (temp < 60 ){
        console.log("wear a jacket");
    } else if (temp < 70){
        console.log("wear a sweater");
    } else {
        console.log("wear a t-shirt");
    }
}

 var temp;
 temp = whatShallWear(50);
 temp = whatShallWear(80);
 temp = whatShallWear(60);


//Wear a jacket 
//wear a t-shirt 
//wear a sweater





