<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="name">Name:</label>
        <Field v-model="name" type="text" name="name" id="name" placeholder="Ingrese su nombre"/>
        <ErrorMessage name="name"></ErrorMessage>
      </div>
      <div>
        <label for="email">Email:</label>
        <Field v-model="email" type="email" name="email" id="email" placeholder="Ingrese su email"/>
        <ErrorMessage name="email"></ErrorMessage>
      </div>
      <div class="form">
        <button type="submit">Registrar</button>
      </div>
    </Form>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { schema } from "../schemas/validationSchema.js";
import { useRegisterStore } from "../stores/registerStore.js";
import { ref } from 'vue';
const registerStore = useRegisterStore()
const name = ref("")
const email = ref("")


const onSubmit = () => {
registerStore.saveRegister(name.value, email.value)
  console.log("Sent form successfully");
};
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>



