<template>
  <li class="nhsuk-footer__list-item">
    <nhs-link class="nhsuk-footer__list-item-link" :to="to">
      <slot></slot>
    </nhs-link>
  </li>
</template>

<script>
  import NhsLink from '@/components/shared/NhsLink.vue'

  export default {
    name: "NhsFooterLink",
    props: {
      to: {
        type: String,
        required: true
      }
    },
    components: {
      NhsLink
    }
  }
</script>
