/* sumar dos números */

/* let num1 = 45;
const pi = 3.14156;
const texto = "Hola mundo cruel!!!!"

console.log(texto);
console.log(num1);
console.log(pi);
console.log(texto); */

let num1, num2, suma;

num1 = parseFloat(prompt("Ingrese el primer número: "));
num2 = parseFloat(prompt("Ingrese el segundo número: "));

suma = num1 + num2;

/* console.log(num1);
console.log(num2);
console.log(suma); */

console.log("La suma de " + num1 + " y " + num2 + " es " + suma);
document.write(`La suma de ${num1} y ${num2} es ${suma}`);
alert(`La suma de ${num1} y ${num2} es ${suma}`);