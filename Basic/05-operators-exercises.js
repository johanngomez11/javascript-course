/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

let a = 5
let b = 10

// 1. Crea una variable para cada operación aritmética
let suma = a + b
let resta = a - b
let multiplicación = a * b
let división = a / b
let módulo = a % b
let exponente = a ** b
console.log(suma) // Suma
console.log(resta) // Resta
console.log(multiplicación) // Multiplicación
console.log(división) // División
console.log(módulo) // Módulo
console.log(exponente) // Exponente

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let myVariable = 2
console.log(myVariable)
myVariable += 2 // Suma con asignación
console.log(myVariable)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a < b)
console.log(a <= b)
console.log(a == 5)
console.log(a == a)
console.log(a === a)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(a > b)
console.log(a >= b)
console.log(a == b)
console.log(a == 6)
console.log(a !== a)

// 5. Utiliza el operador lógico and
console.log(5 > 10 && 15 > 20 && 30 > 40)

// 6. Utiliza el operador lógico or
console.log(5 > 10 || 15 > 20 || 30 > 40)

// 7. Combina ambos operadores lógicos
console.log(5 > 10 && 15 > 20 || 30 < 40)

// 8. Añade alguna negación
console.log(!(5 > 10 && 15 > 20))

// 9. Utiliza el operador ternario
let isSoccerPlayer = true
isSoccerPlayer ? console.log("Si es jugador de fut") : console.log("No es jugador de fut")

// 10. Combina operadores aritméticos, de comparáción y lógicas
a++
b--