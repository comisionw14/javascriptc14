/* Mostrar por pantalla los números del 1 al 10. */
/* 
for (let num = 1; num <= 10; num++){
    document.writeln(num + " ");
}

 */

/* Hacer un programa que pida al usuario dos números y que muestre los números que hay entre ellos */

let num1, num2;

num1 = parseInt(prompt('Ingrese el primer número: '));
num2 = parseInt(prompt('Ingrese el segundo número: '));

if (num1 <= num2) {
    for (let i = num1; i <= num2; i++) {
        console.log(i);
        document.writeln(i + " ");
    }
} else {
   for (let i = num2; i <= num1; i++) {
        console.log(i);
        document.writeln(i + " ");
    } 
}