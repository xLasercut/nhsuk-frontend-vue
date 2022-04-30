<template>
  <nhs-link-switcher
    :href="href"
    :disabled="disabled"
    role="button"
    draggable="false"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot></slot>
  </nhs-link-switcher>
</template>

<script lang="ts">
import {NhsLinkSwitcher} from '../../shared/link-switcher'
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  emits: ['click'],
  components: {NhsLinkSwitcher},
  props: {
    href: {
      type: String,
      default: (): string => {
        return ''
      }
    },
    disabled: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    }
  }
})
</script>
