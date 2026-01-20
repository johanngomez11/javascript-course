/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

let myName = "Johann"
let hello = "Hola, "

// 1. Concatena dos cadenas de texto
let greeting = "Hola, " + myName + "!"

// 2. Muestra la longitud de una cadena de texto
console.log(greeting.length)

// 3. Muestra el primer y último carácter de un string
console.log(greeting[0])
console.log(greeting[12])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let string = `Hola soy una 
cadena de texto en 
varias líneas`
console.log(string)

// 6. Interpola el valor de una variable en un string
console.log(`Hola ${myName}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let string2 = "Hola-soy-una-cadena-de-texto-en-una-línea"
console.log(string2)

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(greeting.includes("Johann"))

// 9. Comprueba si dos strings son iguales
console.log("hola" == "hola")

// 10. Comprueba si dos strings tienen la misma longitud
console.log(myName.length == hello.length)