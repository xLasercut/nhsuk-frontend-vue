import FormHome from '../views/form/Home.vue'
import Button from '../views/form/Button.vue'
import Checkbox from '../views/form/Checkbox.vue'
import Radio from '../views/form/Radio.vue'
import Select from '../views/form/Select.vue'

const form = [
  {
    path: '/form',
    name: 'Form',
    component: FormHome
  },
  {
    path: '/form/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/form/checkbox',
    name: 'Checkbox',
    component: Checkbox
  },
  {
    path: '/form/radio',
    name: 'Radio',
    component: Radio
  },
  {
    path: '/form/select',
    name: 'Select',
    component: Select
  }
]

export default form