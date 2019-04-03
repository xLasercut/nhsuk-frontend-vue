<template>
  <link-switcher class="nhsuk-breadcrumb__backlink" :to="to">
    <slot></slot>
  </link-switcher>
</template>

<script>
  import LinkSwitcher from '@/components/shared/LinkSwitcher.vue'

  export default {
    name: "NhsBreadcrumbBack",
    props: {
      to: {
        type: String,
        required: true
      }
    },
    components: {
      LinkSwitcher
    }
  }
</script>