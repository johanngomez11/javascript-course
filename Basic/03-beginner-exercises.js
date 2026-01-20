/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// Hola

// 2. Escribe un comentario en varias líneas
/* Esto es un comentario
en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myName = "Johann"
let age = 23
let isSoccerPlayer = true
let undefinedValue
let calification = null
let mySymbol = Symbol("Lobo")
let myBigInt = BigInt(111111111111111111111111111111111111111111111111111111111) 

// 4. Imprime por consola el valor de todas las variables
console.log(myName, age, isSoccerPlayer, undefinedValue, calification, mySymbol, myBigInt, "\n");

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myName);
console.log(typeof age);
console.log(typeof isSoccerPlayer);
console.log(typeof undefinedValue);
console.log(typeof calification);
console.log(typeof mySymbol);
console.log(typeof myBigInt, "\n");

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myName = "David"
age = 31
isSoccerPlayer = false
mySymbol = Symbol("Lobo solitario")
console.log(typeof myName);
console.log(typeof age);
console.log(typeof isSoccerPlayer);
console.log(typeof mySymbol, "\n");

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = true
age = "23"
isSoccerPlayer = null
calification = 11
console.log(typeof myName);
console.log(typeof age);
console.log(typeof isSoccerPlayer);
console.log(typeof calification);


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const nameConst = "Johann"
const ageConst = 23
const isSoccerPlayerConst = true
const undefinedValueConst = undefinedValue
const calificationConst = null
const mySymbolConst = Symbol("Lobo")
const myBigIntConst = BigInt(111111111111111111111111111111111111111111111111111111111) 

// 9. A continuación, modifica los valores de las constantes
/* Los valores constantes no se pueden modificar
nameConst = "David"
ageConst = 31
isSoccerPlayerConst = false
undefinedValueConst = null
calificationConst = 10
mySymbolConst = Symbol("Lobo solitario")
myBigIntConst = BigInt(111111111111111111111111111111111111111111111111111111112)
*/

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse