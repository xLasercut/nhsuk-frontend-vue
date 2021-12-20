import Button from '../views/components/Button.vue'
import ComponentsHome from '../views/components/ComponentsHome.vue'
import {filterRoutes} from '../assets/helpers'
import Dodont from '../views/components/Dodont.vue'

const componentRoutes = [
  {
    path: '',
    component: ComponentsHome
  },
  {
    path: '/components/button',
    component: Button,
    name: 'Button'
  },
  {
    path: '/components/dodont',
    component: Dodont,
    name: 'Do Don\'t'
  }
]

const filteredComponentRoutes = filterRoutes(componentRoutes)

export {
  componentRoutes,
  filteredComponentRoutes
}
