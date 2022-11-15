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
let sdrow = [];
let drow1 = [];
let drow2 = [];
let drow3 = [];
let drow4 = [];
let drow5 = [];
let drow6 = [];
let drow7 = [];
let drow8 = [];
let drow9 = [];

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

for (let i = 0; i < stringComprobar.length; i++) {
  let toArray = stringComprobar[i].replace(",", "").split(" ");
  for (let y = 0; y < toArray.length; y++) {
    switch (y) {
      case 0:
        drow1.push(toArray[y]);
        break;
      case 1:
        drow2.push(toArray[y]);
        break;
      case 2:
        drow3.push(toArray[y]);
        break;
      case 3:
        drow4.push(toArray[y]);
        break;
      case 4:
        drow5.push(toArray[y]);
        break;
      case 5:
        drow6.push(toArray[y]);
        break;
      case 6:
        drow7.push(toArray[y]);
        break;
      case 7:
        drow8.push(toArray[y]);
        break;
      case 8:
        drow9.push(toArray[y]);
        break;
    }
  }
  switch (i) {
    case 0:
      sdrow.push(drow1);
      break;
    case 1:
      sdrow.push(drow2);
      break;
    case 2:
      sdrow.push(drow3);
      break;
    case 3:
      sdrow.push(drow4);
      break;
    case 4:
      sdrow.push(drow5);
      break;
    case 5:
      sdrow.push(drow6);
      break;
    case 6:
      sdrow.push(drow7);
      break;
    case 7:
      sdrow.push(drow8);
      break;
    case 8:
      sdrow.push(drow9);
      break;
  }
}

console.log(sdrow);
