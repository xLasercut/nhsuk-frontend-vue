<template>
  <link-switcher :href="href" :item-class="itemClass" role="button" draggable="false" :attributes="attributes">
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