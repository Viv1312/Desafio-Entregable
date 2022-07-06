//ENTRADAS ONLINE CON DOS SECTORES

let entradaCampo = "a";
let entradaVip = "b";

let metodoEfectivo = 1;
let metodoTarjeta = 2;

let continuarCompra = "s";

function calcularPrecioEntrada(tipoEntrada, metodo) {
    let precioFinal = 0;
    let descuento = 0.7;
    let precioCampo = 1000;
    let precioVip = 2000;

    let tipoCampo = "a";
    let tipoVip = "b";

    let efectivo = 1;
    let tarjeta = 2;

    if (tipoEntrada == tipoCampo) {
        if (metodo == efectivo) {
            precioFinal = precioCampo * descuento;
        } else if (metodo == tarjeta){
            precioFinal = precioCampo;
        }
    } else if (tipoEntrada == tipoVip){
        if (metodo == efectivo) {
            precioFinal = precioVip * descuento;
        } else if (metodo == tarjeta){
            precioFinal = precioVip;
        }
    }

    return precioFinal;
}

while (continuarCompra == "s") {
    alert("Bienvenido a TuEntrada");
    alert("Entradas disponibles: \n ENTRADAS A: Campo \n ENTRADAS B: CampoVIP");

    let tipoEntrada = prompt("Elegi un sector: \n A \n B").toLowerCase();

    while(tipoEntrada!= 'a' && tipoEntrada != 'b'){
        alert("Tipo de entrada inexistente. Por favor ingrese una entrada válida");

        tipoEntrada = prompt("Elegi un sector: \n A \n B").toLowerCase();
    }

    let metodoPago = prompt("Elegi el metodo de pago: \n 1 - Efectivo\n  2 - Tarjeta");

    while(metodoPago!= 1  && metodoPago != 2){
        alert("Metodo de pago inexistente. Ingrese un número válido");

        metodoPago = parseInt(prompt("Elegi el metodo de pago: \n 1 - Efectivo \n  2 - Tarjeta"));
    }

    let precioFinal = calcularPrecioEntrada(tipoEntrada, metodoPago);

    alert("El valor de tu entrada es:" + precioFinal);

    continuarCompra = prompt("Queres comprar otra entrada? \n - S \n - N").toLowerCase();
}

alert("Gracias por su compra!.");