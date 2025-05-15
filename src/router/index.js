import { createRouter, createWebHistory } from "vue-router";
import { ref } from 'vue'

import HomePage from "../views/HomePage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  }];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
