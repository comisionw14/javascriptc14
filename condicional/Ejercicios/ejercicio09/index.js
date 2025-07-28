let monto, descuento, precioFinal;

descuento = 0.1;

monto = parseFloat(prompt('Ingrese el monto de la compra: '));

if(monto > 100){
    precioFinal = monto  - (monto * descuento);
    alert(`El precio a pagar del ${monto} con el descuento de ${descuento} es: ${precioFinal}`);
} else {
    alert(`El precio final a pagar es: ${monto}`);
};