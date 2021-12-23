<template>
  <dd class="nhsuk-summary-list__value" v-bind="$attrs">
    <slot></slot>
  </dd>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  emits: [],
  inheritAttrs: false
})
</script>
