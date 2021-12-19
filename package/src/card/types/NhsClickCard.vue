<template>
  <nhs-link-switcher :href="href" tag="div" v-bind="$attrs">
    <slot></slot>
  </nhs-link-switcher>
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import {NhsLinkSwitcher} from '../../shared/link-switcher'

export default defineComponent({
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      default: (): string => {
        return ''
      }
    }
  },
  components: {NhsLinkSwitcher}
})
</script>
