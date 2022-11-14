// VARIABLES
// more info: https://www.programiz.com/javascript/variables-constants

// En programación, una variable es un contenedor (área de almacenamiento) para almacenar datos:
var alcanceFunción = "var variable";
let alcanceBloque = "let variable actualizada";
const constante = "const variable constante";

// Se pueden declarar variables MUTABLES sin datos:
var x;
let y;

// Si imprimimos una variable sin datos, saldrá undefined
console.log(x);

// si queremos mutar esta variable podemos hacerlo diractamente:
x = "x";
console.log(x);

// Practica en clase:

// Hola mi nombre es Diego Zito, tengo 31 años y me gusta mucho tocar guitarra

// Vais a tener que usar las diferentes variables de vuestra bio. En el caso del hobby vamos a reasignarle un valor distinto en cada iteración del console.log()

const mess1 = "Hola mi nombre es";
const mess2 = ", tengo";
const mess3 = "años y me gusta mucho";

// Esto de a bajo no es del ejercicio:
let usuarios = [
  {
    name: "Diego",
    age: 31,
    hobbies: ["tocar la guitarra", "dar clase", "escuchar música"],
  },
  {
    name: "Jean Carlos",
    age: 35,
    hobbies: ["la comida", "wordPress", "emprender"],
  },
  {
    name: "Patricia",
    age: 22,
    hobbies: ["aprender", "viajar", "ver películas"],
  },
  {
    name: "Aleix",
    age: 30,
    hobbies: ["investigar", "salir al cine", "leer"],
  },
  {
    name: "Krystel",
    age: 33,
    hobbies: ["hacer escape rooms", "tener el piso limpio", "dibujar"],
  },
];

console.log(
  mess1,
  usuarios[0].name,
  mess2,
  usuarios[0].age,
  mess3,
  usuarios[0].hobbies[2]
);
console.log(
  mess1,
  usuarios[1].name,
  mess2,
  usuarios[1].age,
  mess3,
  usuarios[1].hobbies[2]
);
console.log(
  mess1,
  usuarios[2].name,
  mess2,
  usuarios[2].age,
  mess3,
  usuarios[2].hobbies[2]
);
console.log(
  mess1,
  usuarios[3].name,
  mess2,
  usuarios[3].age,
  mess3,
  usuarios[3].hobbies[2]
);
console.log(
  mess1,
  usuarios[4].name,
  mess2,
  usuarios[4].age,
  mess3,
  usuarios[4].hobbies[2]
);

let usuario = {
  firstName: "Krystel",
  lastName: "Rodríguez",
  age: 33,
  hobbies: ["hacer escape rooms", "tener el piso limpio", "dibujar"],
};
const espacio = " ";
console.log(
  mess1 +
    espacio +
    usuario.firstName +
    espacio +
    usuario.lastName +
    espacio +
    mess2 +
    espacio +
    usuario.age +
    espacio +
    mess3 +
    espacio +
    usuario.hobbies[2]
);

// es equivalente
console.log(8 == "8");

// es identico
console.log(8 === "8");

let num = 8;
let string = "8";

console.log(num == string);
console.log(num === string);
