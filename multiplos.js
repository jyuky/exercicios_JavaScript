//Serão exibidos numeros de 0 100

//Quando o numero for multiplo de 3 - escrever ping
//Quando o numero for multiplo de 5 - escrever pong 

//Quando o numero for multiplo de 3 e de 5 - escrever ping-pong

var contador = 0;

while(contador < 100){
     
    ++contador;

    console.log(contador)

    if( contador % 3 === 0 && contador % 5 ===0){
        console.log("Ping-Pong")
    }
    if(contador % 3 === 0 ){
        console.log("Ping")
    } else if( contador % 5 === 0){
        console.log("Pong")
    } 
}
