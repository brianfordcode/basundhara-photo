import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'openingScreen',
    component: () => import('../views/opening-screen.vue'),
    meta: {
      title: "Portraits by Basundhara"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: {
      title: "About"
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( '../views/Contact.vue'),
    meta: {
      title: "Contact"
    }
  },
  {
    path: '/photoshoottips',
    name: 'PhotoshootTips',
    component: () => import( '../views/PhotoshootTips.vue'),
    meta: {
      title: "Photoshoot Tips"
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import( '../views/Portfolio.vue'),
    meta: {
      title: "Portfolio"
    }
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import( '../views/Testimonials.vue'),
    meta: {
      title: "Testimonials"
    }
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next();
})

export default router
