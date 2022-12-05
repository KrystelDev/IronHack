<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Exercice from './components/vueBasics/Counter.vue'

</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="My name is Krystel!" />
    </div>
  </header>
    
  <main>
    <Exercice />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
