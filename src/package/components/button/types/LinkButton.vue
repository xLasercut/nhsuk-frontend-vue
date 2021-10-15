<template>
  <link-switcher :href="href" role="button" draggable="false" v-bind="$attrs">
    <slot></slot>
  </link-switcher>
</template>

<script>
import LinkSwitcher from '../../../shared/LinkSwitcher.vue'
import {defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  components: {
    LinkSwitcher
  },
  props: {
    href: {
      type: String,
      default: ""
    }
  }
})
</script>
