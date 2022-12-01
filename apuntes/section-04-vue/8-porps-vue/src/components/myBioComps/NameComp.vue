<template>
  <div>
    <h2>Me lo da My Bio y soy NameComp</h2>
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: false,
    default: "Some Random Name dentro del nieto...",
  },
  
});
</script>
