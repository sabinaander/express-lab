import EditAnimalFormVue from '@/components/EditAnimalForm.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditAnimalView from '../views/EditAnimalView.vue'
import AdminView from '../views/AdminView.vue'

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
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
  ]
})

export default router
