<template>
  <component :is="linkType" :href="href" @click="$emit('click')">
    <slot></slot>
  </component>
</template>

<script>
  import Router from './linkswitcher/Router.vue'
  import Normal from './linkswitcher/Normal.vue'

  export default {
    name: "LinkSwitcher",
    props: {
      href: {
        type: String,
        required:  true
      }
    },
    computed: {
      isRouter() {
        var urlPattern = /^((http|https|ftp):\/\/)/
        if (this.$router && !urlPattern.test(this.href)) {
          return true
        }
        return false
      },
      linkType() {
        if (this.isRouter) {
          return Router
        }
        return Normal
      }
    }
  }
</script>