<template>
  <heading-switcher :heading-level="headingLevel" :class="`nhsuk-heading-${size}`" v-bind="attributes">
    <slot></slot>
  </heading-switcher>
</template>

<script>
  import HeadingSwitcher from '../shared/HeadingSwitcher.vue'

  const sizes = ["xs", "s", "m", "l", "xl"]

  export default {
    name: "NhsHeading",
    components: {
      HeadingSwitcher
    },
    props: {
      size: {
        type: String,
        default: "l",
        validators(val) {
          return sizes.includes(val)
        }
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      headingLevel() {
        var levels = {
          xl: 1,
          l: 2,
          m: 3,
          s: 4,
          xs: 5
        }
        return levels[this.size]
      }
    }
  }
</script>