<template>
  <div class="nhsuk-checkboxes__item">
    <input class="nhsuk-checkboxes__input" :id="id" :name="name" type="checkbox" :value="checkboxValue" v-model="model" :disabled="disabled" :aria-describedby="described('nhsuk-checkboxes')" v-bind="attributes">
    <slot name="label"></slot>
    <slot name="hint"></slot>
    <div class="nhsuk-checkboxes__conditional" :id="`conditional-${id}`" v-if="model && conditional">
      {{conditional}}
    </div>
  </div>
</template>

<script>
  import CheckboxRadioShared from '../mixins/checkbox-radio-shared.js'

  export default {
    name: 'NhsCheckbox',
    props: {
      checkboxValue: {
        type: String
      },
      conditional: {
        type: String,
        default: ''
      }
    },
    mixins: [CheckboxRadioShared]
  }
</script>
