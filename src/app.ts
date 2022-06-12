export function sumar(a:number, b: number): number{
    return a+b 
}

export function CalcProdTotal(cant:number, price:number):number{
    return cant * price
}

export function CalcSubTotal(producto1: number, producto2:number,producto3:number ){
    return producto1+producto2+producto3
}

export function CalcTotalT(subtotal:number):number{
    return (subtotal * 0.12)+ subtotal
}

interface IProducto extends IProductoD{
    cant:number
}

interface IProductoD{
    nombreprodc:string;
    precio:number
}