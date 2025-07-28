/* Escribir un programa que solicite la carga de un número entre 0 y 999, y nos muestre un mensaje de cuántos dígitos tiene el mismo. Finalizar el programa cuando se cargue el valor 0. */

let num;

do {
    num = parseInt(prompt('Ingrese un número entre 0 y 999: '));
    if(num >= 0 && num <= 999){
        if(num < 10){
            document.writeln("El número ingresado es de 1 dígito! <br>");
            console.log("El número ingresado es de 1 dígito!");
        } else if (num < 100){
            document.writeln("El número ingresado es de 2 dígitos! <br>");
            console.log("El número ingresado es de 2 dígitos!");
        } else {
            document.writeln("El número ingresado es de 3 dígitos!<br>");
            console.log("El número ingresado es de 3 dígitos!");
        }
    } else {
        document.writeln('Ingrese un valor válido! <br>');
        console.log("Ingrese un valor válido!");
    }
} while (num != 0);