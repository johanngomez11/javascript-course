/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animalsArray = ["Lobo", "Perro", "Gato", "Leon", "Pantera"]
console.log(animalsArray)

// 2. Añade dos más. Uno al principio y otro al final
animalsArray.push("Mapache")
console.log(animalsArray.unshift("Mariposa"))
console.log(animalsArray)

// 3. Elimina el que se encuentra en tercera posición
animalsArray.splice(2,1)
console.log(animalsArray)

// 4. Crea un set que almacene cinco libros
let mySet = new Set(["Libro1", "Libro2", "Libro3", "Libro4", "Libro5"])
console.log(mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("Libro6")
mySet.add("Libro5")
console.log(mySet)

// 6. Elimina uno concreto a tu elección
mySet.delete("Libro4")
console.log(mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"],
])
console.log(myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.has(5))
console.log(myMap.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("summerMonths", ["Junio", "Julio", "Agosto"])
console.log(myMap)

console.log(myMap.has("summerMonths"))
console.log(myMap.get("summerMonths")[2]) // Acceder a un elemento del array que está dentro del map

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let array = [1, 2, "Perro"]
console.log(array)
let set = new Set(array)
console.log(set)
let map = new Map()
map.set("mySet", set)
console.log(map)

// Otra forma es instanciar el set directamente en el map
map.set("animales", new Set(["Lobo", "Perro"]))
console.log(map)

// Agregarle algo al set
map.get("animales").add("Gato")
console.log(map)

// Eliminar algo del set es igual que el add pero con delete