import {filterRoutes} from '../assets/helpers'
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
import ErrorText from '../views/examples/error-text/ErrorText.vue'
import HintText from '../views/examples/hint-text/HintText.vue'
import InsetText from '../views/examples/inset-text/InsetText.vue'
import Label from '../views/examples/label/Label.vue'
import LabelBold from '../views/examples/label/LabelBold.vue'
import LabelHeading from '../views/examples/label/LabelHeading.vue'
import Expander from '../views/examples/expander/Expander.vue'
import ExpanderGroup from '../views/examples/expander/ExpanderGroup.vue'
import Fieldset from '../views/examples/fieldset/Fieldset.vue'
import FieldsetHeading from '../views/examples/fieldset/FieldsetHeading.vue'
import FieldsetInput from '../views/examples/fieldset/FieldsetInput.vue'
import Footer from '../views/examples/footer/Footer.vue'
import HeaderOrgWhite from '../views/examples/header/HeaderOrgWhite.vue'
import HeaderLogo from '../views/examples/header/HeaderLogo.vue'
import HeaderTransactional from '../views/examples/header/HeaderTransactional.vue'
import HeaderTransactionalLong from '../views/examples/header/HeaderTransactionalLong.vue'
import HeaderNav from '../views/examples/header/HeaderNav.vue'
import HeaderSearch from '../views/examples/header/HeaderSearch.vue'
import Header from '../views/examples/header/Header.vue'
import HeaderServiceSearch from '../views/examples/header/HeaderServiceSearch.vue'
import HeaderTransactionalName from '../views/examples/header/HeaderTransactionalName.vue'
import HeaderOrg from '../views/examples/header/HeaderOrg.vue'
import HeaderOrgWhiteNav from '../views/examples/header/HeaderOrgWhiteNav.vue'
import Hero from '../views/examples/hero/Hero.vue'
import HeroImage from '../views/examples/hero/HeroImage.vue'
import HeroImageText from '../views/examples/hero/HeroImageText.vue'
import Image from '../views/examples/image/Image.vue'
import ListPanel from '../views/examples/list-panel/ListPanel.vue'
import NavAZ from '../views/examples/nav-az/NavAZ.vue'
import Pagination from '../views/examples/pagination/Pagination.vue'
import ReviewDate from '../views/examples/review-date/ReviewDate.vue'
import SkipLink from '../views/examples/skip-link/SkipLink.vue'
import SummaryList from '../views/examples/summary-list/SummaryList.vue'
import SummaryListNoAction from '../views/examples/summary-list/SummaryListNoAction.vue'
import SummaryListNoBorder from '../views/examples/summary-list/SummaryListNoBorder.vue'
import Tag from '../views/examples/tag/Tag.vue'
import WarningCallout from '../views/examples/warning-callout/WarningCallout.vue'
import WarningCalloutNonImportant from '../views/examples/warning-callout/WarningCalloutNonImportant.vue'
import Table from '../views/examples/table/Table.vue'
import TablePanel from '../views/examples/table/TablePanel.vue'
import TableResponsive from '../views/examples/table/TableResponsive.vue'


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
  {
    path: '/examples/error-text',
    component: ErrorText,
    name: 'Error message'
  },
  {
    path: '/examples/hint-text',
    component: HintText,
    name: 'Hint'
  },
  {
    path: '/examples/inset-text',
    component: InsetText,
    name: 'Inset text'
  },
  {
    path: '/examples/label',
    component: Label,
    name: 'Label'
  },
  {
    path: '/examples/label-bold',
    component: LabelBold,
    name: 'Label with bold text'
  },
  {
    path: '/examples/label-heading',
    component: LabelHeading,
    name: 'Label as page heading'
  },
  {
    path: '/examples/expander',
    component: Expander,
    name: 'Expander'
  },
  {
    path: '/examples/expander-group',
    component: ExpanderGroup,
    name: 'Expander group'
  },
  {
    path: '/examples/fieldset',
    component: Fieldset,
    name: 'Fieldset'
  },
  {
    path: '/examples/fieldset-heading',
    component: FieldsetHeading,
    name: 'Fieldset as page heading'
  },
  {
    path: '/examples/fieldset-input',
    component: FieldsetInput,
    name: 'Fieldset with inputs'
  },
  {
    path: '/examples/footer',
    component: Footer,
    name: 'Footer'
  },
  {
    path: '/examples/header',
    component: Header,
    name: 'Header'
  },
  {
    path: '/examples/header-logo',
    component: HeaderLogo,
    name: 'Header with logo only'
  },
  {
    path: '/examples/header-service-search',
    component: HeaderServiceSearch
  },
  {
    path: '/examples/header-transactional',
    component: HeaderTransactional,
    name: 'Header transactional'
  },
  {
    path: '/examples/header-transactional-name',
    component: HeaderTransactionalName,
    name: 'Header transactional with service name'
  },
  {
    path: '/examples/header-transactional-long',
    component: HeaderTransactionalLong
  },
  {
    path: '/examples/header-nav',
    component: HeaderNav,
    name: 'Header with navigation'
  },
  {
    path: '/examples/header-search',
    component: HeaderSearch,
    name: 'Header with search'
  },
  {
    path: '/examples/header-org',
    component: HeaderOrg,
    name: 'Header organisational'
  },
  {
    path: '/examples/header-org-white',
    component: HeaderOrgWhite,
    name: 'Header organisational with white header'
  },
  {
    path: '/examples/header-org-white-nav',
    component: HeaderOrgWhiteNav,
    name: 'Header organisational with white header and navigation'
  },
  {
    path: '/examples/hero',
    component: Hero,
    name: 'Hero'
  },
  {
    path: '/examples/hero-image',
    component: HeroImage,
    name: 'Hero with image'
  },
  {
    path: '/examples/hero-image-text',
    component: HeroImageText,
    name: 'Hero with image with content'
  },
  {
    path: '/examples/image',
    component: Image,
    name: 'Images'
  },
  {
    path: '/examples/list-panel',
    component: ListPanel,
    name: 'List Panel'
  },
  {
    path: '/examples/nav-az',
    component: NavAZ,
    name: 'Nav AZ'
  },
  {
    path: '/examples/pagination',
    component: Pagination,
    name: 'Pagination'
  },
  {
    path: '/examples/review-date',
    component: ReviewDate,
    name: 'Review date'
  },
  {
    path: '/examples/skip-link',
    component: SkipLink,
    name: 'Skip link'
  },
  {
    path: '/examples/summary-list',
    component: SummaryList,
    name: 'Summary list'
  },
  {
    path: '/examples/summary-list-no-action',
    component: SummaryListNoAction,
    name: 'Summary list without actions'
  },
  {
    path: '/examples/summary-list-no-border',
    component: SummaryListNoBorder,
    name: 'Summary list without border'
  },
  {
    path: '/examples/tag',
    component: Tag,
    name: 'Tag'
  },
  {
    path: '/examples/warning-callout',
    component: WarningCallout,
    name: 'Warning callout'
  },
  {
    path: '/examples/warning-callout-non-important',
    component: WarningCalloutNonImportant,
    name: 'Warning callout with custom heading'
  },
  {
    path: '/examples/table',
    component: Table,
    name: 'Table'
  },
  {
    path: '/examples/table-panel',
    component: TablePanel,
    name: 'Table as a panel'
  },
  {
    path: '/examples/table-responsive',
    component: TableResponsive,
    name: 'Responsive table'
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
