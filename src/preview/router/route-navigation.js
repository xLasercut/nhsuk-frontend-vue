import NavHome from '../views/navigation/Home.vue'
import ActionLink from '../views/navigation/ActionLink.vue'
import BackLink from '../views/navigation/BackLink.vue'
import BreadCrum from '../views/navigation/Breadcrum.vue'

const navigation = [
  {
    path: '/navigation',
    name: 'Navigation',
    component: NavHome
  },
  {
    path: '/navigation/actionlink',
    name: 'Action Link',
    component: ActionLink
  },
  {
    path: '/navigation/backlink',
    name: 'Back Link',
    component: BackLink
  },
  {
    path: '/navigation/breadcrum',
    name: 'Breadcrum',
    component: BreadCrum
  },
  {
    path: '/navigation/*',
    redirect: '/navigation'
  }
]

export default navigation