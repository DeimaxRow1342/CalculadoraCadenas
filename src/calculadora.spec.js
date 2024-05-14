import sumar from "./calculadora.js";

describe("Calcular la suma de una cadena de numeros", () => {
  it("Si se envia una cadena vacia, se deberia retornar 0", () => {
    expect(sumar("", "")).toEqual(0);
  });

  it("Si se envia una cadena con un numero, se deberia retornar ese mismo numero", () => {
    expect(sumar("5", "")).toEqual(5);
  });

  it("Si se envia una cadena con dos numeros, se deberia retornar la suma de estos numeros", () => {
    expect(sumar("2,4", "")).toEqual(6);
  });

  it("Si se envia una cadena con varios numeros, se deberia retornar la suma de estos", () => {
    expect(sumar("2,4,6,8", "")).toEqual(20);
  });

  it("Si se envia una cadena con numeros separados por comas y guiones, se deberia retornar la suma correcta", () => {
    expect(sumar("1,2-3,4", "")).toEqual(10);
  });

  it("Si se envia una cadena con varios numeros y se especifican varios delimitadores, se deberia retornar la suma correcta", () => {
    expect(sumar("1;2-3;4", ";-")).toEqual(10);
  });
});