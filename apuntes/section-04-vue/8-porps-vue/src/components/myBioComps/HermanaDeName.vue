<template>
  <div>
    <h2>Me da el nombre My Bio y Soy Hermana de Name</h2>
    <p>{{ hermanaName }}</p>
  </div>
</template>

<script setup>
defineProps({
  hermanaName: {
    type: String,
    required: true,
    default: "Hermana de Krystel",
  },
});
</script>
