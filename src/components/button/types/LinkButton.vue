<template>
  <link-switcher :href="href" role="button" draggable="false">
    <slot></slot>
  </link-switcher>
</template>

<script>
  import LinkSwitcher from '../../../shared/LinkSwitcher.vue'

  export default {
    components: {
      LinkSwitcher
    },
    props: {
      href: {
        type: String,
        default: ""
      }
    }
  }
</script>