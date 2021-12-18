<template>
  <component :is="linkType" :href="href" @click="$emit('click')" :tag="tag" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Router from './types/NhsRouterLink.vue'
import Normal from './types/NhsNormalLink.vue'
import {computed, defineComponent, inject, PropType} from 'vue'
import {NhsLinkType} from './types'
import DivLink from './types/NhsDivLink.vue'

const NON_ROUTER_LINK_PATTERN = new RegExp('^((http|https|ftp):\/\/)')

const LINK_TYPES = {
  a: Normal,
  div: DivLink
}

export default defineComponent({
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      required:  true
    },
    tag: {
      type: String as PropType<NhsLinkType>,
      default: (): NhsLinkType => {
        return 'a'
      },
      validator: (val: NhsLinkType): boolean => {
        return val in LINK_TYPES
      }
    }
  },
  setup(props) {
    function isRouterLink(): boolean {
      const router = Boolean(inject('router'))
      return router && !NON_ROUTER_LINK_PATTERN.test(props.href)
    }

    const linkType = computed(() => {
      if (isRouterLink()) {
        return Router
      }
      return LINK_TYPES[props.tag]
    })

    return {linkType}
  }
})
</script>
