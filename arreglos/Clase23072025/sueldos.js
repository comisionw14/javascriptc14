/* Realizar la carga de sueldos por teclado hasta que se ingrese el cero. Almacenar todos los valores ingresados en un vector empleando el método push. Mostrar la suma de sueldos ingresados. */

let sueldos = [];
let suma = 0;
let monto;

do {
    monto = parseFloat(prompt('Ingrese el sueldo (0 para finalizar: '));
    if(monto != 0){
        sueldos.push(monto);
    }
} while(monto != 0);

for (let i = 0; i < sueldos.length; i++){
    suma = suma + sueldos[i];
};

document.writeln(`El total en sueldos ingresados es: ${suma}`);
console.log(sueldos)
console.log(`El total en sueldos ingresados es: ${suma}`);