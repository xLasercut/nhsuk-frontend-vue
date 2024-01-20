<template>
  <component
    :is="linkType"
    :disabled="disabled"
    :href="href"
    @click="$emit('click')"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import NhsRouterLink from './types/NhsRouterLink.vue';
import NhsNormalLink from './types/NhsNormalLink.vue';
import { computed, inject } from 'vue';
import { Router } from 'vue-router';
import { isRouterLink } from '../helpers/route-helper';

const props = defineProps({
  href: {
    type: String,
    required: true
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

const router = inject<Router>('router');
const linkType = computed(() => {
  if (isRouterLink(router, props.href)) {
    return NhsRouterLink;
  }
  return NhsNormalLink;
});
</script>
