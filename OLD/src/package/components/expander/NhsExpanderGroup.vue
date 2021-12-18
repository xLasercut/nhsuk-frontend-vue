<template>
  <div class="nhsuk-expander-group" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NhsExpanderGroup',
  inheritAttrs: false,
})
</script>
