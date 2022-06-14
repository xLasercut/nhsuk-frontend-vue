<template>
  <span class="nhsuk-error-message" :id="id" v-bind="$attrs">
    <span class="nhsuk-u-visually-hidden">{{ hiddenText }}</span>
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-error-text',
  emits: [],
  props: {
    hiddenText: {
      type: String,
      default: (): string => {
        return 'Error: '
      }
    },
    id: {
      type: String
    }
  }
})
</script>
