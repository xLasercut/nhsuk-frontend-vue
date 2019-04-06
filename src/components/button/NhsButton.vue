<template>
  <button
    :class="buttonClass"
    type="submit"
    @click="$emit('click')"
    :disabled="disabled"
    :name="name"
    v-bind="attributes"
  >
    <slot></slot>
  </button>
</template>

<script>
  import SharedProps from '../mixins/shared-props.js'

  export default {
    name: 'NhsButton',
    props: {
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: "primary"
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    mixins: [SharedProps],
    computed: {
      buttonClass() {
        var secondaryClass = ""
        switch (this.type.toLowerCase()) {
          case "secondary":
            secondaryClass = " nhsuk-button--secondary"
            break
          case "reverse":
            secondaryClass = " nhsuk-button--reverse"
            break
        }
        return `nhsuk-button${secondaryClass}${this.extraClasses}`
      }
    }
  }
</script>