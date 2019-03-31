import NavHome from '../views/navigation/Home.vue'
import ActionLink from '../views/navigation/ActionLink.vue'

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
  }
]

export default navigation