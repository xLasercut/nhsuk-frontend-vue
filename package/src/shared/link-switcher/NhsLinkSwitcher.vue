<template>
  <component :is="linkType" :disabled="disabled" :href="href" @click="$emit('click')" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Router from './types/NhsRouterLink.vue'
import Normal from './types/NhsNormalLink.vue'
import {computed, defineComponent, inject} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  emits: ['click'],
  props: {
    href: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: (): boolean => {
        return false
      }
    }
  },
  setup(props) {
    function isRouterLink(): boolean {
      const router = Boolean(inject('router'))
      const pattern = /^((http|https|ftp):\/\/)/
      return router && !pattern.test(props.href)
    }

    const linkType = computed(() => {
      if (isRouterLink()) {
        return Router
      }
      return Normal
    })

    return {linkType}
  }
})
</script>
