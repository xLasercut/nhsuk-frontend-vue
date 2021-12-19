<template>
  <nav class="nhsuk-pagination" role="navigation" :aria-label="ariaLabel" v-bind="$attrs">
    <ul class="nhsuk-list nhsuk-pagination__list">
      <li class="nhsuk-pagination-item--previous" v-if="previousHref && previousPage">
        <nhs-link-switcher class="nhsuk-pagination__link nhsuk-pagination__link--prev" :href="previousHref">
          <span class="nhsuk-pagination__title">Previous</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">{{previousPage}}</span>
          <nhs-icon icon="arrow-left"></nhs-icon>
        </nhs-link-switcher>
      </li>
      <li class="nhsuk-pagination-item--next" v-if="nextHref && nextPage">
        <nhs-link-switcher class="nhsuk-pagination__link nhsuk-pagination__link--next" :href="nextHref">
          <span class="nhsuk-pagination__title">Next</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">{{nextPage}}</span>
          <nhs-icon icon="arrow-right"></nhs-icon>
        </nhs-link-switcher>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import NhsIcon from '../icon/NhsIcon.vue'
import {NhsLinkSwitcher} from '../shared/link-switcher'
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-pagination',
  props: {
    ariaLabel: {
      type: String,
      default: (): string => {
        return 'Pagination'
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
  },
  components: { NhsIcon, NhsLinkSwitcher }
})
</script>
