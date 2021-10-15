<template>
  <span class="nhsuk-error-message" :id="id" v-bind="$attrs">
    <span class="nhsuk-u-visually-hidden">{{hiddenText}}</span>
    <slot></slot>
  </span>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsErrorText',
  props: {
    hiddenText: {
      type: String,
      default: 'Error: '
    },
    id: {
      type: String
    }
  }
})
</script>
