
//Estas quatro variáveis têm o escopo global, pois estando fora da função podem der acessadas em todo o código
var avatar = "generic";
var skill = 1.0 ;
var pointsPerLevel = 1000;
var usePoints = 2008;

//função 

function getAvatar (points) {
    var level = points / pointsPerLevel; //A variavel level é local e é visivel apanas dentro da função
                                        // A variavel pointsPerLevel foi usada foi declarada fora da função mas pode ser usada dentre por ser uma variavel global

        if(level == 0 ){
            return "Teddy bear";
        } else if (level == 1){
            return "cat";
        } else if (level >= 2){
            return "Gorilla";
        }
}   

    function updataPoints (bonus, newPoints) {
        var i  = 0; //a variavel i é local visivel apanas para a função updataPoints
        while ( i < bonus) {
            newPoints = newPoints + skill * bonus;
            i + i + 1;
        }

        return newPoints + usePoints;
    }
    usePoints = updataPoints(2,100);
    avatar = getAvatar(2112);
    
    console.log(usePoints)