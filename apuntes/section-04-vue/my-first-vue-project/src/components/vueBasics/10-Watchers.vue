<script setup>
import { ref, watch, reactive, computed } from "vue";

// EXPLICACION:

//Las propiedades computadas nos permiten calcular declarativamente valores derivados. Sin embargo, hay casos en los que necesitamos realizar "efectos secundarios" en reacción a los cambios de estado - por ejemplo, mutando el DOM, o cambiando otra pieza de estado basada en el resultado de una operación asíncrona.

//Con la API de composición, podemos utilizar la función de "vigilancia" para desencadenar una devolución de llamada cada vez que cambie un fragmento de estado reactivo:

// Un watcher es una característica especial de Vue.js que te permite "vigilar" una
// propiedad del estado del componente, y ejecutar una función cuando el valor de
// esa propiedad cambia.



// Ejercicio 003 - MUTANDO ARRAYS
// IMPORTANTISMO
// CUANDO TRABAJAMOS CON WATCHERS ESPECIFICAMENTE TRABAJANDO WATCHERS Y APUNTANDO A DATSO NO PRIMITIVOS COMO OBJETOS Y ARRATS, NECESITAMOS EXPANDIR UN POCO EL METODO WATCH!!! CON UN OBJETO QUE SE LLAMA "{DEEP: TRUE}", SI NO EL WATCHER NO PODRA TRABAJAR CON DATOS NOPRIMITIVOS, SIEMPRE DEPENDEMOS DE ESTE OBJETO PARA PODER MUTAR O MANIPULAR ESTOS TIPOS DE DATOS!
const movieList = reactive([
  "Pulp Fiction",
  "Interstellar",
  "Wonder",
  "Jaws",
  "Ray",
]);

const addMoviePush = () => {
  movieList.push("Saving Private Ryan");
};
const addMovieConcat = () => {
  movieList.value.concat([
    "Pulp Fiction",
    "Interstellar",
    "Wonder",
    "Jaws",
    "Ray",
    "Titanic",
    "Life",
    "A Scanner Darkly",
  ]);
};

watch(
  movieList,
  (newVal, oldVal) => {
    console.log(`Lista de las pelis actualizada:${newVal}`);
  },
  // IMPORTANTISMO
  // CUANDO TRABAJAMOS CON WATCHERS ESPECIFICAMENTE TRABAJANDO WATCHERS Y APUNTANDO A DATSO NO PRIMITIVOS COMO OBJETOS Y ARRATS, NECESITAMOS EXPANDIR UN POCO EL METODO WATCH!!! CON UN OBJETO QUE SE LLAMA "{DEEP: TRUE}", SI NO EL WATCHER NO PODRA TRABAJAR CON DATOS NOPRIMITIVOS, SIEMPRE DEPENDEMOS DE ESTE OBJETO PARA PODER MUTAR O MANIPULAR ESTOS TIPOS DE DATOS!
  { deep: true }
);

// EJEMPLO 004 - PREGUNTANDO UNA SIMPLE PREGUNTA

const question = ref("");
const answer = ref(
  "Tipicamente esta pregunta termina con un simbolo de interrogacion"
);

//MONTAMOS WATCHER, MONITEROAMOS LA VARIABLE DE QUESTION y como trabajamos con un api, vamos a declarar una expresion que depende de las keywords async y await y dentro de esta expresion vamos a pasar un condiciional if ANIDADO que dentro del if, ejecutemos un tryCtach para conectarnos a la API y sacar una respuesta a la pregunta :)
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Pensando........ ya te respondo....";
    try {
      const response = await fetch("https://yesno.wtf/api");
      answer.value = (await response.json()).answer;
    } catch (error) {
      answer.value = `Hey, no me pude comunicar con la API, este error equivale a ${error}`;
    }
  }
});

watch(answer, (newVal, oldVal) => {
  console.log(
    `El valor antiguo de la respuesta fue ${oldVal} y el nuevo valor es ${newVal}`
  );
});

// -----
// -----
// -----
// -----
// -----
// Ejercicio de watchers
// Crea un componente que haga lo siguiente:
// 1- Te pregunte si te gusta la pizza inyectando la pregunta en un HTML.
// 2- De la respuesta en función a un JSON que debes crear
// 3- El JSON será un archivo local que conteste "Yey, te gusta la pizza" si dices que sí, "Que raro eres" si dices que no y "contéstame bien" si contestas cualquier otra cosa.
// 4- Junto a la contestación, debe aparecer una imagen divertida

//EJEMPLO DEL JSON
// [
//   {
//     "answer": "no",
//     "image": "https://t3.ftcdn.net/jpg/03/36/81/88/360_F_336818845_1tvrNYhwr19LfGiC4BDAeCJzm0mVHH48.jpg"
// }
// ]
</script>

<template>
  <div id="breakdown">
    <h1>WATCHERS</h1>
    <img
      src="https://www.noticiastrabajo.es/uploads/images/2022/11/vigilantes-securitas-ofertas.jpg"
      alt="Los Watchers"
    />
  </div>
  <div id="breakdown">
    <h3>Breakdown</h3>
    <!-- <p>{{ x + y }}</p> -->
    <input v-model="x" />
    <input v-model="y" />
    <input type="number" v-model="obj.count" />
  </div>
  <div id="ejemplo-1">
    <h3>Ejemplo 001</h3>
    <p>My name is what? my name is who? my name is what? {{ name }}</p>
    <button @click="changeName()">click me to see slim shady</button>
  </div>
  <div id="ejemplo-2">
    <h3>Ejemplo 002</h3>
    <h5>Volume Tracker (0-20)</h5>
    <p>El voumen actual es: {{ volume }}</p>
    <div>
      <button @click="volume -= 1">Reducir</button>
      <button @click="volume += 1">Incrementar</button>
    </div>
  </div>
  <div id="ejemplo-3">
    <h3>Ejemplo 003</h3>
    <!-- Mutar el Array con la info nueva - PUSH -->
    <button @click="addMoviePush()">Add Movie - PUSH</button>
    <!-- Creamos Nuevos Array - CONCAT -->
    <button @click="addMovieConcat()">Add Movie - CONCAT</button>
    <p v-for="(movie, index) in movieList" :key="index">{{ movie }}</p>
  </div>
  <div id="ejemplo-4">
    <h3>Ejemplo 004</h3>
    <p>Preguntame una pregunta closeEnded Question!</p>
    <input type="text" v-model="question" />
    <h5>{{ answer }}</h5>
  </div>
</template>

<style>
img {
  width: 30%;
}
#watchers {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: red;
}
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
