<template>
  <component :is="component"></component>
</template>

<script>
  import ActionLink from '../examples/ActionLink.vue'
  import BackLink from '../examples/BackLink.vue'
  import Body from '../examples/Body.vue'
  import Breadcrumb from '../examples/Breadcrumb.vue'
  import ButtonDocs from '../examples/ButtonDocs.vue'
  import ButtonDocsDisabled from '../examples/ButtonDocsDisabled.vue'
  import CareCardNonUrgent from '../examples/CareCardNonUrgent.vue'
  import CareCardUrgent from '../examples/CareCardUrgent.vue'
  import CareCardImmediate from '../examples/CareCardImmediate.vue'
  import Checkbox from '../examples/Checkbox.vue'
  import CheckboxDisabled from '../examples/CheckboxDisabled.vue'
  import CheckboxError from '../examples/CheckboxError.vue'
  import CheckboxSlots from '../examples/CheckboxSlots.vue'
  import ContentsList from '../examples/ContentsList.vue'
  import Details from '../examples/Details.vue'
  import DoDont from '../examples/DoDont.vue'
  import DoDontSlots from '../examples/DoDontSlots.vue'

  const map = {
    'ActionLink': ActionLink,
    'BackLink': BackLink,
    'Body': Body,
    'Breadcrumb': Breadcrumb,
    'ButtonDocs': ButtonDocs,
    'ButtonDocsDisabled': ButtonDocsDisabled,
    'CareCardNonUrgent': CareCardNonUrgent,
    'CareCardUrgent': CareCardUrgent,
    'CareCardImmediate': CareCardImmediate,
    'Checkbox': Checkbox,
    'CheckboxDisabled': CheckboxDisabled,
    'CheckboxError': CheckboxError,
    'CheckboxSlots': CheckboxSlots,
    'ContentsList': ContentsList,
    'Details': Details,
    'DoDont': DoDont,
    'DoDontSlots': DoDontSlots
  }

  export default {
    props: {
      file: {
        type: String,
        required: true
      }
    },
    computed: {
      component() {
        return map[this.file]
      }
    }
  }
</script>