import cipher from './cipher.js';

// Seleccionando elementos del HTML
const mensaje = document.querySelector('#mensaje');
const desplazamiento = document.querySelector('#desplazamiento');
const resultado = document.querySelector('#resultado');
const botonCifrar = document.querySelector('#btn-cifrar');
const botonDescifrar = document.querySelector('#btn-descifrar');
const botonCopiar = document.querySelector('#btn-copiar');

// Creando la función de cifrar
const cifrar = () => {
  if ( mensaje.value === '' ) {
    alert( 'Por favor ingresa el mensaje a cifrar para continuar' );
  } else {
    resultado.textContent = cipher.encode(parseInt(desplazamiento.textContent), mensaje.value);
    mensaje.value = '';
  }
}
// Creando la función de descifrar
const descifrar = () => {
  if ( mensaje.value === '' ) {
    alert( 'Por favor ingresa el mensaje a descifrar para continuar' );
  } else {
    resultado.textContent = cipher.decode( parseInt(desplazamiento.textContent), mensaje.value );
    mensaje.value = '';
  }
}

// Crear la función copiar
const copiar = () => {
  if ( resultado.textContent === 'No se ha detectado ningún mensaje' ) {
    alert( 'Debes ingresar un mensaje para copiar' );
  } else {
    navigator.clipboard.writeText( resultado.textContent );
    resultado.textContent = 'No se ha detectado ningún mensaje'
    alert( '¡Texto copiado!')
  }
}

// Creando el evento de cifrar para el botón de cifrar
botonCifrar.addEventListener('click', cifrar);

// Creando el evento de descifrar para el botón de descifrar
botonDescifrar.addEventListener( 'click', descifrar );

// Creando el evento de copiar para el botón de copiar
botonCopiar.addEventListener( 'click', copiar );