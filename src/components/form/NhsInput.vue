<template>
  <input
    :class="inputClass"
    :id="id"
    name="test-width-10"
    type="text"
    :disabled="disabled"
    v-model="model"
  >
</template>

<script>
  import AddModel from '@/components/mixins/add-model.js'

  export default {
    name: "NhsInput",
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: String,
        default: ""
      },
      id: {
        type: String,
        default: ""
      }
    },
    mixins: [AddModel],
    computed: {
      inputClass() {
        return `nhsuk-input nhsuk-input--width-${this.width}`
      }
    }
  }
</script>
