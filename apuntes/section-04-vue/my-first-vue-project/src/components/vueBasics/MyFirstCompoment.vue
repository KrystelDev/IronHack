<template>
<div class="aqua">
    <h1>TODO LO DE COLOR "AQUA" ES APUNTES DE CLASE</h1>
    <h2>{{ krystel }}. Nací en {{ cityofBirth }} y tengo {{ age }} años.</h2>
    <h3>{{ krystel }}. Nací en {{ myInfo.cityofBirth }} y tengo {{ myInfo.age }} años.</h3>
    
    <p>Mi informaciónes estática. texto creado en template</p>
</div>

</template>

<script setup>
import {ref, reactive} from "vue";

// No tiene estado, esta variable tiene este valor desde que abrela web hasta que cierra
const krystel = "Mi nombre es Krystel y me gusta mucho programar";

// Estas variables puede tener diferentes estados desde que uno entra la web hasta que salga, así es como informamos con vue que cada vez que estas variables tengan un cambio carge de nuevo esta informaicón.
const cityofBirth = ref("Barcelona");
const age = ref(2022 - 1989);

const myInfo = reactive({
    age: ref(2022 - 1989),
    cityofBirth: ref("Barcelona"),
})

</script>

<style>
    .aqua{
        color:aqua
    }
</style>