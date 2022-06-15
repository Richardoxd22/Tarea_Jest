"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcTotalT = exports.CalcSubTotal = exports.CalcProdTotal = exports.sumar = void 0;
function sumar(a, b) {
    return a + b;
}
exports.sumar = sumar;
function CalcProdTotal(cant, price) {
    return cant * price;
}
exports.CalcProdTotal = CalcProdTotal;
function CalcSubTotal(producto1, producto2, producto3) {
    return producto1 + producto2 + producto3;
}
exports.CalcSubTotal = CalcSubTotal;
function CalcTotalT(subtotal) {
    return (subtotal * 0.12) + subtotal;
}
exports.CalcTotalT = CalcTotalT;
