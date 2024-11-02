<template>
  <div>
    <h2>Formulario de registro</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form">
        <label for="name">Name:</label>
        <Field type="text" name="name" id="name" placeholder="Ingrese su nombre"/>
        <ErrorMessage name="name"></ErrorMessage>
      </div>
      <div>
        <label for="email">Email:</label>
        <Field type="email" name="email" id="email" placeholder="Ingrese su email"/>
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

const onSubmit = () => {
  console.log("Sent form successfully");
};
</script>

<style scoped>
.form {
  margin-bottom: 10px;
}
</style>



