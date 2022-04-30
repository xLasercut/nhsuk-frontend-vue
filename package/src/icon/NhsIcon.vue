<template>
  <component :is="icon" v-bind="$attrs"/>
</template>

<script lang="ts">
import icons from './icons/icons'
import {defineComponent, PropType} from 'vue'
import {NhsIconType} from './types'

export default defineComponent({
  name: 'nhs-icon',
  inheritAttrs: false,
  emits: [],
  props: {
    icon: {
      type: String as PropType<NhsIconType>,
      required: true
    }
  },
  components: icons
})
</script>
