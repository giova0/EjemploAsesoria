// Ejercicio características personas
/*
const nombre = "Diego";
const apellidoPaterno = "Perez";
const apellidoMaterno = "Dominguez";
var edad = 15;
const lugarNacimiento = "México";
*/


// Ejercicio Características coche
/*
var placa = "HHF-453";
const modelo = "Corolla";
const marca = "Toyota";
const paisOrigen = "Japon";
const anio = 2010;

console.log(paisOrigen)
*/


// Tipos de datos
/*
var numero1 = 5;
var numero2 = 1500;

var texto1 = "Bicicleta";
var texto2 = "Bienvenidos al curso";

var boleanoVerdadero = true;
var boleanoFalso = false;
var condicion = null;

var valorIndefinido;
console.log(valorIndefinido);
*/

// tipo de dato Arreglo 1
//const arreglo = [5000, 4200, 10, 30, 15];
//console.log(arreglo);

// tipo de dato Arreglo 2
//const arreglo2 = ["Luis", "Erick", 4200, 10, 30, 15];
//console.log(arreglo2);

//Tipo de dato "Object" - Objeto( Entidad de la vida real )
//Ejemplo - Con base en las características de una persona 
//descritas en el programa "tiposDeclaración.js", se
//hará su representación a objeto, esto consiste en
//guardar sus características dentro de una unica variable.

//Objeto persona
var persona = {
    nombre: "Diego", 
    apellidoPaterno: "Perez", 
    apellidoMaterno: "Dominguez",
    edad: 15,
    lugarNacimiento: "México"
};
console.log(Object.keys(persona));  //muestra los valores del objeto con comas

//muestra los valores del objeto sin comas

Object.keys(persona).forEach((valor) => {
    console.log(valor)
});

