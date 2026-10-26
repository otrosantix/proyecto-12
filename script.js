//  1. Seleccionamos los elementos del DOM 
const campoMensaje = document.getElementById('campoMensaje');
const contadorCaracteres = document.getElementById('contadorCaracteres');
const LIMITE_MAXIMO_CARACTERES = 250;

// 2. Escuchamos el evento 'input' cada vez que el usuario escribe o borra 
campoMensaje.addEventListener('input', function () {

    // Obtenemos la longitud actual del texto escrito
    const cantidadCaracteresActual = campoMensaje.value.length;

    // Actualizamos el texto visible del contador
    contadorCaracteres.textContent = `${cantidadCaracteresActual} / ${LIMITE_MAXIMO_CARACTERES}`;

    //3. Verificamos si se alcanzó el límite
    if (cantidadCaracteresActual >= LIMITE_MAXIMO_CARACTERES) {
        // Añadimos la clase para poner el borde rojo y el texto rojo
        campoMensaje.classList.add('limite-alcanzado');
    } else {
        // Quitamos la clase roja si estamos por debajo del límite
        campoMensaje.classList.remove('limite-alcanzado');
    }
});