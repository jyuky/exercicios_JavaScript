//Declaração de variáveis

//localização de cada célula do navio

    //Math.Random ultilizado para gerar um número aleatório
    //Math.floor ultilizado para transformar o valor em um numero inteiro
var randomLoc = Math.floor(Math.random() * 5);

//O navio ocupa 3 posições logo a primeira posição será o valor aleatório  gerado pelo random e os semais serão esta posição mais um o que resultará no próximo valor
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess; //palpite atual do usuário
var hits = 0; //número de acertos
var guesses = 0; //número de palpites
var isSunk = false; //registro: se o navio afundou ou não

console.log(randomLoc)

//Loop: enquanto o navio não afundar 

while (isSunk == false) {

    // Obter: palpite do usuário

    guess = prompt("Ready, aim, fire! (enter a number 0-6): ");

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");

    } else {
        //adicionar um ao número de palpites
        guesses = guesses + 1;
         

        //se o palpite do usuario coincidir com a localização 
        if (guess == location1 || guess == location2 || guess == location3) {
            //adicionar um ao numero de acertos
            alert("HIT");
            hits = hits + 1;
         
         

            //Se o numero de acertos for 3 
            if(hits == 3 ){

                //Definir registros como true 
                isSunk = true;

                //Dizer ao usuário "You sank my battleship!"
                alert("You sank my battleship!");
            }
        } else {
            alert("MISS!");
        } 

    }

}


// Dizer ao usuário a estatistica dele 

var stats = (`You took ${guesses} guesses to sink the battleship, which means you shooting accuracy was ${ 3 / guesses}`);

alert(stats)