<template>
  <li class="nhsuk-contents-list__item">
    <nhs-link class="nhsuk-contents-list__link" :to="to">
      <slot></slot>
    </nhs-link>
  </li>
</template>

<script>
  import NhsLink from '../shared/NhsLink.vue'

  export default {
    name: "NhsContentsItem",
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