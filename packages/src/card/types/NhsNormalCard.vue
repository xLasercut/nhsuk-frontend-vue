<template>
  <div v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script lang="ts">

import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      default: (): string => {
        return ''
      }
    }
  }
})
</script>
