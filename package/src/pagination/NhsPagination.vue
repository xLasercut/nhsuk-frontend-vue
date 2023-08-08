<template>
  <nav class="nhsuk-pagination" role="navigation" :aria-label="ariaLabel" v-bind="$attrs">
    <ul class="nhsuk-list nhsuk-pagination__list">
      <li class="nhsuk-pagination-item--previous" v-if="previousHref && previousPage">
        <nhs-link-switcher
          class="nhsuk-pagination__link nhsuk-pagination__link--prev"
          @click="$emit('click-previous')"
          :href="previousHref"
        >
          <span class="nhsuk-pagination__title">Previous</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">{{ previousPage }}</span>
          <nhs-icon icon="arrow-left"></nhs-icon>
        </nhs-link-switcher>
      </li>
      <li class="nhsuk-pagination-item--next" v-if="nextHref && nextPage">
        <nhs-link-switcher
          class="nhsuk-pagination__link nhsuk-pagination__link--next"
          @click="$emit('click-next')"
          :href="nextHref"
        >
          <span class="nhsuk-pagination__title">Next</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">{{ nextPage }}</span>
          <nhs-icon icon="arrow-right"></nhs-icon>
        </nhs-link-switcher>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NhsIcon from '../icon/NhsIcon.vue';
import { NhsLinkSwitcher } from '../shared/link-switcher';

defineOptions({
  inheritAttrs: false,
  name: 'nhs-pagination'
});
defineEmits(['click-next', 'click-previous']);
defineProps({
  ariaLabel: {
    type: String,
    default: (): string => {
      return 'Pagination';
    }
  },
  previousHref: {
    type: String
  },
  previousPage: {
    type: String
  },
  nextHref: {
    type: String
  },
  nextPage: {
    type: String
  }
});
</script>
