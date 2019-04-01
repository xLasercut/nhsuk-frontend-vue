<template>
  <button
    :class="buttonClass"
    type="submit"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'NhsButton',
    props: {
      type: {
        type: String,
        default: "primary"
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonClass() {
        switch (this.type) {
          case "secondary":
            return "nhsuk-button nhsuk-button--secondary"
          case "reverse":
            return "nhsuk-button nhsuk-button--reverse"
          default:
            return "nhsuk-button"
        }
      }
    }
  }
</script>