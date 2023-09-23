import { createRouter, createWebHistory } from 'vue-router'

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
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      title: "About | Portraits by Basundhara"
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import( '../views/Contact.vue'),
    meta: {
      title: "Contact | Portraits by Basundhara"
    }
  },
  {
    path: '/photoshoottips',
    name: 'photoshoottips',
    component: () => import( '../views/PhotoshootTips.vue'),
    meta: {
      title: "Photoshoot Tips | Portraits by Basundhara"
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import( '../views/Portfolio.vue'),
    meta: {
      title: "Portfolio | Portraits by Basundhara"
    }
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import( '../views/Testimonials.vue'),
    meta: {
      title: "Testimonials | Portraits by Basundhara"
    }
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import( '../views/Testimonials2.vue'),
    meta: {
      title: "Testimonials | Portraits by Basundhara"
    }
  },
  {
    path: '/beforeafter',
    name: 'beforeafter',
    component: () => import( '../views/BeforeAfter.vue'),
    meta: {
      title: "Before & After | Portraits by Basundhara"
    }
  },

]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  },
})

// browser tab names
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next();
})

export default router
