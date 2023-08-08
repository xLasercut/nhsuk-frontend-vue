<template>
  <li class="nhsuk-breadcrumb__item">
    <nhs-link-switcher
      class="nhsuk-breadcrumb__link"
      :href="href"
      v-if="href"
      v-bind="$attrs"
      @click="$emit('click')"
    >
      <slot></slot>
    </nhs-link-switcher>
    <span class="nhsuk-breadcrumb__link" v-if="!href" v-bind="$attrs">
      <slot></slot>
    </span>
  </li>
</template>

<script setup lang="ts">
import { NhsLinkSwitcher } from '../shared/link-switcher';

defineProps({
  href: {
    type: String
  }
});

defineEmits(['click']);
defineOptions({
  inheritAttrs: false
});
</script>
