/* Crear un vector vacío. Mediante una estructura repetitiva solicitar la carga de elementos por teclado hasta que se ingrese el cero. No almacenar dicho valor en el vector. Luego sumar todas las componentes del vector, mostrar dicha suma y el tamaño del vector. */

let numeros = [];
let num;
let contador = 0;
let suma = 0;

do{
    num = parseInt(prompt('Ingrese un número entero (0 para finalizar): '));
    if(num != 0){
        numeros[contador] = num;
        contador++;
    }
}while(num != 0);

console.log(numeros)

for (let i = 0; i < numeros.length; i++){
    suma = suma + numeros[i];
};

document.writeln(`Se ingresaron ${numeros.length} valores<br>`);
document.writeln(`La suma de los valores ingresados es: ${suma}`);