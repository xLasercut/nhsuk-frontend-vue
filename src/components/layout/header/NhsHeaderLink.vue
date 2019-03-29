<template>
  <li class="nhsuk-header__navigation-item">
    <nhs-link class="nhsuk-header__navigation-link" :to="to">
      <slot></slot>
      <nhs-icon icon="chevron-right"></nhs-icon>
    </nhs-link>
  </li>
</template>

<script>
  import NhsIcon from '@/components/icon/NhsIcon.vue'
  import NhsLink from '@/components/shared/NhsLink.vue'

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
      NhsLink
    }
  }
</script>