<template>
  <div class="nhsuk-form-group {%- if params.errorMessage %} nhsuk-form-group--error{% endif %}" v-bind="attributes">
    <nhs-fieldset :attributes="fieldset.attributes" :legend="fieldset.legend" :described-by="fieldset.describedBy" v-if="fieldset">
      <slot></slot>
    </nhs-fieldset>
    <slot v-if="!fieldset"></slot>
  </div>
</template>

<script>
  import NhsFieldset from '../layout/NhsFieldset.vue'
  import NhsHintText from '../typography/NhsHintText.vue'
  import NhsErrorText from '../typography/NhsErrorText.vue'

  export default {
    name: "NhsCheckboxGroup",
    components: {
      NhsFieldset,
      NhsHintText,
      NhsErrorText
    },
    props: {
      attributes: {
        type: Object,
        default() {
          return {}
        }
      },
      fieldset: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>
