// Bucles JavaScript
// Los bucles son útiles si desea ejecutar el mismo código una y otra vez, cada vez con un valor diferente.

// A menudo, este es el caso cuando se trabaja con matrices:
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// En vez de tener que esribir tantas lineas de codigo:
let text = "";
text += cars[0] + " ";
text += cars[1] + " ";
text += cars[2] + " ";
text += cars[3] + " ";
text += cars[4] + " ";
text += cars[5] + " ";

console.log(text);

//Sw puede usar un loop como el for:
let text1 = "";
for (let i = 0; i < cars.length; i++) {
  text1 += cars[i] + " ";
}
console.log(text1);

// Diferentes tipos de bucles
// JavaScript admite diferentes tipos de bucles:

// for- recorre un bloque de código varias veces

// for/in- recorre las propiedades de un objeto
const person = { fname: "John", lname: "Doe", age: 25 };

let text3;
for (let x in person) {
  text3 += person[x] + " ";
}
console.log(text3);

// for/of- recorre los valores de un objeto iterable

// while- recorre un bloque de código mientras una condición específica es verdadera
// El while recorre un bloque de código siempre que una condición específica sea verdadera.

// Sintaxis
// while (condition) {
//   // code block to be executed
// }
// Ejemplo
// En el siguiente ejemplo, el código del ciclo se ejecutará una y otra vez, siempre que una variable (i) sea menor que 10:

// Ejemplo
let i = 0;
let text4 = "";
while (i < 10) {
  text4 = "The number is " + i;
  i++;
  console.log(text4);
}

// do/while- también recorre un bloque de código mientras una condición específica es verdadera

// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.
const coches = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let count = 0;
let cochesL = coches.length;
while (cochesL--) {
  console.log(coches[count]);
  count++;
}

// EJERCICIO - 002
// Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").
let famosos = ["Gery", "Tom", "Mikie Mouse", "Minnie Mouse", "Bugs Bunny"];
let contador = 0;
let famososL = famosos.length;
while (famososL--) {
  console.log(`${famosos[contador]} is so famous, I love them.`);
  contador++;
}
