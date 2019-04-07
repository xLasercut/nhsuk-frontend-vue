import TypographyHome from '../views/typography/Home.vue'
import Heading from '../views/typography/Heading.vue'
import Body from '../views/typography/Body.vue'
import List from '../views/typography/List.vue'
import ErrorText from '../views/typography/ErrorText.vue'
import HintText from '../views/typography/HintText.vue'

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
  },
  {
    path: '/typography/list',
    name: 'List',
    component: List
  },
  {
    path: '/typography/errortext',
    name: 'Error Text',
    component: ErrorText
  },
  {
    path: '/typography/hinttext',
    name: 'Hint Text',
    component: HintText
  }
]

export default typography