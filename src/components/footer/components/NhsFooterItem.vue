<template>
  <li class="nhsuk-footer__list-item">
    <link-switcher class="nhsuk-footer__list-item-link" :href="href" v-bind="$attrs">
      <slot></slot>
    </link-switcher>
  </li>
</template>

<script>
  import LinkSwitcher from '../../../shared/LinkSwitcher.vue'

  export default {
    name: 'NhsFooterItem',
    components: { LinkSwitcher },
    props: {
      href: {
        type: String,
        required: true
      }
    }
  }
</script>