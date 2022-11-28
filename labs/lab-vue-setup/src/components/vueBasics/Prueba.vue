<template>
<div class="aqua">
    <p>{{text}}</p>    
</div>

</template>

<script setup>
    import {ref} from "vue";

    let probando = ref(true);
    let text;

    probando ?  text = "Esto es una prueba" : "No podemos ver la prueba";
    const helloWorld = () => {
        console.log("Hello World")
    }

    helloWorld();
    
</script>

<style>
    .aqua{
        color:aqua
    }
</style>