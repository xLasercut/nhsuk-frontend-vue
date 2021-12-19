import {createRouter, createWebHashHistory} from 'vue-router'
import {componentRoutes} from './components'
import Home from '../views/Home.vue'
import Components from '../views/Components.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/components',
    component: Components,
    children: componentRoutes
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})

