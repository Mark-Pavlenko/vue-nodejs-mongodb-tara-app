import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalog',
    name: 'Catalog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Catalog.vue')
  },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductPage.vue')
  },
  {
    path: '/admin/add',
    alias: "/tutorials",
    name: 'AdminAddProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminAddProduct.vue')
  },
  {
    path: '/admin',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/admin/all',
    name: 'AdminAllProducts',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminAllProducts.vue')
  },
   {
      path: '/admin/edit/:id',
      name: 'AdminEditProduct',
      component: () => import(/* webpackChunkName: "about" */ '../views/AdminEditProduct.vue')
    },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
