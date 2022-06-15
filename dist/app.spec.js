"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
describe("Functions Randoms", () => {
    test('debe sumar[10] y [20] devolver [30] con la funcion sumar', () => {
        //AAA
        //Arranque
        const primervalor = 10;
        const segundovalor = 20;
        const resultExpected = 30;
        let result;
        //Act
        result = (0, app_1.sumar)(primervalor, segundovalor);
        //Assert
        expect(result).toBe(resultExpected);
    });
    test('Debe multiplicar [3] y [1.25] y devolver [3.75]', () => {
        const cantidad = 3;
        const precio = 1.25;
        const resultadoExpected = 3.75;
        let resultado;
        resultado = (0, app_1.CalcProdTotal)(cantidad, precio);
        expect(resultado).toBe(resultadoExpected);
    });
    test('Debe sumar [1] + [1.10] + [1.20] y devolver [3.30]', () => {
        const precio1 = 1;
        const precio2 = 1.10;
        const precio3 = 1.20;
        const resultExpected = 3.30;
        let result;
        result = (0, app_1.CalcSubTotal)(precio1, precio2, precio3);
        expect(result).toBe(resultExpected);
    });
    test('La multicapliacion [3.50] con [0.12] y el resultado debe sumar [3.50] y devolver [3.92]', () => {
        const subtotal = 3.50;
        const resultExpected = 3.92;
        let result;
        result = (0, app_1.CalcTotalT)(subtotal);
        expect(result).toBe(resultExpected);
    });
});
