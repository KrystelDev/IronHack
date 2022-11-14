// este es el syntax de un comenatrio.

// Ver un string desde consola:
console.log("Krystel");

// ver el puerto local desde consola:
console.log(document.domain);

// ver la dirección desde la consola:
console.log(document.URL);

// ver títuo de la page desde la consola:
console.log(document.title);

// ver el tipo de documento que es desde la consola:
console.log(document.doctype);

// ver el head desde la consola:
console.log(document.head);

// ver el body desde la consola:
console.log(document.body);

// ver la coleción de elementos que contiene el elemento desde la consola:
console.log(document.all);

// breaked notecion para apuntar al elemento dependiendo de su posición dentro de la colleción de document
console.log(document.all[8]);

console.log(
  (document.all[8].textContent = "Esto es un cambio desde JS (textContent)")
);

// modificar el texto del h1 que hay en la posición 8:
// opción A:
console.log(
  (document.all[8].innerHTML = "Esto es un cambio desde JS (innerHTML)")
);
// opción B:
console.log(document.links);

// Consultar cuantos links tenemos:
console.log(document.images);

// tablas:
console.table(["Barcelona", "Berlin", "Tokyo", "Liverpool"]);
console.table([
  { ciudad: "Barcelona", puntuación: 10 },
  { ciudad: "Madrid", puntuación: 10 },
  { ciudad: "Girona", puntuación: 10 },
  { ciudad: "Lleida", puntuación: 10 },
  { ciudad: "Badalona", puntuación: 10 },
  { ciudad: "Hospitalet de Llobregat", puntuación: 10 },
  { ciudad: "Terrassa", puntuación: 10 },
  { ciudad: "Manresa", puntuación: 10 },
]);
