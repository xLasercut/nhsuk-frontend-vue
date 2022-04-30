<template>
  <h1 class="nhsuk-label-wrapper">
    <nhs-label-normal :size="size" v-bind="$attrs">
      <slot></slot>
    </nhs-label-normal>
  </h1>
</template>

<script lang="ts">
import NhsLabelNormal from './NhsLabelNormal.vue'
import {defineComponent, PropType} from 'vue'
import {NhsLabelSize} from '../types'

export default defineComponent({
  inheritAttrs: false,
  emits: [],
  components: { NhsLabelNormal },
  props: {
    size: {
      type: String as PropType<NhsLabelSize>
    }
  }
})
</script>
