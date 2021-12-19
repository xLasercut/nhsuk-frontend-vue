<template>
  <li class="nhsuk-nav-a-z__item">
    <span class="nhsuk-nav-a-z__link--disabled" v-if="disabled" v-bind="$attrs">
      <slot></slot>
    </span>
    <nhs-link-switcher
      class="nhsuk-nav-a-z__link" :href="href"
      v-if="!disabled" @click="$emit('click')" v-bind="$attrs"
    >
      <slot></slot>
    </nhs-link-switcher>
  </li>
</template>

<script lang="ts">
import {NhsLinkSwitcher} from '../shared/link-switcher'
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'nhs-nav-az-item',
  inheritAttrs: false,
  components: { NhsLinkSwitcher },
  props: {
    disabled: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    },
    href: {
      type: String,
      default: (): string => {
        return ''
      }
    }
  }
})
</script>
