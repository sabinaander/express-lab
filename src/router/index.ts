import EditAnimalFormVue from '@/components/EditAnimalForm.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditAnimalView from '../views/EditAnimalView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/animal/:id/edit',
      name: 'edit-animal',
      component: EditAnimalView
    },
  ]
})

export default router
