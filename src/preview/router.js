import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SectionHome from './views/SectionHome.vue'

import LayoutRoutes from './route-layout.js'
import InfoRoutes from './route-information.js'


Vue.use(Router)

var allchild = []
allchild = allchild.concat(LayoutRoutes)
allchild = allchild.concat(InfoRoutes)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: '/section',
      component: SectionHome,
      children: allchild
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
