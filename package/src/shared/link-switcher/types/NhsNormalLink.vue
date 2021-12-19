<template>
  <a :href="href" @click="$emit('click')" v-bind="$attrs">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {NhsLinkType} from '../types'

export default defineComponent({
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      required: true
    },
    tag: {
      type: String as PropType<NhsLinkType>,
      default: (): NhsLinkType => {
        return 'a'
      }
    }
  }
})
</script>
