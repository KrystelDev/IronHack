<script setup>

import NavBar from './components/Navbar.vue'
import Exercice from './components/Exercice.vue'
import Exercice3 from './components/Exercice3.vue'
import Footer from './components/Footer.vue'

// Exercici3
const show = true;

</script>

<template>
  <div>
    <header>
      <NavBar />
    </header>
    
    <main>
      <Exercice />
      <Exercice3 v-show="show"></Exercice3>
    </main>
    
    <Footer />
  </div>
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
