import Button from '../views/components/Button.vue'
import ComponentsHome from '../views/components/ComponentsHome.vue'
import {filterRoutes} from '../assets/helpers/helpers'

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
    path: '/components/a',
    component: Button,
    name: 'A'
  }
]

const filteredComponentRoutes = filterRoutes(componentRoutes)

export {
  componentRoutes,
  filteredComponentRoutes
}
