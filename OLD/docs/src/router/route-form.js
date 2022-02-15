import FormHome from '../views/form/Home.vue'
import Button from '../views/form/Button.vue'
import Checkbox from 'nhsuk-frontend-vue-docs/src/views/components/Checkbox.vue'
import Radio from '../views/form/Radio.vue'
import Select from 'nhsuk-frontend-vue-docs/src/views/components/Select.vue'
import Input from 'nhsuk-frontend-vue-docs/src/views/components/Input.vue'
import Textarea from 'nhsuk-frontend-vue-docs/src/views/components/Textarea.vue'
import InputGroup from 'nhsuk-frontend-vue-docs/src/views/components/InputGroup.vue'

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
    path: '/form/textarea',
    name: 'Textarea',
    component: Textarea
  },
  {
    path: '/form/inputgroup',
    name: 'Input Group',
    component: InputGroup
  },
  {
    path: '/form/*',
    redirect: '/form'
  }
]

export default form.sort(function (a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
})
