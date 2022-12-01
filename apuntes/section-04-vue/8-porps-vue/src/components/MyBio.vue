<template>
  <div>
    <h1>Me lo da el App y soy MyBio</h1>
    <h1>{{ name }}</h1>
    <h4>{{ age }}</h4>
    <h4>{{ birthPlace }}</h4>
    <h4>{{ currentLocation }}</h4>
    <div>
      <NameComp :name="name" />
    </div>
    <div>
      <HermanaDeName :hermanaName="hermanaName" />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import NameComp from "./myBioComps/NameComp.vue";
import HermanaDeName from "./myBioComps/HermanaDeName.vue"

// Syntax inicial :)
//defineProps({})

defineProps({
  name: {
    type: String,
    required: false,
    default: "Some Random Name",
  },
  age: {
    type: Number,
    default: 0,
  },
  birthPlace: {
    type: String,
  },
  currentLocation: {
    type: String,
    required: true,
    default: "Barcelona, España",
  },
  hermanaName: {
    type: String,
    required: true,
    default: "Hermana de Krystel",
  },
});
</script>

<style></style>
