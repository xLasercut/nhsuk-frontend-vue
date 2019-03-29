import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/preview/views/Home.vue'
import Grid from '@/preview/views/layout/Grid.vue'
import Header from '@/preview/views/layout/Header.vue'
import Layout from '@/preview/views/Layout.vue'
import LayoutHome from '@/preview/views/layout/Home.vue'

import Information from '@/preview/views/Information.vue'
import InformationHome from '@/preview/views/information/Home.vue'
import CareCard from '@/preview/views/information/CareCard.vue'
import Details from '@/preview/views/information/Details.vue'

Vue.use(Router)

const informationChildren = [
  {
    path: '/information/home',
    name: 'Information',
    component: InformationHome
  },
  {
    path: '/information/carecard',
    name: 'Care Card',
    component: CareCard
  },
  {
    path: '/information/details',
    name: 'Details',
    component: Details
  }
]

const layoutChildren = [
  {
    path: '/layout/home',
    name: 'Layout',
    component: LayoutHome
  },
  {
    path: '/layout/grid',
    name: 'Grid',
    component: Grid
  },
  {
    path: '/layout/header',
    name: 'Header',
    component: Header
  },
  {
    path: '/layout/*',
    redirect: '/layout/home'
  }
]

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/layout',
      component: Layout,
      children: layoutChildren
    },
    {
      path: '/information',
      component: Information,
      children: informationChildren
    }
  ]
})
