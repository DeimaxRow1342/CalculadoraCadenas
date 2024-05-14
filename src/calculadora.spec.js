import sumar from "./calculadora.js";

describe("Calcular la suma de una cadena de numeros", () => {
  it("Si se envia una cadena vacia, se deberia retornar 0", () => {
    expect(sumar([])).toEqual(0);
  });

  it("Si se envia una cadena con un numero, se deberia retornar ese mismo numero", () => {
    expect(sumar([5])).toEqual(5);
  });

  it("Si se envia una cadena con dos numeros, se deberia retornar la suma de estos numeros", () => {
    expect(sumar([2,4])).toEqual(6);
  });
});
