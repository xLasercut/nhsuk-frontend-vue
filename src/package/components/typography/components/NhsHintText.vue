<template>
  <span class="nhsuk-hint" v-bind="$attrs" :id="id">
    <slot></slot>
  </span>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'NhsHintText',
  props: {
    id: {
      type: String
    }
  }
})
</script>
