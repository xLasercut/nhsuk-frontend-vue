<template>
  <component :is="linkType" :href="href" @click="$emit('click')" v-bind="$attrs">
    <slot></slot>
  </component>
</template>

<script>
import Router from './linkswitcher/Router.vue'
import Normal from './linkswitcher/Normal.vue'
import {computed, defineComponent, inject} from 'vue'

export default defineComponent({
  name: "LinkSwitcher",
  inheritAttrs: false,
  props: {
    href: {
      type: String,
      required:  true
    }
  },
  setup(props) {
    function isRouter() {
      const router = inject('router')
      let urlPattern = /^((http|https|ftp):\/\/)/
      return router && !urlPattern.test(props.href)
    }

    const linkType = computed(() => {
      if (isRouter()) {
        return Router
      }
      return Normal
    })

    return {linkType}
  }
})
</script>
