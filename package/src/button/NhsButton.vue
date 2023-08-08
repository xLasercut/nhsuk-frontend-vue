<template>
  <component
    :is="buttonElement"
    :class="classes"
    :href="href"
    :disabled="disabled"
    v-bind="$attrs"
    @click="$emit('click')"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import NhsLinkButton from './types/NhsLinkButton.vue';
import { computed, PropType } from 'vue';
import { NhsButtonColor, NhsButtonType } from './types';
import { BUTTON_COLORS, BUTTON_TYPES } from './costants';

const props = defineProps({
  color: {
    type: String as PropType<NhsButtonColor>,
    default: (): NhsButtonColor => {
      return 'primary';
    },
    validator: (val: NhsButtonColor): boolean => {
      return val in BUTTON_COLORS;
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => {
      return false;
    }
  },
  href: {
    type: String
  },
  element: {
    type: String as PropType<NhsButtonType>,
    default: (): NhsButtonType => {
      return 'button';
    },
    validator: (val: NhsButtonType): boolean => {
      return val in BUTTON_TYPES;
    }
  }
});
defineEmits(['click']);
defineOptions({
  name: 'nhs-button',
  inheritAttrs: false
});
const classes = computed((): string => {
  return BUTTON_COLORS[props.color];
});

const buttonElement = computed(() => {
  if (props.href) {
    return NhsLinkButton;
  }
  return BUTTON_TYPES[props.element];
});
</script>
