<template>
  <p class="nhsuk-breadcrumb__back">
    <nhs-link-switcher
      class="nhsuk-breadcrumb__backlink"
      @click="$emit('click')"
      :href="href"
      v-bind="$attrs"
    >
      <slot></slot>
    </nhs-link-switcher>
  </p>
</template>

<script setup lang="ts">
import { NhsLinkSwitcher } from '../shared/link-switcher';

defineProps({
  href: {
    type: String,
    required: true
  }
});

defineEmits(['click']);
defineOptions({
  name: 'nhs-breadcrumb-backlink',
  inheritAttrs: false
});
</script>
