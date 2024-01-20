<template>
  <fieldset class="nhsuk-fieldset" v-bind="$attrs">
    <legend :class="classes" v-if="legend && pageHeading">
      <h1 class="nhsuk-fieldset__heading">
        <slot name="legend" :legend="legend">{{ legend }}</slot>
      </h1>
    </legend>
    <legend :class="classes" v-if="legend && !pageHeading">
      <slot name="legend" :legend="legend">{{ legend }}</slot>
    </legend>
    <slot></slot>
  </fieldset>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue';
import { NhsFieldsetSize } from './types';
import { FIELDSET_SIZES } from './constants';

defineOptions({
  name: 'nhs-fieldset',
  inheritAttrs: false
});
defineEmits([]);
const props = defineProps({
  legend: {
    type: String
  },
  pageHeading: {
    type: Boolean,
    default: (): boolean => {
      return false;
    }
  },
  size: {
    type: String as PropType<NhsFieldsetSize>,
    validator: (val: NhsFieldsetSize): boolean => {
      if (val) {
        return FIELDSET_SIZES.includes(val);
      }
      return true;
    }
  }
});

const classes = computed((): string => {
  let classes = ['nhsuk-fieldset__legend'];

  if (props.size) {
    classes.push(`nhsuk-fieldset__legend--${props.size}`);
  }

  return classes.join(' ');
});
</script>
