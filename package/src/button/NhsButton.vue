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

<script lang="ts">
import NhsNormalButton from './types/NhsNormalButton.vue'
import NhsLinkButton from './types/NhsLinkButton.vue'
import {computed, defineComponent, PropType} from 'vue'
import {NhsButtonColor, NhsButtonType} from './types'

const BUTTON_COLORS = {
  primary: 'nhsuk-button',
  secondary: 'nhsuk-button nhsuk-button--secondary',
  reverse: 'nhsuk-button nhsuk-button--reverse'
}

const BUTTON_TYPES = {
  button: NhsNormalButton,
  a: NhsLinkButton
}

export default defineComponent({
  name: 'nhs-button',
  inheritAttrs: false,
  props: {
    color: {
      type: String as PropType<NhsButtonColor>,
      default: (): NhsButtonColor => {
        return 'primary'
      },
      validator: (val: NhsButtonColor): boolean => {
        return val in BUTTON_COLORS
      }
    },
    disabled: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    },
    href: {
      type: String
    },
    element: {
      type: String as PropType<NhsButtonType>,
      default: (): NhsButtonType => {
        return 'button'
      },
      validator: (val: NhsButtonType): boolean => {
        return val in BUTTON_TYPES
      }
    }
  },
  setup(props) {
    const classes = computed((): string => {
      return BUTTON_COLORS[props.color]
    })

    const buttonElement = computed(() => {
      if (props.href) {
        return NhsLinkButton
      }
      return BUTTON_TYPES[props.element]
    })

    return {classes, buttonElement}
  }
})
</script>
