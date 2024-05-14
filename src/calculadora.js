function sumar(cadenaNumeros) {
  let suma = 0;
  
  if(cadenaNumeros.length === 0){
    return 0;
  }

  else if(cadenaNumeros.length === 1){
    return cadenaNumeros[0];
  }

  return cadenaNumeros[0] + cadenaNumeros[1];
}

export default sumar;
