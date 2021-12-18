<template>
  <component :is="icon" v-bind="$attrs"/>
</template>

<script lang="ts">
import icons from './icons/icons'
import {defineComponent} from 'vue'

export default defineComponent({
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
