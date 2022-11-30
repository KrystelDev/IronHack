<script setup>

import NavBar from './components/Navbar.vue'
import Exercice from './components/Exercice.vue'
import Exercice3 from './components/Exercice3.vue'
import Exercice4 from './components/Exercice4.vue'
import Footer from './components/Footer.vue'

import {ref} from 'vue'

// Exercici3
const show = true;

// Bonus Exercici5
// let isChange = ref(true);

// negro
// let colorFondo = ref('#181818');

// const onChangeColor = () =>{
//   // colorFondo === '#f8f8f8' ? colorFondo = ref('#181818') : colorFondo = ref('#f8f8f8');
//   // console.log(colorFondo)

//   if (colorFondo === '#f8f8f8'){
//     colorFondo = ref('#181818');
//     console.log("de blanco negro");
//     console.log(colorFondo.value)
//   } else {
//     colorFondo = ref('#f8f8f8');
//     console.log("de negro a blanco");
//     console.log(colorFondo.value)
//   }
// }

let active = ref(true);

const handleClick = () => {
  if (active.value){
    active.value = false;
    
    console.log("de blanco negro");
    console.log(active.value)
  } else {
    active.value = true;
    console.log("de negro a blanco");
    console.log(active.value)
  }
}

</script>                                                    
<template>
  <div :style="{ backgroundColor: active ? '#181818' : '#f8f8f8', color: active ? '#f8f8f8' : '#181818' }">
    <header>
      <NavBar />
    </header>
    
    <main>
      <Exercice />
      <Exercice3 v-show="show"></Exercice3>
      <Exercice4 />
      <button @click="handleClick">Cambiar Fondo</button>
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

}
</style>
