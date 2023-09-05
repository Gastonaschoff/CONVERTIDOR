//Conversor

//Euro 
function euro(valor1, valor2){
    const resultado = valor1 / valor2;
    return resultado;
}

//Real 
function real (valor1,valor2) {
    const resultado = valor1 / valor2;
    return resultado;
}

//Dolar 
function dolar (valor1,valor2) {
    const resultado = valor1/ valor2;
    return resultado;
}

function conversor (){
    const valor1 = parseInt(prompt("Ingrese la cantidad de pesos que desea convertir:"));
    const operacion = prompt ("Convertir a euro/real/dolar");

    switch (operacion){
        case "euro":
            alert("Equivale a "+ parseInt(euro(valor1,780))+ " euros.");
            break;
        case "real":
            alert("Equivale a "+ parseInt(real(valor1,100))+ " reales.");
            break;
        case "dolar":
            alert("Equivale a "+ parseInt(dolar(valor1,720))+ " dolares.");
            break;
        default:
            alert ("La operacion que acabas de ingresar no es valida.")
    }
}

conversor();