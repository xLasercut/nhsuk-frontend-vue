<template>
  <div class="nhsuk-back-link" v-bind="$attrs">
    <nhs-link-switcher class="nhsuk-back-link__link" @click="$emit('click')" :href="href">
      <nhs-icon icon="chevron-left"></nhs-icon>
      <slot></slot>
    </nhs-link-switcher>
  </div>
</template>

<script setup lang="ts">
import { NhsLinkSwitcher } from '../shared/link-switcher';
import NhsIcon from '../icon/NhsIcon.vue';

defineProps({
  href: {
    type: String,
    required: true
  }
});
defineEmits(['click']);
defineOptions({
  inheritAttrs: false
});
</script>
