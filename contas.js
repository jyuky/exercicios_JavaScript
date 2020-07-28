//média de gasto mensal 

//valor recebido
//valor gasto
//terminou o mes com credito ou debito
//calcular o segundo mes com o credito ou debito do mes anterior 
   





function somar(mes1, mes2, mes3){

   var soma = mes1 + mes2 + mes3
   return soma;       
}

var result1 = somar(500,300,450)

console.log(result1)


function calcularMedia(result1, meses){

    var y = result1 / meses
    return y;
}

var result2 = calcularMedia(result1, 3)
console.log(result2)

