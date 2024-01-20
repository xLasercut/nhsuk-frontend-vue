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

<script setup lang="ts">
import { NhsLinkSwitcher } from '../shared/link-switcher';

defineOptions({
  name: 'nhs-footer-item',
  inheritAttrs: false
});
defineEmits(['click']);
defineProps({
  href: {
    type: String,
    required: true
  }
});
</script>
