const arr = [1, 2, 3, 4, 5, 1];
const animals = ["gos", "gat", "canari", "esquirol", "caball"];

//.map()
const mapped = arr.map((numero) => numero + 20);
console.log(mapped);

const newAnimals = animals.map((animal) => {
  const storage = animal;
  console.log(`${animal} és un animal de la llista`);
});

//.filter()
const filtered = arr.filter((numero) => numero === 2 || numero === 1);
console.table(filtered);

const filteredAnimals = animals.filter(
  (animal) => animal === "esquirol" || animal === "gat"
);
console.table(filteredAnimals);

//.sort()
const animalsSort = animals.sort();
console.log(animalsSort);

const animalsSortInversa = animals.sort((a, b) => (a > b ? -1 : 1));
console.log(animalsSortInversa);

// includes, join, reduce

// Crea una función que añada el primer elemento al principio de un array y el segundo elemento al final del mismo array.
const annadirPrimensSecuns = (elemento1, elemento2) => {
  console.log(`L'array és: ${animals}`);
  animals.unshift(elemento1);
  console.log(`I ara l'array és: ${animals}`);
  animals.push(elemento2);
  console.log(`Finalmente l'array és: ${animals}`);
};
annadirPrimensSecuns("primens", "loser");
