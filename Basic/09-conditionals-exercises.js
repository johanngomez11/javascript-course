/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Johann"

if(myName == "Johann"){
    console.log("El nombre es Johann")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "johann123"
let password = 123

if (user == "johann123" && password === 123) {
    console.log("Usted inició sesión.")
} else {
    console.log("Usuario o contraseña incorrecto.")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 11

if (number > 0) {
    console.log("El número es positivo")
} else if (number < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 11

if (age >= 18) {
    console.log("La persona puede votar")
} else {
    console.log(`A la persona le faltan ${18 - age} años`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const isAdult = age >= 18 ? "Es mayor de edad" : "No es mayor de edad"
console.log(isAdult)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = 8
let season

if (month >= 3 && month <= 5){
    season = "Primavera"
} else if (month >= 6 && month <= 8){
    season = "Verano"
} else if (month >= 9 && month <= 11){
    season = "Otoño"
} else if (month === 12 || month <= 2){
    season = "Invierno"
} else {
    season = "Número de mes incorrecto"
}

console.log(season)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
// switch
if (month = 1, 3, 5, 7, 8, 10, 12) {
    console.log("El mes tiene 31 días")
} else if (month = 4, 6, 9, 11) {
    console.log("El mes tiene 30 días")
} else if (month = 2) {
    console.log("El mes tiene 28 o 29 días")
} else {
    console.log("Número de mes incorrecto")    
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let languaje = "japon"
switch (languaje) {
    case "español":
        console.log("Hola")
        break;
    case "ingles":
        console.log("Hello")
        break;
    case "japon":
        console.log("Konishiwa")
        break;
    default:
        break;
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
month = 11
switch (month) {
    case 3:
    case 4: 
    case 5:
        season = "Primavera"
        break
    case 6:
    case 7: 
    case 8:
        season = "Verano"
        break
    case 9:
    case 10: 
    case 11:
        season = "Otoño"
        break
    case 12:
    case 1: 
    case 2:
        season = "Invierno"
        break
    default:
        season = "Número de mes incorrecto"
}
console.log(season)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let numberOfDays
switch (month) {
    case 1:
    case 3: 
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        numberOfDays = "El mes tiene 31 días"
        break
    case 4: 
    case 6:
    case 9:
    case 11:
        numberOfDays = "El mes tiene 30 días"
        break
    case 2:
        numberOfDays = "El mes tiene 28 o 29 días"
        break
    default:
        numberOfDays = "Número de mes incorrecto"
}
console.log(numberOfDays)