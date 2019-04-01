<template>
  <div class="nhsuk-checkboxes__item">
    <input class="nhsuk-checkboxes__input" :id="itemId" :name="name" type="checkbox" :value="label" v-model="model" :disabled="disabled">
    <label class="nhsuk-label nhsuk-checkboxes__label" :for="itemId">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  import AddModel from '../mixins/add-model.js'
  import RandomID from '../mixins/random-id.js'

  export default {
    name: "NhsCheckbox",
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      label: {
        default: null
      },
      name: {
        type: String,
        default: ""
      }
    },
    mixins: [AddModel, RandomID]
  }
</script>
