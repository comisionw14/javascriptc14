let nombres = ['marcos', 'ana', 'luis', 'jorge', 'carlos', 'marcela', 'julio', 'marcelo', 'julia'];

console.log(`Arreglo antes de ordenar ${nombres}`);

nombres.sort();

console.log(`Arreglo después de ordenar ${nombres}`);

let numeros = [13.5, 23.36, 34.5, 24, 55, 1, 3, 7, 0, 135, 134, 1200];

numeros.sort();

console.log(numeros);

numeros.sort(function (num1, num2) {
    if (num1 < num2) {
        return -1;
    } else {
        return 1;
    }
})

numeros.sort((num1, num2) => num1 - num2);

console.log(`Arreglo de números ordenados ${numeros}`);

let celdas = ['a4', 'h3', 'c2', 'b5', 'a5', 'g4', 'a2', 'a45a'];
console.log(celdas.sort())