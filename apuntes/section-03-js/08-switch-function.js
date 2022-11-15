// Switch caso practico en clase:

// comento para ver lo demás...
// let usuario = prompt("Escribe tu país: ").toLocaleLowerCase();

// switch (usuario) {
//   case "españa":
//   case "Francia":
//   case "italia":
//     alert(`Genial, ${usuario} es un pais de eruopa`);
//     break;
//   case "venezuela":
//   case "ecuador":
//   case "colombia":
//     alert(`Genial, ${usuario} es un pais de sud america`);
//     break;
//   default:
//     break;
// }

//funciones "antiguas"
function saludar() {
  console.log("Hola");
}

saludar();

let nombre = "Krystel";

function saludarNombre(nombre) {
  console.log(`Hola ${nombre}`);
}

saludarNombre(nombre);

//funciones "ES6"
const saludarC = () => console.log("Hola");

const saludarNombreC = (nombre) => console.log(`Hola ${nombre}`);

saludarC();
saludarNombreC(nombre);

let age = 21;

let welcome =
  age < 18
    ? () => console.log("eres menor de edad")
    : () => console.log("eres mayor de edad");

welcome();

// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera. Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad". Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

let nameD = "Diego";
let ageD = 30;
let livesIn = {
  livesInCity: true,
  livesInTown: false,
};
let vivir;

const funcionArrow = (nameD, ageD, livesIn) => {
  if (livesIn.livesInCity) {
    vivir = "ciudad";
  } else {
    vivir = "pueblo";
  }
  console.log(`${nameD} tiene ${ageD} años y vive en la ${vivir}`);
};
funcionArrow(nameD, ageD, livesIn);

const funcionArrowTernario = (nameD, ageD, livesIn) => {
  livesIn.livesInCity ? (vivir = "ciudad") : (vivir = "pueblo");
  console.log(`${nameD} tiene ${ageD} años y vive en la ${vivir}`);
};
funcionArrowTernario(nameD, ageD, livesIn);

const funcionArrowSwitch = (nameD, ageD, livesIn) => {
  switch (livesIn.livesInCity) {
    case true:
      vivir = "ciudad";
      break;

    default:
      vivir = "pueblo";
      break;
  }
  console.log(`${nameD} tiene ${ageD} años y vive en la ${vivir}`);
};
funcionArrowSwitch(nameD, ageD, livesIn);
