<template>
  <nhs-link class="nhsuk-breadcrumb__backlink" :to="to">
    <slot></slot>
  </nhs-link>
</template>

<script>
  import NhsLink from '@/components/shared/NhsLink.vue'

  export default {
    name: "NhsBreadcrumbBack",
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