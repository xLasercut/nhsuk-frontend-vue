<template>
  <div class="nhsuk-inset-text" v-bind="$attrs">
    <span class="nhsuk-u-visually-hidden">{{hiddenText}}</span>
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsInsetText',
  props: {
    hiddenText: {
      type: String,
      default: 'Information: '
    }
  }
})
</script>
