import ExamplesHome from '../views/examples/ExamplesHome.vue'
import ActionLink from '../views/examples/action-link/ActionLink.vue'
import BackLink from '../views/examples/back-link/BackLink.vue'
import Breadcrumb from '../views/examples/breadcrumb/Breadcrumb.vue'
import Button from '../views/examples/button/Button.vue'
import ButtonLink from '../views/examples/button/ButtonLink.vue'
import ButtonDisabled from '../views/examples/button/ButtonDisabled.vue'
import ButtonSecondary from '../views/examples/button/ButtonSecondary.vue'
import ButtonReversed from '../views/examples/button/ButtonReversed.vue'
import CardBasic from '../views/examples/card/CardBasic.vue'
import CardClickable from '../views/examples/card/CardClickable.vue'
import CardImage from '../views/examples/card/CardImage.vue'
import CardGroup from '../views/examples/card/CardGroup.vue'
import CardFeature from '../views/examples/card/CardFeature.vue'
import CareCardNonUrgent from '../views/examples/care-card/CareCardNonUrgent.vue'
import CareCardUrgent from '../views/examples/care-card/CareCardUrgent.vue'
import CareCardImmediate from '../views/examples/care-card/CareCardImmediate.vue'
import ContentsList from '../views/examples/contents/ContentsList.vue'
import Details from '../views/examples/details/Details.vue'
import DoDont from '../views/examples/do-dont/DoDont.vue'
import ErrorSummary from '../views/examples/error-summary/ErrorSummary.vue'
import {filterRoutes} from '../assets/helpers'


const examplesRoutes = [
  {
    path: '',
    component: ExamplesHome,
    name: 'Examples'
  },
  {
    path: '/examples/action-link',
    component: ActionLink,
    name: 'Action link'
  },
  {
    path: '/examples/back-link',
    component: BackLink,
    name: 'Back link'
  },
  {
    path: '/examples/breadcrumb',
    component: Breadcrumb,
    name: 'Breadcrumb'
  },
  {
    path: '/examples/button',
    component: Button,
    name: 'Button'
  },
  {
    path: '/examples/button-link',
    component: ButtonLink,
    name: 'Button as a link'
  },
  {
    path: '/examples/button-disabled',
    component: ButtonDisabled,
    name: 'Button disabled'
  },
  {
    path: '/examples/button-secondary',
    component: ButtonSecondary,
    name: 'Button secondary'
  },
  {
    path: '/examples/button-reversed',
    component: ButtonReversed,
    name: 'Button reverse'
  },
  {
    path: '/examples/card-basic',
    component: CardBasic,
    name: 'Card - Basic card'
  },
  {
    path: '/examples/card-clickable',
    component: CardClickable,
    name: 'Card - Clickable card'
  },
  {
    path: '/examples/card-image',
    component: CardImage,
    name: 'Card - card with an image'
  },
  {
    path: '/examples/card-group',
    component: CardGroup,
    name: 'Card - Card group'
  },
  {
    path: '/examples/card-feature',
    component: CardFeature,
    name: 'Card - Feature card'
  },
  {
    path: '/examples/care-card-non-urgent',
    component: CareCardNonUrgent,
    name: 'Card - Care card non-urgent (blue)'
  },
  {
    path: '/examples/care-card-urgent',
    component: CareCardUrgent,
    name: 'Card - Care card urgent (red)'
  },
  {
    path: '/examples/care-card-immediate',
    component: CareCardImmediate,
    name: 'Card - Care card emergency (red and black)'
  },
  {
    path: '/examples/contents-list',
    component: ContentsList,
    name: 'Contents list'
  },
  {
    path: '/examples/details',
    component: Details,
    name: 'Details'
  },
  {
    path: '/examples/do-dont',
    component: DoDont,
    name: 'Do and Don\'t list'
  },
  {
    path: '/examples/error-summary',
    component: ErrorSummary,
    name: 'Error summary'
  },
].map((item) => {
  const {name, ...rest} = item
  return {
    ...rest,
    name: `examples-${name}`
  }
})

const filteredExamplesRoutes = filterRoutes(examplesRoutes, ['examples-Examples'])

export {
  examplesRoutes,
  filteredExamplesRoutes
}
