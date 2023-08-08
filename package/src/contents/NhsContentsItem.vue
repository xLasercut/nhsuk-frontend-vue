<template>
  <li class="nhsuk-contents-list__item" v-bind="attributes">
    <span class="nhsuk-contents-list__current" v-if="!href" v-bind="$attrs">
      <slot></slot>
    </span>
    <nhs-link-switcher
      class="nhsuk-contents-list__link"
      @click="$emit('click')"
      v-if="href"
      :href="href"
      v-bind="$attrs"
    >
      <slot></slot>
    </nhs-link-switcher>
  </li>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { NhsLinkSwitcher } from '../shared/link-switcher';
import { NhsContentsItemAttribute } from './interfaces';
import { AriaCurrentType } from '../shared/types';

defineOptions({
  name: 'nhs-contents-item',
  inheritAttrs: false
});
defineEmits(['click']);
const props = defineProps({
  href: {
    type: String
  },
  ariaCurrent: {
    type: String as PropType<AriaCurrentType>,
    default: (): string => {
      return 'page';
    }
  }
});
const attributes = computed(() => {
  const attributes: NhsContentsItemAttribute = {};
  if (!props.href) {
    attributes['aria-current'] = props.ariaCurrent;
  }
  return attributes;
});
</script>
