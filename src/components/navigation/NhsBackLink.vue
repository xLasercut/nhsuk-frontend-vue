<template>
  <div class="nhsuk-back-link">
    <link-switcher class="nhsuk-back-link__link" :to="to">
      <nhs-icon icon="chevron-left"></nhs-icon>
      <slot></slot>
    </link-switcher>
  </div>
</template>

<script>
  import LinkSwitcher from '../shared/LinkSwitcher.vue'
  import NhsIcon from '../icon/NhsIcon.vue'

  export default {
    name: "NhsBackLink",
    components: {
      LinkSwitcher,
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