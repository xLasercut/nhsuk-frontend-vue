<template>
  <div class="nhsuk-grid-row" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'nhs-row',
  inheritAttrs: false,
  emits: []
})
</script>
