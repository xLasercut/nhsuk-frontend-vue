<template>
  <li class="nhsuk-footer__list-item">
    <nhs-link-switcher
      class="nhsuk-footer__list-item-link"
      @click="$emit('click')"
      :href="href"
      v-bind="$attrs"
    >
      <slot></slot>
    </nhs-link-switcher>
  </li>
</template>

<script lang="ts">
import { NhsLinkSwitcher } from '../shared/link-switcher'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'nhs-footer-item',
  emits: ['click'],
  inheritAttrs: false,
  components: { NhsLinkSwitcher },
  props: {
    href: {
      type: String,
      required: true
    }
  }
})
</script>
