function sumar(cadenaNumeros) {
  let suma = 0;
  
  if(cadenaNumeros.length === 0){
    return 0;
  }

  for(let i=0; i<cadenaNumeros.length; i++){
    suma += cadenaNumeros[i];
  }

  return suma;
}

export default sumar;
