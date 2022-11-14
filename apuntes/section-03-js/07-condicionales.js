// condicionTrue = true;

// if (condicionTrue) {
//   console.log(" La condición es true, por eso imprimo");
// }

// //Caso práctico:

// // Si numero es mayor o igual a cero...

// const number = prompt("Enter a number: ");

// if (number >= 0) {
//   console.log(`${number}`, " es un número positivo");
// } else {
//   console.log(`${number}`, " no es un número positivo");
// }

// // Condicional con más de una condicion:
// if (number <= 10 && number >= 8) {
//   console.log(`${number}`, " es un excelente");
// } else if (number < 8 && number >= 6) {
//   console.log(`${number}`, " es un notable");
// } else if (number < 6 && number >= 5) {
//   console.log(`${number}`, " es un notable");
// } else if (number < 5) {
//   console.log(`${number}`, " es que necesitas mejorar");
// } else {
//   console.log(`${number}`, " no es un valor adecuado para un examen");
// }

// Ejercicio en clase:

//Somos un cine. Ofreceremos:
// A los menores de 15 le ofrecemos un 20% de descuento
// a los  menores de 6 entran gratis
// a los meyores o igual a 15 y menores o igual a 60, pagan el precio normal
// los de 60 tienen un descuento del 40%

let precioEntradaOriginal = 15;
const monedaEsp = "€";

let edadUsuario = prompt("Si quieres comprar una entrada diga su edad: ");

if (edadUsuario >= 0 && edadUsuario < 6) {
  console.log("Siempre que vaya con nun adulto, podrá entrar gratuitamente");
} else if (edadUsuario >= 6 && edadUsuario < 15) {
  let precioEntrada = (precioEntradaOriginal * 20) / 100;
  console.log(
    "Este menor puede entar sin la vigilancia de un adulto y su coste será con de",
    `${precioEntrada}`,
    `${monedaEsp}`
  );
} else if (edadUsuario >= 15 && edadUsuario < 60) {
  let precioEntrada = precioEntradaOriginal;
  console.log("El precio de la entrada es", `${precioEntrada}`, `${monedaEsp}`);
} else if (edadUsuario >= 60) {
  let precioEntrada = (precioEntradaOriginal * 40) / 100;
  console.log(
    "El precio de la entrada es especial para uted",
    `${precioEntrada}`,
    `${monedaEsp}`
  );
} else {
  console.log("No es una edad valida");
}
