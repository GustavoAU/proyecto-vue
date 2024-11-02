import { defineStore } from "pinia";
import { ref } from "vue";

export const useRegisterStore = defineStore("register", () => {
  const name = ref(""); // viene del form que creamos
  const email = ref(""); // viene del form que creamos
  // se crea una funcion  que se ejecuta cuando se ejecute el formulario para guardar los valores del form
  const saveRegister = (nameForm, emailForm) => {
    name.value = nameForm;
    email.value = emailForm;
  };
  return { name, email, saveRegister };
});
