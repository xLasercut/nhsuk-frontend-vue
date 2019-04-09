import FormHome from '../views/form/Home.vue'
import Button from '../views/form/Button.vue'
import Checkbox from '../views/form/Checkbox.vue'
import Radio from '../views/form/Radio.vue'
import Select from '../views/form/Select.vue'
import Input from '../views/form/Input.vue'
import DateInput from '../views/form/DateInput.vue'
import Textarea from '../views/form/Textarea.vue'

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
  },
  {
    path: '/form/input',
    name: 'Input',
    component: Input
  },
  {
    path: '/form/dateinput',
    name: 'Date Input',
    component: DateInput
  },
  {
    path: '/form/textarea',
    name: 'Textarea',
    component: Textarea
  }
]

export default form.sort(function (a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
})