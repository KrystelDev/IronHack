<script setup>
defineProps({
    image: {
        type: String,
        required: false,
    }
    ,
});
</script>


<template>
    <img :src="image" class="profile" alt="profile" />
</template>

<style>

</style>

