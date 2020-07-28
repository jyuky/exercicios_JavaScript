function clunk(times) {
	var num = times;
	while (num > 0) {
		display("clunk");
		num = num - 1;
	}
}

function thingamajig(size) {
	var facky = 1;
	clunkCounter = 0;
	if (size == 0) {
        display("clank");  //Se o valor de size(size é o paramentro da função) for igual a zero escreva clank 
        
	} else if (size == 1) {
		display("thunk"); //se o valor de size for igual a 1 escreva thunk
	} else {

		while (size > 1) {         //enquanto o valor de size for maior que um 
			facky = facky * size;  //fack ( var fack igual a 1) será fack vezes o valor de size 
			size = size - 1;       // size é o valor que será passado como argumento para a função thingamajig(estes valores serão de 1 a 5)
        }
        
		clunk(facky);             //a função clunk reberá o valor de facky que é 1 * o valor passado 
	}
}

function display(output) {
	console.log(output);
	clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajig(0);
console.log(clunkCounter);

clunkCounter = 0;
thingamajig(1);
console.log(clunkCounter);

clunkCounter = 0;
thingamajig(2);
console.log(clunkCounter);

clunkCounter = 0;
thingamajig(3);
console.log(clunkCounter);

clunkCounter = 0;
thingamajig(4);
console.log(clunkCounter);

clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);
