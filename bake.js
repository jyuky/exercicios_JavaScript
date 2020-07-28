function bake (degrees){
    var message;

    if (degrees > 500 ) {
        message = "I'm not a nuclear reactor!";
        
    } else if (degrees < 100) {
        message = "I'm not a refrigerator!";
    } else {
        message = "that's a very confortable temperature for me.";

      
    }

        return message;
}   

var status = bake (50);
//para chamar a função e receber o valor retornado, é necessario armazenar a função em uma variavel e assim terá o retorno desejado
console.log(status)