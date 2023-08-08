<template>
  <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
    <span
      class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block"
      v-if="disabled"
      v-bind="$attrs"
    >
      <slot></slot>
    </span>
    <nhs-link-switcher
      class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block"
      :href="href"
      v-if="!disabled"
      @click="$emit('click')"
      v-bind="$attrs"
    >
      <slot></slot>
    </nhs-link-switcher>
  </li>
</template>

<script setup lang="ts">
import { NhsLinkSwitcher } from '../shared/link-switcher';

defineOptions({
  name: 'nhs-nav-az-item',
  inheritAttrs: false
});
defineEmits(['click']);
defineProps({
  disabled: {
    type: Boolean,
    default: (): boolean => {
      return false;
    }
  },
  href: {
    type: String,
    default: (): string => {
      return '';
    }
  }
});
</script>
