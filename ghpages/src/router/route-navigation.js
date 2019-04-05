import NavHome from '../views/navigation/Home.vue'
import ActionLink from '../views/navigation/ActionLink.vue'
import BackLink from '../views/navigation/BackLink.vue'
import BreadCrum from '../views/navigation/Breadcrumb.vue'

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
    path: '/navigation/breadcrumb',
    name: 'Breadcrumb',
    component: BreadCrum
  },
  {
    path: '/navigation/*',
    redirect: '/navigation'
  }
]

export default navigation