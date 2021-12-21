<template>
  <button :aria-disabled="disabled" @click="$emit('click')" v-bind="attributes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {disableAttributeHelper} from '../../shared/helpers/attribute-helper'

export default defineComponent({
  inheritAttrs: false,
  emits: ['click'],
  props: {
    disabled: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    href: {
      type: String
    }
  },
  setup(props, context) {
    const {attributes} = disableAttributeHelper(props.disabled, context.attrs)

    return {attributes}
  }
})
</script>
