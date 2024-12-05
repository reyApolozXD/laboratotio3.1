//paso 1: declaracion de variable
let num1, num2;
let operacion;

// paso 2: function para realizar operaciones

function realizarOperaciones(num1,num2,operacion){ // iniciacion de variables y funciones 
    if(operacion === "suma"){ //condiconal para la suma
        return num1 + num2; // operacion para sumar

    }else if(operacion === "resta"){
        return num1 - num2; 

    }else if(operacion === "multiplicacion"){
        return num1 * num2;
    
    }else if(operacion === "divicion"){
        if(num2 === 0){
            return "error divicion por 0 no es permitida";

        }
        return num1 / num2;
    }else {
        return "operacion no validad";  
    }

}
// paso 3 bucle para realizar multiples operaciones
while(true){
    //solicitar al usuario que ingrse el primer numero 
    num1 = parseFloat(prompt("ingresa el primer numero (o escriba salir para terminar): "));
// si la entrada no es un numero termine el bucle
if(isNaN(num1)){
    console.log("adios.");
    break;

}
// soliucitar al usuario que ingrese el numero 2
num2 = parseFloat(prompt("ingrese el segundo numero: "));

// esto va a servir si el segundo numero no es valido 
if(isNaN(num2)){
    console.log("por favor ingrese un numero valido");
    continue; // regresa al inicio del bucle
}

// soliciota al usuario que ingrese la operacion deseada 
operacion = prompt("ingrese la operacion(suma, resta, multiplicacion o divicion)");

// si el usuario ingresa salir terminar bucle

if(operacion === ("salir")){
    console.log("adios")
    break;

}
const resultado = realizarOperaciones(num1,num2,operacion.toLowerCase());

console.log(`resulatdo: ${resultado}`);

}