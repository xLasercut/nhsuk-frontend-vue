import InformationHome from './views/information/Home.vue'
import CareCard from './views/information/CareCard.vue'
import Details from './views/information/Details.vue'
import Expander from './views/information/Expander.vue'
import Dodont from './views/information/DoDont.vue'
import Image from './views/information/Image.vue'

const information = [
  {
    path: '/information',
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
  },
  {
    path: '/information/expander',
    name: 'Expander',
    component: Expander
  },
  {
    path: '/information/dodont',
    name: 'Do Don\'t',
    component: Dodont
  },
  {
    path: '/information/image',
    name: 'Image',
    component: Image
  },
  {
    path: '/information/*',
    redirect: '/information'
  }
]

export default information