import NavHome from '../views/navigation/Home.vue'
import ActionLink from '../views/navigation/ActionLink.vue'
import BackLink from '../views/navigation/BackLink.vue'
import BreadCrum from '../views/navigation/Breadcrumb.vue'
import Contents from '../views/navigation/Contents.vue'
import Pagination from '../views/navigation/Pagination.vue'
import NavAz from 'nhsuk-frontend-vue-docs/src/views/components/NavAz.vue'
import ListPanel from 'nhsuk-frontend-vue-docs/src/views/components/ListPanel.vue'
import SkipLink from '../views/navigation/SkipLink.vue'

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
    path: '/navigation/contents',
    name: 'Contents',
    component: Contents
  },
  {
    path: '/navigation/pagination',
    name: 'Pagination',
    component: Pagination
  },
  {
    path: '/navigation/navaz',
    name: 'Nav A-Z',
    component: NavAz
  },
  {
    path: '/navigation/listpanel',
    name: 'List Panel',
    component: ListPanel
  },
  {
    path: '/navigation/skiplink',
    name: 'Skip Link',
    component: SkipLink
  },
  {
    path: '/navigation/*',
    redirect: '/navigation'
  }
]

export default navigation.sort(function (a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
})
