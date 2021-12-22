import Button from '../views/components/Button.vue'
import ComponentsHome from '../views/components/ComponentsHome.vue'
import {filterRoutes} from '../assets/helpers'
import Dodont from '../views/components/Dodont.vue'
import ActionLink from '../views/components/ActionLink.vue'
import BackLink from '../views/components/BackLink.vue'
import Breadrumb from '../views/components/Breadcrumb.vue'
import Card from '../views/components/Card.vue'
import CareCard from '../views/components/CareCard.vue'
import Contents from '../views/components/Contents.vue'
import Details from '../views/components/Details.vue'
import ErrorSummary from '../views/components/ErrorSummary.vue'
import Body from '../views/components/Body.vue'
import List from '../views/components/List.vue'
import ErrorText from '../views/components/ErrorText.vue'
import HintText from '../views/components/HintText.vue'
import InsetText from '../views/components/InsetText.vue'
import Heading from '../views/components/Heading.vue'
import Label from '../views/components/Label.vue'
import Expander from '../views/components/Expander.vue'
import Fieldset from '../views/components/Fieldset.vue'
import Footer from '../views/components/Footer.vue'
import Grid from '../views/components/Grid.vue'
import Header from '../views/components/Header.vue'


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
    path: '/components/contents',
    component: Contents,
    name: 'Contents'
  },
  {
    path: '/components/details',
    component: Details,
    name: 'Details'
  },
  {
    path: '/components/dodont',
    component: Dodont,
    name: 'Do Don\'t'
  },
  {
    path: '/components/error-summary',
    component: ErrorSummary,
    name: 'Error Summary'
  },
  {
    path: '/components/body',
    component: Body,
    name: 'Body'
  },
  {
    path: '/components/list',
    component: List,
    name: 'List'
  },
  {
    path: '/components/error-text',
    component: ErrorText,
    name: 'Error Text'
  },
  {
    path: '/components/hint-text',
    component: HintText,
    name: 'Hint Text'
  },
  {
    path: '/components/inset-text',
    component: InsetText,
    name: 'Inset Text'
  },
  {
    path: '/components/heading',
    component: Heading,
    name: 'Heading'
  },
  {
    path: '/components/label',
    component: Label,
    name: 'Label'
  },
  {
    path: '/components/expander',
    component: Expander,
    name: 'Expander'
  },
  {
    path: '/components/fieldset',
    component: Fieldset,
    name: 'Fieldset'
  },
  {
    path: '/components/footer',
    component: Footer,
    name: 'Footer'
  },
  {
    path: '/components/grid',
    component: Grid,
    name: 'Grid'
  },
  {
    path: '/components/header',
    component: Header,
    name: 'Header'
  }
]

const filteredComponentRoutes = filterRoutes(componentRoutes, ['Components'])

export {
  componentRoutes,
  filteredComponentRoutes
}
