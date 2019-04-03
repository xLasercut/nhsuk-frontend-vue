<template>
  <li class="nhsuk-footer__list-item">
    <link-switcher class="nhsuk-footer__list-item-link" :to="to">
      <slot></slot>
    </link-switcher>
  </li>
</template>

<script>
  import LinkSwitcher from '../../shared/LinkSwitcher.vue'

  export default {
    name: "NhsFooterLink",
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
