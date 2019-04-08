<template>
  <heading-switcher :heading-level="heading.level" :class="heading.class" v-bind="attributes">
    <slot></slot>
  </heading-switcher>
</template>

<script>
  import HeadingSwitcher from '../shared/HeadingSwitcher.vue'

  export default {
    name: "NhsHeading",
    components: {
      HeadingSwitcher
    },
    props: {
      size: {
        type: String,
        default: "l"
      },
      attributes: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      heading() {
        var hClass = "l"
        var hLevel = 2
        switch (this.size.toLowerCase()) {
          case "xl":
            hClass = "nhsuk-heading-xl"
            hLevel = 1
            break
          case "m":
            hClass = "nhsuk-heading-m"
            hLevel = 3
            break
          case "s":
            hClass = "nhsuk-heading-s"
            hLevel = 4
            break
          case "xs":
            hClass = "nhsuk-heading-xs"
            hLevel = 5
            break
          default:
            hClass = "nhsuk-heading-l"
            hLevel = 2
            break
        }
        return {
          level: hLevel,
          class: hClass
        }
      }
    }
  }
</script>