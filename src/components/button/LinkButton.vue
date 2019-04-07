<template>
  <link-switcher :href="href" role="button" draggable="false" v-bind="attributes">
    <slot></slot>
  </link-switcher>
</template>

<script>
  import LinkSwitcher from '../shared/LinkSwitcher.vue'

  export default {
    components: {
      LinkSwitcher
    },
    props: {
      href: {
        type: String,
        default: ""
      },
      value: {
        type: String
      },
      type: {
        type: String
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