import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import productsController from '../views/products.vue'

import login from '../views/Login.vue'
import { authGuard } from "../auth/authGuard";


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login1',
    component: login
  },
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/products',
    name: 'products',
    component: productsController,
    beforeEnter: authGuard

  },
  {
    path: '/product/:id',
    name: 'productdetail',
    component: productsController,
    beforeEnter: authGuard

  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Home,
    beforeEnter: authGuard

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,

  routes
})

export default router
