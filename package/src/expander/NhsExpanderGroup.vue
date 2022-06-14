<template>
  <div class="nhsuk-expander-group" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'nhs-expander-group',
  emits: [],
  inheritAttrs: false
})
</script>
