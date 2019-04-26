<template>
  <div class="nhsuk-radios__item">
    <input class="nhsuk-radios__input"
      :id="id" :name="name" type="radio"
      :value="radioValue" :aria-describedby="described('nhsuk-radios')"
      v-bind="attributes" :disabled="disabled"
      v-model="model"
    >
    <slot name="label"></slot>
    <slot name="hint"></slot>
  </div>
</template>

<script>
  import CheckboxRadioShared from '../mixins/checkbox-radio-shared.js'

  export default {
    name: 'NhsRadio',
    props: {
      radioValue: {
        type: String,
        required: true
      }
    },
    mixins: [CheckboxRadioShared]
  }
</script>