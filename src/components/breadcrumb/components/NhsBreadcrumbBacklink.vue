<template>
  <p class="nhsuk-breadcrumb__back">
    <link-switcher class="nhsuk-breadcrumb__backlink" :href="href" v-bind="$attrs">
      <slot></slot>
    </link-switcher>
  </p>
</template>

<script>
  import LinkSwitcher from '../../../shared/LinkSwitcher.vue'

  export default {
    name: 'NhsBreadcrumbBacklink',
    components: {
      LinkSwitcher
    },
    props: {
      href: {
        type: String,
        required: true
      }
    }
  }
</script>