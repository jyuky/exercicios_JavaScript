//50% para gastos essenciais
//15% para prioridades financeiras:
//35% para manter seu estilo de vida:

let salario = 5000


function calcularPorcentagem(salario) {
 


    let gastosEssenciais = (50/100) * salario 
    let prioridades = (15/100) * salario
    let estilodeVida = ((35/100) * salario).toFixed(2)
    
  
    console.log(`Sua verba para gastos essenciais é de R$${gastosEssenciais}, o que representa 50% do seu salário.`)
    console.log(`Sua verba para prioridades financeiras é de R$${prioridades}, o que representa 15% do seu salário.`)
    console.log(`Sua verba para manter seu estilo de vida é de R$${estilodeVida}, o que representa 50% do seu salário.`)

   return gastosEssenciais, prioridades, estilodeVida;

}

calcularPorcentagem(salario);
 



