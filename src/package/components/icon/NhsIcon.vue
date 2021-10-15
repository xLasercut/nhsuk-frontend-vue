<template>
  <component :is="icon" v-bind="$attrs"/>
</template>

<script>
import icons from './icons/icons.js'
import {defineComponent} from 'vue'

export default defineComponent({
  name: "NhsIcon",
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      required: true
    }
  },
  components: icons
})
</script>
