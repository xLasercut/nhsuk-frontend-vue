<template>
  <select class="nhsuk-select" :id="id" v-model="model" :disabled="disabled">
    <slot></slot>
  </select>
</template>

<script>
  import AddModel from '../mixins/add-model.js'

  export default {
    name: "NhsSelect",
    mixins: [AddModel],
    props: {
      id: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>