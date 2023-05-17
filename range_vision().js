function rango_vision(numero) {
    // Convertir el número en una matriz de dígitos
    const digitos = numero.toString().split('').map(Number);
    let valorMinimo = Infinity; // Valor mínimo inicialmente establecido en infinito

    // Iterar sobre cada dígito en la matriz de dígitos
    for (let i = 0; i < digitos.length; i++) {
        const digitoActual = digitos[i]; // Dígito actual en el índice i
        const rangoVision = digitoActual; // Rango de visión del dígito actual
        let sumaVision = digitoActual; // Suma inicializada con el dígito actual

        // Iterar sobre los índices dentro del rango de visión del dígito actual
        for (let j = i - rangoVision; j <= i + rangoVision; j++) {
            if (j !== i && digitos[j] !== undefined) {
                // Agregar el dígito al cálculo de la suma de visión
                sumaVision += digitos[j];
            }
        }

        // Actualizar el valor mínimo si el dígito actual es 1 y la suma de visión es menor
        if (digitoActual === 1 && sumaVision < valorMinimo) {
            valorMinimo = sumaVision;
        }
    }

    // Devolver true si se encontró un valor de visión mínimo, de lo contrario, devolver false
    return valorMinimo === Infinity ? false : true;
}

const numero = 34315;
const tieneVisionMinima = rango_vision(numero);
console.log(tieneVisionMinima);
