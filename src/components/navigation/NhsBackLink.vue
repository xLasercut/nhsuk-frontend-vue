<template>
  <div class="nhsuk-back-link">
    <nhs-link class="nhsuk-back-link__link" :to="to">
      <nhs-icon icon="chevron-left"></nhs-icon>
      <slot></slot>
    </nhs-link>
  </div>
</template>

<script>
  import NhsLink from '@/components/shared/NhsLink.vue'
  import NhsIcon from '@/components/icon/NhsIcon.vue'

  export default {
    name: "NhsBackLink",
    components: {
      NhsLink,
      NhsIcon
    },
    props: {
      to: {
        type: String,
        required: true
      }
    }
  }
</script>