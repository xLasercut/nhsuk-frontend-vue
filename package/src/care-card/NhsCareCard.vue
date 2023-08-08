<template>
  <div :class="`nhsuk-card nhsuk-card--care nhsuk-card--care--${type}`" v-bind="$attrs">
    <div class="nhsuk-card--care__heading-container">
      <nhs-heading-switcher :heading-level="headingLevel" class="nhsuk-card--care__heading">
        <span role="text">
          <span class="nhsuk-u-visually-hidden">{{ accessibilityText }}</span>
          {{ heading }}
        </span>
      </nhs-heading-switcher>
      <span class="nhsuk-card--care__arrow" aria-hidden="true"></span>
    </div>
    <div class="nhsuk-card__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NhsHeadingSwitcher } from '../shared/heading-switcher';
import { computed, PropType } from 'vue';
import { NhsCareCardType } from './types';
import { NhsHeadingType } from '../shared/heading-switcher/types';
import {CARE_CARD_TYPES} from "./constants";


defineOptions({
  name: 'nhs-care-card',
  inheritAttrs: false
});
defineEmits([]);
const props = defineProps({
  heading: {
    type: String,
    required: true
  },
  type: {
    type: String as PropType<NhsCareCardType>,
    default: (): NhsCareCardType => {
      return 'non-urgent';
    },
    validator: (val: NhsCareCardType): boolean => {
      return val in CARE_CARD_TYPES;
    }
  },
  headingLevel: {
    type: Number as PropType<NhsHeadingType>,
    default: (): NhsHeadingType => {
      return 3;
    }
  },
  hiddenText: {
    type: String,
    default: (): string => {
      return '';
    }
  }
});
const accessibilityText = computed((): string => {
  if (props.hiddenText) {
    return props.hiddenText;
  }
  return CARE_CARD_TYPES[props.type];
});
</script>
