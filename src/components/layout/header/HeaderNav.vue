<template>
  <nav class="nhsuk-header__navigation" id="header-navigation" role="navigation" aria-label="Primary navigation" aria-labelledby="label-navigation">
    <p class="nhsuk-header__navigation-title"><span id="label-navigation">Menu</span>
      <button class="nhsuk-header__navigation-close" id="close-menu">
        <nhs-icon icon="close"></nhs-icon>
        <span class="nhsuk-u-visually-hidden">Close menu</span>
      </button>
    </p>
    <ul class="nhsuk-header__navigation-list">
      <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--for-mobile">
        <nhs-link class="nhsuk-header__navigation-link" to="/">
          Home
          <nhs-icon icon="chevron-right"></nhs-icon>
        </nhs-link>
      </li>
      <slot></slot>
    </ul>
  </nav>
</template>

<script>
  import NhsIcon from '@/components/icon/NhsIcon.vue'
  import NhsLink from '@/components/shared/NhsLink.vue'

  export default {
    components: {
      NhsIcon,
      NhsLink
    }
  }
</script>