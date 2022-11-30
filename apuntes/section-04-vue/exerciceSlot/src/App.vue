<script setup>
import HelloWorld from './components/HelloWorld.vue'
import SlotSingel from './components/SlotSingel.vue'
import SlotTeam from './components/SlotTeam.vue'

</script>

<template>
  <header>
   <div class="wrapper">
      <HelloWorld msg="Respuestas Krystel:" />
    </div>
  </header>

  <main>
    <SlotSingel> Soy un slot solitario </SlotSingel>
    <SlotTeam> Team Slots </SlotTeam>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
