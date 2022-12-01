<script setup>
defineProps({
    message: {
        type: String,
        required: false,
    }
    ,
});
</script>


<template>
    <p class="message">
        {{ message }}
    </p>  
</template>

<style>

</style>