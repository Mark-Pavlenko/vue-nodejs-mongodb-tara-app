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
    // alias: "/products",
    name: 'AdminAddProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminAddProduct.vue')
  },
  {
    path: '/admin/products',
    name: 'AdminAllProducts',
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminAllProducts.vue')
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
})

export default router
