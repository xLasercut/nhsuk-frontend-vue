<template>
  <component :is="buttonElement" :class="buttonClass" :attributes="attributes" :href="href" :disabled="disabled" :type="buttonType" :value="value" :name="name" @click="$emit('click')">
    <slot></slot>
  </component>
</template>

<script>
  import LinkButton from './LinkButton.vue'
  import InputButton from './InputButton.vue'
  import NormalButton from './NormalButton.vue'

  export default {
    name: 'NhsButton',
    props: {
      name: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: "primary"
      },
      disabled: {
        type: Boolean,
        default: false
      },
      href: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "submit"
      },
      element: {
        type: String,
        default: "button"
      },
      value: {
        type: String
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
        var classMap = {
          secondary: "nhsuk-button nhsuk-button--secondary",
          reverse: "nhsuk-button nhsuk-button--reverse"
        }

        if (this.color.toLowerCase() in classMap) {
          return classMap[this.color.toLowerCase()]
        }
        return "nhsuk-button"
      },
      buttonElement() {
        var elementMap = {
          button: NormalButton,
          input: InputButton,
          a: LinkButton
        }
        
        if (this.href !== "") {
          return LinkButton
        }
        else if (this.element.toLowerCase() in elementMap) {
          return elementMap[this.element.toLowerCase()]
        }
        return NormalButton
      },
      buttonType() {
        var types = ["submit", "button", "reset"]

        if (typs.includes(this.type.toLowerCase())) {
          return this.type.toLowerCase()
        }
        return "submit"
      }
    }
  }
</script>