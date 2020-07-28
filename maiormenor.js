//Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.

//variaveis para aramazenar os numeros

var num1 = 26
var num2 = 8
var num3 = 99

//uma variavel para receber o valor de maior que será colocadoi o num1 somente para inicio de testes





var maior = num1;

       if(num2 > maior){
        maior = num2;
       }else if (num3 > maior){
        maior = num3;
       } else {
           maior = num1;
       }
       

    console.log("Maior: "+ maior);
     
