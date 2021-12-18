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
import {computed, defineComponent} from 'vue'

const COLORS = {
  primary: 'nhsuk-button',
  secondary: 'nhsuk-button nhsuk-button--secondary',
  reverse: 'nhsuk-button nhsuk-button--reverse'
}

const ELEMENTS = {
  button: NormalButton,
  a: LinkButton
}

export default defineComponent({
  name: 'NhsButton',
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: 'primary',
      validator(val) {
        return val in COLORS
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String
    },
    element: {
      type: String,
      default: 'button',
      validator(val) {
        return val in ELEMENTS
      }
    }
  },
  setup(props) {
    const classes = computed(() => {
      return COLORS[props.color]
    })

    const buttonElement = computed(() => {
      if (props.href) {
        return LinkButton
      }
      return ELEMENTS[props.element]
    })

    return {classes, buttonElement}
  }
})
</script>
