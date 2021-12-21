import ButtonDocs from '../views/examples/button/ButtonDocs.vue'
import ButtonDocsDisabled from '../views/examples/button/ButtonDocsDisabled.vue'
import ActionLink from '../views/examples/action-link/ActionLink.vue'
import BackLink from '../views/examples/back-link/BackLink.vue'
import Breadcrumb from '../views/examples/breadcrumb/Breadcrumb.vue'
import CardBasic from '../views/examples/card/CardBasic.vue'
import CardClickable from '../views/examples/card/CardClickable.vue'
import CardImage from '../views/examples/card/CardImage.vue'
import CardFeature from '../views/examples/card/CardFeature.vue'
import CardGroup from '../views/examples/card/CardGroup.vue'
import CareCardNonUrgent from '../views/examples/care-card/CareCardNonUrgent.vue'
import CareCardUrgent from '../views/examples/care-card/CareCardUrgent.vue'
import CareCardImmediate from '../views/examples/care-card/CareCardImmediate.vue'
import {ExampleModules} from './interfaces'


const EXAMPLE_MODULES: ExampleModules = {
  ButtonDocs,
  ButtonDocsDisabled,
  ActionLink,
  BackLink,
  Breadcrumb,
  CardBasic,
  CardClickable,
  CardImage,
  CardFeature,
  CardGroup,
  CareCardNonUrgent,
  CareCardUrgent,
  CareCardImmediate
}

function getExampleModule(name: string) {
  return EXAMPLE_MODULES[name]
}

export {getExampleModule}
