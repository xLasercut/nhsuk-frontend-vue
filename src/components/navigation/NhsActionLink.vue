<template>
  <div class="nhsuk-action-link">
    <link-switcher class="nhsuk-action-link__link" :to="to">
      <nhs-icon icon="arrow-right-circle"></nhs-icon>
      <span class="nhsuk-action-link__text">
        <slot></slot>
      </span>
    </link-switcher>
  </div>
</template>

<script>
  import LinkSwitcher from '@/components/shared/LinkSwitcher.vue'
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
      LinkSwitcher,
      NhsIcon
    }
  }
</script>