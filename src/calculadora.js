function sumar(cadenaNumeros, separadores) {
  if (cadenaNumeros === "") {
    return 0;
  }

  let separador = ",";
  if (separadores && separadores.length > 0) {
    separador = separadores;
  }

  const numeros = cadenaNumeros.split(new RegExp(`[${separador}|\\-]`)); 

  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    const numero = parseInt(numeros[i]);
    if (!isNaN(numero) && numero <= 1000) {
      suma += numero;
    }
  }

  return suma;
}

export default sumar;
