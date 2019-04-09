import Grid from '../views/layout/Grid.vue'
import Header from '../views/layout/Header.vue'
import LayoutHome from '../views/layout/Home.vue'
import Footer from '../views/layout/Footer.vue'
import Fieldset from '../views/layout/Fieldset.vue'
import Hero from '../views/layout/Hero.vue'

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
    path: '/layout/footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/layout/fieldset',
    name: 'Fieldset',
    component: Fieldset
  },
  {
    path: '/layout/hero',
    name: 'Hero',
    component: Hero
  },
  {
    path: '/layout/*',
    redirect: '/layout'
  }
]

export default layout