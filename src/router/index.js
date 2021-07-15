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
    path: '/contact',
    name: 'Contact',
    component: () => import( '../views/Contact.vue')
  },
  {
    path: '/photoshoottips',
    name: 'PhotoshootTips',
    component: () => import( '../views/PhotoshootTips.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import( '../views/Portfolio.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import( '../views/Testimonials.vue')
  },
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})



export default router
