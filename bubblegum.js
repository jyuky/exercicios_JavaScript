//Exercicio: Organize o código para testar qual sabor de sorvete tem pedaços de chiclete neles

/* while (i < hasBubbleGum.length)
{} {} 
i = i + 2;
i = i + 1;
var i = 0;
if(hasBubbleGum[i])
while(i > hasBubbleGum.length)
var products = ["Choo choo chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true]
console.log(products[i] + "contains bubble gum"); */

var products = ["Choo choo chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var hasBubbleGum = [false, false, false, true];


var i = 0;

while (i < hasBubbleGum.length){
    if(hasBubbleGum[i]){
        console.log( products[i] + " contains bubble gum");
    
    }

     i = i + 1;
}

    

    

