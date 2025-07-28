/* Confeccionar un programa que solicite que ingrese un valor entre 1 y 5. Luego mostrar en castellano el valor ingresado. Mostrar un mensaje de error en caso de haber ingresado un valor que no se encuentre en dicho rango. */

let num;

num = parseInt(prompt('Ingrese un número entre 1 y 5: '));

switch (num) {
    case 1:
        console.log("Uno");
        break;
    case 2:
        console.log("Dos");
        break;
    case 3:
        console.log("Tres");
        break;
    case 4:
        console.log("Cuatro");
        break;
    case 5:
        console.log("Cinco");
        break;
    default:
        console.log('Ingreso un valor incorrecto!');
        break;
}