import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/preview/views/Home.vue'
import Grid from '@/preview/views/Grid.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    }
  ]
})
