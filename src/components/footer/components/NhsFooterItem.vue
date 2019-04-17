<template>
  <li class="nhsuk-footer__list-item">
    <link-switcher class="nhsuk-footer__list-item-link" :href="href" v-bind="attributes">
      <slot></slot>
    </link-switcher>
  </li>
</template>

<script>
  import LinkSwitcher from '../../shared/LinkSwitcher'

  export default {
    name: "NhsFooterItem",
    components: {
      LinkSwitcher
    },
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