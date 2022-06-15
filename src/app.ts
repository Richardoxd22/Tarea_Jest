export function sumar(a:number, b: number): number{
    return a+b 
}
export interface Producto{
    id:string;
    nombreprodc:string;
    precio:number
    cant:number;
    subtotal?:number
}

export class Factura1 {
    nombrecli:string="richard";
    direccion:string ="la prensa";
    telefono:string ="0984004786";
    subtotal?:number;
    result?:number;
    productos:Producto[]=[];

    ingresarproducto(producto:Producto){
        if(this.productos.length==0){
        this.productos.push(producto);
    }else{
        var concidencia = this.findproducto((enc:Producto)=>enc.nombreprodc==producto.nombreprodc);
        if(concidencia !== undefined){
            console.log("no entra");
            
        }else{
            producto.subtotal=producto.cant*producto.precio;
            this.productos.push(producto);
            console.log(this.productos);
        }
        }
     
    }
    findproducto(nombre:any){
        return this.productos.find((enc:Producto)=>enc.nombreprodc==nombre);

    }
    CalcProdTotal(cant:number, price:number){
        return cant * price
    }

    CalcTotalT(subtotal:number):number{
        var subtotal1 = (subtotal * 0.12)+ subtotal;
        return subtotal1;
    }
    //calcular la cantidad
    CalcSubTotal(producto1: number, producto2:number ){
         var resusubtotal = producto1+producto2;
        return resusubtotal;
    
    }
}


var factura =new Factura1();
console.log("Nombre a quien sale la factura",factura.nombrecli);
console.log("el subtotal del producto sin iva",factura.CalcSubTotal(1,1.10));
console.log("el total del producto con iva",factura.CalcTotalT(2.10).toFixed(2));
console.log("Total a pagar",factura.CalcProdTotal(3,1.25).toFixed(2));




