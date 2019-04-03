<template>
  <nav class="nhsuk-breadcrumb" :aria-label="ariaLabel">
    <div class="nhsuk-width-container">
      <ol class="nhsuk-breadcrumb__list">
        <slot name="item"></slot>
      </ol>
      <p class="nhsuk-breadcrumb__back">
        <slot name="back"></slot>
      </p>
    </div>
  </nav>
</template>

<script>
  import NhsLink from '@/components/shared/NhsLink.vue'

  export default {
    name: "NhsBreadcrumb",
    props: {
      ariaLabel: {
        type: String,
        default: ""
      }
    },
    components: {
      NhsLink
    }
  }
</script>