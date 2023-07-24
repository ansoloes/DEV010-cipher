const cipher = {
  // TODO: Should be a function
  encode: ( offset, string ) => {
    // TODO: Should throw TypeError when invoked with wrong argument types
    // Si el resultado del método typeof en Number del offset es diferente al string 'number o si el resultado del método typeof de la cadena string es diferente a 'string'
    if ( typeof Number( offset ) !== 'number' || typeof string !== 'string' ) {
      // Arrojar un error que anuncie que los argumentos recibidos son inválidos
      throw new TypeError( 'Arumentos inválidos, deben ser una cadena de texto o un número' );
    }

    // TODO: Should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33
    let resultado = "";

    for ( let i = 0; i < string.length; i++ ) {
      const letra = string[ i ].charCodeAt();

      if ( letra >= 65 && letra <= 90 ) {
        resultado += String.fromCharCode( ( ( letra - 65 + Number( offset ) ) % 26 ) + 65 );
      } else if ( letra >= 97 && letra <= 122 ) {
        resultado += String.fromCharCode( ( ( letra - 97 + Number( offset ) ) % 26 ) + 97 );
      }
      else {
        resultado += string[ i ];
      }
    }

    return resultado;
  },
  // TODO: Should be a function
  decode: ( offset, string ) => {
    // Si el resultado del método typeof en Number del offset es diferente al string 'number o si el resultado del método typeof de la cadena string es diferente a 'string'
    if ( typeof offset !== 'number' || typeof string !== 'string' ) {
      // Arrojar un error que anuncie que los argumentos recibidos son inválidos
      throw new TypeError( 'Arumentos inválidos, deben ser una cadena de texto o un número' );
    }

    while ( offset > 26 ) {
      offset -= 26;
    }

    let resultado = "";

    for (let i = 0; i < string.length; i++ ) {
      const letra = string[ i ].charCodeAt();

      if ( letra >= 65 && letra <= 90 ) {
        resultado += String.fromCharCode( ( ( letra - 65 - Number( offset ) + 26 ) % 26 ) + 65 );
      } else if ( letra >= 97 && letra <= 122 ) {
        resultado += String.fromCharCode( ( ( letra - 97 - Number( offset ) + 26 ) % 26 ) + 97 );
      } else {
        resultado += String[ i ];
      }
    }
    return resultado;
  }
};

export default cipher;
