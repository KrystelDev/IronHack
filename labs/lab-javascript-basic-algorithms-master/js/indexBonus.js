// Quiero saber cuantos caracteres tiene, inclusive espacios etc, cada párrafo
let pPrimero;
let pSegundo;
let pTercero;

let pQPrimero;
let pQSegundo;
let pQTercero;

pPrimero = document.body.childNodes[3].innerHTML;
pSegundo = document.body.childNodes[7].innerHTML;
pTercero = document.body.childNodes[11].innerHTML;

pQPrimero = pPrimero.length;
pQSegundo = pSegundo.length;
pQTercero = pTercero.length;

document.body.childNodes[5].innerHTML = `Este parrafo tiene ${pQPrimero} carácteres`;
document.body.childNodes[9].innerHTML = `Este parrafo tiene ${pQSegundo} carácteres`;
document.body.childNodes[13].innerHTML = `Este parrafo tiene ${pQTercero} carácteres`;
