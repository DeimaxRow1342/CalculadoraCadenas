import sumar from "./calculadora.js";

describe("Calcular la suma de una cadena de numeros", () => {
  it("Si se envia una cadena vacia, se deberia retornar 0", () => {
    expect(sumar([])).toEqual(0);
  });
});
