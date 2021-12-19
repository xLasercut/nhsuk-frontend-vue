<template>
  <router-link :to="href" @click="$emit('click')" :tag="tag" v-bind="$attrs">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {NhsLinkType} from '../types'

export default defineComponent({
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
  },
  inheritAttrs: false
})
</script>
