<template>
  <div class="nhsuk-inset-text" v-bind="$attrs">
    <span class="nhsuk-u-visually-hidden">{{hiddenText}}</span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  emits: [],
  name: 'nhs-inset-text',
  props: {
    hiddenText: {
      type: String,
      default: (): string => {
        return 'Information: '
      }
    }
  }
})
</script>
