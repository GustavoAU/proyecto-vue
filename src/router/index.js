import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: "/contador",
      name: "contador",
      component: () => import("../modules/Counter/components/Contador.vue"),
    },
    {
      path: "/lista-de-tareas",
      name: "listaDeTareas",
      component: () => import("../modules/todos/components/listaDeTareas.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../modules/register/views/registerView.vue"),
    },
  ],
});

export default router;
