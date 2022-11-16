const creatElement = document.createElement("div");
// console.log("Estructura: ");
// console.log(creatElement);

creatElement.innerText = "Js es demasiado cool";
// console.log("InnerText: ");
// console.log(creatElement);

// let parentElement = document.querySelector("#parent").appendChild(creatElement);

let parentElement2 = document
  .querySelector("#parent #firstchild")
  .appendChild(creatElement);

creatElement.className = "ejemplo1";
// console.log(creatElement);

// Ejercicios en clase

// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>
const creatElementDivPadre = document.createElement("div");
creatElementDivPadre.id = "insert-p";
console.log("Estructura ejercicio: ");
creatElementDivPadre.innerHTML = "Soy el div padre de p";

const creatElementPHijo = document.createElement("p");
creatElement.innerHTML = "Soy hijo del div";

const posicionarElementDivPadre = document
  .querySelector("body")
  .appendChild(creatElementDivPadre);

const posicionarElementPHijo = document
  .querySelector("#insert-p")
  .appendChild(creatElementPHijo);

console.log(creatElementDivPadre);

// 2º - Crea un <div id="nested"></div> desde código
const creatElementDivPadre2 = document.createElement("div");
creatElementDivPadre2.id = "nested";
console.log(creatElementDivPadre2);
// ------> solo lo creo, no pide posición.

// 1 - Crea un botón que, al ser pulsado, introduzca en el dom un <p>Texto insertado</p>
// 1.crear button:
const creatElementButton = document.createElement("button");
creatElementButton.id = "soyYo";
console.log("Button existe: ");
creatElementButton.innerHTML = "Toc-Toc!";
console.log(creatElementButton);
// 2. Crear una variable para llamar al button rápido
const elementButton = document.querySelector("#master");
// posicionar el button a la pag web
const posicionarElementButton = document
  .querySelector("#firstchild")
  .appendChild(creatElementButton);

// crear lo que tiene que hacer:
const eventTocToc = () => {
  //   const creatElementPButton = document.createElement("p");
  //   creatElement.innerHTML = "Texto insertado";
  //   document.querySelector("#firstchild").appendChild(creatElementPButton);
  console.log("Onclick");
};
console.log(elementButton);
// decirle que él es el que tiene que hacer la función
elementButton.addEventListener(("click", eventTocToc));

// 2 - Crea un elemento de color verde y un botón para togglear el color de verde a rojo.
