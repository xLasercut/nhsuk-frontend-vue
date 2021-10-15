<template>
  <button :disabled="disabled" :aria-disabled="disabled" @click="$emit('click')" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String
    }
  }
})
</script>
