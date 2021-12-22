import InformationHome from '../views/information/Home.vue'
import CareCard from '../views/information/CareCard.vue'
import Details from '../views/information/Details.vue'
import Expander from 'nhsuk-frontend-vue-docs/src/views/components/Expander.vue'
import Dodont from '../views/information/DoDont.vue'
import Image from '../views/information/Image.vue'
import ErrorSummary from 'nhsuk-frontend-vue-docs/src/views/components/ErrorSummary.vue'
import Table from '../views/information/Table.vue'
import WarningCallout from '../views/information/WarningCallout.vue'
import SummaryList from '../views/information/SummaryList.vue'
import ReviewDate from '../views/information/ReviewDate.vue'
import Card from '../views/information/Card.vue'
import Tag from '../views/information/Tag.vue'

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
    path: '/information/errorsummary',
    name: 'Error Summary',
    component: ErrorSummary
  },
  {
    path: '/information/table',
    name: 'Table',
    component: Table
  },
  {
    path: '/information/warningcallout',
    name: 'Warning Callout',
    component: WarningCallout
  },
  {
    path: '/information/summarylist',
    name: 'Summary List',
    component: SummaryList
  },
  {
    path: '/information/reviewdate',
    name: 'Review Date',
    component: ReviewDate
  },
  {
    path: '/information/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/information/tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/information/*',
    redirect: '/information'
  }
]

export default information.sort(function (a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
})
