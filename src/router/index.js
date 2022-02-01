import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/VHome.vue'
import Preview from '../views/VPreview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
