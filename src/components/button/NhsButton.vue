<template>
  <component :is="buttonElement" :class="buttonClass" :attributes="attributes" :href="href" :disabled="disabled" :name="name" @click="$emit('click')">
    <slot></slot>
  </component>
</template>

<script>
  import LinkButton from './LinkButton.vue'
  import NormalButton from './NormalButton.vue'

  const colors = ["secondary", "reverse"]
  const elements = {
    button: NormalButton,
    a: LinkButton
  }

  export default {
    name: 'NhsButton',
    props: {
      name: {
        type: String,
        required: true
      },
      color: {
        type: String,
        validator(val) {
          return colors.includes(val)
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      href: {
        type: String,
        default: ""
      },
      element: {
        type: String,
        default: "button",
        validator(val) {
          return val in elements
        }
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      buttonClass() {
        var baseClass = "nhsuk-button"

        if (this.color) {
          baseClass += ` nhsuk-button--${this.color}`
        }
        return baseClass
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