//variaveis contendo as notas dos alunos

var nota1 = 9;
var nota2 = 1;

//variavel contendo o cauculo da media

var media = (nota1 + nota2)/2 ;

console.log(media)


//A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//A mensagem "Reprovado", se a média for menor do que sete;
//A mensagem "Aprovado com Distinção", se a média for igual a dez.



if (media == 10) {
    console.log("Aprovado com Distinção");

} else if(media >= 7){
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

