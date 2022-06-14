import CareCardNonUrgent from '../../views/examples/care-card/CareCardNonUrgent.vue'
import CareCardUrgent from '../../views/examples/care-card/CareCardUrgent.vue'
import CareCardEmergency from '../../views/examples/care-card/CareCardEmergency.vue'

const careCardExampleRoutes = [
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
    path: '/examples/care-card-emergency',
    component: CareCardEmergency,
    name: 'Card - Care card emergency (red and black)'
  }
]

export { careCardExampleRoutes }
