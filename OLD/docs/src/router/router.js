import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import SectionHome from '../views/SectionHome.vue'
import Example from '../views/Example.vue'

import LayoutRoutes from './route-layout.js'
import InfoRoutes from './route-information.js'
import NavRoutes from './route-navigation.js'
import FormRoutes from './route-form.js'
import TypographyRoutes from './route-typography.js'
import ExampleRoutes from './route-example.js'


Vue.use(Router)

var allchild = []
allchild = allchild.concat(LayoutRoutes)
allchild = allchild.concat(InfoRoutes)
allchild = allchild.concat(NavRoutes)
allchild = allchild.concat(FormRoutes)
allchild = allchild.concat(TypographyRoutes)

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
      path: '/example',
      component: Example,
      children: ExampleRoutes
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
