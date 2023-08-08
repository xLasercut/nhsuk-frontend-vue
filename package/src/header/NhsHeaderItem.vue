<template>
  <li class="nhsuk-header__navigation-item">
    <nhs-link-switcher
      @click="$emit('click')"
      class="nhsuk-header__navigation-link"
      :href="href"
      v-bind="$attrs"
    >
      <slot></slot>
      <nhs-icon icon="chevron-right"></nhs-icon>
    </nhs-link-switcher>
  </li>
</template>

<script setup lang="ts">
import { NhsLinkSwitcher } from '../shared/link-switcher';
import NhsIcon from '../icon/NhsIcon.vue';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-header-item'
});
defineEmits(['click']);
defineProps({
  href: {
    type: String,
    required: true
  }
});
</script>
