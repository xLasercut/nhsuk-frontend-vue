<template>
  <link-switcher :href="href" role="button" draggable="false" :attributes="attributes">
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
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>