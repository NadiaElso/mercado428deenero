console.log("Supermercado Madariaga");
console.log("productos disponibles");
console.log(
  "Leche,azucar,yogurt, manteca, queso, fideos, salsa de tomate,aceite, crema de leche, dulce de leche, galletitas"
);
console.log("stock de los productos disponibles");
console.log(
  "4 packs de leche, 1 pack de azucar, 5 yogures, 4 mantecas, 4 quesos, 10 fideos, 10 salsa de tomates, 4 crema de leches, 6 paquetes de galletitas"
);

let nombreDesupermercado: string = "Madariaga";
let productosDisponibles: string =
  "Leche,Azucar, Yogurt, manteca, queso, fideos, salsa de tomate, aceite, crema de leche, dulce de leche, galletitas";
let stockLeche: number = 15;
let stockAzucar: number = 9;
let stockYogurt: number = 20;
let stockManteca: number = 10;
let stockQueso: number = 10;
let stockFideos: number = 20;
let stockSalsaDeTomate: number = 30;
let StockAceite: number = 15;
let StockCremaDeLeche: number = 9;
let stockDulceDeLeche: number = 7;
let stockGalletitas: number = 20;

console.log(nombreDesupermercado);
console.log(productosDisponibles);
console.log("Stock de leche:" + stockLeche);
console.log("Stock de Azucar" + stockAzucar);
console.log("Stock de Manteca" + stockManteca);
console.log("Stock de Queso" + stockQueso);
console.log("Stock de Fideos" + stockFideos);
console.log("Stock de Salsa de Tomates" + stockSalsaDeTomate);
console.log("Stock de Crema de Leche" + StockCremaDeLeche);
console.log("Stock de Dulce de Leche" + stockDulceDeLeche);
console.log("Stock de Galletitas" + stockGalletitas);
console.log("Stock de Aceite" + StockAceite);
console.log("Stock de Yogurt" + stockYogurt);

let precioLeche: number = 100;
let precioAzucar: number = 90;
let precioYogurt: number = 130;
let precioManteca: number = 80;
let precioQueso: number = 120;
let precioFideos: number = 70;
let preciosalsaDeTomates: number = 80;
let precioAceite: number = 90;
let precioCremaDeLeche: number = 90;
let precioDulceDeLeche: number = 60;
let precioGalletitas: number = 40;

console.log("El precio unitario es:" + precioLeche);
console.log("El  precio unitario es:" + precioAzucar);
console.log("El precio unitario es:" + precioYogurt);
console.log("EL precio unitario es:" + precioManteca);
console.log("El precio unitario es" + precioQueso);
console.log("El precio unitario es:" + precioFideos);
console.log("El precio unitario es:" + preciosalsaDeTomates);
console.log("El precion unitario es:" + precioGalletitas);
console.log("El precion unitario es:" + precioCremaDeLeche);
console.log("El precion unitario es:" + precioDulceDeLeche);

let ingresoproductonuevos1: string = String(
  prompt("ingreso de  producto nuevo 1")
);
let stockinicialdelosproductosnuevos1: number = Number(
  prompt("Ingresa stock inicial ")
);
let preciodelosproductosnuevos1: number = Number(prompt("ingresa el precio "));

let productonuevo1: string = "";
let stocknuevoproducto1: number = 0;
let precioproductonuevo1: number = 0;

if (stockinicialdelosproductosnuevos1 > 0 && preciodelosproductosnuevos1 > 0) {
  productonuevo1 = ingresoproductonuevos1;
  stocknuevoproducto1 = stockinicialdelosproductosnuevos1;
  precioproductonuevo1 = preciodelosproductosnuevos1;
}
console.log(
  `El primer producto agregado es: ${productonuevo1} $ ${precioproductonuevo1} con su stock inicial de ${stocknuevoproducto1}`
);

let ingresoproductonuevos2: string = String(
  prompt("ingreso de  producto nuevo 2")
);
let stockinicialdelosproductosnuevos2: number = Number(
  prompt("Ingresa stock inicial ")
);
let preciodelosproductosnuevos2: number = Number(prompt("ingresa el precio "));

let productonuevo2: string = "";
let stocknuevoproducto2: number = 0;
let precioproductonuevo2: number = 0;

if (stockinicialdelosproductosnuevos2 > 0 && preciodelosproductosnuevos2 > 0) {
  productonuevo2 = ingresoproductonuevos2;
  stocknuevoproducto2 = stockinicialdelosproductosnuevos2;
  precioproductonuevo2 = preciodelosproductosnuevos2;
}
console.log(
  `El  segundo producto agregado es: ${productonuevo2} $ ${precioproductonuevo2} con su stock inicial de ${stocknuevoproducto2}`
);

let ingresoproductonuevos3: string = String(
  prompt("ingreso de  producto nuevo 3")
);
let stockinicialdelosproductosnuevos3: number = Number(
  prompt("Ingresa stock inicial ")
);
let preciodelosproductosnuevos3: number = Number(prompt("ingresa el precio "));

let productonuevo3: string = "";
let stocknuevoproducto3: number = 0;
let precioproductonuevo3: number = 0;

if (stockinicialdelosproductosnuevos3 > 0 && preciodelosproductosnuevos3 > 0) {
  productonuevo3 = ingresoproductonuevos3;
  stocknuevoproducto3 = stockinicialdelosproductosnuevos3;
  precioproductonuevo3 = preciodelosproductosnuevos3;
}
console.log(
  `El tercer producto agregado es: ${productonuevo3} $ ${precioproductonuevo3} con su stock inicial  de ${stocknuevoproducto3}`
);
