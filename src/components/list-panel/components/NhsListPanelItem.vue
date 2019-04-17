<template>
  <li class="nhsuk-list-panel__item">
    <link-switcher class="nhsuk-list-panel__link" :href="href" :attributes="attributes">
      <slot></slot>
    </link-switcher>
  </li>
</template>

<script>
  import LinkSwitcher from '../../shared/LinkSwitcher'

  export default {
    name: "NhsListPanelItem",
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