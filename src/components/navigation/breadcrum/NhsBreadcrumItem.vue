<template>
  <li class="nhsuk-breadcrumb__item">
    <nhs-link class="nhsuk-breadcrumb__link" :to="to" v-if="to">
      <slot></slot>
    </nhs-link>
    <div class="nhsuk-breadcrumb__link" v-if="!to">
      <slot></slot>
    </div>
  </li>
</template>

<script>
  import NhsLink from '@/components/shared/NhsLink.vue'

  export default {
    name: "NhsBreadcrumItem",
    props: ["to"],
    components: {
      NhsLink
    }
  }
</script>