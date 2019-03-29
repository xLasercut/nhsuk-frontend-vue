<template>
  <component :is="isRouter" :to="to">
    <slot></slot>
  </component>
</template>

<script>
  import Router from './link/router.vue'
  import Normal from './link/normal.vue'

  export default {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    components: {
      Router,
      Normal
    },
    computed: {
      isRouter() {
        var urlPattern = /^((http|https|ftp):\/\/)/
        if (this.$router && !urlPattern.test(this.to)) {
          return "router"
        }
        return "normal"
      }
    }
  }
</script>