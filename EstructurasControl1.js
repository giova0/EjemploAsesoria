//EstructurasControl1

//Operadores Lógicos   && ("AND" o "Y")

var oplN1 = 5;
var oplN2 = 20;
var oplN3 = 30;

var resultadoOperadorLY =    (oplN1 < oplN2) && (oplN2 < oplN3);
console.log("el resultado del operador Y, es: " + resultadoOperadorLY); // + es para concatenar


//Operadores Lógicos   || ("OR" o "O")

var resultadoOperadorLO =    (oplN1 < oplN2) || (oplN2 < oplN3);
console.log("el resultado del operador ó, es: " +  resultadoOperadorLO);

// Resultado operador &&
// tabla del &
// v & v = v
// v & f = f
// f & v = f
// f & f = f

// tabla del ó
// v || v = v
// v || f = v
// f || v = v
// f || f = f


//Operadores Lógicos Negación  !

var resultadoOperadorLN =   !resultadoOperadorLO;
console.log("el resultado de la negación del operador ó, es: " + resultadoOperadorLN);


// tabla negación
// !v = f
// !f = v

