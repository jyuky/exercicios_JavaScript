

/*o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento. */


//O salário antes do reajuste;
var salario = 3000; //entrada com prompt

//Percentual de aumento aplicado
var percentual = "";

//O valor do aumento
var aumento = "";

//total do novo salario 
var novoSalario = "";

    //salários até R$ 280,00 (incluindo) : aumento de 20%
    if(salario <= 280 ){
        
        percentual = "20%"
        aumento = salario * (20/100)
        novoSalario = salario + aumento

    //salários entre R$ 280,00 e R$ 700,00 : aumento de 20%
    } else if( salario <= 700 ){

        percentual = "20%"
        aumento = salario * (20/100)
        novoSalario = salario + aumento
    //salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%    
    } else if(salario <= 1500){
        percentual = "10%"
        aumento = salario * (10/100)
        novoSalario = salario + aumento

    //salários de R$ 1500,00 em diante : aumento de 5%     
    } else {

        percentual = "5%"
        aumento = salario * (5/100)
        novoSalario = salario + aumento

    }





console.log( `o salario ${salario} antes do reajuste;
    o percentual ${percentual} de aumento aplicado;
    o valor do aumento ${aumento};
    o novo salário, após o aumento é ${novoSalario}`)









