<template>
  <div class="nhsuk-form-group">
    <label class="nhsuk-label" :for="itemId" v-if="label">
      {{label}}
    </label>
    <select class="nhsuk-select" :id="itemId" v-model="model" :disabled="disabled">
      <slot></slot>
    </select>
  </div>
</template>

<script>
  import AddModel from '../mixins/add-model.js'
  import RandomID from '../mixins/random-id.js'

  export default {
    name: "NhsSelect",
    mixins: [AddModel, RandomID],
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      }
    }
  }
</script>