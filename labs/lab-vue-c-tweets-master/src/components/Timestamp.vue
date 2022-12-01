<script setup>
defineProps({
    time: {
        type: String,
        required: false,
    }
    ,
});
</script>


<template>
        <span class="timestamp">{{ time }}</span>
</template>

<style>

</style>