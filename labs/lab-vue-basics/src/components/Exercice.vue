<script setup>
const message = "World";
const texto = "Hello World";
</script>

<template>
    <h2>Ejercicio 2</h2>
    <p>solo necesita insertar una operación matemática:</p>
    <p>Algo tan simple como 2 + 2</p>
    <p>Resultado: {{ 2 + 2 }}</p>
    <div id="ejericio2">
        <p>Hello {{ message }}</p>
        <p v-text="texto"></p>
    </div>
</template>

<style>
</style>