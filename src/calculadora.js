function sumar(cadenaNumeros) {
  if (cadenaNumeros === "") {
    return 0;
  }

  let suma = 0;
  const numeros = cadenaNumeros.split(/[,|-]/); // Dividir la cadena en números usando comas y guiones como separadores

  for (let i = 0; i < numeros.length; i++) {
    suma += parseInt(numeros[i]);
  }

  return suma;
}

export default sumar;