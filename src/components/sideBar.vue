<template>
<div class="sidebar">
  <h2>Welcome!!</h2>
  <h3>Name:{{ name }}</h3>
  <h3>Email: {{ email }}</h3>
  <ul>
    <li><RouterLink to="/contador">Contador</RouterLink></li>
    <li><RouterLink to="/lista-de-tareas">Lista de Tareas</RouterLink></li>
    <li><RouterLink to="/register">Registrar</RouterLink></li>
  </ul>
</div>
</template>
<script setup>
import { useRegisterStore } from '@/modules/register/stores/registerStore';
import { ref, watch } from 'vue';
const registerStore = useRegisterStore();
const name = ref(registerStore.name.value);
const email = ref(registerStore.email.value);
watch(() => registerStore.name, (newValue) => {
  name.value = newValue;
})
watch(() => registerStore.email, (newValue) => {
  email.value = newValue;
})
</script>
<style>
.sidebar{
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
