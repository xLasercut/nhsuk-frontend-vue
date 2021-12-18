<template>
  <div class="nhsuk-grid-row" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'NhsRow',
  inheritAttrs: false,
})
</script>
