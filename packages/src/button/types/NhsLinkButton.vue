<template>
  <nhs-link-switcher :href="href" role="button" draggable="false" v-bind="$attrs">
    <slot></slot>
  </nhs-link-switcher>
</template>

<script lang="ts">
import {NhsLinkSwitcher} from '../../shared/link-switcher'
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  components: {NhsLinkSwitcher},
  props: {
    href: {
      type: String,
      default: (): string => {
        return ''
      }
    }
  }
})
</script>
