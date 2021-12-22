import {ExampleModules} from './interfaces'
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
import ContentsList from '../views/examples/contents/ContentsList.vue'
import Details from '../views/examples/details/Details.vue'
import DoDont from '../views/examples/do-dont/DoDont.vue'
import DoDontSlots from '../views/examples/do-dont/DoDontSlots.vue'
import ErrorSummary from '../views/examples/error-summary/ErrorSummary.vue'
import Body from '../views/examples/body/Body.vue'
import List from '../views/examples/list/List.vue'
import ErrorText from '../views/examples/error-text/ErrorText.vue'
import HintText from '../views/examples/hint-text/HintText.vue'
import InsetText from '../views/examples/inset-text/InsetText.vue'
import Heading from '../views/examples/heading/Heading.vue'
import Label from '../views/examples/label/Label.vue'
import LabelBold from '../views/examples/label/LabelBold.vue'
import LabelHeading from '../views/examples/label/LabelHeading.vue'

const EXAMPLE_MODULES: ExampleModules = {
  ButtonDocs, ButtonDocsDisabled,
  ActionLink,
  BackLink,
  Breadcrumb,
  CardBasic, CardClickable, CardImage, CardFeature, CardGroup,
  CareCardNonUrgent, CareCardUrgent, CareCardImmediate,
  ContentsList,
  Details,
  DoDont, DoDontSlots,
  ErrorSummary,
  Body,
  List,
  ErrorText,
  HintText,
  InsetText,
  Heading,
  Label, LabelBold, LabelHeading
}

function getExampleModule(name: string) {
  return EXAMPLE_MODULES[name]
}

export {getExampleModule}
