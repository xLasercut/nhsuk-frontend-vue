<template>
  <div @click="onClick()" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {NhsLinkType} from '../types'

export default defineComponent({
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      required: true
    },
    tag: {
      type: String,
      default: (): NhsLinkType => {
        return 'div'
      }
    }
  },
  setup(props) {
    function onClick(): void {
      window.location.href = props.href
    }

    return {onClick}
  }
})
</script>
