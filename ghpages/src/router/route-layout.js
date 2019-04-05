import Grid from '../views/layout/Grid.vue'
import Header from '../views/layout/Header.vue'
import LayoutHome from '../views/layout/Home.vue'

const layout = [
  {
    path: '/layout',
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
    redirect: '/layout'
  }
]

export default layout