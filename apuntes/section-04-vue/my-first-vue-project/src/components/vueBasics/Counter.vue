// Creamos un componente Counter.vue. Este componente lo que hará es enseñar el valor de count que tenemos en counter.js. Después le vamos a añadir dos botones: uno para incrementar el count y otro para restarle 1. Vuestro objetivo será que estos botones alteren el valor de count que tenemos en la store, usando métodos también dentro de vuestra store.
<template>
    <p>El contador está en: {{piniaStore.count}}</p>
    <button @click="piniaStore.changeCount(+1)">Contador +1</button>
    <button @click="piniaStore.changeCount(-1)">Contador -1</button>
</template>

<script setup>
import { ref } from 'vue';
import { usePiniaStore } from '../../stores/counter'; 

const piniaStore = usePiniaStore();

</script>

<style>
</style>