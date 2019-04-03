<template>
  <li class="nhsuk-breadcrumb__item">
    <link-switcher class="nhsuk-breadcrumb__link" :to="to" v-if="to">
      <slot></slot>
    </link-switcher>
    <div class="nhsuk-breadcrumb__link" v-if="!to">
      <slot></slot>
    </div>
  </li>
</template>

<script>
  import LinkSwitcher from '@/components/shared/LinkSwitcher.vue'

  export default {
    name: "NhsBreadcrumbItem",
    props: ["to"],
    components: {
      LinkSwitcher
    }
  }
</script>