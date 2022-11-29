<template>
    <hr>
    <div>
      <h2>Ejercicio 1</h2>
      <h3>My favorite Movies</h3>
      <ul>
        <li v-for="(top5Pelis, index) in top5Pelis" :key="index">
          {{ index+1}} - {{ top5Pelis }}
        </li>
      </ul>
    </div>
    <hr>
    <div>
      <h2>Ejercicio 2</h2>
      <ul>
        <li v-for="(value, key, index) in thingFavorite" :key="index">
          {{ key }}: {{ value }}.
        </li>
      </ul>
    </div>
    <hr>
    <div>
      <h2>Ejercicio 3</h2>
      <ul>
        <li v-for="(compi, index) in compis" :key="index">
          <div v-if="compi.age >= 18">
            <!-- <h4>{{compis.name }}</h4>
            <h6>{{compis.age }}</h6>
            <p>{{ compis.favoriteLanguages }}</p> -->
            <p>I can go for a few drinks with {{compi.name}} after class</p>
          </div>
          <div v-else>
            <p>{{compi.name}} is still too young, they'll have to go home tonight</p>
          </div>
          <ul>
            <li v-for="lengua in compi.favoriteLanguages">{{lengua}}</li>
          </ul>
        </li>
      </ul>
    </div>
    
</template>

<script setup>

// Ejercicios Iterating Elements

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos una variable reactiva que contenga un array con vuestras cinco películas preferidas. En el template pondremos un título de My favorite Movies y después una <ol>. Dentro de la ordered list recorreremos el array de películas y crearemos un <li> para cada una que nos las printee en pantalla. A cada <li> le daremos el index del elemento en el array como key.

import { reactive } from "vue";

// Iterating Arrays
const top5Pelis = reactive([
  "Encantada",
  "Miercoles",
  "in side",
  "ring",
  "Feliz navidad",
  "Solo en casa",
]);

// Ej.2:  Creamos una variable reactiva que contenga un objeto con cinco keys: favoriteFood, favoriteDrink, favoriteSport, favoriteCountry y favoriteArrayMethod. En el template vamos a recorrer el objeto para mostrar cada key y su valor en una unoredered list (en pantalla deberíamos ver algo como "favoriteFood: Sushi").

const thingFavorite = reactive(
  { favoriteFood: "sushi", 
    favoriteDrink: "sake", 
    favoriteSport: "judo",
    favoriteCountry: "japón", 
    favoriteArrayMethod: ".map()",
  });

// Ej.3***: Creamos una variable reactiva students que contenga un array con al menos tres objetos. Cada objeto representará uno de vuestros compañeros y tendrá las keys name (string), age(number) y favoriteLanguages(array de strings). Tendremos que recorrer el array en el template y para cada objeto printear el nombre de vuestro compañero. Según si su edad es mayor o menor a 18 printearemos "I can go for a few drinks with NAME after class" o "NAME is still too young, they'll have to go home tonight". Finalmente, loopeamos el array de sus lenguajes de programación favoritos dentro de una unordered list.
const compis = reactive([
  { 
    name: "Susi", 
    age: 20, 
    favoriteLanguages: ["catalán", "inglés"] 
  },
  { 
    name: "Math", 
    age: 25, 
    favoriteLanguages: ["eusquera", "alemán"] 
  },
    {
    name: "Jake", 
    age: 33, 
    favoriteLanguages: ["mallorquín", "francés"] 
  },
]);

</script>

<style>
</style>