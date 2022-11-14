// Estructuras y tipos de datos

// El último estándar ECMAScript define nueve tipos:

// Seis tipos de datos primitivos, controlados por el operador typeof:
//          Undefined: typeof instance === "undefined"
//          Boolean: typeof instance === "boolean"

//          Number: typeof instance === "number"
let numero = 1;
let resultado = numero++;

console.log(resultado);
//          String: typeof instance === "string"
let cadena = "Soy una cadena";
let cadena2 = "y yo";
let cadena3 = "también";

console.log(cadena, cadena2, cadena3, ".");

//          BigInt: typeof instance === "bigint"
//          Symbol: typeof instance === "symbol"
//          Null: typeof instance === "object"

// Resumen:
console.log(typeof "hola!"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" ???
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol); // "symbol"
console.log(typeof 23n); // "bigint"

// Tipo primitivo especial que tiene un uso adicional para su valor: si el objeto no se hereda, se muestra null;
//          Object: typeof instance === "object". Tipo estructural especial que no es de datos pero para cualquier instancia de objeto construido que también se utiliza como estructuras de datos: new Object, new Array, new Map (en-US), new Set, new WeakMap, new WeakSet, new Date y casi todo lo hecho con la palabra clave new;
// Function: una estructura sin datos, aunque también responde al operador typeof: typeof instance === "function". Esta simplemente es una forma abreviada para funciones, aunque cada constructor de funciones se deriva del constructor Object.

// Tipos de datos NO primitivos:

// Array
// Las matrices o Array se construyen por medio de la expresión literal [ ] o por medio del constructor new Array() o el método Array.of(). En todos los casos los Array son objetos y por lo tanto typeof no nos indica de que tipo se trata.
let array = ["Gery", "Estopa", "Spice Girlds", "Amelia"];
console.table(array);
var testArray = [1, 2, 3, 4];
console.log(typeof testArray === "object");
console.log(testArray instanceof Object === true);
console.log(testArray instanceof Array === true);
console.log(Object.prototype.toString.call(testArray) === "[object Array]");
console.log(testArray.constructor.name === "Array");
console.log(Array.isArray(testArray) === true);

// Objeto:
console.table({
  myCity: "Barcelona",
  yourCity: "Madrid",
  herCity: "Girona",
  hiCity: "Lleida",
  yoursCity: "Badalona",
  itsCity: "Hospitalet de Llobregat",
  onlceCity: "Terrassa",
  friendCity: "Manresa",
});

let peliculas = [
  {
    movie: "WOW",
    genre: ["Drama", "Action", "Comedy"],
    location: "NY",
    director: ["Martin Scorsese"],
    actors: ["Jonah Hill", "Margo Robbie", "Leo Di Carpio"],
    year: 2010,
  },
  {
    movie: "Fight club",
    genre: ["Drama", "Noir", "Action"],
    location: "ESP",
    director: ["Aleix"],
    actors: ["Diego", "Nicolas"],
    year: 2016,
  },
  {
    movie: "The Neon Demon",
    genre: ["thriller", "Noir", "Drama"],
    location: "Denmark",
    director: ["Aleix"],
    actors: ["Carlos", "Nicolas"],
    year: 2016,
  },
];
console.table(peliculas);
console.table(peliculas[0]);
console.log(`Mi actor favorito es ${peliculas[0].actors[0]}`);

// Pactica en clase:
let usuario = {
  firstName: "Kystel",
  lastName: "Rodríguez",
  citiesIlIvedIn: "Barcelona",
  age: 33,
  dob: "7-11-1989",
  drinkAlcohol: false,
};
console.table(usuario);
console.log(`Bebe alcohol?: ${usuario.drinkAlcohol}`);

let bestBook = [
  {
    bookName: "El món groc",
    genre: ["narrativa", "biografia"],
    author: "Albert Espinosa",
    year: 2019,
    ISBN: "978-84-17444-78-5",
  },
  {
    bookName: "Lestat el vampiro",
    genre: ["romance", "fantasia"],
    author: "Anna Rice",
    year: 1948,
    ISBN: "978-84-9070-784-5",
  },
  {
    bookName:
      "La noche que nos escuchamos: Una historia luminosa que te enseña a luchar",
    genre: ["narrativa", "biografia"],
    author: "Albert Espinosa",
    year: 202,
    ISBN: "978-84-25361-07-4",
  },
];

console.log(`My favorite book is ${bestBook[0].bookName}`);
