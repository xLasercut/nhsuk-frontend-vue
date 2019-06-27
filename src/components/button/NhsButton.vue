<template>
  <component
    :is="buttonElement" :class="classes"
    :href="href" :disabled="disabled"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot></slot>
  </component>
</template>

<script>
  import LinkButton from './types/LinkButton.vue'
  import NormalButton from './types/NormalButton.vue'

  const colors = {
    primary: 'nhsuk-button',
    secondary: 'nhsuk-button nhsuk-button--secondary',
    reverse: 'nhsuk-button nhsuk-button--reverse'
  }
  const elements = {
    button: NormalButton,
    a: LinkButton
  }

  export default {
    name: 'NhsButton',
    props: {
      color: {
        type: String,
        default: 'primary',
        validator(val) {
          return val in colors
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      href: {
        type: String,
        default: ''
      },
      element: {
        type: String,
        default: 'button',
        validator(val) {
          return val in elements
        }
      }
    },
    computed: {
      classes() {
        return colors[this.color]
      },
      buttonElement() {
        if (this.href) {
          return LinkButton
        }
        return elements[this.element]
      }
    }
  }
</script>