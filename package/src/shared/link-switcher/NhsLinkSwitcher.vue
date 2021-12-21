<template>
  <component :is="linkType" :disabled="disabled" :href="href" @click="$emit('click')" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import NhsRouterLink from './types/NhsRouterLink.vue'
import NhsNormalLink from './types/NhsNormalLink.vue'
import {computed, defineComponent, inject} from 'vue'
import {Router} from 'vue-router'
import {isRouterLink} from '../helpers/route-helper'

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
    const router = inject<Router>('router')
    const linkType = computed(() => {
      if (isRouterLink(router, props.href)) {
        return NhsRouterLink
      }
      return NhsNormalLink
    })

    return {linkType}
  }
})
</script>
