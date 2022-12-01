<script setup>
defineProps({
    name: {
        type: String,
        required: false,
    },
    handle: {
        type: String,
        required: false,
}
});
</script>


<template>
    <span class="user">
        <span class="name">{{ name }}</span>
        <span class="handle">@{{handle}}</span>
    </span>
</template>

<style>

</style>