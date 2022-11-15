// Quiero saber cuantas palabras tiene cada párrafo:
let pPrimero;
let pSegundo;
let pTercero;

let pQPrimero;
let pQSegundo;
let pQTercero;

pPrimero = document.body.childNodes[3].innerHTML;
pSegundo = document.body.childNodes[7].innerHTML;
pTercero = document.body.childNodes[11].innerHTML;

pQPrimero = pPrimero.split(" ").length;
pQSegundo = pSegundo.split(" ").length;
pQTercero = pTercero.split(" ").length;

document.body.childNodes[5].innerHTML = `Este parrafo tiene ${pQPrimero} palabras`;
document.body.childNodes[9].innerHTML = `Este parrafo tiene ${pQSegundo} palabras`;
document.body.childNodes[13].innerHTML = `Este parrafo tiene ${pQTercero} palabras`;

//Quiero contar cuantas veces sale la palabra "et".
const arrayPPprimero = pPrimero.split(" ");
const result = arrayPPprimero.filter((word) => word == "et");

document.body.childNodes[15].innerHTML = `La palabra "et", del latín, aparece ${result.length} veces en estos parrafos.`;

// ¿Son cap i cua?
let phraseToCheck = [];

let stringComprobar = [
  "A man, a plan, a canal, Panama!",
  "Amor, Roma",
  "race car",
  "stack cats",
  "step on no pets",
  "taco cat",
  "put it up",
  "Was it a car or a cat I saw?",
  "No 'x' in Nixon",
];
let stringComprobarClear = [];
let stringComprobarClearInvertido = [];

// Limpiaremos los strings para poder trabajar con ellos y tendremos uno original limpio y uno invertido limpio.
for (let i = 0; i < stringComprobar.length; i++) {
  stringComprobarClear.push(
    stringComprobar[i].replace(/,/g, "").replace(/ /g, "")
  );
  stringComprobarClearInvertido.push(
    stringComprobar[i]
      .split("")
      .reverse()
      .join()
      .replace(/,/g, "")
      .replace(/ /g, "")
      .replace(/!/g, "")
  );
}

//Revisar esto, no mira lo que queremos
for (let i = 0; i < stringComprobarClear.length; i++) {
  if (stringComprobarClear[i] === stringComprobarClearInvertido[i]) {
    phraseToCheck.push(stringComprobarClear);
  }
}

console.log(phraseToCheck);
