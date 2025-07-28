/* Calculadora básica para realizar suma, resta, multiplicación o división según la opción elegida. */

let num1, num2, operacion, resultado;

num1 = parseFloat(prompt('Ingrese el primer número: '));
num2 = parseFloat(prompt('Ingrese el segundo número: '));;
operacion = prompt(`Ingrese la operación que quiera realizar: \n 1- '+' (Sumar)\n 2- '-' (Restar)\n 3- '*' (Multiplicar)\n 4- '/' (Dividir) `);

switch (operacion) {
    case '+':
    case '1':
        resultado = num1 + num2;
        console.log(`El resultado de la suma de los números ${num1} y ${num2} es: ${resultado}`)
        break;
    case '-':
    case '2':
        resultado = num1 - num2;
        console.log(`El resultado de la resta de los números ${num1} y ${num2} es: ${resultado}`)
        break;
    case '*':
    case '3':
        resultado = num1 * num2;
        console.log(`El resultado de la multiplicación de los números ${num1} y ${num2} es: ${resultado}`)
        break;
    case '/':
    case '4':
        if (num2 != 0) {
            resultado = num1 / num2;
            console.log(`El resultado de la división de los números ${num1} y ${num2} es: ${resultado}`)
        } else {
            console.log('No se puede dividir por cero!')
        }
        break;
    default:
        console.log('Ingreso una operación incorrecta!');
        break;
};