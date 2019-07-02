<template>
  <nav class="nhsuk-pagination" role="navigation" :aria-label="ariaLabel" v-bind="$attrs">
  <ul class="nhsuk-list nhsuk-pagination__list">
    <li class="nhsuk-pagination-item--previous" v-if="previousHref && previousPage">
      <link-switcher class="nhsuk-pagination__link nhsuk-pagination__link--prev" :href="previousHref">
        <span class="nhsuk-pagination__title">Previous</span>
        <span class="nhsuk-u-visually-hidden">:</span>
        <span class="nhsuk-pagination__page">{{previousPage}}</span>
        <nhs-icon icon="arrow-left"></nhs-icon>
      </link-switcher>
    </li>
    <li class="nhsuk-pagination-item--next" v-if="nextHref && nextPage">
      <link-switcher class="nhsuk-pagination__link nhsuk-pagination__link--next" :href="nextHref">
        <span class="nhsuk-pagination__title">Next</span>
        <span class="nhsuk-u-visually-hidden">:</span>
        <span class="nhsuk-pagination__page">{{nextPage}}</span>
        <nhs-icon icon="arrow-right"></nhs-icon>
      </link-switcher>
    </li>
  </ul>
</nav>
</template>

<script>
  import NhsIcon from '../icon/NhsIcon.vue'
  import LinkSwitcher from '../../shared/LinkSwitcher.vue'

  export default {
    name: 'NhsPagination',
    props: {
      ariaLabel: {
        type: String,
        default: 'Pagination'
      },
      previousHref: {
        type: String,
        default: ''
      },
      previousPage: {
        type: String,
        default: ''
      },
      nextHref: {
        type: String,
        default: ''
      },
      nextPage: {
        type: String,
        default: ''
      }
    },
    components: { NhsIcon, LinkSwitcher }
  }
</script>