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

<script setup lang="ts">
import { NhsLinkSwitcher } from '../../shared/link-switcher';

defineProps({
  href: {
    type: String,
    default: (): string => {
      return '';
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => {
      return false;
    }
  }
});
defineEmits(['click']);
defineOptions({
  inheritAttrs: false
});
</script>
