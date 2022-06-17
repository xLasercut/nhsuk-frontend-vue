import Checkbox from '../../views/examples/checkbox/Checkbox.vue';
import CheckboxHint from '../../views/examples/checkbox/CheckboxHint.vue';
import CheckboxDisabled from '../../views/examples/checkbox/CheckboxDisabled.vue';
import CheckboxHeading from '../../views/examples/checkbox/CheckboxHeading.vue';
import CheckboxError from '../../views/examples/checkbox/CheckboxError.vue';
import CheckboxConditional from '../../views/examples/checkbox/CheckboxConditional.vue';
import CheckboxNonOfAbove from '../../views/examples/checkbox/CheckboxNonOfAbove.vue';

const checkboxesExampleRoutes = [
  {
    path: '/examples/checkbox',
    component: Checkbox,
    name: 'Checkboxes'
  },
  {
    path: '/examples/checkbox-hint',
    component: CheckboxHint,
    name: 'Checkboxes with hint text'
  },
  {
    path: '/examples/checkbox-disabled',
    component: CheckboxDisabled,
    name: 'Checkboxes with disabled item'
  },
  {
    path: '/examples/checkbox-heading',
    component: CheckboxHeading,
    name: 'Checkboxes with legend as page heading'
  },
  {
    path: '/examples/checkbox-error',
    component: CheckboxError,
    name: 'Checkboxes with error message'
  },
  {
    path: '/examples/checkbox-conditional',
    component: CheckboxConditional,
    name: 'Checkboxes with conditional content'
  },
  {
    path: '/examples/checkbox-non-of-above',
    component: CheckboxNonOfAbove,
    name: 'Checkboxes with "none of the above" option'
  }
];

export { checkboxesExampleRoutes };
