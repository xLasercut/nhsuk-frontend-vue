<template>
  <div class="nhsuk-action-link">
    <nhs-link class="nhsuk-action-link__link" :to="to">
      <nhs-icon icon="arrow-right-circle"></nhs-icon>
      <span class="nhsuk-action-link__text">
        <slot></slot>
      </span>
    </nhs-link>
  </div>
</template>

<script>
  import NhsLink from '@/components/shared/NhsLink.vue'
  import NhsIcon from '@/components/icon/NhsIcon.vue'

  export default {
    name: "NhsActionLink",
    props: {
      to: {
        type: String,
        required: true
      }
    },
    components: {
      NhsLink,
      NhsIcon
    }
  }
</script>