import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import DrinkDataView from "@/views/DrinkDataView.vue";
import CreateNewDrinkFormView from "@/views/CreateNewDrinkFormView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/drinks/:id',
      name: 'drinks',
      component: DrinkDataView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateNewDrinkFormView,
    },
  ]
})

export default router
