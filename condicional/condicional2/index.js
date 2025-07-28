/* Número positivo o negativo
Escribir un programa que determine si un número ingresado por el usuario es positivo, negativo o cero. */

let num;

num = parseInt(prompt("Ingrese un número entero: "));

if(num == 0){
    alert("El número ingresado es 0(cero)");
} else if(num > 0){
    alert("El número ingresado es Positivo!");
} else if(num < 0){
    alert("El número es Negativo!");
} else {
    alert("Ingreso un valor no numérico!");
}