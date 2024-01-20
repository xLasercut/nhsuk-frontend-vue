<template>
  <div class="nhsuk-warning-callout" v-bind="$attrs">
    <nhs-heading-switcher class="nhsuk-warning-callout__label" :heading-level="headingLevel">
      <slot name="heading" :props="heading">
        {{ showNormalHeading() }}
        <span role="text" v-if="!isHeadingContainsImportant()">
          <span class="nhsuk-u-visually-hidden">Important: </span>
          {{ heading }}
        </span>
      </slot>
    </nhs-heading-switcher>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { NhsHeadingSwitcher } from '../shared/heading-switcher';
import { PropType } from 'vue';
import { NhsHeadingType } from '../shared/heading-switcher/types';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-warning-callout'
});
defineEmits([]);
const props = defineProps({
  heading: {
    type: String,
    required: true
  },
  headingLevel: {
    type: Number as PropType<NhsHeadingType>,
    default: (): NhsHeadingType => {
      return 3;
    }
  }
});

function isHeadingContainsImportant(): boolean {
  return props.heading.toLowerCase().includes('important');
}

function showNormalHeading(): string {
  if (isHeadingContainsImportant()) {
    return props.heading;
  }
  return '';
}
</script>
