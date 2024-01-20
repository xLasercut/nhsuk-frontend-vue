<template>
  <nhs-card feature v-bind="$attrs" :heading-level="headingLevel" :heading="label" :id="id">
    <template #description>
      <ul :class="classes" v-if="!disabled">
        <slot></slot>
      </ul>
      <div :class="classes" v-if="disabled">
        {{ message }}
      </div>
    </template>
  </nhs-card>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { NhsHeadingType } from '../shared/heading-switcher/types';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-list-panel'
});
defineEmits([]);
defineProps({
  label: {
    type: String
  },
  id: {
    type: String
  },
  headingLevel: {
    type: Number as PropType<NhsHeadingType>,
    default: (): NhsHeadingType => {
      return 2;
    }
  },
  disabled: {
    type: Boolean,
    default: (): boolean => {
      return false;
    }
  },
  message: {
    type: String
  }
});
const classes = computed((): string => {
  const classes = ['nhsuk-list nhsuk-list--border'];
  return classes.join(' ');
});
</script>
