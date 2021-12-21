<template>
  <ol v-bind="$attrs">
    <slot></slot>
  </ol>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  emits: [],
  inheritAttrs: false
})
</script>
