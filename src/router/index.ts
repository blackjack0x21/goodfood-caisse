import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ConnexionPage from '../views/ConnexionPage.vue'
import { store } from '../../store'
import { supabase } from '../../supabase'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      requiresAuth: true
    },
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      requiresAuth: true
    },
    component: HomePage
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: ConnexionPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

store.user = supabase.auth.user()
supabase.auth.onAuthStateChange((_, session) => {
  if(session !== null) {
    store.user = session.user
    router.push('home')
  }
  else {
    store.user = null
    router.push('connexion')
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.user) {
      next({ name: 'connexion' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

export default router
