<template>
  <li class="nhsuk-header__navigation-item">
    <link-switcher class="nhsuk-header__navigation-link" :to="to">
      <slot></slot>
      <nhs-icon icon="chevron-right"></nhs-icon>
    </link-switcher>
  </li>
</template>

<script>
  import NhsIcon from '@/components/icon/NhsIcon.vue'
  import LinkSwitcher from '@/components/shared/LinkSwitcher.vue'

  export default {
    name: "NhsHeaderLink",
    props: {
      to: {
        type: String,
        required: true
      }
    },
    components: {
      NhsIcon,
      LinkSwitcher
    }
  }
</script>