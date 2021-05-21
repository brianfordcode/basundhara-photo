import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
