<template>
  <li class="nhsuk-header__navigation-item">
    <link-switcher class="nhsuk-header__navigation-link" :href="href" :attributes="attributes">
      <slot></slot>
      <nhs-icon icon="chevron-right"></nhs-icon>
    </link-switcher>
  </li>
</template>

<script>
  export default {
    name: "NhsHeaderItem",
    props: {
      href: {
        type: String,
        required: true
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>