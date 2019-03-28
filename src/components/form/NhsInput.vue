<template>
  <input
    :class="inputClass"
    id="input-width-10"
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
    props: ["disabled", "width"],
    mixins: [AddModel],
    computed: {
      inputClass() {
        return `nhsuk-input nhsuk-input--width-${this.width}`
      }
    }
  }
</script>
