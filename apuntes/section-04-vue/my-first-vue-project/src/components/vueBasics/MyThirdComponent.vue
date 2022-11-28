<template>
    <div class="yellow">
        <h2>TODO LO DE COLOR "YELLOW" SON PRUEBAS</h2>
        <p>En la presentación de developer tenemos:</p>
        <ul v-for="item in developer">
            <li>{{item}}</li>
        </ul>
        <p>Os voy a decir algunas cosas que nos comentan sobre ella. Su pelicula favorita es {{peliFavorita}}, que la ha visto nada más y nada menos que {{qVistaPeliFavorita}} veces!!. Y si la quereis invitar a comer, que sepáis que le encanta la {{comidaFavorita}}. </p>
    </div>
    
</template>

<script setup>
import { ref, reactive } from "vue";

const developer = reactive(
    {
        nombre:ref("Krystel"),
        años:ref(2022-1989),
        fechaNacimiento:ref("7-11-1989"),
        hobbies: ref(["dibujar", "leer", "ir en bici"])
    }

);

const peliFavorita = ref("entrevista con el vampiro");
const comidaFavorita = ref("paella");
const qVistaPeliFavorita = ref(10)

</script>

<style>
 .yellow {
    color: yellow;
    margin-top: 2rem;
}
</style>