import TypographyHome from '../views/typography/Home.vue'
import Heading from '../views/typography/Heading.vue'
import Body from '../views/typography/Body.vue'

const typography = [
  {
    path: '/typography',
    name: 'Typography',
    component: TypographyHome
  },
  {
    path: '/typography/heading',
    name: 'Heading',
    component: Heading
  },
  {
    path: '/typography/body',
    name: 'Body',
    component: Body
  }
]

export default typography