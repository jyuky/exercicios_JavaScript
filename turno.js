//Faça um script que pergunte em que turno você estuda.
// Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou 
// "Valor Inválido!", conforme o caso.

//variaveis para armazenar o valor dos turnos M-matutino ou V-Vespertino ou N- Noturno. 

var matutino = "M"
var Vespertino = "V"
var noturno = "N"

var turno = "K"

// Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou 
// "Valor Inválido!", conforme o caso.


if( turno == "M"){
    console.log("Bom-dia!")
} else if(turno == "V"){
    console.log("Boa-tarde!")
} else if(turno == "N"){
    console.log("Boa-Noite!")
} else {
    console.log("Valor Inválido!")
}