<template>
  <nav class="nhsuk-header__navigation" id="header-navigation" role="navigation" aria-label="Primary navigation" aria-labelledby="label-navigation">
    <div class="nhsuk-width-container">
      <p class="nhsuk-header__navigation-title"><span id="label-navigation">Menu</span>
        <button class="nhsuk-header__navigation-close" id="close-menu">
          <nhs-icon icon="close"></nhs-icon>
          <span class="nhsuk-u-visually-hidden">Close menu</span>
        </button>
      </p>
      <ul class="nhsuk-header__navigation-list">
        <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--for-mobile">
          <link-switcher class="nhsuk-header__navigation-link" :href="homeHref">
            {{ homeText }}
            <nhs-icon icon="chevron-right"></nhs-icon>
          </link-switcher>
        </li>
        <slot></slot>
      </ul>
    </div>
  </nav>
</template>

<script>
  import NhsIcon from '../../icon/NhsIcon.vue'
  import LinkSwitcher from '../../../shared/LinkSwitcher.vue'

  export default {
    name: 'HeaderNav',
    components: {
      NhsIcon,
      LinkSwitcher
    },
    props: {
      homeHref: {
        type: String,
        required: true
      },
      homeText: {
        type: String,
        required: true
      }
    }
  }
</script>