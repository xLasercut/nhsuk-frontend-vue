<template>
  <div class="nhsuk-radios__divider">
    {{divider}}
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  emits: [],
  props: {
    divider: {
      type: String,
      required: true
    },
    id: {},
    value: {}
  }
})
</script>
