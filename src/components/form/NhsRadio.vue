<template>
  <div class="nhsuk-radios__item">
    <input class="nhsuk-radios__input" :id="itemId" :name="name" type="radio" :value="radioValue()" v-model="model" :disabled="disabled">
    <label class="nhsuk-label nhsuk-radios__label" :for="itemId">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  import RandomID from '../mixins/random-id.js'
  import AddModel from '../mixins/add-model.js'

  export default {
    props: {
      name: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        default: null
      }
    },
    name: "NhsRadio",
    mixins: [RandomID, AddModel],
    methods: {
      radioValue() {
        if (!this.label && this.label !== 0) {
          return this.$slots.default[0].text
        }
        return this.label
      }
    }
  }
</script>