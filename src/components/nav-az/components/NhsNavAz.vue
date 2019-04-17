<template>
  <nav class="nhsuk-nav-a-z" id="nhsuk-nav-a-z" role="navigation" :aria-label="ariaLabel" v-bind="attributes">
    <ol class="nhsuk-nav-a-z__list" role="list">
      <slot></slot>
    </ol>
  </nav>
</template>

<script>
  import LinkSwitcher from '../../shared/LinkSwitcher.vue'

  export default {
    name: "NhsNavAz",
    components: {
      LinkSwitcher
    },
    props: {
      ariaLabel: {
        type: String,
        default: "A to Z Navigation"
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