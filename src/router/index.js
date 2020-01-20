import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FocusPage from '../views/FocusPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/focusPage',
    name: 'focusPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FocusPage
    // component: () => import(/* webpackChunkName: "about" */ '../views/FocusPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
