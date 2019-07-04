import InformationHome from '../views/information/Home.vue'
import CareCard from '../views/information/CareCard.vue'
import Details from '../views/information/Details.vue'
import Expander from '../views/information/Expander.vue'
import Dodont from '../views/information/DoDont.vue'
import Image from '../views/information/Image.vue'
import EmergencyAlert from '../views/information/EmergencyAlert.vue'
import ErrorSummary from '../views/information/ErrorSummary.vue'
import Feedback from '../views/information/Feedback.vue'
import Table from '../views/information/Table.vue'
import WarningCallout from '../views/information/WarningCallout.vue'
import Promo from '../views/information/Promo.vue'
import SummaryList from '../views/information/SummaryList.vue'
import ReviewDate from '../views/information/ReviewDate.vue'

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
    path: '/information/emergencyalert',
    name: 'Emergency Alert',
    component: EmergencyAlert
  },
  {
    path: '/information/errorsummary',
    name: 'Error Summary',
    component: ErrorSummary
  },
  {
    path: '/information/feedback',
    name: 'Feeback Banner',
    component: Feedback
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
    path: '/information/promo',
    name: 'Promo',
    component: Promo
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