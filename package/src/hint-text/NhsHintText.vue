<template>
  <span class="nhsuk-hint" v-bind="$attrs" :id="id">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  emits: [],
  name: 'nhs-hint-text',
  props: {
    id: {
      type: String
    }
  }
})
</script>
