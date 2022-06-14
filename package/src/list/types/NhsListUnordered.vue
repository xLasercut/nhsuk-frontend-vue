<template>
  <ul v-bind="$attrs">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: [],
  inheritAttrs: false
})
</script>
