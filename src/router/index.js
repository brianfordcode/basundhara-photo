import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'openingScreen',
    component: () => import('../views/opening-screen.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/HeadshotTips',
    name: 'HeadshotTips',
    component: () => import( '../views/HeadshotTips.vue')
  },
  {
    path: '/MyWork',
    name: 'MyWork',
    component: () => import( '../views/MyWork.vue')
  },
  {
    path: '/Testimonials',
    name: 'Testimonials',
    component: () => import( '../views/Testimonials.vue')
  },
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
