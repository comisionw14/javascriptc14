/* Confeccionar una función que solicite el ingreso de un entero y nos muestre la tabla de multiplicar de dicho valor. Llamar luego una vez a la función. */

function multiplicar() {
    let num, resultado;

    num = parseInt(prompt('Ingrese un número: '));

    for (let i = 0; i <= 10; i++) {
        resultado = num * i;
        console.log(`${num} * ${i} = ${resultado} `);
    };
}

multiplicar();
console.log(num);