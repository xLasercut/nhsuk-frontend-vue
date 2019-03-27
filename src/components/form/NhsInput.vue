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
  export default {
    name: "NhsInput",
    props: ["disabled", "value", "width"],
    data() {
      return {
        model: this.value
      }
    },
    watch: {
      value(val) {
        this.model = val
      },
      model(val) {
        this.$emit("input", val)
      }
    },
    computed: {
      inputClass() {
        return `nhsuk-input nhsuk-input--width-${this.width}`
      }
    }
  }
</script>
