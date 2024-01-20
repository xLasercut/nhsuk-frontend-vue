<template>
  <li class="nhsuk-list-panel__item">
    <nhs-link-switcher
      class="nhsuk-list-panel__link"
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
  name: 'nhs-list-panel-item',
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
