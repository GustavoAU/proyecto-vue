<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
<h1>Hello World!!</h1>
<p>{{ contador }}</p>
<button @click="increase">Increase</button>
<button @click="decrease">Decrease</button>
</template>




<script setup>
import { ref } from "vue";
const contador = ref(0)
const increase = () => {
  contador.value++
}
const decrease = () => {
  if (contador.value > 0) {
    return contador.value--;
  }
}
</script>


<style scoped>
p {
color: green;
font-size:xx-large;
}
</style>
