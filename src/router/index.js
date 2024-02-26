import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Foto from '../views/Foto.vue'
import Contact from '../views/Contact.vue'
import Informatie from '../views/Informatie.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Foto',
    name: 'Foto',
    component: Foto
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Informatie',
    name: 'Informatie',
    component: Informatie
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
