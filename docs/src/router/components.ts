import Button from '../views/components/Button.vue'
import ComponentsHome from '../views/components/ComponentsHome.vue'
import {filterRoutes} from '../assets/helpers'
import Dodont from '../views/components/Dodont.vue'
import ActionLink from '../views/components/ActionLink.vue'
import BackLink from '../views/components/BackLink.vue'
import Breadrumb from '../views/components/Breadcrumb.vue'
import Card from '../views/components/Card.vue'
import CareCard from '../views/components/CareCard.vue'


const componentRoutes = [
  {
    path: '',
    component: ComponentsHome,
    name: 'Components'
  },
  {
    path: '/components/action-link',
    component: ActionLink,
    name: 'Action Link'
  },
  {
    path: '/components/back-link',
    component: BackLink,
    name: 'Back Link'
  },
  {
    path: '/components/breadcrumb',
    component: Breadrumb,
    name: 'Breadcrumb'
  },
  {
    path: '/components/button',
    component: Button,
    name: 'Button'
  },
  {
    path: '/components/card',
    component: Card,
    name: 'Card'
  },
  {
    path: '/components/care-card',
    component: CareCard,
    name: 'Care Card'
  },
  {
    path: '/components/dodont',
    component: Dodont,
    name: 'Do Don\'t'
  }
]

const filteredComponentRoutes = filterRoutes(componentRoutes, ['Components'])

export {
  componentRoutes,
  filteredComponentRoutes
}
