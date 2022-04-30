<template>
  <button :aria-disabled="disabled" @click="$emit('click')" v-bind="attributes">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import {getAttributes} from '../../shared/helpers/attribute-helper'

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
    const attributes = getAttributes(['disabled'], props, context)

    return {attributes}
  }
})
</script>
