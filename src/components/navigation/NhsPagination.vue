<template>
  <nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
    <ul class="nhsuk-list nhsuk-pagination__list">
      <li class="nhsuk-pagination-item--previous">
        <link-switcher class="nhsuk-pagination__link nhsuk-pagination__link--prev" :to="previous.url">
          <span class="nhsuk-pagination__title">Previous</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">{{previous.label}}</span>
          <nhs-icon icon="arrow-left"></nhs-icon>
        </link-switcher>
      </li>
      <li class="nhsuk-pagination-item--next">
        <link-switcher class="nhsuk-pagination__link nhsuk-pagination__link--next" :to="next.url">
          <span class="nhsuk-pagination__title">Next</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">{{next.label}}</span>
          <nhs-icon icon="arrow-right"></nhs-icon>
        </link-switcher>
      </li>
    </ul>
  </nav>
</template>

<script>
  import NhsIcon from '../icon/NhsIcon.vue'
  import LinkSwitcher from '../shared/LinkSwitcher.vue'

  export default {
    name: "NhsPagination",
    props: ["previous", "next"],
    components: {
      NhsIcon,
      LinkSwitcher
    }
  }
</script>