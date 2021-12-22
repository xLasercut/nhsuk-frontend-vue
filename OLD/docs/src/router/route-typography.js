import TypographyHome from '../views/typography/Home.vue'
import Heading from 'nhsuk-frontend-vue-docs/src/views/components/Heading.vue'
import Body from 'nhsuk-frontend-vue-docs/src/views/components/Body.vue'
import List from 'nhsuk-frontend-vue-docs/src/views/components/List.vue'
import ErrorText from 'nhsuk-frontend-vue-docs/src/views/components/ErrorText.vue'
import HintText from 'nhsuk-frontend-vue-docs/src/views/components/HintText.vue'
import InsetText from 'nhsuk-frontend-vue-docs/src/views/components/InsetText.vue'
import Label from 'nhsuk-frontend-vue-docs/src/views/components/Label.vue'

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
  },
  {
    path: '/typography/insettext',
    name: 'Inset Text',
    component: InsetText
  },
  {
    path: '/typography/label',
    name: 'Label',
    component: Label
  },
  {
    path: '/typography/*',
    redirect: '/typography'
  }
]

export default typography.sort(function (a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
})
