<script setup>
import HelloWorld from './components/HelloWorld.vue'
// import MyFirstCompomentVue from './components/vueBasics/MyFirstCompoment.vue';
// import MySecondComponentVue from './components/vueBasics/MySecondComponent.vue';
// import MyThirdComponentVue from './components/vueBasics/MyThirdComponent.vue';
import iterating from './components/vueBasics/7-ITeratingElements.vue'

</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="My name is Krystel!" />
    </div>
  </header>
    
  <main>
    <iterating />
    <!-- <MyFirstCompomentVue />
    <MySecondComponentVue />
    <MyThirdComponentVue /> -->
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
