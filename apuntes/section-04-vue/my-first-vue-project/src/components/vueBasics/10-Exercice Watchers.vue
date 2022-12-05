<script setup>
import { ref, watch, reactive, computed } from "vue";

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
let pregunta = ref("¿Te gusta la pizza? 🤤");
let respuestaUsuario = ref("");
const jsonRespuesta = ref("");
const jsonImage = ref("");

watch(respuestaUsuario, async(newrespuesta => {
  if (respuestaUsuario.value.toLocaleLowerCase(yes)){
    
  }
}))

</script>

<template>
  <div>
    <div id="ejemplo-4">
      <h3>Ejemplo 004</h3>
      <p>Preguntame una pregunta closeEnded Question!</p>
      <input type="text" v-model="question" />
      <h5>{{ answer }}</h5>
      <p v-if="jsonRespuesta">
        {{jsonRespuesta.value}}
      </p>
    </div>




    <div id="ExerciceClass">
      <p>{{pregunta.value}}</p>
      <input type="text" v-model="respuestaUsuario" maxlength="3"/>
    </div>




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
