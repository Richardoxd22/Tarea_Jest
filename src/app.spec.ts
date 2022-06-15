import{Factura1,sumar} from "./app";

const factura1 = new Factura1();
describe("Functions Randoms",()=>{

test('debe sumar[10] y [20] devolver [30] con la funcion sumar',()=>{

    //AAA

    //Arranque
    const primervalor=10
    const segundovalor=20
    const resultExpected=30

    let result:number 
    //Act

    result=sumar(primervalor,segundovalor)

    //Assert
    expect(
        result
    ).toBe(resultExpected)
    })


test('Debe multiplicar [3] y [1.25] y devolver [3.75]', ()=>{
    const cantidad = 3
    const precio = 1.25 
    const resultadoExpected= 3.75

    let resultado:number

    resultado = factura1.CalcProdTotal(cantidad,precio)


    expect(
        resultado
    ).toBe(resultadoExpected)
})

test('Debe sumar [1] + [1.10] y devolver [2.10]',()=>{
    const precio1 = 1
    const precio2= 1.10    
    const resultExpected= 2.10

    let result: number

    result = factura1.CalcSubTotal(precio1,precio2)

    expect(
        result
    ).toBe(resultExpected)

})

test('La multicapliacion [3.50] con [0.12] y el resultado debe sumar [3.50] y devolver [3.92]',() =>{
    const subtotal = 3.50
    const resultExpected =3.92
    let result: number

    result = factura1.CalcTotalT(subtotal)

    expect(
        result
    ).toBe(resultExpected)
})


test("verificamos que imprima la factura con los datos",()=>{
    factura1.ingresarproducto({id:"2",nombreprodc:"pan",precio:1.25,cant:3})
    const ingprod= factura1.findproducto(factura1.productos[0].nombreprodc)
    expect(ingprod).toEqual(
        expect.objectContaining({
            "id":"2",
            "cant":3,
            "nombreprodc":"pan",
            "precio":1.25
        })
    )
    const expected= expect.any(String)
    
})

test("devolvemos para imprimir",()=>{
    factura1.ingresarproducto({id:"2",nombreprodc:"pan",precio:1.25,cant:3});
    const findnomb = jest.fn()
    factura1.findproducto(findnomb);
    })
})